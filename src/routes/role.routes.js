import { Router } from "express";
import { ROLE_PERMISSIONS } from "../constants/rolePermissions.js";
import { RoleController } from "../controllers/index.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";
import validateRequest from "../middlewares/validateRequest.js";
import { roleValidation } from "../validators/role.validation.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.CREATE_ROLE]),
  validateRequest(roleValidation.createRole),
  RoleController.createRole
);

router.get(
  "/",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_ROLE]),
  RoleController.listRoles
);

router.get(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_ROLE]),
  RoleController.getRoleById
);

router.put(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.UPDATE_ROLE]),
  validateRequest(roleValidation.updateRole),
  RoleController.updateRole
);

router.delete(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.DELETE_ROLE]),
  RoleController.deleteRole
);

export default router;
