import { verifyToken } from "../utils/jwtToken.js";
import { BadRequestError } from "../utils/customErrors.js";

export const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new BadRequestError("Authorization header missing");

    const token = authHeader.split(" ")[1];
    if (!token) throw new BadRequestError("Token missing");

    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};
