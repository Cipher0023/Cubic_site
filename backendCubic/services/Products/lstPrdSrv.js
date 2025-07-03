import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const lstPrd = async () => {
  try {
    const result = await prisma.products.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar product:", error.message);
    throw new Error("Erro ao listar product.");
  }
};
