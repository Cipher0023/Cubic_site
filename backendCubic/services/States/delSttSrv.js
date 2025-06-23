import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delStt = async (state_id) => {
  try {
    const existing = await prisma.states.findUnique({
      where: { state_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.states.delete({
      where: { state_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
