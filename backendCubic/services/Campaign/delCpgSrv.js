import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delPst = async (post_id) => {
  try {
    const existing = await prisma.post.findUnique({
      where: { post_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.post.delete({
      where: { post_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
