import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndExm = async (example_id) => {
  return await prisma.example.findUnique({
    where: { example_id },
  });
};
