import prisma from "../../prisma/primaClient.js";
export const fndDev = async (dev_id) => {
  if (!dev_id) {
    throw new Error("id não fornecido.");
  }

  const existingDeveloper = await prisma.developer.findUnique({
    where: { dev_id },
  });

  return existingDeveloper;
};
