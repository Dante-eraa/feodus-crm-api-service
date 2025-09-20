import prisma from "../config/db.js";
import { paginate } from "../utils/paginate.js";
import { VALID_FIELDS } from "../constants/validFields.js";
import { SAFE_SELECT } from "../constants/safeSelect.js";

export class UserRepository {
  static async create(data) {
    return prisma.user.create({ data, select: SAFE_SELECT.USER });
  }

  static async findById(id, include = {}) {
    return prisma.user.findFirst({
      where: { id },
      select: SAFE_SELECT.USER,
    });
  }

  static async findOne(where, include = {}) {
    return prisma.user.findFirst({
      where,
      include,
    });
  }

  static async update(id, data) {
    return prisma.user.update({
      where: { id },
      data,
      select: SAFE_SELECT.USER,
    });
  }

  static async delete(id) {
    return prisma.user.delete({ where: { id } });
  }

  static async list(options = {}, tenantId) {
    const filters = { ...options.filters, tenantId };
    return paginate(
      prisma.user,
      { ...options, filters },
      VALID_FIELDS.USER,
      "User",
      SAFE_SELECT.USER
    );
  }

  static async exists(where) {
    const count = await prisma.user.count({ where });
    return count > 0;
  }
}
