import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regWsh } from "../../services/Wishlist/regWshSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regWshCnt = async (req, res) => {
  try {
    const { consumer_id, product_id, excluded } = req.body;
    // Enviando dados para o service
    const newWishlist = await regWsh(consumer_id, product_id, excluded);
    console.log(newWishlist);
    return res.status(201).json(newWishlist);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
