import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const regCpg = async (
  added_by,
  name,
  start_date,
  end_date,
  action,
  description
) => {
  const existing = await prisma.campaign.findFirst({
    where: {
      name: name,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }
  // Criando novo registro
  const newRecord = await prisma.post.create({
    data: {
      added_by: added_by,
      name: name,
      start_date: start_date,
      end_date: end_date,
      action: action,
      description: description,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
