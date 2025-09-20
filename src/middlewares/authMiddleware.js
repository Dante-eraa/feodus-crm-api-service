import { errorResponse } from "../utils/apiResponse.js";
import HTTP_STATUS from "../utils/httpStatus.js";
import prisma from "../config/db.js";
import { verifyToken } from "../utils/jwtToken.js";
import { sanitizeUser } from "../utils/sanitizeUser.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return errorResponse(
        res,
        "Authorization token missing",
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      include: {
        role: {
          include: {
            rolePermissions: {
              include: {
                permission: true,
              },
            },
          },
        },
        tenant: true,
      },
    });

    if (!user) {
      return errorResponse(res, "User not found", HTTP_STATUS.UNAUTHORIZED);
    }

    req.user = sanitizeUser(user);
    next();
  } catch (err) {
    console.error(err);
    return errorResponse(
      res,
      "Invalid or expired token",
      HTTP_STATUS.UNAUTHORIZED
    );
  }
};

export const authorize = (permissions = []) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return errorResponse(res, "Unauthorized", HTTP_STATUS.UNAUTHORIZED);
      }

      const userPermissions =
        req.user.role?.rolePermissions?.map((rp) => rp.permission.action) || [];

      const hasPermission = permissions.every((p) =>
        userPermissions.includes(p)
      );

      if (!hasPermission) {
        return errorResponse(
          res,
          "Forbidden: insufficient permissions",
          HTTP_STATUS.FORBIDDEN
        );
      }

      next();
    } catch (err) {
      console.error(err);
      return errorResponse(res, "Authorization error", HTTP_STATUS.FORBIDDEN);
    }
  };
};
