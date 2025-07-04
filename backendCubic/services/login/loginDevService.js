import bcrypt from "bcrypt"; // For password hashing
import jwt from "jsonwebtoken"; // For authentication tokens
import prisma from "../../prisma/primaClient.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const loginDev = async (req, res) => {
  try {
    const { email, password } = req.body;
    const devSearch = await prisma.developer.findUnique({ where: { email } });
    if (!devSearch) {
      return res.status(404).json({ message: "Developer não encontrado" });
    }
    const isMatch = await bcrypt.compare(password, developer.password);
    if (!isMatch) {
      return res.status(400).json({ message: "senha incorreta" });
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
    res.status(200).json({ token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erro no servidor, tente novamente mais tarde" });
  }
};
