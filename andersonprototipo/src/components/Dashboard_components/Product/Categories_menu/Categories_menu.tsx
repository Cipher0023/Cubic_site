import React, { useState } from "react";
import Categories_table from "./Categories_table/Categories_table";
import AddCategoryForm from "./Categories_table/AddCategory/AddCategoryForm";

type Props = {
  onClose: () => void;
};

export default function Categories_menu({ onClose }: Props) {
  const [adding, setAdding] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-3/4 h-3/4 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Categorias de Produto</h2>
        {!adding ? (
          <>
            <button className="btn" onClick={() => setAdding(true)}>
              adicionar
            </button>
            <Categories_table />
            <p className="mb-4">Conteúdo do modal aqui.</p>
            <button className="btn btn-secondary" onClick={onClose}>
              Fechar
            </button>
          </>
        ) : (
          <AddCategoryForm onBack={() => setAdding(false)} />
        )}
      </div>
    </div>
  );
}
