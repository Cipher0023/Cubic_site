import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPre } from "../../services/Product_receipt/regPreSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPreCnt = async (req, res) => {
  try {
    const { shopping_cart_id, consumer_id, total_value, payment_method_id } =
      req.body;
    // Enviando dados para o service
    const newProduct_receipt = await regPre(
      shopping_cart_id,
      consumer_id,
      total_value,
      payment_method_id
    );
    console.log(newProduct_receipt);
    return res.status(201).json(newProduct_receipt);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
