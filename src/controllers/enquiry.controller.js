import { MESSAGES } from "../constants/message.js";
import { EnquiryService } from "../services/index.js";
import { successResponse } from "../utils/apiResponse.js";

export class EnquiryController {
  static async createEnquiry(req, res, next) {
    try {
      const enquiry = await EnquiryService.createEnquiry(
        req.body,
        req.user.tenantId,
        req.user.id
      );
      return successResponse(res, enquiry, MESSAGES.ENQUIRY.CREATED);
    } catch (err) {
      next(err);
    }
  }

  static async listEnquiries(req, res, next) {
    try {
      const { page, limit, order, ...filters } = req.query;
      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 10,
        filters,
        order: order ? JSON.parse(order) : [["createdAt", "desc"]],
      };
      const enquiries = await EnquiryService.listEnquiries(
        options,
        req.user.tenantId
      );
      return successResponse(
        res,
        enquiries.data,
        MESSAGES.ENQUIRY.LISTED,
        enquiries.meta
      );
    } catch (err) {
      next(err);
    }
  }

  static async getEnquiry(req, res, next) {
    try {
      const enquiry = await EnquiryService.getEnquiryById(
        req.params.id,
        req.user.tenantId
      );
      return successResponse(res, enquiry, MESSAGES.ENQUIRY.FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      const { status } = req.body;

      // 🚦 optional: validate status enum at controller level
      if (
        !["NEW", "QUALIFIED", "DISQUALIFIED", "MOVED_TO_LEAD"].includes(status)
      ) {
        return res.status(400).json({ error: "Invalid enquiry status" });
      }

      const enquiry = await EnquiryService.updateStatus(
        req.params.id,
        req.user.tenantId,
        status
      );

      return successResponse(res, enquiry, MESSAGES.ENQUIRY.UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async deleteEnquiry(req, res, next) {
    try {
      await EnquiryService.deleteEnquiry(req.params.id, req.user.tenantId);
      return successResponse(res, null, MESSAGES.ENQUIRY.DELETED);
    } catch (err) {
      next(err);
    }
  }
}
