import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delCsm = async (consumer_id) => {
  try {
    const existing = await prisma.consumer.findUnique({
      where: { consumer_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.consumer.delete({
      where: { consumer_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
