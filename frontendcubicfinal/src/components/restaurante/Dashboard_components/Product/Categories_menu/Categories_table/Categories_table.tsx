"use client";
import React, { useEffect, useState } from "react";
import Categories_table_item from "./Categories_table_item/Categories_table_item";

// Ajuste o tipo conforme o retorno real da API
export type Category = {
  id: string;
  name: string;
  description: string;
  added_by: string;
};

function Categories_table() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://localhost:3002/public/lstPrc", {
          credentials: "include",
        });
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Erro ao buscar categorias", err);
      }
    };
    fetchCategories();
  });

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Adicionado por</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, idx) => (
            <Categories_table_item
              key={category.id || idx}
              category={category}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Categories_table;
