import prisma from "../config/db.js";
import { paginate } from "../utils/paginate.js";
import { VALID_FIELDS } from "../constants/validFields.js";

export class RoleRepository {
  static async createRole(data) {
    return prisma.role.create({ data });
  }

  static async findById(id, include = {}) {
    return prisma.role.findUnique({
      where: { id },
      include,
    });
  }

  static async findByName(name) {
    return prisma.role.findUnique({
      where: { name },
    });
  }

  static async list(include = {}, options) {
    return paginate(prisma.role, options, VALID_FIELDS.ROLE, "Role");
  }

  static async update(id, data) {
    return prisma.role.update({ where: { id }, data });
  }

  static async delete(id) {
    await prisma.rolePermission.deleteMany({
      where: { roleId: id },
    });
    return prisma.role.delete({ where: { id } });
  }

  static async assignPermission(roleId, permissionId) {
    return prisma.rolePermission.upsert({
      where: { roleId_permissionId: { roleId, permissionId } },
      update: {},
      create: { roleId, permissionId },
    });
  }

  static async clearPermissions(roleId) {
    return prisma.rolePermission.deleteMany({ where: { roleId } });
  }
}
