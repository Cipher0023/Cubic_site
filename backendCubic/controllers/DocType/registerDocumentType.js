import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const registerDocType = async (req, res) => {
  try {
    const { name, dev_id, description } = req.body;
    if (!name || !dev_id || !description) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
    }
    // Check if DocType already exists
    const existingDocType = await prisma.document_type.findFirst({
      where: {
        name: name,
      },
    });
    if (existingDocType) {
      return res.status(400).json({ message: "O doctype já existe" });
    }
    // Create new DocType
    const newDocType = await prisma.document_type.create({
      data: {
        name: name,
        dev_id: dev_id,
        description: description,
      },
    });
    res.status(201).json(newDocType);
  } catch (err) {
    console.error("erro do servidor", err);
    res
      .status(500)
      .json({ message: "Erro no servidor, tente novamente mais tarde" });
  }
};
