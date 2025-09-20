import Joi from "joi";

// Create Tenant
export const createTenantSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(6).max(20).required(),
  address: Joi.string().min(5).max(200).required(),
  timezone: Joi.string().default("UTC").required(),
});

// Update Tenant
export const updateTenantSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100),
  email: Joi.string().email(),
  phone: Joi.string().min(6).max(20),
  address: Joi.string().min(5).max(200),
  timezone: Joi.string(),
}).min(1); // at least one field required

// List / Query
export const listTenantSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(10),
  order: Joi.string(), // JSON stringified [["field","asc"]]
  name: Joi.string().trim().optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string().trim().optional(),
  address: Joi.string().trim().optional(),
  timezone: Joi.string().optional(),
});
