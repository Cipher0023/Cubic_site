import prisma from "../../prisma/primaClient.js";

export const delPmt = async (payment_method_id) => {
  try {
    const existing = await prisma.payment_method.findUnique({
      where: { payment_method_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.payment_method.delete({
      where: { payment_method_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
