import prisma from "../../prisma/primaClient.js";

export const regRol = async (
  name,
  dev_id,
  permissions,
  description,
  base_salary
) => {
  const existing = await prisma.role.findFirst({
    where: {
      name: name,
    },
  });
  if (existing) {
    throw new Error("Já cadastrado");
  }

  const parsedSalary = parseFloat(base_salary);
  if (
    isNaN(parsedSalary) ||
    !Number.isFinite(parsedSalary) ||
    parsedSalary < 0
  ) {
    throw new Error("Valor de salário base inválido");
  }

  // Criando novo registro
  const newRecord = await prisma.role.create({
    data: {
      name: name,
      dev_id: dev_id,
      permissions: permissions,
      description: description,
      base_salary: parsedSalary,
    },
  });
  if (!newRecord) {
    throw new Error("Erro ao criar registro");
  }
  return newRecord;
};
