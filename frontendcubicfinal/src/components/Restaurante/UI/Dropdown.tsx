"use client";

import React, { ReactNode, useState, useEffect } from "react";

export interface DropdownItem {
  id: string;
  label: string;
}

export interface DropdownProps {
  items: DropdownItem[];           // lista de opções
  defaultId?: string;             // id inicial selecionado
  onChange: (id: string) => void; // callback na seleção
  placeholder?: string;           // texto exibido se nada selecionado
  buttonClassName?: string;       // classes Tailwind/DaisyUI adicionais no botão
  listClassName?: string;         // classes adicionais na lista
}

export function Dropdown({
  items,
  defaultId,
  onChange,
  placeholder = "Selecione",
  buttonClassName = "btn m-1",
  listClassName = "dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm",
}: DropdownProps) {
  // estado local do valor selecionado
  const [selectedId, setSelectedId] = useState<string>(defaultId || "");

  // atualiza quando defaultId mudar
  useEffect(() => {
    if (defaultId && defaultId !== selectedId) {
      setSelectedId(defaultId);
    }
  }, [defaultId, selectedId]);

  // rótulo exibido no botão
  const getLabel = (): string => {
    const found = items.find((it) => it.id === selectedId);
    return found ? found.label : placeholder;
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-center">
      <div tabIndex={0} role="button" className={buttonClassName}>
        {getLabel()} ⬇️
      </div>
      <ul tabIndex={0} className={listClassName}>
        {items.map((it) => (
          <li key={it.id}>
            <a
              className={it.id === selectedId ? "font-bold" : ""}
              onClick={() => {
                setSelectedId(it.id);
                onChange(it.id);
              }}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
