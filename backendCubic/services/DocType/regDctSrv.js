import prisma from "../../prisma/primaClient.js";

export const regDct = async (name, dev_id, description) => {
  const existingDocType = await prisma.document_type.findFirst({
    where: {
      name: name,
    },
  });
  if (existingDocType) {
    throw new Error("Tipo de documento já cadastrado");
  }
  // Create new DocType
  const newDocType = await prisma.document_type.create({
    data: {
      name: name,
      dev_id: dev_id,
      description: description,
    },
  });
  if (!newDocType) {
    throw new Error("Erro ao criar o tipo de documento");
  }
  return newDocType;
};
