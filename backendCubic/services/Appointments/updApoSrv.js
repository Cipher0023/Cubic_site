import prisma from "../../prisma/primaClient.js";

export const updApo = async (appointment_id, updateData) => {
  try {
    //não se esqueça de trocar os allowed fields de acordo com o schema.
    const allowedFields = [
      "service_id",
      "consumer_id",
      "value",
      "text",
      "execution_date",
      "end_date",
      "state_id",
    ];
    const updateFields = {};
    // popula updateFields com a updateData colocando o tipo certo de variável
    for (const field of allowedFields) {
      const value = updateData[field];
      switch (field) {
        case "value":
          const floatVal = parseFloat(value);
          if (isNaN(floatVal))
            throw new Error(`Campo "&{field}" deve ser um número float valido`);
          updateFields[field] = floatVal;
          break;
        case "execution_date":
        case "end_date":
          const dateVal = new Date(value);
          if (isNaN(dateVal))
            throw new Error(`Campo "&{field}" deve ser uma data valida`);
          updateFields[field] = dateVal;
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
    const update = await prisma.appointments.update({
      where: { appointment_id },
      data: updateFields,
    });
    return {
      message: "Atualizado com sucesso",
      newData: update,
    };
  } catch (err) {
    console.error("Erro ao atualizar Example", err);
    throw err;
  }
};
