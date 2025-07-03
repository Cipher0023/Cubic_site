import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delSer = async (service_id) => {
  try {
    await prisma.services.delete({
      where: { service_id },
    });
    return { success: true, message: "Product Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Product", error.message);
    return { success: false, message: "Erro ao deletar Product" };
  }
};
