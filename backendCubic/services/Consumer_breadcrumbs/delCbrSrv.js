import prisma from "../../prisma/primaClient.js";

export const delCbr = async (breadcrumb_id) => {
  try {
    await prisma.consumer_breadcrums.delete({
      where: { breadcrumb_id },
    });
    return { success: true, message: "Example Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Example", error.message);
    return { success: false, message: "Erro ao deletar Example" };
  }
};
