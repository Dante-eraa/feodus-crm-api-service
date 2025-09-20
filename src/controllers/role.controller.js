import { MESSAGES } from "../constants/message.js";
import { RoleService } from "../services/index.js";
import { successResponse } from "../utils/apiResponse.js";

export class RoleController {
  static async createRole(req, res, next) {
    try {
      const { name, permissions } = req.body;
      const role = await RoleService.createRole({ name, permissions });
      return successResponse(res, role, MESSAGES.ROLE.CREATED);
    } catch (err) {
      next(err);
    }
  }

  static async listRoles(req, res, next) {
    try {
      const { page, limit, order, ...filters } = req.query;
      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 10,
        filters,
        order: order ? JSON.parse(order) : [["createdAt", "desc"]],
      };
      const roles = await RoleService.listRoles(options);
      return successResponse(res, roles.data, MESSAGES.ROLE.LISTED, roles.meta);
    } catch (err) {
      next(err);
    }
  }

  static async getRoleById(req, res, next) {
    try {
      const { id } = req.params;
      const role = await RoleService.getRoleById(id);
      return successResponse(res, role, MESSAGES.ROLE.LISTED);
    } catch (err) {
      next(err);
    }
  }

  static async updateRole(req, res, next) {
    try {
      const { id } = req.params;
      const { name, permissions } = req.body;
      const updatedRole = await RoleService.updateRole(id, {
        name,
        permissions,
      });
      return successResponse(res, updatedRole, MESSAGES.ROLE.UPDATED);
    } catch (err) {
      next(err);
    }
  }

  static async deleteRole(req, res, next) {
    try {
      const { id } = req.params;
      await RoleService.deleteRole(id);
      return successResponse(res, null, MESSAGES.ROLE.DELETED);
    } catch (err) {
      next(err);
    }
  }
}
