import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regScp = async (shopping_cart_id, product_id, quantity) => {
  //verificação de campos
  if (!shopping_cart_id || !product_id || !quantity) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const newRegister = await prisma.shopping_cart_product.create({
    data: {
      shopping_cart_id: shopping_cart_id,
      product_id: product_id,
      quantity: parseInt(quantity),
    },
  });
  return newRegister;
};
