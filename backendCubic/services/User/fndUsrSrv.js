import prisma from "../../prisma/primaClient.js";

export const fndUsr = async (user_id) => {
  return await prisma.user.findUnique({
    where: { user_id },
  });
};
