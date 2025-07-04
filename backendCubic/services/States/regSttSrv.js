import prisma from "../../prisma/primaClient.js";

export const regStt = async (name, dev_id) => {
  const existing = await prisma.states.findFirst({
    where: {
      name: name,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }
  // Criando novo registro
  const newRecord = await prisma.states.create({
    data: {
      name: name,
      dev_id: dev_id,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
