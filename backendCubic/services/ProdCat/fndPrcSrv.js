import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndPrc = async (product_category_id) => {
  return await prisma.product_categories.findUnique({
    where: { product_category_id },
  });
};
