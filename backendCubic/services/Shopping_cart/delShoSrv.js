import prisma from "../../prisma/primaClient.js";

export const delSho = async (shopping_cart_id) => {
  try {
    await prisma.shopping_cart.delete({
      where: { shopping_cart_id },
    });
    return { success: true, message: "Shopping_cart Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Shopping_cart", error.message);
    return { success: false, message: "Erro ao deletar Shopping_cart" };
  }
};
