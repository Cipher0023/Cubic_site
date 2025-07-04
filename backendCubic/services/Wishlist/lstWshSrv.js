import prisma from "../../prisma/primaClient.js";

export const lstWsh = async () => {
  try {
    const result = await prisma.wishlist.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar wishlist:", error.message);
    throw new Error("Erro ao listar wishlist.");
  }
};
