import prisma from "../../prisma/primaClient.js";

export const lstPsa = async () => {
  try {
    const result = await prisma.product_sales.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar product_sales:", error.message);
    throw new Error("Erro ao listar product_sales.");
  }
};
