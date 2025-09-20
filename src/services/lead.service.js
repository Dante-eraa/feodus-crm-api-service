import { EnquiryRepository, LeadRepository } from "../repository/index.js";
import { NotFoundError, UnauthorizedError } from "../utils/customErrors.js";
import { MESSAGES } from "../constants/message.js";

export class LeadService {
  static async convertFromEnquiry(enquiryId, data, user) {
    const enquiry = await EnquiryRepository.findById(enquiryId);
    if (!enquiry) {
      throw new NotFoundError(MESSAGES.ENQUIRY.NOT_FOUND);
    }

    if (enquiry.tenantId !== user.tenantId) {
      throw new UnauthorizedError("Unauthorized: Tenant mismatch");
    }

    const leadData = {
      name: data.name || enquiry.subject,
      email: data.email || null,
      phone: data.phone || null,
      enquiryId: enquiry.id,
      pipelineId: data.pipelineId,
      tenantId: enquiry.tenantId,
      createdBy: user.id,
    };
    return await LeadRepository.create(leadData);
  }

  static async list(options = {}, user) {
    return await LeadRepository.list(options, user.tenantId);
  }

  static async getById(id, user) {
    const lead = await LeadRepository.findById(id, user.tenantId);
    if (lead.tenantId !== user.tenantId) {
      throw new UnauthorizedError("Unauthorized: Tenant mismatch");
    }
    if (!lead) {
      throw new NotFoundError(MESSAGES.LEAD.NOT_FOUND);
    }
    return lead;
  }

  static async update(id, data, user) {
    const lead = await LeadRepository.findById(id);
    if (lead.tenantId !== user.tenantId) {
      throw new UnauthorizedError("Unauthorized: Tenant mismatch");
    }
    if (!lead) {
      throw new NotFoundError(MESSAGES.LEAD.NOT_FOUND);
    }
    return await LeadRepository.update(id, user.tenantId, data);
  }

  static async delete(id, user) {
    const lead = await LeadRepository.findById(id);
    if (lead.tenantId !== user.tenantId) {
      throw new UnauthorizedError("Unauthorized: Tenant mismatch");
    }
    if (!lead) {
      throw new NotFoundError(MESSAGES.LEAD.NOT_FOUND);
    }
    return await LeadRepository.delete(id, user.tenantId);
  }
}
