import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regPre = async (
  shopping_cart_id,
  consumer_id,
  total_value,
  payment_method_id
) => {
  //verificação de campos
  if (!shopping_cart_id || !consumer_id || !total_value || !payment_method_id) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  //verificação se registro já existe
  const existing = await prisma.product_receipt.findFirst({
    where: {
      shopping_cart_id: shopping_cart_id,
    },
  });
  if (existing) {
    throw new Error("shopping_cart_id já existe");
  }
  const newRegister = await prisma.product_receipt.create({
    data: {
      shopping_cart_id: shopping_cart_id,
      consumer_id: consumer_id,
      total_value: parseFloat(total_value),
      payment_method_id: payment_method_id,
    },
  });
  return newRegister;
};
