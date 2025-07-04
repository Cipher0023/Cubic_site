import prisma from "../../prisma/primaClient.js";
export const fndPgs = async (page_id) => {
  return await prisma.pages.findUnique({
    where: { page_id },
  });
};
