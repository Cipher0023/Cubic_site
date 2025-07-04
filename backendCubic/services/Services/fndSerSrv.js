import prisma from "../../prisma/primaClient.js";

export const fndSer = async (service_id) => {
  return await prisma.services.findUnique({
    where: { service_id },
  });
};
