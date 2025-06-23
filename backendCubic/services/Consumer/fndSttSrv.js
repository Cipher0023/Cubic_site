import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndStt = async (state_id) => {
  return await prisma.states.findUnique({
    where: { state_id },
  });
};
