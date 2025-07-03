import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();
export const updCpg = async (campaign_id, updateData) => {
  try {
    const allowedFields = [
      "added_by",
      "name",
      "start_date",
      "end_date",
      "action",
      "description",
    ];

    const updateFields = {};

    for (const field of allowedFields) {
      const value = updateData[field];

      if (value !== undefined && value !== "") {
        // Se o campo for de data, converte para Date
        if (field === "start_date" || field === "end_date") {
          const date = new Date(value);
          if (isNaN(date)) throw new Error(`Data inválida em ${field}`);
          updateFields[field] = date;
        } else {
          updateFields[field] = value;
        }
      }
    }

    if (Object.keys(updateFields).length === 0) {
      throw new Error("Nenhum dado válido para atualizar");
    }

    const update = await prisma.campaign.update({
      where: { campaign_id },
      data: updateFields,
    });

    return {
      message: "Atualizado com sucesso",
      newData: update,
    };
  } catch (err) {
    console.error("Erro no serviço de update", err);
    throw err;
  }
};
