"use client";
import Tab_products_internal from "@/components/Dashboard_components/Tab_internal/Tab_products_internal/Tab_products_internal";
import Link from "next/link";
import React, { useState } from "react";
import Categories_menu from "@/components/Dashboard_components/Product/Categories_menu/Categories_menu";

type Props = object;

function Page({}: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-base-200">
      <h1 className="text-3xl font-bold text-center m-4">
        Gerenciamento de Produtos
      </h1>
      <div className="flex flex-row gap-2">
        <Link
          href="/dashboard/produtos/adicionar"
          className="flex flec-col items-center justify-center w-100 bg-base-100 rounded-2xl h-10"
        >
          Adicionar produto
        </Link>
        <button onClick={() => setShowModal(true)}>Categoria de produto</button>
      </div>
      {/* name of each tab group should be unique */}
      <div className="flex flex-col w-full p-10">
        <Tab_products_internal />
      </div>
      {showModal && (
        <Categories_menu onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default Page;
