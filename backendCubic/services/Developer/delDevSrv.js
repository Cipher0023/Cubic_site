import prisma from "../../prisma/primaClient.js";

export const delDev = async (dev_id) => {
  try {
    const existing = await prisma.developer.findUnique({
      where: { dev_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.developer.delete({
      where: { dev_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
