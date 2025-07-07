import prisma from "../../prisma/primaClient.js";

export const fndPvd = async (product_viewed_id) => {
  return await prisma.product_viewed.findUnique({
    where: { product_viewed_id },
  });
};
