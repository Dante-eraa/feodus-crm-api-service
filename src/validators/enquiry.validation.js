import Joi from "joi";

export const enquiryValidation = {
  createEnquiry: Joi.object({
    subject: Joi.string().min(3).max(255).required(),
    message: Joi.string().min(5).required(),
    channel: Joi.string()
      .valid("EMAIL", "PHONE", "CHAT", "WHATSAPP", "SOCIAL", "OTHER")
      .required(),
    source: Joi.string()
      .valid("WEBSITE", "REFERRAL", "CAMPAIGN", "PARTNER", "OTHER")
      .required(),
  }),

  updateStatus: Joi.object({
    status: Joi.string()
      .valid("NEW", "IN_PROGRESS", "QUALIFIED", "DISQUALIFIED", "CONVERTED")
      .required(),
  }),
};
