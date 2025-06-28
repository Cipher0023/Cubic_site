import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regCsm } from "../../services/Consumer/regCsmSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regCsmCnt = async (req, res) => {
  try {
    const {
      email,
      name,
      password,
      telephone,
      document_type,
      document_number,
      adress,
    } = req.body;
    console.log("Dados recebidos:", req.body);

    // Criar novo usuário
    const newUser = await regCsm(
      email,
      name,
      password,
      telephone,
      document_type,
      document_number,
      adress
    );
    console.log(newUser);
    return res.status(201).json(newUser);
  } catch (err) {
    console.error("Erro ao registrar usuário:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
