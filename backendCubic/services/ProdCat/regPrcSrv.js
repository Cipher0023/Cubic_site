import prisma from "../../prisma/primaClient.js";

export const regPrc = async (name, added_by, description) => {
  const existing = await prisma.product_categories.findFirst({
    where: {
      name: name,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }
  // Criando novo registro
  const newRecord = await prisma.product_categories.create({
    data: {
      name: name,
      added_by: added_by,
      description: description,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
