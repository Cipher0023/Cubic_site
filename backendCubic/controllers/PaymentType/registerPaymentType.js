import bcrypt from "bcrypt"; // For password hashing
import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const registerDeveloper = async (req, res) => {
  try {
    const { name, description, dev_id } = req.body;
    if (!dev_id) {
      return res
        .status(400)
        .json({ message: "Insira um id de dev para continuar" });
    }
    // Check if the developer already exists
    const existingDeveloper = await prisma.developer.findUnique({
      where: {
        email: email,
      },
    });
    if (existingDeveloper) {
      return res.status(400).json({ message: "Desenvolvedor já existe" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const newDeveloper = await prisma.developer.create({
      data: {
        email: email,
        name: name,
        password: hashpassword,
        telephone: telephone,
      },
    });
    res.status(201).json(newDeveloper);
  } catch (err) {
    console.error("erro do servidor", err);
    res
      .status(500)
      .json({ message: "Erro no servidor, tente novamente mais tarde" });
  }
};
