import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

export const fndPst = async (post_id) => {
  return await prisma.post.findUnique({
    where: { post_id },
  });
};
