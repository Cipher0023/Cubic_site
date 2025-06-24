import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delSvc = async (service_category_id) => {
  try {
    const existing = await prisma.service_categories.findUnique({
      where: { service_category_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.service_categories.delete({
      where: { service_category_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
