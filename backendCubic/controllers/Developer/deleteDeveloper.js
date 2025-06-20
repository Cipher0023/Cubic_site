import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const deleteDeveloper = async (req, res) => {
  try {
    const { email } = req.body;
    // Checagem do e-mail
    if (!email) {
      return res
        .status(400)
        .json({ message: "E-mail é obrigatório para deletar um developer." });
    }
    //acha o dev em questão
    const existingDeveloper = await prisma.developer.findUnique({
      where: { email },
    });
    //se não achar o dev, retorna erro 404
    if (!existingDeveloper) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado." });
    }
    //deleta o dev
    await prisma.developer.delete({
      where: { email },
    });
    //confirma a deleção
    return res
      .status(200)
      .json({ message: "Desenvolvedor deletado com sucesso." });
  } catch (err) {
    console.error("Erro ao deletar developer:", err);
    return res
      .status(500)
      .json({ message: "Erro no servidor ao tentar deletar o developer." });
  }
};
