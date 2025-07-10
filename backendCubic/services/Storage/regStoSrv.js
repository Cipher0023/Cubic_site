import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regSto = async (
  product_id,
  added_by,
  location,
  quantity,
  expire_date
) => {
  //verificação de campos
  if (!product_id || !added_by || !location || !quantity || !expire_date) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  //verificação se registro já existe
  const existing = await prisma.storage.findFirst({
    where: {
      product_id: product_id,
    },
  });
  if (existing) {
    throw new Error("product_id já existe");
  }
  const newRegister = await prisma.storage.create({
    data: {
      product_id: product_id,
      added_by: added_by,
      location: location,
      quantity: parseInt(quantity),
      expire_date: new Date(expire_date),
    },
  });
  return newRegister;
};
