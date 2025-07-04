import prisma from "../../prisma/primaClient.js";

export const delPrd = async (product_id) => {
  try {
    await prisma.products.delete({
      where: { product_id },
    });
    return { success: true, message: "Product Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Product", error.message);
    return { success: false, message: "Erro ao deletar Product" };
  }
};
