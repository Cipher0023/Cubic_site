import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndPht = async (photo_id) => {
  return await prisma.photos.findUnique({
    where: { photo_id },
  });
};
