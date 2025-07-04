import prisma from "../../prisma/primaClient.js";

export const fndPco = async (product_comments_id) => {
  return await prisma.product_comments.findUnique({
    where: { product_comments_id },
  });
};
