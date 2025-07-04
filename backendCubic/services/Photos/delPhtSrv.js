import prisma from "../../prisma/primaClient.js";

export const delPht = async (photo_id) => {
  try {
    const existing = await prisma.photos.findUnique({
      where: { photo_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.photos.delete({
      where: { photo_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
