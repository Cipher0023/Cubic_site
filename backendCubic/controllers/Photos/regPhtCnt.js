import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPht } from "../../services/Photos/regPhtSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPhtCnt = async (req, res) => {
  try {
    const { source, added_by, description } = req.body;
    //validação dos campos obrigatórios
    if (!source || !added_by || !description) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
    }
    // Criar novo registro
    const newRegister = await regPht(source, added_by, description);
    return res.status(201).json(newRegister);
  } catch (err) {
    console.error("erro ao registrar", err.message);
    return res.status(500).json({ message: err.message });
  }
};
