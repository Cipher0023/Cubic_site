import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndSer = async (service_id) => {
  return await prisma.services.findUnique({
    where: { service_id },
  });
};
