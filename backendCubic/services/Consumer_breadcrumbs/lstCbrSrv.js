import prisma from "../../prisma/primaClient.js";

export const lstCbr = async () => {
  try {
    const result = await prisma.consumer_breadcrums.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar consumer_breadcrumbs:", error.message);
    throw new Error("Erro ao listar consumer_breadcrumbs.");
  }
};
