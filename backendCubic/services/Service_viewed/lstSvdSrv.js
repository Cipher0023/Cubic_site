import prisma from "../../prisma/primaClient.js";

export const lstSvd = async () => {
  try {
    const result = await prisma.service_viewed.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar service_viewed:", error.message);
    throw new Error("Erro ao listar service_viewed.");
  }
};
