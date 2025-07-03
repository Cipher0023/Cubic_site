import bcrypt from "bcrypt"; // For password hashing
import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { fndCsm } from "../Consumer/fndCsmSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const updCsm = async (example_id, updateData) => {
  try {
    const allowedFields = [
      "name",
      "added_by",
      "category", // ObjectId string
      "price",
      "campaign_id", // ObjectId string
      "call_to_action",
      "description", // NOVO CAMPO OBRIGATÓRIO
      "main_photo_id", // ObjectId string
      "photos_ids", // Agora no PLURAL (array de strings)
      "views",
      "selling_numbers",
      "product_score",
      "quantity",
    ];
    const updateFields = {};

    // popula updateFields com a updateData
    for (const field of allowedFields) {
      const value = updateData[field];
      if (value !== undefined && value !== "") {
        // Se o campo for de price , converte para float
        if (field === "price") {
          const priceFlt = parseFloat(value);
          if (isNaN(priceFlt)) throw new Error(`Data inválida em ${field}`);
          updateFields[field] = priceFlt;
        } else {
          updateFields[field] = value;
        }
        if (field === "views") {
          const priceFlt = parseFloat(value);
          if (isNaN(priceFlt)) throw new Error(`Data inválida em ${field}`);
          updateFields[field] = priceFlt;
        } else {
          updateFields[field] = value;
        }
      }
    }

    // verifica se pelo menos um dado vai ser atualizado
    if (Object.keys(updateFields).length === 0) {
      throw new Error("Nenhum dado para atualizar");
    }
    // realiza o update tendo como base no updateFields
    const update = await prisma.example.update({
      where: { example_id },
      data: updateFields,
    });
    return {
      message: "Atualizado com sucesso",
      newData: update,
    };
  } catch (err) {
    console.error("Erro ao atualizar Exemplo", err);
    throw err;
  }
};
