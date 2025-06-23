import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delPgs = async (page_id) => {
  try {
    const existing = await prisma.pages.findUnique({
      where: { page_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.pages.delete({
      where: { page_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
