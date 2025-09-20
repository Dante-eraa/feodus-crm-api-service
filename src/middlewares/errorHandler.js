import { errorResponse } from "../utils/apiResponse.js";
import HTTP_STATUS from "../utils/httpStatus.js";
import ApiError from "../utils/apiError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return errorResponse(res, err.message, err.statusCode, err.errors);
  }

  console.error(err); // log for debugging unexpected errors

  return errorResponse(
    res,
    err.message || "Internal Server Error",
    err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR,
    err
  );
};

export default errorHandler;
