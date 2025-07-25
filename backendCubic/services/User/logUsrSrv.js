import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/primaClient.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const loginUser = async (req, res) => {
  try {
    console.log("📥 Requisição recebida no login User");
    const { email, password } = req.body;
    console.log("🔎 Dados recebidos:", { email, password: "[OCULTO]" });
    const usrSearch = await prisma.user.findUnique({ where: { email } });
    if (!usrSearch) {
      console.warn("⚠️ User não encontrado:", email);
      return res.status(404).json({ message: "User não encontrado" });
    }
    console.log("✅ User encontrado:", usrSearch.name);
    const isMatch = await bcrypt.compare(password, usrSearch.password);
    if (!isMatch) {
      console.warn("❌ Senha incorreta", email);
      return res.status(400).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign({ id: usrSearch.user_id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("🔐 Token gerado com sucesso para:", email);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 1000,
    });
    //
    res.status(200).json({
      message: "Login realizado com sucesso",
      user: {
        name: usrSearch.name,
        email: usrSearch.email,
        user_id: usrSearch.user_id,
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
