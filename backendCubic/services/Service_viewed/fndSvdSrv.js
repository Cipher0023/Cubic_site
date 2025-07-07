import prisma from "../../prisma/primaClient.js";

export const fndSvd = async (service_viewed_id) => {
  return await prisma.service_viewed.findUnique({
    where: { service_viewed_id },
  });
};
