import { Router } from "express";
import tenantRoutes from "./tenant.routes.js";
import AuthRoutes from "./auth.routes.js";
import UserRoutes from "./user.routes.js";
import RoleRoutes from "./role.routes.js";
import RolePermissionRoutes from "./rolePermission.routes.js";
import EnquiryRoutes from "./enquiry.routes.js";
import LeadRoutes from "./lead.routes.js";

const router = Router();

router.use("/tenants", tenantRoutes);
router.use("/users", UserRoutes);
router.use("/auth", AuthRoutes);
router.use("/role-permissions", RolePermissionRoutes);
router.use("/roles", RoleRoutes);
router.use("/enquiries", EnquiryRoutes);
router.use("/leads", LeadRoutes);

export default router;
