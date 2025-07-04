import prisma from "../../prisma/primaClient.js";

//service padrão da Cubic para registros em tabelas

export const regSco = async (
  consumer_id,
  service_id,
  title,
  text,
  score,
  has_brought
) => {
  //verificação de campos
  if (
    !consumer_id ||
    !service_id ||
    !title ||
    !text ||
    !score ||
    !has_brought
  ) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  //função para gerar boolean a partir de sring
  function booleanConverter(value) {
    if (value == "true") return true;
    if (value == "false") return false;
    else {
      throw new Error("campo contem um valor inválido para boolean");
    }
  }
  //transformando has_brought em boolean
  const brought = booleanConverter(has_brought);
  //registro
  const newRegister = await prisma.service_comments.create({
    data: {
      consumer_id: consumer_id,
      service_id: service_id,
      title: title,
      text: text,
      score: parseInt(score),
      has_brought: brought,
    },
  });
  return newRegister;
};
