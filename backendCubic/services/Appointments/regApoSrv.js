import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regApo = async (
  service_id,
  consumer_id,
  value,
  text,
  execution_date,
  end_date,
  state_id
) => {
  //verificação de campos
  if (
    !service_id ||
    !consumer_id ||
    !value ||
    !text ||
    !execution_date ||
    !end_date ||
    !state_id
  ) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const newRegister = await prisma.appointments.create({
    data: {
      service_id: service_id,
      consumer_id: consumer_id,
      value: parseFloat(value),
      text: text,
      execution_date: new Date(execution_date),
      end_date: new Date(end_date),
      state_id: state_id,
    },
  });
  return newRegister;
};
