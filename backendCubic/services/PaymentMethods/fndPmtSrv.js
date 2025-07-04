import prisma from "../../prisma/primaClient.js";

export const fndPmt = async (payment_method_id) => {
  return await prisma.payment_method.findUnique({
    where: { payment_method_id },
  });
};
