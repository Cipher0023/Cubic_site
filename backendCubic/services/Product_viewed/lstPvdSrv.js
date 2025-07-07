import prisma from "../../prisma/primaClient.js";

export const lstPvd = async () => {
  try {
    const result = await prisma.product_viewed.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar product_viewed:", error.message);
    throw new Error("Erro ao listar product_viewed.");
  }
};
