import { logAudit } from "../utils/logAudit.js";

export const auditMiddleware = (action, entity) => {
  return async (req, res, next) => {
    // Capture original send method to hook into response
    const originalSend = res.send;

    res.send = function (body) {
      try {
        const statusCode = res.statusCode;
        const logData = {
          userId: req.user?.id || null,
          tenantId: req.user?.tenantId || null,
          action,
          entity,
          entityId: req.params.id || null,
          details: {
            body: req.body,
            query: req.query,
            response: body ? JSON.parse(body)?.message : null,
          },
          ipAddress: req.ip,
          userAgent: req.headers["user-agent"],
          status: statusCode < 400 ? "SUCCESS" : "FAILURE",
          statusCode,
        };

        // Async log (don't block response)
        logAudit(logData).catch((err) =>
          console.error("Audit logging failed:", err)
        );
      } catch (err) {
        console.error("Audit middleware error:", err);
      }

      return originalSend.apply(this, arguments);
    };

    next();
  };
};
