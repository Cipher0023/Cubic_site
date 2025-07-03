import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regSer } from "../../services/Services/regSerSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regSerCnt = async (req, res) => {
  try {
    const {
      name,
      added_by,
      category,
      price,
      campaign_id,
      call_to_action,
      description,
      main_photo_id,
      photos_ids,
      views,
      selling_numbers,
      service_score,
      time_to_completion,
    } = req.body;
    // Enviando dados para o service
    const newServices = await regSer(
      name,
      added_by,
      category,
      price,
      campaign_id,
      call_to_action,
      description,
      main_photo_id,
      photos_ids,
      views,
      selling_numbers,
      service_score,
      time_to_completion
    );
    console.log(newServices);
    return res.status(201).json(newServices);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
