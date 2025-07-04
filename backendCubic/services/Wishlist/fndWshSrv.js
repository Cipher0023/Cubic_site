import prisma from "../../prisma/primaClient.js";

export const fndWsh = async (wishlist_id) => {
  return await prisma.wishlist.findUnique({
    where: { wishlist_id },
  });
};
