import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndPrd = async (product_id) => {
  return await prisma.products.findUnique({
    where: { product_id },
  });
};
