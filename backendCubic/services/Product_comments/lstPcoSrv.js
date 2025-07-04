import prisma from "../../prisma/primaClient.js";

export const lstPco = async () => {
  try {
    const result = await prisma.product_comments.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar product_comments:", error.message);
    throw new Error("Erro ao listar product_comments.");
  }
};
