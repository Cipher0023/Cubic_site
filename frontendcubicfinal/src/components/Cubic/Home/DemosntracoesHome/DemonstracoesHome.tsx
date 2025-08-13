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
    <section className="bg-base-200 px-4 py-15">
      <h2 className="mb-6 font-bold text-accent text-6xl text-center">
        Veja nossas demonstrações!
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-2xl text-center">
        Veja exemplos de como ajudamos negócios a transformar sua presença
        digital com soluções customizadas.
      </p>
      <div className="justify-items-center gap-5 grid grid-cols-1 sm:grid-cols-2 mx-auto w-full max-w-4xl">
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
