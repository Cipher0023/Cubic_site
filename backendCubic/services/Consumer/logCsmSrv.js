import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/primaClient.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const loginConsumer = async (req, res) => {
  try {
    console.log("📥 Requisição recebida no login Consumer");

    const { email, password } = req.body;
    console.log("🔎 Dados recebidos:", { email, password: "[OCULTO]" });

    const csmSearch = await prisma.consumer.findUnique({ where: { email } });
    if (!csmSearch) {
      console.warn("⚠️ Consumer não encontrado:", email);
      return res.status(404).json({ message: "Consumer não encontrado" });
    }

    console.log("✅ Consumer encontrado:", csmSearch.name);

    const isMatch = await bcrypt.compare(password, csmSearch.password);
    if (!isMatch) {
      console.warn("❌ Senha incorreta", email);
      return res.status(400).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign({ id: csmSearch.consumer_id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("🔐 Token gerado com sucesso para:", email);

    res.status(200).json({
      message: "Login realizado com sucesso",
      consumer: {
        name: csmSearch.name,
        email: csmSearch.email,
        consumer_id: csmSearch.consumer_id,
      },
      token,
    });
  } catch (err) {
    console.error("Erro no servidor durante login:", err);
    res
      .status(500)
      .json({ message: "Erro no servidor, tente novamente mais tarde" });
  }
};
