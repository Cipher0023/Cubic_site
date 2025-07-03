import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regCpg } from "../../services/Campaign/regCpgSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regCpgCnt = async (req, res) => {
  try {
    const { added_by, name, start_date, end_date, action, description } =
      req.body;
    // Enviando dados para o service
    const newCampaign = await regCpg(
      added_by,
      name,
      start_date,
      end_date,
      action,
      description
    );
    console.log(newCampaign);
    return res.status(201).json(newCampaign);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
