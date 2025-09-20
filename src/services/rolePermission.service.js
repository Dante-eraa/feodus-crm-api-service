import { ROLE_PERMISSION_DESCRIPTIONS } from "../constants/rolePermissions.js";
import { RolePermissionRepository } from "../repository/index.js";

export class RolePermissionService {
  static async assignPermissionsToRole(roleId, permissions = []) {
    const results = [];

    for (const action of permissions) {
      // Find or create permission
      let permission = await RolePermissionRepository.findPermissionByAction(
        action
      );

      if (!permission) {
        permission = await RolePermissionRepository.createPermission(
          action,
          ROLE_PERMISSION_DESCRIPTIONS[action] || null
        );
      }

      // Check if role already has this permission
      const existing = await RolePermissionRepository.findRolePermission(
        roleId,
        permission.id
      );

      if (!existing) {
        await RolePermissionRepository.assignRolePermission(
          roleId,
          permission.id
        );
        results.push({ action, status: "assigned" });
      } else {
        results.push({ action, status: "Already assigned" });
      }
    }

    return results;
  }

  static async listPermissionsForRole(roleId) {
    const rolePermissions = await RolePermissionRepository.listRolePermissions(
      roleId
    );
    return rolePermissions.map((rp) => rp.permission.action);
  }
}
