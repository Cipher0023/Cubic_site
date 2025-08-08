import prisma from "../../prisma/prismaClient.js";

export const delApo = async (appointment_id) => {
  try {
    await prisma.appointments.delete({
      where: { appointment_id },
    });
    return { success: true, message: "Appointment Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Appointment", error.message);
    return { success: false, message: "Erro ao deletar Appointment" };
  }
};
