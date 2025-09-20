import HTTP_STATUS from "./httpStatus.js";
import ApiError from "./apiError.js";

export class BadRequestError extends ApiError {
  constructor(message = "Bad Request", errors = []) {
    super(HTTP_STATUS.BAD_REQUEST, message, errors);
  }
}

export class NotFoundError extends ApiError {
  constructor(message = "Not Found", errors = []) {
    super(HTTP_STATUS.NOT_FOUND, message, errors);
  }
}

export class ValidationError extends ApiError {
  constructor(message = "Validation Failed", errors = []) {
    super(HTTP_STATUS.UNPROCESSABLE_ENTITY, message, errors);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message = "Unauthorized", errors = []) {
    super(HTTP_STATUS.UNAUTHORIZED, message, errors);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message = "Forbidden", errors = []) {
    super(HTTP_STATUS.FORBIDDEN, message, errors);
  }
}
