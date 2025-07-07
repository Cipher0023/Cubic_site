import prisma from "../../prisma/primaClient.js";

export const fndCbr = async (breadcrumb_id) => {
  return await prisma.consumer_breadcrums.findUnique({
    where: { breadcrumb_id },
  });
};
