import { PrismaClient } from "@prisma/client"; // Database ORM
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

//service padrão da Cubic para registros em tabelas

export const regPrd = async (
  name,
  added_by,
  category, // ObjectId string
  price,
  campaign_id, // ObjectId string
  call_to_action,
  description, // NOVO CAMPO OBRIGATÓRIO
  main_photo_id, // ObjectId string
  photos_ids, // Agora no PLURAL (array de strings)
  views,
  selling_numbers,
  product_score,
  quantity
) => {
  if (!name) {
    throw new Error("Preencha todos os campos obrigatórios");
  }

  const existing = await prisma.products.findUnique({
    where: { name: name },
  });

  if (existing) throw new Error("Nome já existe");

  // Criação corrigida:
  return await prisma.products.create({
    data: {
      name,
      added_by,
      category,
      price,
      campaign_id,
      call_to_action,
      description, // ✅ Campo adicionado
      main_photo_id,
      photos_ids, // ✅ Nome correto (array)
      views: parseInt(views),
      selling_numbers: parseInt(selling_numbers),
      product_score: parseFloat(product_score),
      quantity: parseInt(quantity),
    },
  });
};
