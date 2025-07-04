import prisma from "../../prisma/primaClient.js";

export const fndPst = async (post_id) => {
  return await prisma.post.findUnique({
    where: { post_id },
  });
};
