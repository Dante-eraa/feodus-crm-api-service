export const MESSAGES = {
  TENANT: {
    CREATED: "Tenant created successfully",
    UPDATED: "Tenant updated successfully",
    DELETED: "Tenant deleted successfully",
    NOT_FOUND: "Tenant not found",
    LISTED: "Tenants retrieved successfully",
    GET: "Tenant retrieved successfully",
  },

  USER: {
    CREATED: "User created successfully",
    UPDATED: "User updated successfully",
    DELETED: "User deleted successfully",
    NOT_FOUND: "User not found",
    LISTED: "Users retrieved successfully",
  },

  ROLE: {
    CREATED: "Role created successfully",
    UPDATED: "Role updated successfully",
    DELETED: "Role deleted successfully",
    NOT_FOUND: "Role not found",
    LISTED: "Roles retrieved successfully",
  },

  ENQUIRY: {
    CREATED: "Enquiry created successfully",
    LISTED: "Enquiries retrieved successfully",
    FETCHED: "Enquiry fetched successfully",
    UPDATED: "Enquiry updated successfully",
    NOT_FOUND: "Enquiry not found",
    DELETED: "Enquiry deleted successfully",
  },

  LEAD: {
    CREATED: "Lead created successfully",
    UPDATED: "Lead updated successfully",
    DELETED: "Lead deleted successfully",
    NOT_FOUND: "Lead not found",
    LISTED: "Leads retrieved successfully",
  },

  DEAL: {
    CREATED: "Deal created successfully",
    UPDATED: "Deal updated successfully",
    DELETED: "Deal deleted successfully",
    FETCHED: "Deal fetched successfully",
    NOT_FOUND: "Deal not found",
    LISTED: "Deals retrieved successfully",
  },

  SALE: {
    CREATED: "Sale recorded successfully",
    UPDATED: "Sale updated successfully",
    DELETED: "Sale deleted successfully",
    NOT_FOUND: "Sale not found",
    LISTED: "Sales retrieved successfully",
  },

  CLIENT: {
    CREATED: "Client created successfully",
    UPDATED: "Client updated successfully",
    DELETED: "Client deleted successfully",
    NOT_FOUND: "Client not found",
    LISTED: "Clients retrieved successfully",
  },

  GENERIC: {
    SUCCESS: "Operation completed successfully",
    ERROR: "Something went wrong",
    VALIDATION_FAILED: "Validation failed",
    NOT_FOUND: "Resource not found",
  },
};

export const LOG_ACTIONS = {
  // User
  USER_CREATE: "USER_CREATE",
  USER_UPDATE: "USER_UPDATE",
  USER_DELETE: "USER_DELETE",
  USER_SOFT_DELETE: "USER_SOFT_DELETE",
  USER_LOGIN: "USER_LOGIN",
  USER_LOGOUT: "USER_LOGOUT",

  // Role
  ROLE_CREATE: "ROLE_CREATE",
  ROLE_UPDATE: "ROLE_UPDATE",
  ROLE_DELETE: "ROLE_DELETE",

  // Tenant
  TENANT_CREATE: "TENANT_CREATE",
  TENANT_UPDATE: "TENANT_UPDATE",
  TENANT_DELETE: "TENANT_DELETE",

  // Enquiry
  ENQUIRY_CREATE: "ENQUIRY_CREATE",
  ENQUIRY_UPDATE: "ENQUIRY_UPDATE",
  ENQUIRY_DELETE: "ENQUIRY_DELETE",

  // Lead
  LEAD_CREATE: "LEAD_CREATE",
  LEAD_UPDATE: "LEAD_UPDATE",
  LEAD_DELETE: "LEAD_DELETE",

  //Deal
  DEAL_CREATE: "DEAL_CREATE",
  DEAL_UPDATE: "DEAL_UPDATE",
  DEAL_DELETE: "DEAL_DELETE",

  // Auth / Security
  PASSWORD_CHANGE: "PASSWORD_CHANGE",
  PERMISSION_ASSIGN: "PERMISSION_ASSIGN",
  PERMISSION_REVOKE: "PERMISSION_REVOKE",

  // System
  SYSTEM_ERROR: "SYSTEM_ERROR",
};
