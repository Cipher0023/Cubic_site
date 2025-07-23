import Tab_products_internal from "@/components/Dashboard_components/Tab_internal/Tab_products_internal/Tab_products_internal";
import Link from "next/link";
import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-base-200">
      <h1 className="text-3xl font-bold text-center m-4">
        Gerenciamento de Produtos
      </h1>
      <Link
        href="/dashboard/produtos/adicionar"
        className="flex flec-col items-center justify-center w-100 bg-base-100 rounded-2xl h-10"
      >
        Adicionar produto
      </Link>
      {/* name of each tab group should be unique */}
      <div className="flex flex-col w-full p-10">
        <Tab_products_internal />
      </div>
    </div>
  );
}
