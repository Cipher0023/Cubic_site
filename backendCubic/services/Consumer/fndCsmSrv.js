import prisma from "../../prisma/primaClient.js";
export const fndCsm = async (consumer_id) => {
  return await prisma.consumer.findUnique({
    where: { consumer_id },
  });
};
