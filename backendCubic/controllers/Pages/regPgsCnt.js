import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPgs } from "../../services/Pages/regPgsSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPgsCnt = async (req, res) => {
  try {
    const { name, dev_id, description } = req.body;
    //validação dos campos obrigatórios
    if (!name || !dev_id || !description) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
    }
    // Criar novo registro
    const newRegister = await regPgs(name, dev_id, description);
    return res.status(201).json(newRegister);
  } catch (err) {
    console.error("erro ao registrar", err.message);
    return res.status(500).json({ message: err.message });
  }
};
