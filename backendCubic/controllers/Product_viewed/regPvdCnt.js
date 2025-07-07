import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPvd } from "../../services/Product_viewed/regPvdSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPvdCnt = async (req, res) => {
  try {
    const { breadcrum_id, product_id } = req.body;
    // Enviando dados para o service
    const newProduct_viewed = await regPvd(breadcrum_id, product_id);
    console.log(newProduct_viewed);
    return res.status(201).json(newProduct_viewed);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
