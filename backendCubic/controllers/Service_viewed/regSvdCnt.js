import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regSvd } from "../../services/Service_viewed/regSvdSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regSvdCnt = async (req, res) => {
  try {
    const { breadcrum_id, service_id } = req.body;
    // Enviando dados para o service
    const newService_viewed = await regSvd(breadcrum_id, service_id);
    console.log(newService_viewed);
    return res.status(201).json(newService_viewed);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
