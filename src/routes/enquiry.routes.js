import { Router } from "express";
import { EnquiryController } from "../controllers/index.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";
import validateRequest from "../middlewares/validateRequest.js";
import { enquiryValidation } from "../validators/enquiry.validation.js";
import { ROLE_PERMISSIONS } from "../constants/rolePermissions.js";
import { LOG_ACTIONS } from "../constants/message.js";
import { auditMiddleware } from "../middlewares/auditMiddleware.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.CREATE_ENQUIRY]),
  validateRequest(enquiryValidation.createEnquiry),
  auditMiddleware(LOG_ACTIONS.ENQUIRY_CREATE, "ENQUIRY"),
  EnquiryController.createEnquiry
);

router.get(
  "/",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_ENQUIRY]),
  EnquiryController.listEnquiries
);

router.get(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_ENQUIRY]),
  EnquiryController.getEnquiry
);

router.put(
  "/:id/status",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.UPDATE_ENQUIRY]),
  validateRequest(enquiryValidation.updateStatus),
  auditMiddleware(LOG_ACTIONS.ENQUIRY_UPDATE, "ENQUIRY"),
  EnquiryController.updateStatus
);

router.delete(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.DELETE_ENQUIRY]),
  auditMiddleware(LOG_ACTIONS.ENQUIRY_DELETE, "ENQUIRY"),
  EnquiryController.deleteEnquiry
);

export default router;
