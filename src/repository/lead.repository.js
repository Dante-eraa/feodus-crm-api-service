import prisma from "../config/db.js";
import { SAFE_SELECT } from "../constants/safeSelect.js";
import { VALID_FIELDS } from "../constants/validFields.js";
import { paginate } from "../utils/paginate.js";

export class LeadRepository {
  static async findByEnquiryId(enquiryId) {
    return prisma.lead.findFirst({
      where: { enquiryId },
      select: SAFE_SELECT.ENQUIRY,
    });
  }

  static async create(data) {
    return prisma.lead.create({ data });
  }

  static async findById(id, tenantId) {
    return prisma.lead.findFirst({
      where: { id, tenantId },
      select: SAFE_SELECT.ENQUIRY,
    });
  }

  static async list(options, tenantId) {
    const filters = { ...options.filters, tenantId };
    return paginate(
      prisma.lead,
      { ...options, filters },
      VALID_FIELDS.LEAD,
      "Lead",
      SAFE_SELECT.LEAD
    );
  }
  static async update(id, tenantId, data) {
    return prisma.lead.update({
      where: { id, tenantId },
      data,
      select: SAFE_SELECT.ENQUIRY,
    });
  }

  static async delete(id, tenantId) {
    return prisma.lead.delete({
      where: { id, tenantId },
    });
  }
}
