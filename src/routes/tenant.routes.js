import { Router } from "express";
import { TenantController } from "../controllers/index.js";
import validateRequest from "../middlewares/validateRequest.js";
import {
  createTenantSchema,
  listTenantSchema,
  updateTenantSchema,
} from "../validators/tenant.validation.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";
import { ROLE_PERMISSIONS } from "../constants/rolePermissions.js";
import { auditMiddleware } from "../middlewares/auditMiddleware.js";
import { LOG_ACTIONS } from "../constants/message.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.CREATE_TENANT]),
  validateRequest(createTenantSchema),
  auditMiddleware(LOG_ACTIONS.TENANT_CREATE, "TENANT"),
  TenantController.create
);

router.get(
  "/",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_TENANT]),
  validateRequest(listTenantSchema, "query"),
  TenantController.list
);

router.get(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_TENANT]),
  TenantController.getById
);

router.put(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.UPDATE_TENANT]),
  auditMiddleware(LOG_ACTIONS.TENANT_UPDATE, "TENANT"),
  validateRequest(updateTenantSchema),
  TenantController.update
);

router.delete(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.DELETE_TENANT]),
  auditMiddleware(LOG_ACTIONS.TENANT_DELETE, "TENANT"),
  TenantController.delete
);
export default router;
