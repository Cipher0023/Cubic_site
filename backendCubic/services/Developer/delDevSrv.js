import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const deleteDeveloper = async (email) => {
  try {
    await prisma.developer.delete({
      where: { email },
    });
    return { success: true, message: "Desenvolvedor deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar desenvolvedor:", error.message);
    return { success: false, message: "Erro ao deletar desenvolvedor." };
  }
};
