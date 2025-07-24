import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPrd } from "../../services/Products/regPrdSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPrdCnt = async (req, res) => {
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
      product_score,
      quantity,
    } = req.body;
    console.log("Recebido dados: ", req.body);
    // Enviando dados para o service
    const newProducts = await regPrd(
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
      product_score,
      quantity
    );
    console.log(newProducts);
    return res.status(201).json(newProducts);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
