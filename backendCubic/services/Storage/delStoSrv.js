import prisma from "../../prisma/primaClient.js";

export const delSto = async (storage_id) => {
  try {
    await prisma.storage.delete({
      where: { storage_id },
    });
    return { success: true, message: "Storage Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Storage", error.message);
    return { success: false, message: "Erro ao deletar Storage" };
  }
};
