import { EnquiryRepository } from "../repository/index.js";
import { NotFoundError } from "../utils/customErrors.js";

export class EnquiryService {
  static async createEnquiry(data, tenantId, userId) {
    return EnquiryRepository.create({
      ...data,
      tenantId,
      createdBy: userId,
    });
  }

  static async listEnquiries(options, tenantId) {
    return EnquiryRepository.list(options, tenantId);
  }

  static async getEnquiryById(id, tenantId) {
    const enquiry = await EnquiryRepository.findById(id);
    if (!enquiry || enquiry.tenantId !== tenantId) {
      throw new NotFoundError("Enquiry not found");
    }
    return enquiry;
  }

  static async updateStatus(id, tenantId, status) {
    const enquiry = await EnquiryRepository.findById(id);
    if (!enquiry || enquiry.tenantId !== tenantId) {
      throw new NotFoundError("Enquiry not found");
    }

    return EnquiryRepository.update(id, { status });
  }

  static async deleteEnquiry(id, tenantId) {
    const enquiry = await EnquiryRepository.findById(id);
    if (!enquiry || enquiry.tenantId !== tenantId) {
      throw new NotFoundError("Enquiry not found");
    }
    return EnquiryRepository.delete(id);
  }
}
