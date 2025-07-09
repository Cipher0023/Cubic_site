import prisma from "../../prisma/primaClient.js";

export const fndPre = async (product_receipt_id) => {
  return await prisma.product_receipt.findUnique({
    where: { product_receipt_id },
  });
};
