"use client";
import React from "react";
import CardDemonstacoes from "./CardDemosntracoes/CardDemonstacoes";

type Projeto = {
  info: string;
  titulo: string;
  conteudo: string;
};

export default function ProjetosHome() {
  const projetos: Projeto[] = [
    {
      info: "E-commerce",
      titulo: "Site e aplicativo para restaurantes",
      conteudo:
        "Plataformas completas para gestão de pedidos e fidelização de clientes.",
    },
    {
      info: "Landing Page",
      titulo: "Página de captura para marketing",
      conteudo:
        "Páginas otimizadas para conversão, com design atrativo e responsivo.",
    },
  ];

  return (
    <section className="py-12 px-4 ">
      <h2 className="text-6xl font-bold text-center mb-6">
        Veja nossas demonstrações!
      </h2>
      <p className="text-2xl text-center mb-8 max-w-2xl mx-auto">
        Veja exemplos de como ajudamos negócios a transformar sua presença
        digital com soluções customizadas.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto justify-items-center">
        {projetos.map((proj, idx) => (
          <CardDemonstacoes
            key={idx}
            info={proj.info}
            titulo={proj.titulo}
            conteudo={proj.conteudo}
          />
        ))}
      </div>
    </section>
  );
}
