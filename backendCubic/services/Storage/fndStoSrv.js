import prisma from "../../prisma/primaClient.js";

export const fndSto = async (storage_id) => {
  return await prisma.storage.findUnique({
    where: { storage_id },
  });
};
