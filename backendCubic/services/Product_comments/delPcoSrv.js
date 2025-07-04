import prisma from "../../prisma/primaClient.js";

export const delPco = async (product_comments_id) => {
  try {
    await prisma.product_comments.delete({
      where: { product_comments_id },
    });
    return { success: true, message: "Product_comments Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Product_comments", error.message);
    return { success: false, message: "Erro ao deletar Product_comments" };
  }
};
