import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/prismaClient.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const loginDev = async (req, res) => {
  try {
    console.log("📥 Requisição recebida no loginDev");

    const { email, password } = req.body;
    console.log("🔎 Dados recebidos:", { email, password: "[OCULTO]" });

    const devSearch = await prisma.developer.findUnique({ where: { email } });
    if (!devSearch) {
      console.warn("⚠️ Developer não encontrado:", email);
      return res.status(404).json({ message: "Developer não encontrado" });
    }

    console.log("✅ Developer encontrado:", devSearch.name);

    const isMatch = await bcrypt.compare(password, devSearch.password);
    if (!isMatch) {
      console.warn("❌ Senha incorreta para:", email);
      return res.status(400).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign({ id: devSearch.dev_id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("🔐 Token gerado com sucesso para:", email);

    res.status(200).json({
      message: "Login realizado com sucesso",
      developer: {
        name: devSearch.name,
        email: devSearch.email,
        dev_id: devSearch.dev_id,
      },
      token,
    });
  } catch (err) {
    console.error("🔥 Erro no servidor durante loginDev:", err);
    res
      .status(500)
      .json({ message: "Erro no servidor, tente novamente mais tarde" });
  }
};
