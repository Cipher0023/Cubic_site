import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndCsm = async (consumer_id) => {
  return await prisma.consumer.findUnique({
    where: { consumer_id },
  });
};
