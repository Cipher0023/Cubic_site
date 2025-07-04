import prisma from "../../prisma/primaClient.js";

export const delCpg = async (campaign_id) => {
  try {
    const existing = await prisma.campaign.findUnique({
      where: { campaign_id },
    });
    if (!existing) {
      throw new Error("Não encontrado");
    }
    await prisma.campaign.delete({
      where: { campaign_id },
    });
    return { success: true, message: "Deletado com sucesso." };
  } catch (error) {
    console.error("Erro ao deletar", error.message);
    return { success: false, message: "Erro ao deletar" };
  }
};
