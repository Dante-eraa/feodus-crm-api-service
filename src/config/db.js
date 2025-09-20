import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient({
  log: [
    { emit: "event", level: "query" }, // Logs all queries
    { emit: "event", level: "info" }, // General info
    { emit: "event", level: "warn" }, // Warnings
    { emit: "event", level: "error" }, // Errors
  ],
});

export default prisma;
