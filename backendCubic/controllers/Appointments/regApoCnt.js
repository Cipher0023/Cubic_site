import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regApo } from "../../services/Appointments/regApoSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regApoCnt = async (req, res) => {
  try {
    const {
      service_id,
      consumer_id,
      value,
      text,
      execution_date,
      end_date,
      state_id,
    } = req.body;
    // Enviando dados para o service
    const newAppointments = await regApo(
      service_id,
      consumer_id,
      value,
      text,
      execution_date,
      end_date,
      state_id
    );
    console.log(newAppointments);
    return res.status(201).json(newAppointments);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
