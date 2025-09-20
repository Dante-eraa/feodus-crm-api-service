import { MESSAGES } from "../constants/message.js";
import { TenantService } from "../services/index.js";
import { successResponse, errorResponse } from "../utils/apiResponse.js";

export class TenantController {
  static async create(req, res, next) {
    try {
      const tenant = await TenantService.createTenant(req.body);
      return successResponse(res, tenant, MESSAGES.TENANT.CREATED);
    } catch (err) {
      return errorResponse(
        res,
        err.message,
        err.statusCode || 500,
        err.errors || []
      );
    }
  }

  static async getById(req, res, next) {
    try {
      const tenant = await TenantService.getTenantById(req.params.id);
      return successResponse(res, tenant, MESSAGES.TENANT.GET);
    } catch (err) {
      return errorResponse(
        res,
        err.message,
        err.statusCode || 500,
        err.errors || []
      );
    }
  }

  static async update(req, res, next) {
    try {
      const tenant = await TenantService.updateTenant(req.params.id, req.body);
      return successResponse(res, tenant, MESSAGES.TENANT.UPDATED);
    } catch (err) {
      return errorResponse(
        res,
        err.message,
        err.statusCode || 500,
        err.errors || []
      );
    }
  }

  static async delete(req, res, next) {
    try {
      const soft = req.query.soft !== "false";
      const tenant = await TenantService.deleteTenant(req.params.id, soft);
      return successResponse(res, tenant, MESSAGES.TENANT.DELETED);
    } catch (err) {
      return errorResponse(
        res,
        err.message,
        err.statusCode || 500,
        err.errors || []
      );
    }
  }

  static async list(req, res, next) {
    try {
      const { page, limit, order, ...filters } = req.query;

      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 10,
        filters,
        order: order ? JSON.parse(order) : [["createdAt", "desc"]],
      };

      const tenants = await TenantService.listTenant(options);
      return successResponse(
        res,
        tenants.data,
        MESSAGES.TENANT.LISTED,
        tenants.meta
      );
    } catch (err) {
      return errorResponse(
        res,
        err.message,
        err.statusCode || 500,
        err.errors || []
      );
    }
  }
}
