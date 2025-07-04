import prisma from "../../prisma/primaClient.js";

export const fndSvc = async (service_category_id) => {
  return await prisma.service_categories.findUnique({
    where: { service_category_id },
  });
};
