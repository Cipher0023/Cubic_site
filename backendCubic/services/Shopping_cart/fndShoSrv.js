import prisma from "../../prisma/primaClient.js";

export const fndSho = async (shopping_cart_id) => {
  return await prisma.shopping_cart.findUnique({
    where: { shopping_cart_id },
  });
};
