import prisma from "../../prisma/primaClient.js";

export const lstSto = async () => {
  try {
    const result = await prisma.storage.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar storage:", error.message);
    throw new Error("Erro ao listar storage.");
  }
};
