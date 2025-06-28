import bcrypt from "bcrypt"; // For password hashing
import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";
import { fndCsm } from "../Consumer/fndCsmSrv.js";

dotenv.config();
const prisma = new PrismaClient();

export const updCsm = async (consumer_id, updateData) => {
  try {
    const allowedFields = [
      "email",
      "name",
      "password",
      "telephone",
      "document_type",
      "document_number",
      "adress",
    ];
    const updateFields = {};

    // Loop through allowed fields and pick those provided
    for (const field of allowedFields) {
      if (updateData[field] !== undefined && updateData[field] !== "") {
        if (field === "document_type") {
          // map relation field
          updateFields.document = updateData[field];
        } else {
          updateFields[field] = updateData[field];
        }
      }
    }

    // Hash password if updating
    if (updateFields.password) {
      const salt = await bcrypt.genSalt(10);
      updateFields.password = await bcrypt.hash(updateFields.password, salt);
    }

    // Verify consumer exists if updating consumer_id
    if (updateFields.consumer_id) {
      const consumerExists = await fndCsm(updateFields.consumer_id);
      if (!consumerExists) {
        throw new Error("consumer não encontrado");
      }
    }

    // Verify document type exists if updating
    if (updateFields.document) {
      const docType = await prisma.document_type.findUnique({
        where: { document_type_id: updateFields.document },
        select: { document_type_id: true },
      });
      if (!docType) {
        throw new Error("Tipo de documento não encontrado");
      }
    }

    // Ensure at least one field to update
    if (Object.keys(updateFields).length === 0) {
      throw new Error("Nenhum dado para atualizar");
    }

    // Perform update
    const updatedconsumer = await prisma.consumer.update({
      where: { consumer_id },
      data: updateFields,
    });

    return {
      message: "Atualizado com sucesso",
      newData: updatedconsumer,
    };
  } catch (err) {
    console.error("Erro no serviço de update consumer", err);
    throw err;
  }
};
