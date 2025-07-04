import prisma from "../../prisma/primaClient.js";

export const lstPmt = async () => {
  try {
    const result = await prisma.payment_method.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
