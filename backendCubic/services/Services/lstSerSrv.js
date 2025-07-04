import prisma from "../../prisma/primaClient.js";

export const lstSer = async () => {
  try {
    const result = await prisma.services.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar service:", error.message);
    throw new Error("Erro ao listar service.");
  }
};
