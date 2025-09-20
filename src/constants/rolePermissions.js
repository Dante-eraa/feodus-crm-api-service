const ROLE_PERMISSIONS = Object.freeze({
  // Tenant
  CREATE_TENANT: "CREATE_TENANT",
  UPDATE_TENANT: "UPDATE_TENANT",
  DELETE_TENANT: "DELETE_TENANT",
  VIEW_TENANT: "VIEW_TENANT",

  // Role
  CREATE_ROLE: "CREATE_ROLE",
  UPDATE_ROLE: "UPDATE_ROLE",
  DELETE_ROLE: "DELETE_ROLE",
  ASSIGN_ROLE: "ASSIGN_ROLE",
  VIEW_ROLE: "VIEW_ROLE",

  // User
  CREATE_USER: "CREATE_USER",
  UPDATE_USER: "UPDATE_USER",
  DELETE_USER: "DELETE_USER",
  VIEW_USER: "VIEW_USER",
  ASSIGN_USER_ROLE: "ASSIGN_USER_ROLE",

  // CRM
  CREATE_CLIENT: "CREATE_CLIENT",
  UPDATE_CLIENT: "UPDATE_CLIENT",
  DELETE_CLIENT: "DELETE_CLIENT",
  VIEW_CLIENT: "VIEW_CLIENT",

  CREATE_LEAD: "CREATE_LEAD",
  UPDATE_LEAD: "UPDATE_LEAD",
  DELETE_LEAD: "DELETE_LEAD",
  VIEW_LEAD: "VIEW_LEAD",

  CREATE_PIPELINE: "CREATE_PIPELINE",
  UPDATE_PIPELINE: "UPDATE_PIPELINE",
  DELETE_PIPELINE: "DELETE_PIPELINE",
  VIEW_PIPELINE: "VIEW_PIPELINE",

  CREATE_DEAL: "CREATE_DEAL",
  UPDATE_DEAL: "UPDATE_DEAL",
  DELETE_DEAL: "DELETE_DEAL",
  VIEW_DEAL: "VIEW_DEAL",

  CREATE_ENQUIRY: "CREATE_ENQUIRY",
  UPDATE_ENQUIRY: "UPDATE_ENQUIRY",
  DELETE_ENQUIRY: "DELETE_ENQUIRY",
  VIEW_ENQUIRY: "VIEW_ENQUIRY",

  CREATE_COMPLAINT: "CREATE_COMPLAINT",
  UPDATE_COMPLAINT: "UPDATE_COMPLAINT",
  DELETE_COMPLAINT: "DELETE_COMPLAINT",
  VIEW_COMPLAINT: "VIEW_COMPLAINT",

  CREATE_APPOINTMENT: "CREATE_APPOINTMENT",
  UPDATE_APPOINTMENT: "UPDATE_APPOINTMENT",
  DELETE_APPOINTMENT: "DELETE_APPOINTMENT",
  VIEW_APPOINTMENT: "VIEW_APPOINTMENT",

  CREATE_SALE: "CREATE_SALE",
  UPDATE_SALE: "UPDATE_SALE",
  DELETE_SALE: "DELETE_SALE",
  VIEW_SALE: "VIEW_SALE",

  // ERP & Finance
  CREATE_PROJECT: "CREATE_PROJECT",
  UPDATE_PROJECT: "UPDATE_PROJECT",
  DELETE_PROJECT: "DELETE_PROJECT",
  VIEW_PROJECT: "VIEW_PROJECT",

  CREATE_INVOICE: "CREATE_INVOICE",
  UPDATE_INVOICE: "UPDATE_INVOICE",
  DELETE_INVOICE: "DELETE_INVOICE",
  VIEW_INVOICE: "VIEW_INVOICE",

  CREATE_BILLING: "CREATE_BILLING",
  UPDATE_BILLING: "UPDATE_BILLING",
  DELETE_BILLING: "DELETE_BILLING",
  VIEW_BILLING: "VIEW_BILLING",

  CREATE_PAYROLL: "CREATE_PAYROLL",
  UPDATE_PAYROLL: "UPDATE_PAYROLL",
  DELETE_PAYROLL: "DELETE_PAYROLL",
  VIEW_PAYROLL: "VIEW_PAYROLL",

  // HR & Attendance
  CREATE_ATTENDANCE: "CREATE_ATTENDANCE",
  UPDATE_ATTENDANCE: "UPDATE_ATTENDANCE",
  DELETE_ATTENDANCE: "DELETE_ATTENDANCE",
  VIEW_ATTENDANCE: "VIEW_ATTENDANCE",

  CREATE_LEAVE: "CREATE_LEAVE",
  APPROVE_LEAVE: "APPROVE_LEAVE",
  REJECT_LEAVE: "REJECT_LEAVE",
  VIEW_LEAVE: "VIEW_LEAVE",

  CREATE_SHIFT: "CREATE_SHIFT",
  UPDATE_SHIFT: "UPDATE_SHIFT",
  DELETE_SHIFT: "DELETE_SHIFT",
  VIEW_SHIFT: "VIEW_SHIFT",

  // Tasks & Notifications
  CREATE_TASK: "CREATE_TASK",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
  VIEW_TASK: "VIEW_TASK",

  SEND_NOTIFICATION: "SEND_NOTIFICATION",
  VIEW_NOTIFICATION: "VIEW_NOTIFICATION",

  // Documents
  CREATE_DOCUMENT: "CREATE_DOCUMENT",
  UPDATE_DOCUMENT: "UPDATE_DOCUMENT",
  DELETE_DOCUMENT: "DELETE_DOCUMENT",
  VIEW_DOCUMENT: "VIEW_DOCUMENT",

  // Logs
  VIEW_LOGS: "VIEW_LOGS",

  // Reports & Settings
  VIEW_REPORTS: "VIEW_REPORTS",
  MANAGE_SETTINGS: "MANAGE_SETTINGS",
});

const ROLE_PERMISSION_DESCRIPTIONS = Object.freeze({
  CREATE_TENANT: "Create a new tenant",
  UPDATE_TENANT: "Update tenant details",
  DELETE_TENANT: "Delete a tenant",
  VIEW_TENANT: "View tenant information",

  CREATE_ROLE: "Create a new role",
  UPDATE_ROLE: "Update role details",
  DELETE_ROLE: "Delete a role",
  ASSIGN_ROLE: "Assign a role to users",
  VIEW_ROLE: "View role information",

  CREATE_USER: "Create a new user",
  UPDATE_USER: "Update user details",
  DELETE_USER: "Delete a user",
  VIEW_USER: "View user information",
  ASSIGN_USER_ROLE: "Assign roles to users",

  CREATE_CLIENT: "Create client records",
  UPDATE_CLIENT: "Update client records",
  DELETE_CLIENT: "Delete client records",
  VIEW_CLIENT: "View client records",

  CREATE_LEAD: "Create a lead",
  UPDATE_LEAD: "Update lead details",
  DELETE_LEAD: "Delete a lead",
  VIEW_LEAD: "View leads",

  CREATE_PIPELINE: "Create a sales pipeline",
  UPDATE_PIPELINE: "Update pipeline details",
  DELETE_PIPELINE: "Delete pipeline",
  VIEW_PIPELINE: "View pipelines",

  CREATE_DEAL: "Create a new deal",
  UPDATE_DEAL: "Update deal details",
  DELETE_DEAL: "Delete a deal",
  VIEW_DEAL: "View deals",

  CREATE_ENQUIRY: "Create a customer enquiry",
  UPDATE_ENQUIRY: "Update enquiry details",
  DELETE_ENQUIRY: "Delete enquiry",
  VIEW_ENQUIRY: "View enquiries",

  CREATE_COMPLAINT: "Create a complaint",
  UPDATE_COMPLAINT: "Update complaint details",
  DELETE_COMPLAINT: "Delete complaint",
  VIEW_COMPLAINT: "View complaints",

  CREATE_APPOINTMENT: "Create an appointment",
  UPDATE_APPOINTMENT: "Update appointment details",
  DELETE_APPOINTMENT: "Delete appointment",
  VIEW_APPOINTMENT: "View appointments",

  CREATE_SALE: "Record a new sale",
  UPDATE_SALE: "Update sale details",
  DELETE_SALE: "Delete sale",
  VIEW_SALE: "View sales",

  CREATE_PROJECT: "Create a new project",
  UPDATE_PROJECT: "Update project details",
  DELETE_PROJECT: "Delete project",
  VIEW_PROJECT: "View projects",

  CREATE_INVOICE: "Create an invoice",
  UPDATE_INVOICE: "Update invoice details",
  DELETE_INVOICE: "Delete invoice",
  VIEW_INVOICE: "View invoices",

  CREATE_BILLING: "Create billing records",
  UPDATE_BILLING: "Update billing records",
  DELETE_BILLING: "Delete billing records",
  VIEW_BILLING: "View billing records",

  CREATE_PAYROLL: "Create payroll records",
  UPDATE_PAYROLL: "Update payroll records",
  DELETE_PAYROLL: "Delete payroll records",
  VIEW_PAYROLL: "View payroll records",

  CREATE_ATTENDANCE: "Mark attendance",
  UPDATE_ATTENDANCE: "Update attendance records",
  DELETE_ATTENDANCE: "Delete attendance records",
  VIEW_ATTENDANCE: "View attendance records",

  CREATE_LEAVE: "Request leave",
  APPROVE_LEAVE: "Approve leave requests",
  REJECT_LEAVE: "Reject leave requests",
  VIEW_LEAVE: "View leave requests",

  CREATE_SHIFT: "Create work shifts",
  UPDATE_SHIFT: "Update shift details",
  DELETE_SHIFT: "Delete shifts",
  VIEW_SHIFT: "View shifts",

  CREATE_TASK: "Create tasks",
  UPDATE_TASK: "Update tasks",
  DELETE_TASK: "Delete tasks",
  VIEW_TASK: "View tasks",

  SEND_NOTIFICATION: "Send system notifications",
  VIEW_NOTIFICATION: "View notifications",

  CREATE_DOCUMENT: "Upload a document",
  UPDATE_DOCUMENT: "Update document details",
  DELETE_DOCUMENT: "Delete documents",
  VIEW_DOCUMENT: "View documents",

  VIEW_LOGS: "View activity logs",
  VIEW_REPORTS: "View system reports",
  MANAGE_SETTINGS: "Manage application settings",
});

export { ROLE_PERMISSIONS, ROLE_PERMISSION_DESCRIPTIONS };
