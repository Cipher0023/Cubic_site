"use client";
import Tab_products_internal from "@/components/Restaurante/Dashboard_components/Tab_internal/Tab_products_internal/Tab_products_internal";
import Link from "next/link";
import React, { useState } from "react";
import Categories_menu from "@/components/Restaurante/Dashboard_components/Product/Categories_menu/Categories_menu";

type Props = object;

function Page({}: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col justify-start items-center bg-base-200 min-h-screen">
      <h1 className="m-4 font-bold text-3xl text-center">
        Gerenciamento de Produtos
      </h1>
      <div className="flex flex-row gap-2">
        <Link
          href="/dashboard/produtos/adicionar"
          className="flex justify-center items-center bg-base-100 rounded-2xl w-100 h-10 flec-col"
        >
          Adicionar produto
        </Link>
        <button onClick={() => setShowModal(true)}>Categoria de produto</button>
      </div>
      {/* name of each tab group should be unique */}
      <div className="flex flex-col p-10 w-full">
        <Tab_products_internal />
      </div>
      {showModal && <Categories_menu onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Page;
