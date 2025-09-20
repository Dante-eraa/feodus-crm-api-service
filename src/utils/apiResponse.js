import HTTP_STATUS from "./httpStatus.js";

export const successResponse = (
  res,
  data = null,
  message = "Success",
  meta = null,
  status = HTTP_STATUS.OK
) => {
  return res.status(status).json({
    success: true,
    message,
    entry: {
      data,
      meta,
    },
  });
};

export const errorResponse = (
  res,
  message = "Error",
  status = HTTP_STATUS.BAD_REQUEST,
  errors = [],
  data = null
) => {
  return res.status(status).json({
    success: false,
    message,
    errors,
    entry: {
      data,
      meta: null,
    },
  });
};
