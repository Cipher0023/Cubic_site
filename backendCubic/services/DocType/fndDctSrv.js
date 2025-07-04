import prisma from "../../prisma/primaClient.js";

export const fndDct = async (name) => {
  const existingDocType = await prisma.document_type.findUnique({
    where: { name },
  });
  if (!existingDocType) {
    throw new Error("Tipo de documento não encontrado");
  }

  return existingDocType;
};
