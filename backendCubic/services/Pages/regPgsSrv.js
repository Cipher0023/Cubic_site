import prisma from "../../prisma/primaClient.js";

export const regPgs = async (name, dev_id, description) => {
  const existing = await prisma.pages.findFirst({
    where: {
      name: name,
    },
  });
  if (existing) {
    throw new Error("Página já cadastrada");
  }
  // Criando novo registro de página
  const newRecord = await prisma.pages.create({
    data: {
      name: name,
      dev_id: dev_id,
      description: description,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro de página");
  }
  return newRecord;
};
