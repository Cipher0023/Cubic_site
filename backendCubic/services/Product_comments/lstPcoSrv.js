import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const lstPco = async () => {
  try {
    const result = await prisma.product_comments.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar product_comments:", error.message);
    throw new Error("Erro ao listar product_comments.");
  }
};
