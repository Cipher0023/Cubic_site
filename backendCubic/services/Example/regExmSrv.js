import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

//service padrão da Cubic para registros em tabelas

export const regExm = async (
  key,
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  dataLink
) => {
  //verificação de campos
  if (
    !key ||
    !data1 ||
    !data2 ||
    !data3 ||
    !data4 ||
    !data5 ||
    !data6 ||
    !dataLink
  ) {
    throw new Error("Preencha todos os campos obrigatórios");
  }
  //verificação se registro já existe
  const existing = await prisma.example.findUnique({
    where: {
      key: key,
    },
  });
  if (existing) {
    throw new Error("key já existe");
  }
  const newRegister = await prisma.example.create({
    data: {
      Key: key,
      data1: data1,
      data2: data2,
      data3: data3,
      data4: data4,
      data5: data5,
      data6: data6,
      dataLink: dataLink,
    },
  });
  return newRegister;
};
