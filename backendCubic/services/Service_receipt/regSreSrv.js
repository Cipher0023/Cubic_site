import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regSre = async (
  appointment_id,
  consumer_id,
  total_value,
  payment_method_id
) => {
  //verificação de campos
  if (!appointment_id || !consumer_id || !total_value || !payment_method_id) {
    throw new Error("Sreencha todos os campos obrigatórios");
  }
  //verificação se registro já existe
  const existing = await prisma.service_receipt.findFirst({
    where: {
      appointment_id: appointment_id,
    },
  });
  if (existing) {
    throw new Error("appointment_id já existe");
  }
  const newRegister = await prisma.service_receipt.create({
    data: {
      appointment_id: appointment_id,
      consumer_id: consumer_id,
      total_value: parseFloat(total_value),
      payment_method_id: payment_method_id,
    },
  });
  return newRegister;
};
