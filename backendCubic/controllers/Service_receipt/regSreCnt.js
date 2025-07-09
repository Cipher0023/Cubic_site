import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regSre } from "../../services/Service_receipt/regSreSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regSreCnt = async (req, res) => {
  try {
    const { appointment_id, consumer_id, total_value, payment_method_id } =
      req.body;
    // Enviando dados para o service
    const newService_receipt = await regSre(
      appointment_id,
      consumer_id,
      total_value,
      payment_method_id
    );
    console.log(newService_receipt);
    return res.status(201).json(newService_receipt);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
