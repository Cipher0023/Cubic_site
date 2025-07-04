import prisma from "../../prisma/primaClient.js";

export const delSco = async (service_comment_id) => {
  try {
    await prisma.service_comments.delete({
      where: { service_comment_id },
    });
    return { success: true, message: "Service_comment Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Service_comment", error.message);
    return { success: false, message: "Erro ao deletar Service_comment" };
  }
};
