import { RolePermissionService } from "../services/index.js";
import { successResponse } from "../utils/apiResponse.js";

export class RolePermissionController {
  static async assign(req, res, next) {
    try {
      const { roleId, permissions } = req.body;
      const result = await RolePermissionService.assignPermissionsToRole(
        roleId,
        permissions
      );

      return successResponse(res, result, "Permissions processed successfully");
    } catch (err) {
      next(err);
    }
  }

  static async list(req, res, next) {
    try {
      const { roleId } = req.params;
      const permissions = await RolePermissionService.listPermissionsForRole(
        roleId
      );

      return successResponse(
        res,
        permissions,
        "Permissions retrieved successfully"
      );
    } catch (err) {
      next(err);
    }
  }
}
