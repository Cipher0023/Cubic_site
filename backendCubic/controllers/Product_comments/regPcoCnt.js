import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPco } from "../../services/Product_comments/regPcoSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPcoCnt = async (req, res) => {
  try {
    const {
      consumer_id,
      product_id,
      title,
      text,
      score,
      has_brought
    } = req.body;
    // Enviando dados para o service
    const newProduct_comments = await regPco(
      consumer_id,
      product_id,
      title,
      text,
      score,
      has_brought
    );
    console.log(newProduct_comments);
    return res.status(201).json(newProduct_comments);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
