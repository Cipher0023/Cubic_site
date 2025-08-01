import prisma from "../../prisma/primaClient.js";

export const updPgs = async (page_id, updateData) => {
  try {
    const allowedFields = ["name", "dev_id", "description"];
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
    const update = await prisma.pages.update({
      where: { page_id },
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
