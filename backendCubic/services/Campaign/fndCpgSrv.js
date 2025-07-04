import prisma from "../../prisma/primaClient.js";

export const fndCpg = async (campaign_id) => {
  return await prisma.campaign.findUnique({
    where: { campaign_id },
  });
};
