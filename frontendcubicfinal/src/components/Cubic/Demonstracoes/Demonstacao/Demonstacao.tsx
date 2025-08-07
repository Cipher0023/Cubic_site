"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Check, Calendar, Users } from "lucide-react";

type Projeto = {
  id: number;
  tipo: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  icone: React.ComponentType<{ className?: string }>;
  funcionalidades: string[];
  tecnologias: string[];
  status: string;
  lancamento: string;
  clientes: string;
  resultados: string[];
};

type DemonstracaoProps = {
  projeto: Projeto;
  index: number;
};

export default function Demonstracao({ projeto, index }: DemonstracaoProps) {
  return (
    <div className="flex flex-row gap-10">
      {/* Imagem do projeto */}
      <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-30 rounded-2xl transition-opacity duration-300 blur"></div>
          <div className="relative bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden">
            <Image
              src={projeto.imagem || "/placeholder.jpg"}
              alt={projeto.titulo}
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
            <div className="top-4 left-4 absolute bg-base-100/95 shadow-lg backdrop-blur-sm p-3 border border-base-300 rounded-full">
              <projeto.icone className="w-6 h-6 text-primary" />
            </div>
            <div className="top-4 right-4 absolute bg-accent shadow-lg px-4 py-2 rounded-full font-medium text-primary-content text-sm">
              {projeto.status}
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do projeto */}
      <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <span className="inline-block bg-base-300 mb-4 px-4 py-2 border border-base-100 rounded-full font-medium text-primary text-sm">
              {projeto.tipo}
            </span>
            <h2 className="mb-2 font-bold text-base-content text-3xl">
              {projeto.titulo}
            </h2>
            <p className="mb-4 font-medium text-primary text-lg">
              {projeto.subtitulo}
            </p>
            <p className="text-gray-300 leading-relaxed">{projeto.descricao}</p>
          </div>

          {/* Informações rápidas */}
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

          {/* Funcionalidades principais */}
          <div>
            <h3 className="mb-3 font-semibold text-base-content">
              Principais Funcionalidades:
            </h3>
            <div className="gap-2 grid grid-cols-1">
              {projeto.funcionalidades.slice(0, 6).map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-gray-300 text-sm"
                >
                  <Check className="flex-shrink-0 mr-2 w-4 h-4 text-primary" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Tecnologias */}
          <div>
            <h3 className="mb-3 font-semibold text-base-content">
              Tecnologias Utilizadas:
            </h3>
            <div className="flex flex-wrap gap-2">
              {projeto.tecnologias.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-base-300 px-3 py-1 border border-base-300 rounded-full text-gray-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Resultados */}
          <div>
            <h3 className="mb-3 font-semibold text-base-content">
              Resultados Alcançados:
            </h3>
            <ul className="space-y-1 text-gray-300 text-sm list-disc list-inside">
              {projeto.resultados.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          </div>

          {/* Botões de ação */}
          <div className="flex sm:flex-row flex-col gap-4 pt-4">
            <button className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium text-base-content transition-colors duration-200">
              <ExternalLink className="w-5 h-5" />
              Ver Projeto Completo
            </button>
            <Link
              href="/#contact"
              className="bg-transparent hover:bg-green-600 px-6 py-3 border border-green-600 rounded-lg font-medium text-primary hover:text-base-content text-center transition-colors duration-200"
            >
              Solicitar Projeto Similar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
