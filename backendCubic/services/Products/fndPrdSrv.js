import prisma from "../../prisma/primaClient.js";

export const fndPrd = async (product_id) => {
  return await prisma.products.findUnique({
    where: { product_id },
  });
};
