import prisma from "../../prisma/primaClient.js";
import { chkDev } from "../Developer/chkDevSrv.js";

export const updRol = async (role_id, updateData) => {
  try {
    const allowedFields = [
      "name",
      "dev_id",
      "permissions",
      "description",
      "base_salary",
    ];
    const updateFields = {};

    //faz um loop nos campos permitidos e verifica quais foram enviados
    for (const field of allowedFields) {
      if (updateData[field] !== undefined && updateData[field] !== "") {
        updateFields[field] = updateData[field];
      }
    }

    if ("dev_id" in updateFields) {
      const devExists = await chkDev(updateFields.dev_id);
      if (!devExists) {
        throw new Error("Desenvolvedor não encontrado");
      }
    }
    //verifica se ao menos um campo válido foi enviado para update
    if (Object.keys(updateFields).length === 0) {
      throw new Error("nenhum dado para atualizar");
    }
    // Atualiza com os campos permitidos
    const update = await prisma.role.update({
      where: { role_id },
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
