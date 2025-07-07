import prisma from "../../prisma/primaClient.js";

export const updCbr = async (breadcrumb_id, updateData) => {
  try {
    //não se esqueça de trocar os allowed fields de acordo com o schema.
    const allowedFields = ["consumer_id", "page_id", "time_spent"];
    const updateFields = {};
    // popula updateFields com a updateData colocando o tipo certo de variável
    for (const field of allowedFields) {
      const value = updateData[field];
      switch (field) {
        case "time_spent":
          const floatVal = parseFloat(value);
          if (isNaN(floatVal))
            throw new Error(`Campo "&{field}" deve ser um número float valido`);
          updateFields[field] = floatVal;
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
    const update = await prisma.consumer_breadcrums.update({
      where: { breadcrumb_id },
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
