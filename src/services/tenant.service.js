import { MESSAGES } from "../constants/message.js";
import { TenantRepository } from "../repository/index.js";
import { BadRequestError, NotFoundError } from "../utils/customErrors.js";

export class TenantService {
  static async createTenant(data) {
    const nameExists = await TenantRepository.exists({ name: data.name });
    if (nameExists)
      throw new BadRequestError("Tenant with this name already exists");

    const emailExists = await TenantRepository.exists({ email: data.email });
    if (emailExists)
      throw new BadRequestError("Tenant with this email already exists");

    return TenantRepository.create(data);
  }

  static async getTenantById(id) {
    const tenant = await TenantRepository.findById(id);
    if (!tenant) {
      throw new NotFoundError(MESSAGES.TENANT.NOT_FOUND);
    }
    return tenant;
  }

  static async updateTenant(id, data) {
    const tenant = await TenantRepository.findById(id);
    if (!tenant) {
      throw new NotFoundError(MESSAGES.TENANT.NOT_FOUND);
    }
    if (data.email && data.email !== tenant.email) {
      const emailExists = await TenantRepository.exists({ email: data.email });
      if (emailExists)
        throw new BadRequestError(
          "Another tenant with this email already exists"
        );
    }
    return TenantRepository.update(id, data);
  }

  static async deleteTenant(id, soft = true) {
    const tenant = await TenantRepository.findById(id);
    if (!tenant) {
      throw new NotFoundError(MESSAGES.TENANT.NOT_FOUND);
    }

    return soft
      ? TenantRepository.softDelete(id)
      : TenantRepository.hardDelete(id);
  }

  static async listTenant(options = {}) {
    return TenantRepository.list(options);
  }

  static async countTenants(filters = {}) {
    return TenantRepository.count(filters);
  }
}
