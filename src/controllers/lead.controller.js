import { MESSAGES } from "../constants/message.js";
import { LeadService } from "../services/index.js";
import { successResponse } from "../utils/apiResponse.js";

export class LeadController {
  static async convertFromEnquiry(req, res, next) {
    try {
      const lead = await LeadService.convertFromEnquiry(
        req.params.enquiryId,
        req.body,
        req.user
      );
      return successResponse(res, lead, MESSAGES.LEAD.CONVERTED);
    } catch (err) {
      next(err);
    }
  }

  static async listLeads(req, res, next) {
    try {
      const { page, limit, order, ...filters } = req.query;
      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 10,
        filters,
        order: order ? JSON.parse(order) : [["createdAt", "desc"]],
      };
      const leads = await LeadService.list(options, req.user);
      return successResponse(res, leads.data, MESSAGES.LEAD.LISTED, leads.meta);
    } catch (err) {
      next(err);
    }
  }

  static async getLead(req, res, next) {
    try {
      const lead = await LeadService.getById(req.params.id, req.user);
      return successResponse(res, lead, MESSAGES.LEAD.FETCHED);
    } catch (err) {
      next(err);
    }
  }

  static async updateLead(req, res, next) {
    try {
      const lead = await LeadService.update(req.params.id, req.body, req.user);
      return successResponse(res, lead, MESSAGES.LEAD.UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async deleteLead(req, res, next) {
    try {
      await LeadService.delete(req.params.id, req.user);
      return successResponse(res, null, MESSAGES.LEAD.DELETED);
    } catch (err) {
      next(err);
    }
  }
}
