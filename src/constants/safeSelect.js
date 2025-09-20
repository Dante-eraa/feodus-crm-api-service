export const SAFE_SELECT = {
  USER: {
    id: true,
    name: true,
    email: true,
    roleId: true,
    tenantId: true,
    createdAt: true,
    updatedAt: true,
  },

  ROLE: {
    id: true,
    name: true,
    description: true,
    createdAt: true,
    updatedAt: true,
  },

  PERMISSION: {
    id: true,
    name: true,
    description: true,
    createdAt: true,
    updatedAt: true,
  },

  ENQUIRY: {
    id: true,
    subject: true,
    message: true,
    channel: true,
    source: true,
    status: true,
    tenantId: true,
    createdAt: true,
    updatedAt: true,
  },
  LEAD: {
    id: true,
    name: true,
    email: true,
    phone: true,
    pipelineId: true,
    enquiryId: true,
    tenantId: true,
    createdBy: true,
    createdAt: true,
    updatedAt: true,
    pipeline: {
      select: {
        id: true,
        name: true,
      },
    },
  },
  DEAL: {
    id: true,
    name: true,
    stage: true,
    value: true,
    currency: true,
    tenantId: true,
    leadId: true,
    ownerId: true,
    createdBy: true,
    createdAt: true,
    updatedAt: true,
    lead: {
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
      },
    },
    owner: {
      select: {
        id: true,
        name: true,
        email: true,
      },
    },
    createdByUser: {
      select: {
        id: true,
        name: true,
        email: true,
      },
    },
  },
};

export const SENSITIVE_USER_FIELDS = [
  "password",
  "resetToken",
  "otpSecret",
  "apiKey",
  "privateKey",
  "refreshToken",
];
