import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-base-200">
      <h1 className="text-3xl font-bold text-center m-4">Adicionar Produto</h1>
      {/* name of each tab group should be unique */}
      <div className="flex flex-col w-full p-10"></div>
    </div>
  );
}
