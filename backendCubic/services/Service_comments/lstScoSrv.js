import prisma from "../../prisma/primaClient.js";

export const lstSco = async () => {
  try {
    const result = await prisma.service_comments.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar service_comment:", error.message);
    throw new Error("Erro ao listar service_comment.");
  }
};
