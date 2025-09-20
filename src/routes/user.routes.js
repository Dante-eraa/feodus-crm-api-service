import express from "express";
import { UserController } from "../controllers/index.js";
import validateRequest from "../middlewares/validateRequest.js";
import { userValidation } from "../validators/user.validation.js";
import { authMiddleware, authorize } from "../middlewares/authMiddleware.js";
import { ROLE_PERMISSIONS } from "../constants/rolePermissions.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.CREATE_USER]),
  validateRequest(userValidation.createUser),
  UserController.createUser
);

router.get(
  "/",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_USER]),
  validateRequest(userValidation.listUser, "query"),
  UserController.listUsers
);

router.get(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.VIEW_USER]),
  UserController.getUser
);

router.put(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.UPDATE_USER]),
  validateRequest(userValidation.updateUser),
  UserController.updateUser
);

// Delete user
router.delete(
  "/:id",
  authMiddleware,
  authorize([ROLE_PERMISSIONS.DELETE_USER]),
  UserController.deleteUser
);

export default router;
