import bcrypt from "bcrypt"; // For password hashing
import prisma from "../../prisma/primaClient.js";

export const regCsm = async (
  email,
  name,
  password,
  telephone,
  document_type,
  document_number,
  adress
) => {
  console.log("Dados recebidos:", {
    name,
    email,
    telephone,
    password,
    document_type,
    document_number,
    adress,
  });

  if (
    !email ||
    !name ||
    !password ||
    !telephone ||
    !document_type ||
    !document_number ||
    !adress
  ) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  const existing = await prisma.consumer.findUnique({
    where: {
      email: email,
    },
  });
  if (existing) {
    throw new Error("Usuário já existe");
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);
  const newUser = await prisma.consumer.create({
    data: {
      email: email,
      name: name,
      password: hashpassword,
      telephone: telephone,
      document_type: {
        connect: {
          document_type_id: document_type,
        },
      },
      document_number: document_number,
      adress: adress,
    },
  });
  return newUser;
};
