import prisma from "../../prisma/primaClient.js";

export const regPht = async (source, added_by, description) => {
  const existing = await prisma.photos.findFirst({
    where: {
      source: source,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }
  // Criando novo registro
  const newRecord = await prisma.photos.create({
    data: {
      source: source,
      added_by: added_by,
      description: description,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
