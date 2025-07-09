import prisma from "../../prisma/primaClient.js";

export const updScp = async (shopping_cart_product_id, updateData) => {
  try {
    //não se esqueça de trocar os allowed fields de acordo com o schema.
    const allowedFields = ["shopping_cart_id", "product_id", "quantity"];
    const updateFields = {};
    // popula updateFields com a updateData colocando o tipo certo de variável
    for (const field of allowedFields) {
      const value = updateData[field];
      switch (field) {
        case "quantity":
          const intVal = parseInt(value);
          if (isNaN(intVal))
            throw new Error(`Campo "&{field}" deve ser um número int valido`);
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
    const update = await prisma.shopping_cart_product.update({
      where: { shopping_cart_product_id },
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
