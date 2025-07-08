import prisma from "../../prisma/primaClient.js";

export const fndApo = async (appointment_id) => {
  return await prisma.appointments.findUnique({
    where: { appointment_id },
  });
};
