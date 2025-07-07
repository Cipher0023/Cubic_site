import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regPsa } from "../../services/Product_sales/regPsaSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regPsaCnt = async (req, res) => {
  try {
    const {
      product_id,
      consumer_id,
      price,
      receipt_id,
      payment_method_id,
      wishlist_id,
    } = req.body;
    // Enviando dados para o service
    const newProduct_sales = await regPsa(
      product_id,
      consumer_id,
      price,
      receipt_id,
      payment_method_id,
      wishlist_id
    );
    console.log(newProduct_sales);
    return res.status(201).json(newProduct_sales);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
