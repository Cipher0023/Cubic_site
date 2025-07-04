import prisma from "../../prisma/primaClient.js";

export const lstPrc = async () => {
  try {
    const result = await prisma.product_categories.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
