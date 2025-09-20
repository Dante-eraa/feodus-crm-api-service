import Joi from "joi";
import { ROLE_PERMISSIONS } from "../constants/rolePermissions.js";

export const roleValidation = {
  createRole: Joi.object({
    name: Joi.string().min(3).max(50).required(),
    permissions: Joi.array()
      .items(Joi.string().valid(...Object.values(ROLE_PERMISSIONS)))
      .default([]),
  }),

  updateRole: Joi.object({
    name: Joi.string().min(3).max(50).optional(),
    permissions: Joi.array()
      .items(Joi.string().valid(...Object.values(ROLE_PERMISSIONS)))
      .optional(),
  }),
};
