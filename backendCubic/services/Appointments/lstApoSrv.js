import prisma from "../../prisma/primaClient.js";

export const lstApo = async () => {
  try {
    const result = await prisma.appointments.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar appointments:", error.message);
    throw new Error("Erro ao listar appointments.");
  }
};
