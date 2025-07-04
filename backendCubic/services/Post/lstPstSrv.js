import prisma from "../../prisma/primaClient.js";

export const lstPst = async () => {
  try {
    const result = await prisma.post.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
