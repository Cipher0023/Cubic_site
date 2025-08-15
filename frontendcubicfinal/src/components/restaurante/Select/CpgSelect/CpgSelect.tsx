"use client";

import React, { useEffect } from "react";
import Select, { SelectItem } from "@/components/Select/Select";
import useCpgStore from "@/store/useCpgStore";

interface CpgSelectProps {
  /** ID inicial selecionado */
  defaultValue?: string;
  /** Função chamada ao selecionar outra categoria */
  onChange: (id: string) => void;
  /** Classes CSS adicionais para o <select> */
  className?: string;
}

export function CpgSelect({
  defaultValue,
  onChange,
  className = "select select-primary w-full max-w-xs",
}: CpgSelectProps) {
  // Pega lista de categorias do store
  const categories = useCpgStore((state) => state.list);
  const fetchcampaigns = useCpgStore((state) => state.fetchCampaigns);

  // Garante que as categorias sejam carregadas ao montar
  useEffect(() => {
    fetchcampaigns();
  }, [fetchcampaigns]);

  // Converte Cpg[] em SelectItem[] para o component genérico
  const items: SelectItem[] = categories.map((cat) => ({
    id: cat.campaign_id,
    label: cat.name,
  }));

  return (
    <Select
      items={items}
      defaultValue={defaultValue}
      onChange={onChange}
      className={className}
    />
  );
}

export default CpgSelect;
