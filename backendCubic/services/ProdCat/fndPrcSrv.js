import prisma from "../../prisma/primaClient.js";

export const fndPrc = async (product_category_id) => {
  return await prisma.product_categories.findUnique({
    where: { product_category_id },
  });
};
