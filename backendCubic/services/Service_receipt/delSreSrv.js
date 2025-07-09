import prisma from "../../prisma/primaClient.js";

export const delSre = async (appointment_receipt_id) => {
  try {
    await prisma.service_receipt.delete({
      where: { appointment_receipt_id },
    });
    return {
      success: true,
      message: "Appointment_receipt Deletado com sucesso.",
    };
  } catch (error) {
    console.error("Erro ao deletar Appointment_receipt", error.message);
    return { success: false, message: "Erro ao deletar Appointment_receipt" };
  }
};
