import prisma from "../../prisma/primaClient.js";

export const fndSre = async (appointment_receipt_id) => {
  return await prisma.service_receipt.findUnique({
    where: { appointment_receipt_id },
  });
};
