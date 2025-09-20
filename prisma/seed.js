import pkg from "@prisma/client";
import bcrypt from "bcrypt";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding permissions...");

  const permissionsData = [
    { action: "CREATE_TENANT", description: "Can create tenants" },
    { action: "DELETE_TENANT", description: "Can delete tenants" },
    { action: "CREATE_USER", description: "Can create users" },
    { action: "DELETE_USER", description: "Can delete users" },
    { action: "VIEW_USERS", description: "Can view users" },
    { action: "UPDATE_USER", description: "Can update users" },
    // Add other permissions as needed
  ];

  const permissions = [];
  for (const perm of permissionsData) {
    const p = await prisma.permission.upsert({
      where: { action: perm.action },
      update: {},
      create: perm,
    });
    permissions.push(p);
  }

  console.log("🌱 Creating SUPER_ADMIN role...");
  const superAdminRole = await prisma.role.upsert({
    where: { name: "SUPER_ADMIN" },
    update: {},
    create: { name: "SUPER_ADMIN" },
  });

  console.log("🌱 Assigning permissions to SUPER_ADMIN...");
  for (const perm of permissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: superAdminRole.id,
          permissionId: perm.id,
        },
      },
      update: {},
      create: { roleId: superAdminRole.id, permissionId: perm.id },
    });
  }

  console.log("🌱 Creating initial SUPER_ADMIN tenant...");
  const superTenant = await prisma.tenant.upsert({
    where: { name: "Fedous Tenant" },
    update: {},
    create: {
      name: "Test Tenant",
      email: "test@crm.com",
      phone: "12345678790",
      address: "Global HQ",
      timezone: "UTC",
    },
  });

  console.log("🌱 Creating initial SUPER_ADMIN user...");
  const hashedPassword = await bcrypt.hash("SuperSecret123!", 10);
  await prisma.user.upsert({
    where: { email: "example@gmail.com" },
    update: {},
    create: {
      email: "example@gmail.com",
      password: hashedPassword,
      name: "Test",
      roleId: superAdminRole.id,
      tenantId: superTenant.id, // ✅ Fix: attach to system tenant
    },
  });

  console.log("✅ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
