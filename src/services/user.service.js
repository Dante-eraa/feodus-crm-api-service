import { UserRepository } from "../repository/index.js";
import { BadRequestError, NotFoundError } from "../utils/customErrors.js";
import { hashPassword } from "../utils/passHash.js";

export class UserService {
  static async createUser(data, tenantId) {
    const exists = await UserRepository.exists({ email: data.email });
    if (exists)
      throw new BadRequestError("User with this email already exists");

    const hashedPassword = await hashPassword(data.password);
    return UserRepository.create({
      ...data,
      password: hashedPassword,
      tenantId,
    });
  }

  static async getUserById(id, tenantId) {
    const user = await UserRepository.findById(id);
    if (!user || user.tenantId !== tenantId)
      throw new NotFoundError("User not found");
    return user;
  }

  static async updateUser(id, data, tenantId) {
    const user = await UserRepository.findById(id);
    if (!user || user.tenantId !== tenantId)
      throw new NotFoundError("User not found");

    if (data.email && data.email !== user.email) {
      const emailExists = await UserRepository.exists({
        email: data.email,
        tenantId, // ensure uniqueness within the same tenant
      });
      if (emailExists) {
        throw new BadRequestError(
          "Email is already taken by another user in this tenant"
        );
      }
    }
    if (data.password) {
      data.password = await hashPassword(data.password);
    }
    return UserRepository.update(id, data);
  }

  static async deleteUser(id, tenantId, soft = true) {
    const user = await UserRepository.findById(id);
    if (!user || user.tenantId !== tenantId)
      throw new NotFoundError("User not found");
    if (soft) {
      return UserRepository.update(id, {
        isdeleted: true,
        deletedAt: new Date(),
      });
    }
    return UserRepository.delete(id);
  }

  static async listUsers(options = {}, tenantId) {
    return UserRepository.list(options, tenantId);
  }
}
