import prisma from "../../prisma/primaClient.js";

export const lstScp = async () => {
  try {
    const result = await prisma.shopping_cart_product.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar shopping_cart_product:", error.message);
    throw new Error("Erro ao listar shopping_cart_product.");
  }
};
