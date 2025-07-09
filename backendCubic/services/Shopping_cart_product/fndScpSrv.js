import prisma from "../../prisma/primaClient.js";

export const fndScp = async (shopping_cart_product_id) => {
  return await prisma.shopping_cart_product.findUnique({
    where: { shopping_cart_product_id },
  });
};
