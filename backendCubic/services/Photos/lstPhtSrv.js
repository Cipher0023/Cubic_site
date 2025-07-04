import prisma from "../../prisma/primaClient.js";

export const lstPht = async () => {
  try {
    const result = await prisma.photos.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
