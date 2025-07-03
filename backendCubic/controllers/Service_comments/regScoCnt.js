import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regSco } from "../../services/Service_comments/regScoSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regScoCnt = async (req, res) => {
  try {
    const { consumer_id, service_id, title, text, score, has_brought } =
      req.body;
    // Enviando dados para o service
    const newService_comment = await regSco(
      consumer_id,
      service_id,
      title,
      text,
      score,
      has_brought
    );
    console.log(newService_comment);
    return res.status(201).json(newService_comment);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
