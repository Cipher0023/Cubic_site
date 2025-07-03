import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const delExm = async (example_id) => {
  try {
    await prisma.example.delete({
      where: { example_id },
    });
    return { success: true, message: "Example Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Example", error.message);
    return { success: false, message: "Erro ao deletar Example" };
  }
};
