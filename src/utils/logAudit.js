import prisma from "../config/db.js";

export const logAudit = async (data) => {
  try {
    // await prisma.logger.create({
    //   data,
    // });
  } catch (err) {
    console.error("Failed to log audit:", err.message);
  }
};
