import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regSho } from "../../services/Shopping_cart/regShoSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regShoCnt = async (req, res) => {
  try {
    const { consumer_id, purchased } = req.body;
    // Enviando dados para o service
    const newShopping_cart = await regSho(consumer_id, purchased);
    console.log(newShopping_cart);
    return res.status(201).json(newShopping_cart);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
