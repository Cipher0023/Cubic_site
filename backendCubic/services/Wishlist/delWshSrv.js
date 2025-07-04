import prisma from "../../prisma/primaClient.js";

export const delWsh = async (wishlist_id) => {
  try {
    await prisma.wishlist.delete({
      where: { wishlist_id },
    });
    return { success: true, message: "Wishlist Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Wishlist", error.message);
    return { success: false, message: "Erro ao deletar Wishlist" };
  }
};
