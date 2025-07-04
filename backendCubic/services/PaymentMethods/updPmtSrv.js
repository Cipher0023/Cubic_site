import prisma from "../../prisma/primaClient.js";

export const updPmt = async (payment_method_id, updateData) => {
  try {
    const allowedFields = ["name", "dev_id", "description"];
    const validator = findDev(updateData.dev_id);
    if (!validator) {
      throw new Error("Dev_id inválido ou não encontrado");
    }
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
    const update = await prisma.payment_method.update({
      where: { payment_method_id },
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
