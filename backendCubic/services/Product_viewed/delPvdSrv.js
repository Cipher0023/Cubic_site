import prisma from "../../prisma/primaClient.js";

export const delPvd = async (product_viewed_id) => {
  try {
    await prisma.product_viewed.delete({
      where: { product_viewed_id },
    });
    return { success: true, message: "Example Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Example", error.message);
    return { success: false, message: "Erro ao deletar Example" };
  }
};
