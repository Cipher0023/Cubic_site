import prisma from "../../prisma/primaClient.js";

export const updSer = async (service_id, updateData) => {
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
      "service_score",
      "time_to_completion",
    ];
    const updateFields = {};
    // popula updateFields com a updateData
    for (const field of allowedFields) {
      const value = updateData[field];
      switch (field) {
        case "price":
        case "service_score":
        case "time_to_completion":
          const floatVal = parseFloat(value);
          if (isNaN(floatVal))
            throw new Error(`Campo "&{field}" deve ser um número valido`);
          updateFields[field] = floatVal;
          break;
        case "views":
        case "selling_numbers":
          const intVal = parseInt(value);
          if (isNaN(intVal))
            throw new Error(`Campo "&{field}" deve ser um número valido`);
          updateFields[field] = intVal;
          break;
        default:
          updateFields[field] = value;
          break;
      }
    }
    // verifica se pelo menos um dado vai ser atualizado
    if (Object.keys(updateFields).length === 0) {
      throw new Error("Nenhum dado para atualizar");
    }
    // realiza o update tendo como base no updateFields
    const update = await prisma.services.update({
      where: { service_id },
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
