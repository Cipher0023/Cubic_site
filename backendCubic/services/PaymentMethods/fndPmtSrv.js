import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndPmt = async (payment_method_id) => {
  return await prisma.payment_method.findUnique({
    where: { payment_method_id },
  });
};
