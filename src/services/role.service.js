import { ROLE_PERMISSION_DESCRIPTIONS } from "../constants/rolePermissions.js";
import {
  RolePermissionRepository,
  RoleRepository,
} from "../repository/index.js";
import { BadRequestError, NotFoundError } from "../utils/customErrors.js";

export class RoleService {
  static async createRole({ name, permissions = [] }) {
    const existingRole = await RoleRepository.findByName(name);
    if (existingRole) {
      throw new BadRequestError("Role Already exists");
    }

    const role = await RoleRepository.createRole({ name });

    if (permissions.length > 0) {
      await Promise.all(
        permissions.map(async (action) => {
          let permission =
            await RolePermissionRepository.findPermissionByAction(action);
          if (!permission) {
            permission = await RolePermissionRepository.createPermission(
              action,
              ROLE_PERMISSION_DESCRIPTIONS[action] || null
            );
          }
          await RoleRepository.assignPermission(role.id, permission.id);
        })
      );
    }
    return RoleRepository.findById(role.id, {
      rolePermissions: { include: { permission: true } },
    });
  }

  static async listRoles(options) {
    return RoleRepository.list(
      {
        rolePermissions: { include: { permission: true } },
      },
      options
    );
  }

  static async getRoleById(id) {
    const role = await RoleRepository.findById(id, {
      rolePermissions: { include: { permission: true } },
    });
    if (!role) throw new NotFoundError("Role not found");
    return role;
  }

  static async updateRole(id, { name, permissions }) {
    const role = await RoleRepository.findById(id);
    if (!role) throw new NotFoundError("Role not found");

    if (name) {
      const existingRole = await RoleRepository.findByName(name);
      if (existingRole && existingRole.id !== id) {
        throw new BadRequestError("Role name already exists");
      }
      await RoleRepository.update(id, { name });
    }

    if (permissions && permissions.length > 0) {
      await RoleRepository.clearPermissions(id);

      await Promise.all(
        permissions.map(async (action) => {
          let permission =
            await RolePermissionRepository.findPermissionByAction(action);
          if (!permission) {
            permission = await RolePermissionRepository.createPermission(
              action,
              ROLE_PERMISSION_DESCRIPTIONS[action] || null
            );
          }
          await RoleRepository.assignPermission(id, permission.id);
        })
      );
    }

    return RoleRepository.findById(id, {
      rolePermissions: { include: { permission: true } },
    });
  }

  static async deleteRole(id) {
    return RoleRepository.delete(id);
  }
}
