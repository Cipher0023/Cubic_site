"use client";
import React from "react";
import { Check, Calendar, Users } from "lucide-react";

type Projeto = {
  lancamento: string;
  clientes: string;
  resultados: string[];
};

type Props = {
  projeto: Projeto;
};

export default function DemoInfo({ projeto }: Props) {
  return (
    <div className="gap-4 grid grid-cols-3 py-4 border-y border-base-300">
      <div className="text-center">
        <Calendar className="mx-auto mb-1 w-5 h-5 text-primary" />
        <p className="font-medium text-sm text-base-content">
          {projeto.lancamento}
        </p>
        <p className="text-gray-400 text-xs">Lançamento</p>
      </div>
      <div className="text-center">
        <Users className="mx-auto mb-1 w-5 h-5 text-primary" />
        <p className="font-medium text-sm text-base-content">
          {projeto.clientes}
        </p>
        <p className="text-gray-400 text-xs">Clientes</p>
      </div>
      <div className="text-center">
        <Check className="mx-auto mb-1 w-5 h-5 text-primary" />
        <p className="font-medium text-sm text-base-content">
          {projeto.resultados.length}
        </p>
        <p className="text-gray-400 text-xs">Resultados</p>
      </div>
    </div>
  );
}
