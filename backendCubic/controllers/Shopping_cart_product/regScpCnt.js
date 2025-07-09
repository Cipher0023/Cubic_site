import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regScp } from "../../services/Shopping_cart_product/regScpSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regScpCnt = async (req, res) => {
  try {
    const { shopping_cart_id, product_id, quantity } = req.body;
    // Enviando dados para o service
    const newShopping_cart_product = await regScp(
      shopping_cart_id,
      product_id,
      quantity
    );
    console.log(newShopping_cart_product);
    return res.status(201).json(newShopping_cart_product);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
