import prisma from "../../prisma/primaClient.js";

export const lstUsr = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
