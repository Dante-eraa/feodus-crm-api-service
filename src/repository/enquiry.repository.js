import prisma from "../config/db.js";
import { SAFE_SELECT } from "../constants/safeSelect.js";
import { VALID_FIELDS } from "../constants/validFields.js";
import { paginate } from "../utils/paginate.js";

export class EnquiryRepository {
  static async create(data) {
    return prisma.enquiry.create({ data });
  }

  static async findById(id) {
    return prisma.enquiry.findUnique({
      where: { id },
      select: SAFE_SELECT.ENQUIRY,
    });
  }

  static async update(id, data) {
    return prisma.enquiry.update({
      where: { id },
      data,
      select: SAFE_SELECT.ENQUIRY,
    });
  }

  static async delete(id) {
    return prisma.enquiry.delete({ where: { id } });
  }

  static async list(options = {}, tenantId) {
    const filters = { ...options.filters, tenantId };
    return paginate(
      prisma.enquiry,
      options,
      VALID_FIELDS.ENQUIRY,
      "Enquiry",
      SAFE_SELECT.ENQUIRY
    );
  }
}
