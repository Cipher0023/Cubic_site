import bcrypt from "bcrypt"; // For password hashing
import prisma from "../../prisma/primaClient.js";

export const updateDeveloper = async (dev_id, updateData) => {
  try {
    const allowedFields = ["name", "email", "telephone", "password"];
    const updateFields = {};
    //faz um loop nos campos permitidos e verifica quais foram enviados
    for (const field of allowedFields) {
      if (updateData[field] !== undefined && updateData[field] !== "") {
        updateFields[field] = updateData[field];
      }
    }
    //se atualizar a senha, esta parte faz o hash da senha
    if (updateFields.password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(updateFields.password, salt);
    }
    //verifica se ao menos um campo válido foi enviado para update
    if (Object.keys(updateFields).length === 0) {
      throw new Error("nenhum dado para atualizar");
    }
    // Atualiza o desenvolvedor com os campos permitidos
    const updatedDeveloper = await prisma.developer.update({
      where: { dev_id },
      data: updateFields,
    });
    // Retorna o desenvolvedor atualizado
    return {
      message: "Desenvolvedor atualizado com sucesso",
      developer: updatedDeveloper,
    };
  } catch (err) {
    console.error("Erro no serviço de update", err);
    throw err;
  }
};
