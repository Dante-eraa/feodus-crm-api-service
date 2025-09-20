import { SENSITIVE_USER_FIELDS } from "../constants/safeSelect.js";

export const sanitizeUser = (user) => {
  if (!user) return null;

  const sanitized = JSON.parse(JSON.stringify(user));

  SENSITIVE_USER_FIELDS.forEach((field) => {
    if (sanitized[field]) {
      delete sanitized[field];
    }
  });

  return sanitized;
};
