import prisma from "../../prisma/primaClient.js";

export const fndPsa = async (product_sales_id) => {
  return await prisma.product_sales.findUnique({
    where: { product_sales_id },
  });
};
