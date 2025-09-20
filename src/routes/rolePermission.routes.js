import express from "express";
import { RolePermissionController } from "../controllers/index.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";
import { ROLE_PERMISSIONS } from "../constants/rolePermissions.js";

const router = express.Router();

// Assign permissions to role
router.post("/assign", authMiddleware, RolePermissionController.assign);

router.get(
  "/:roleId",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_ROLE]),
  RolePermissionController.list
);

export default router;
