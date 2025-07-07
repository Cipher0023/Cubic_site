import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regCbr } from "../../services/Consumer_breadcrumbs/regCbrSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regCbrCnt = async (req, res) => {
  try {
    const { consumer_id, page_id, time_spent } = req.body;
    // Enviando dados para o service
    const newConsumer_breadcrumbs = await regCbr(
      consumer_id,
      page_id,
      time_spent
    );
    console.log(newConsumer_breadcrumbs);
    return res.status(201).json(newConsumer_breadcrumbs);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
