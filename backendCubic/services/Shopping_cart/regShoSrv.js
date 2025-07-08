import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regSho = async (consumer_id, purchased) => {
  //verificação de campos
  if (!consumer_id || !purchased) {
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
  const boolean = booleanConverter(purchased);
  const newRegister = await prisma.shopping_cart.create({
    data: {
      consumer_id: consumer_id,
      purchased: boolean,
    },
  });
  return newRegister;
};
