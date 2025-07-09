import prisma from "../../prisma/primaClient.js";

export const lstSre = async () => {
  try {
    const result = await prisma.service_receipt.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao listar appointment_receipt:", error.message);
    throw new Error("Erro ao listar appointment_receipt.");
  }
};
