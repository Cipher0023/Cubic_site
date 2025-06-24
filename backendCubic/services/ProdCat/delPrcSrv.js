import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delPrc = async (product_category_id) => {
  try {
    const existing = await prisma.product_categories.findUnique({
      where: { product_category_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.product_categories.delete({
      where: { product_category_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
