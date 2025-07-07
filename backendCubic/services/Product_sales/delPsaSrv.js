import prisma from "../../prisma/primaClient.js";

export const delPsa = async (product_sales_id) => {
  try {
    await prisma.product_sales.delete({
      where: { product_sales_id },
    });
    return { success: true, message: "Product_sales Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Product_sales", error.message);
    return { success: false, message: "Erro ao deletar Product_sales" };
  }
};
