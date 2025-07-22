import Product_table from "@/components/Dashboard_components/Product_table/Product_table";
import Stat from "@/components/Dashboard_components/Stat/Stat";
import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-base-200">
      <h1 className="text-3xl font-bold text-center m-4">
        Área de gerenciamento
      </h1>
      <div className="flex flex-row">
        <Stat />
        <Product_table />
      </div>
    </div>
  );
}
