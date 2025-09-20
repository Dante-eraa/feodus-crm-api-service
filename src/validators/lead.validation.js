import Joi from "joi";

export const LeadValidation = {
  convertFromEnquiry: Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
      .pattern(/^[0-9+\-()\s]{7,20}$/)
      .required(),
    pipelineId: Joi.string().optional(),
  }),

  update: Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    email: Joi.string().email().optional(),
    phone: Joi.string()
      .pattern(/^[0-9+\-()\s]{7,20}$/)
      .optional(),
    pipelineId: Joi.string().optional(),
  }),

  list: Joi.object({
    page: Joi.number().integer().min(1).optional(),
    limit: Joi.number().integer().min(1).max(100).optional(),
    order: Joi.string().optional(),
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
  }),
};
