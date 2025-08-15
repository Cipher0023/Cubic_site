"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Check } from "lucide-react";
import DemoInfo from "./DemoInfo.tsx/DemoInfo";

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
  link: string;
};

type DemonstracaoProps = {
  projeto: Projeto;
  index: number;
};

export default function Demonstracao({ projeto, index }: DemonstracaoProps) {
  return (
    <div className="flex flex-row items-center gap-10">
      {/* Imagem do projeto */}
      <div
        className={`${
          index % 2 === 1 ? "lg:order-2" : ""
        } flex items-center justify-center`}
      >
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
          <DemoInfo projeto={projeto} />

          {/* Funcionalidades principais */}
          <div>
            <h3 className="mb-3 font-semibold text-base-content">
              Principais Funcionalidades:
            </h3>
            <div className="gap-2 grid grid-cols-2">
              {projeto.funcionalidades.slice(0, 6).map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-gray-300 text-sm"
                >
                  <Check className="flex-shrink-0 mr-2 w-4 h-4 text-accent" />
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
                  className="bg-base-300 px-3 py-1 border border-base-300 rounded-full text-accent text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex sm:flex-row flex-col gap-4 pt-4 pb-4">
            <Link
              href={projeto.link}
              className="flex justify-center items-center gap-2 bg-accent hover:bg-accent/30 px-6 py-3 rounded-full font-medium hover:text-accent transition-colors duration-200 text-accent-content"
            >
              <ExternalLink className="" />
              Demonstração
            </Link>
            <Link
              href="/#contact"
              className="bg-transparent hover:bg-accent/50 px-6 py-3 border border-accent rounded-full font-medium text-accent hover:text-accent text-center transition-colors duration-200"
            >
              Solicitar Projeto Similar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
