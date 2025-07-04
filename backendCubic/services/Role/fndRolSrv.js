import prisma from "../../prisma/primaClient.js";

export const fndRol = async (role_id) => {
  return await prisma.role.findUnique({
    where: { role_id },
  });
};
