import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regStt } from "../../services/States/regSttSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regSttCnt = async (req, res) => {
  try {
    const { name, dev_id } = req.body;
    //validação dos campos obrigatórios
    if (!name || !dev_id) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
    }
    // Criar novo registro
    const newRegister = await regStt(name, dev_id);
    return res.status(201).json(newRegister);
  } catch (err) {
    console.error("erro ao registrar", err.message);
    return res.status(500).json({ message: err.message });
  }
};
