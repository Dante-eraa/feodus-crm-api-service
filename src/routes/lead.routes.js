import { LeadController } from "../controllers/index.js";
import { ROLE_PERMISSIONS } from "../constants/rolePermissions.js";
import { auditMiddleware } from "../middlewares/auditMiddleware.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";
import { LeadValidation } from "../validators/lead.validation.js";
import validateRequest from "../middlewares/validateRequest.js";
import { Router } from "express";
import { LOG_ACTIONS } from "../constants/message.js";

const router = Router();

router.post(
  "/convert/:enquiryId",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.CREATE_LEAD]),
  validateRequest(LeadValidation.convertFromEnquiry),
  auditMiddleware(LOG_ACTIONS.LEAD_CREATE, "Lead"),
  LeadController.convertFromEnquiry
);

router.get(
  "/",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_LEAD]),
  validateRequest(LeadValidation.list, "query"),
  LeadController.listLeads
);

router.get(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_LEAD]),
  LeadController.getLead
);

router.put(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.UPDATE_LEAD]),
  validateRequest(LeadValidation.update),
  auditMiddleware(LOG_ACTIONS.LEAD_UPDATE, "Lead"),
  LeadController.updateLead
);

router.delete(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.DELETE_LEAD]),
  auditMiddleware(LOG_ACTIONS.LEAD_DELETE, "Lead"),
  LeadController.deleteLead
);

export default router;
