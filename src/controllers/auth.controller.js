import { successResponse } from "../utils/apiResponse.js";
import { AuthService } from "../services/index.js";

export class AuthController {
  static async login(req, res, next) {
    try {
      const { email, password, tenantId } = req.body;
      const data = await AuthService.login(email, password, tenantId);
      return successResponse(res, data, "Login successful");
    } catch (err) {
      next(err);
    }
  }
}
