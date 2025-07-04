import prisma from "../../prisma/primaClient.js";

export const lstPgs = async () => {
  try {
    const result = await prisma.pages.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
