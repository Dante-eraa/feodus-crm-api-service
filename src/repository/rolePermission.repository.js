import prisma from "../config/db.js";

export class RolePermissionRepository {
  static async findPermissionByAction(action) {
    return prisma.permission.findUnique({ where: { action } });
  }

  static async createPermission(action, description) {
    return prisma.permission.create({
      data: { action, description },
    });
  }

  static async findRolePermission(roleId, permissionId) {
    return prisma.rolePermission.findUnique({
      where: { roleId_permissionId: { roleId, permissionId } },
    });
  }

  static async assignRolePermission(roleId, permissionId) {
    return prisma.rolePermission.upsert({
      where: { roleId_permissionId: { roleId, permissionId } },
      update: {}, // do nothing if it exists
      create: { roleId, permissionId },
    });
  }

  static async listRolePermissions(roleId) {
    return prisma.rolePermission.findMany({
      where: { roleId },
      include: { permission: true },
    });
  }
}
