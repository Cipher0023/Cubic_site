import bcrypt from "bcrypt"; // For password hashing
import prisma from "../../prisma/primaClient.js";

export const registerDev = async (req, res) => {
  try {
    const { email, name, telephone, document_type, document_number, password } =
      req.body;
    if (!email || !name || !telephone || !password) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
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
