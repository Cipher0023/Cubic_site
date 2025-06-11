import bcrypt from "bcrypt"; // For password hashing
import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const updateDeveloper = async (req, res) => {
  try {
    const { email } = req.body;
    // Check if the developer already exists
    if (!email) {
      return res
        .status(404)
        .json({ message: "Por favor insira um e-mail para atualizar um dev" });
    }
    const existingDeveloper = await prisma.developer.findUnique({
      where: { email },
    });
    if (!existingDeveloper) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado" });
    }
    const allowedFields = ["name", "email", "telephone", "password"];
    const updateFields = {};
    for (const field of aloowedFields) {
      if (req.body[field] !== undefined && req.body[field] !== "") {
        updateFields[field] = req.body[field];
      }
    }
    //se atualizar a senha, esta parte faz o hash da senha
    if (updateFields.password) {
      const salt = await bcript.genSalt(10);
      updateFields.password = await bcrypt.hash(updateFields.password, salt);
    }
    //verifica se ao menos um campo válido foi enviado para update
    if (Object.keys(updateFields).lenght === 0) {
      return res.status(400).json({ message: "nenhum dado para atualizar" });
    }
    // Atualiza o desenvolvedor com os campos permitidos
    const updatedDeveloper = await prisma.developer.update({
      where: { email },
      data: updateFields,
    });
    // Retorna o desenvolvedor atualizado
    return res.status(200).json({
      message: "dev atualizado com sucesso",
      developer: updatedDeveloper,
    });
  } catch (err) {
    console.error("erro do servidor", err);
    res
      .status(500)
      .json({ message: "Erro no servidor, tente novamente mais tarde" });
  }
};
