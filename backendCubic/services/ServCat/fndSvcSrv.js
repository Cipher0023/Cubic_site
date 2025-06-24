import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndSvc = async (service_category_id) => {
  return await prisma.service_categories.findUnique({
    where: { service_category_id },
  });
};
