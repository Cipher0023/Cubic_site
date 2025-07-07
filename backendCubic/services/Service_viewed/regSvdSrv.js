import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regSvd = async (breadcrum_id, service_id) => {
  //verificação de campos
  if (!breadcrum_id || !service_id) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const newRegister = await prisma.service_viewed.create({
    data: {
      breadcrum_id: breadcrum_id,
      service_id: service_id,
    },
  });
  return newRegister;
};
