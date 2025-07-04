import prisma from "../../prisma/primaClient.js";

export const lstSvc = async () => {
  try {
    const result = await prisma.service_categories.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar:", error.message);
    throw new Error("Erro ao listar.");
  }
};
