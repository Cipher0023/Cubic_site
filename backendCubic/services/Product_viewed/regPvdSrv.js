import prisma from "../../prisma/primaClient.js";

//product padrão da Cubic para registros em tabelas

export const regPvd = async (breadcrum_id, product_id) => {
  //verificação de campos
  if (!breadcrum_id || !product_id) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const newRegister = await prisma.product_viewed.create({
    data: {
      breadcrum_id: breadcrum_id,
      product_id: product_id,
    },
  });
  return newRegister;
};
