"use client";

import React, { useEffect } from "react";
import Select, { SelectItem } from "@/components/Select/Select";
import usePrcStore from "@/store/usePrcStore";

interface PrcSelectProps {
  /** ID inicial selecionado */
  defaultValue?: string;
  /** Função chamada ao selecionar outra categoria */
  onChange: (id: string) => void;
  /** Classes CSS adicionais para o <select> */
  className?: string;
}

export function PrcSelect({
  defaultValue,
  onChange,
  className = "select select-primary w-full max-w-xs",
}: PrcSelectProps) {
  // Pega lista de categorias do store
  const categories = usePrcStore((state) => state.list);
  const fetchCategories = usePrcStore((state) => state.fetchCategories);

  // Garante que as categorias sejam carregadas ao montar
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Converte Prc[] em SelectItem[] para o component genérico
  const items: SelectItem[] = categories.map((cat) => ({
    id: cat.product_category_id,
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

export default PrcSelect;
