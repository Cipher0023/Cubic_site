import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regPsa = async (
  product_id,
  consumer_id,
  price,
  receipt_id,
  payment_method_id,
  wishlist_id
) => {
  //verificação de campos
  if (
    !product_id ||
    !consumer_id ||
    !price ||
    !receipt_id ||
    !payment_method_id ||
    !wishlist_id
  ) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const newRegister = await prisma.product_sales.create({
    data: {
      product_id: product_id,
      consumer_id: consumer_id,
      price: parseFloat(price),
      receipt_id: receipt_id,
      payment_method_id: payment_method_id,
      wishlist_id: wishlist_id,
    },
  });
  return newRegister;
};
