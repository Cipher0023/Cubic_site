import prisma from "../../prisma/primaClient.js";

export const delSvd = async (service_viewed_id) => {
  try {
    await prisma.service_viewed.delete({
      where: { service_viewed_id },
    });
    return { success: true, message: "Example Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar Example", error.message);
    return { success: false, message: "Erro ao deletar Example" };
  }
};
