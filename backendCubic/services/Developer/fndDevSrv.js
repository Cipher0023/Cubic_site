import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const findDev = async (email) => {
  if (!email) {
    throw new Error("E-mail não fornecido.");
  }

  const existingDeveloper = await prisma.developer.findUnique({
    where: { email },
  });

  return existingDeveloper;
};
