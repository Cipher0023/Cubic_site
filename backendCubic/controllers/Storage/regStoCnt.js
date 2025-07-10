import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { regSto } from "../../services/Storage/regStoSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const regStoCnt = async (req, res) => {
  try {
    const { product_id, added_by, location, quantity, expire_date } = req.body;
    // Enviando dados para o service
    const newStorage = await regSto(
      product_id,
      added_by,
      location,
      quantity,
      expire_date
    );
    console.log(newStorage);
    return res.status(201).json(newStorage);
  } catch (err) {
    console.error("Erro ao registrar:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
