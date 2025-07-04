import prisma from "../../prisma/primaClient.js";

export const fndSco = async (service_comment_id) => {
  return await prisma.service_comments.findUnique({
    where: { service_comment_id },
  });
};
