import { BadRequestError } from "../utils/customErrors.js";

const validateRequest = (schema, property = "body") => {
  return (req, res, next) => {
    const target = req[property]; // body, query, or params
    if (!target) {
      return next(new BadRequestError(`No ${property} found in request`));
    }

    const { error, value } = schema.validate(target, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));
      return next(new BadRequestError("Validation failed", errors));
    }

    // Instead of overwriting req[property], store validated data separately
    req.validated = req.validated || {};
    req.validated[property] = value;

    return next();
  };
};

export default validateRequest;
