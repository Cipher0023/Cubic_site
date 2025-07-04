import prisma from "../../prisma/primaClient.js";
//service padrão da Cubic para registros em tabelas

export const regWsh = async (consumer_id, product_id, excluded) => {
  //verificação de campos
  if (!consumer_id || !product_id || !excluded) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  //conversor de boolean
  function booleanConverter(value) {
    if (value == "true") return true;
    if (value == "false") return false;
    else {
      throw new Error("campo contem um valor inválido para boolean");
    }
  }
  //transformando em boolean
  const boolean = booleanConverter(excluded);
  //verificação se registro já existe
  const existing = await prisma.wishlist.findFirst({
    where: {
      product_id: product_id,
    },
  });
  if (existing) {
    throw new Error("produto já na wishlist");
  }
  const newRegister = await prisma.wishlist.create({
    data: {
      consumer_id: consumer_id,
      product_id: product_id,
      excluded: boolean,
    },
  });
  return newRegister;
};
