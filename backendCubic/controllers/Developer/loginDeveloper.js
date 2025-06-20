import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export const loginDev = async (req, res) => {
  try {
    const { email, password } = req.body;

    const devSearch = await prisma.developer.findUnique({ where: { email } });
    if (!devSearch) {
      return res.status(404).json({ message: "Developer não encontrado" });
    }

    const isMatch = await bcrypt.compare(password, devSearch.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign({ id: devSearch.dev_id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ message: "Login realizado com sucesso", token });
  } catch (err) {
    console.error("Erro no servidor:", err);
    res
      .status(500)
      .json({ message: "Erro no servidor, tente novamente mais tarde" });
  }
};
