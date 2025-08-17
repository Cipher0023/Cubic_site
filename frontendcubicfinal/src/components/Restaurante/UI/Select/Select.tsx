"use client";
import React, { useState, useEffect } from "react";

export interface SelectItem {
  id: string;
  label: string;
}

export interface SelectProps {
  /** Lista de itens a exibir */
  items: SelectItem[];
  /** Valor init (id) selecionado */
  defaultValue?: string;
  /** Callback ao selecionar um item */
  onChange: (id: string) => void;
  /** Classes de estilo para o select */
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  items,
  defaultValue,
  onChange,
  className = "select select-primary",
}) => {
  // estado local do valor selecionado
  const [selectedId, setSelectedId] = useState<string>(defaultValue || "");

  // atualiza estado interno se defaultValue mudar de fora
  useEffect(() => {
    if (defaultValue !== undefined && defaultValue !== selectedId) {
      setSelectedId(defaultValue);
    }
  }, [defaultValue, selectedId]);

  // handler de mudança
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedId(id);
    onChange(id);
  };

  return (
    <select value={selectedId} onChange={handleChange} className={className}>
      {/* placeholder opcional: se não tiver defaultValue e items */}
      {defaultValue === undefined && (
        <option value="" disabled hidden>
          Selecione
        </option>
      )}
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
