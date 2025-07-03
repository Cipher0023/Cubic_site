import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const lstSer = async () => {
  try {
    const result = await prisma.services.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar service:", error.message);
    throw new Error("Erro ao listar service.");
  }
};
