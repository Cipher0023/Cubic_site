import prisma from "../../prisma/primaClient.js";

export const updSho = async (shopping_cart_id, updateData) => {
  try {
    //não se esqueça de trocar os allowed fields de acordo com o schema.
    const allowedFields = ["consumer_id", "purchased"];
    const updateFields = {};
    //conversor de boolean
    function booleanConverter(value) {
      if (value == "true") return true;
      if (value == "false") return false;
      else {
        throw new Error("campo contem um valor inválido para boolean");
      }
    }
    // popula updateFields com a updateData colocando o tipo certo de variável
    for (const field of allowedFields) {
      const value = updateData[field];
      switch (field) {
        case "purchased":
          const bolVal = booleanConverter(value);
          updateFields[field] = bolVal;
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
    const update = await prisma.shopping_cart.update({
      where: { shopping_cart_id },
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
