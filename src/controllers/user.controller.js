import { UserService } from "../services/index.js";
import { successResponse } from "../utils/apiResponse.js";

export class UserController {
  static async createUser(req, res, next) {
    try {
      const tenantId = req.user.tenantId; // tenant from authenticated user
      const user = await UserService.createUser(req.body, tenantId);
      return successResponse(res, user, "User created successfully");
    } catch (err) {
      next(err);
    }
  }

  static async getUser(req, res, next) {
    try {
      const tenantId = req.user.tenantId;
      const user = await UserService.getUserById(req.params.id, tenantId);
      return successResponse(res, user, "User retrieved successfully");
    } catch (err) {
      next(err);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const tenantId = req.user.tenantId;
      const user = await UserService.updateUser(
        req.params.id,
        req.body,
        tenantId
      );
      return successResponse(res, user, "User updated successfully");
    } catch (err) {
      next(err);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const tenantId = req.user.tenantId;
      const soft = req.params.hard === "false";
      await UserService.deleteUser(req.params.id, tenantId, soft);
      return successResponse(res, null, "User deleted successfully");
    } catch (err) {
      next(err);
    }
  }

  static async listUsers(req, res, next) {
    try {
      const { page, limit, order, ...filters } = req.query;
      const tenantId = req.user.tenantId;
      const options = {
        page: parseInt(page) || 1,
        limit: parseInt(limit) || 10,
        filters,
        order: order ? JSON.parse(order) : [["createdAt", "desc"]],
      };
      const users = await UserService.listUsers(options, tenantId);
      return successResponse(
        res,
        users.data,
        "Users retrieved successfully",
        users.meta
      );
    } catch (err) {
      next(err);
    }
  }
}
