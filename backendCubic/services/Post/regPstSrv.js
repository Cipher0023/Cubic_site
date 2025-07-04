import prisma from "../../prisma/primaClient.js";

export const regPst = async (title, added_by, text) => {
  const existing = await prisma.post.findFirst({
    where: {
      title: title,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }
  // Criando novo registro
  const newRecord = await prisma.post.create({
    data: {
      title: title,
      added_by: added_by,
      text: text,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
