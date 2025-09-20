import Joi from "joi";
import { VALID_FIELDS } from "../constants/validFields.js";

export const userValidation = {
  // Create User
  createUser: Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    roleId: Joi.string().required(),
    tenantId: Joi.string().required(),
  }),

  // Update User
  updateUser: Joi.object({
    name: Joi.string().min(3).max(50),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    roleId: Joi.string(),
  }).min(1), // At least one field must be provided

  // List Users (pagination & filters)
  listUser: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    orderBy: Joi.string()
      .valid(...VALID_FIELDS.USER)
      .default("createdAt"),
    order: Joi.string().valid("asc", "desc").default("desc"),
    search: Joi.string().allow(""), // For name/email/phone search
    roleId: Joi.string(),
    tenantId: Joi.string(),
    isDeleted: Joi.boolean(),
  }),
};
