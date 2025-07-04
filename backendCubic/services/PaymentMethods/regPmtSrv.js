import prisma from "../../prisma/primaClient.js";

export const regPmt = async (name, dev_id, description) => {
  const existing = await prisma.payment_method.findFirst({
    where: {
      name: name,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }
  const validator = findDev(updateData.dev_id);
  if (!validator) {
    throw new Error("Dev_id inválido ou não encontrado");
  }
  // Criando novo registro
  const newRecord = await prisma.payment_method.create({
    data: {
      name: name,
      dev_id: dev_id,
      description: description,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar");
  }
  return newRecord;
};
