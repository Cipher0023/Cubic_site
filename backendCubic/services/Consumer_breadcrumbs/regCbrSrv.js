import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regCbr = async (consumer_id, page_id, time_spent) => {
  //verificação de campos
  if (!consumer_id || !page_id || !time_spent) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const newRegister = await prisma.consumer_breadcrums.create({
    data: {
      consumer_id: consumer_id,
      page_id: page_id,
      time_spent: parseFloat(time_spent),
    },
  });
  return newRegister;
};
