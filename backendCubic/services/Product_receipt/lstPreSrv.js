import prisma from "../../prisma/primaClient.js";

export const lstPre = async () => {
  try {
    const result = await prisma.product_receipt.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar product_receipt:", error.message);
    throw new Error("Erro ao listar product_receipt.");
  }
};
