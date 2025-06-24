import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const updSvc = async (service_category_id, updateData) => {
  try {
    const allowedFields = ["name", "added_by", "description"];
    const updateFields = {};
    //faz um loop nos campos permitidos e verifica quais foram enviados
    for (const field of allowedFields) {
      if (updateData[field] !== undefined && updateData[field] !== "") {
        updateFields[field] = updateData[field];
      }
    }
    //verifica se ao menos um campo válido foi enviado para update
    if (Object.keys(updateFields).length === 0) {
      throw new Error("nenhum dado para atualizar");
    }
    // Atualiza com os campos permitidos
    const update = await prisma.service_categories.update({
      where: { service_category_id },
      data: updateFields,
    });
    // Retorna valor atualizado
    return {
      message: "Atualizado com sucesso",
      newData: update,
    };
  } catch (err) {
    console.error("Erro no serviço de update", err);
    throw err;
  }
};
