import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPrc } from "../../services/Product_categories/regPrcSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPrcCnt = async (req, res) => {
  try {
    const { name, added_by, description } = req.body;
    //validação dos campos obrigatórios
    if (!name || !added_by || !description) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
    }
    // Criar novo registro
    const newRegister = await regPrc(name, added_by, description);
    return res.status(201).json(newRegister);
  } catch (err) {
    console.error("erro ao registrar", err.message);
    return res.status(500).json({ message: err.message });
  }
};
