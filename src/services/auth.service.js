import { UserRepository } from "../repository/index.js";
import { BadRequestError, NotFoundError } from "../utils/customErrors.js";
import { generateToken } from "../utils/jwtToken.js";
import { comparePassword } from "../utils/passHash.js";

export class AuthService {
  static async login(email, password, tenantId) {
    const user = await UserRepository.findOne(
      { email, tenantId, isDeleted: false },
      {
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
      }
    );

    if (!user) {
      throw new NotFoundError("Invalid credentials or tenant");
    }

    // Verify password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new BadRequestError("Invalid credentials");
    }

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      tenantId: user.tenantId,
      roleId: user.roleId,
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        tenantId: user.tenantId,
        role: user.role?.name || null,
        permissions:
          user.role?.rolePermissions?.map((rp) => rp.permission.action) || [],
      },
    };
  }
}
