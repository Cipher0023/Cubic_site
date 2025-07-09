import prisma from "../../prisma/primaClient.js";

export const delPre = async (product_receipt_id) => {
  try {
    await prisma.product_receipt.delete({
      where: { product_receipt_id },
    });
    return { success: true, message: "Product_receipt Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Product_receipt", error.message);
    return { success: false, message: "Erro ao deletar Product_receipt" };
  }
};
