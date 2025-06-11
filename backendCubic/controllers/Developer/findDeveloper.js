import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const findDeveloper = async (req, res) => {
  try {
    1;
    const { email } = req.body;
    // Check if the developer already exists
    const existingDeveloper = await prisma.developer.findUnique({
      where: { email },
    });
    if (!existingDeveloper) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado" });
    }
    return res.status(200).json({
      message: "dev encontrado",
      developer: existingDeveloper,
    });
  } catch (err) {
    console.error("erro do servidor", err);
    res
      .status(500)
      .json({ message: "Erro no servidor, tente novamente mais tarde" });
  }
};
