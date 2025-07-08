import prisma from "../../prisma/primaClient.js";

export const lstSho = async () => {
  try {
    const result = await prisma.shopping_cart.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar shopping_cart:", error.message);
    throw new Error("Erro ao listar shopping_cart.");
  }
};
