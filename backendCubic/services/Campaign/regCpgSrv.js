import prisma from "../../prisma/primaClient.js";
export const regCpg = async (
  added_by,
  name,
  start_date,
  end_date,
  action,
  description
) => {
  const existing = await prisma.campaign.findFirst({
    where: {
      name: name,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }
  // Criando novo registro
  const newRecord = await prisma.campaign.create({
    data: {
      added_by: added_by,
      name: name,
      start_date: new Date(start_date),
      end_date: new Date(end_date),
      action: action,
      description: description,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
