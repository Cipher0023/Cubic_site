import prisma from "../../prisma/primaClient.js";

export const fndStt = async (state_id) => {
  return await prisma.states.findUnique({
    where: { state_id },
  });
};
