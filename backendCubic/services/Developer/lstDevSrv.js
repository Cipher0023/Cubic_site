import prisma from "../../prisma/primaClient.js";

export const lstDev = async () => {
  try {
    const result = await prisma.developer.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
