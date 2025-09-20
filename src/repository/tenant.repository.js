import prisma from "../config/db.js";
import { VALID_FIELDS } from "../constants/validFields.js";
import { paginate } from "../utils/paginate.js";

export class TenantRepository {
  static async create(data) {
    return prisma.tenant.create({ data });
  }

  static async findById(id, include = {}) {
    return prisma.tenant.findFirst({
      where: { id, isDeleted: false },
      include,
    });
  }

  static async findOne(where, include = {}) {
    return prisma.tenant.findFirst({
      where: { ...where, isDeleted: false },
      include,
    });
  }

  static async update(id, data) {
    return prisma.tenant.update({
      where: { id },
      data,
    });
  }

  static async softDelete(id) {
    return prisma.tenant.update({
      where: { id },
      data: { isDeleted: true, deletedAt: new Date() },
    });
  }

  static async hardDelete(id) {
    return prisma.tenant.delete({
      where: { id },
    });
  }

  static async list(options = {}) {
    return paginate(
      prisma.tenant,
      {
        ...options,
        filters: {
          ...options.filters,
          isDeleted: false,
        },
      },
      VALID_FIELDS.TENANT,
      "Tenant"
    );
  }

  static async exists(where) {
    const count = await prisma.tenant.count({
      where: { ...where, isDeleted: false },
    });
    return count > 0;
  }

  static async count(where = {}) {
    return prisma.tenant.count({
      where: { ...where, isDeleted: false },
    });
  }
}
