import prisma from "../../prisma/primaClient.js";

export const lstCsm = async () => {
  try {
    const result = await prisma.consumer.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
