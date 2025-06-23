import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const regPmt = async (name, dev_id, description) => {
  const existing = await prisma.pages.findFirst({
    where: {
      name: name,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }
  // Criando novo registro de página
  const newRecord = await prisma.payment_method.create({
    data: {
      name: name,
      dev_id: dev_id,
      description: description,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro de página");
  }
  return newRecord;
};
