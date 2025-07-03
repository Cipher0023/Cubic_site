import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndPco = async (product_comments_id) => {
  return await prisma.product_comments.findUnique({
    where: { product_comments_id },
  });
};
