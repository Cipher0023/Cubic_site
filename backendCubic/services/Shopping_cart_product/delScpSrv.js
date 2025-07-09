import prisma from "../../prisma/primaClient.js";

export const delScp = async (shopping_cart_product_id) => {
  try {
    await prisma.shopping_cart_product.delete({
      where: { shopping_cart_product_id },
    });
    return {
      success: true,
      message: "Shopping_cart_product Deletado com sucesso.",
    };
  } catch (error) {
    console.error("Erro ao deletar Shopping_cart_product", error.message);
    return { success: false, message: "Erro ao deletar Shopping_cart_product" };
  }
};
