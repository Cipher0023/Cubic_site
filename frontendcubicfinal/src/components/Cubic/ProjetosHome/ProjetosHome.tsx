"use client";
import React from "react";
import CardProjetos from "./CardProjetos/CardProjetos";

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
    <section className="py-12 px-4 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-6">Nossos Projetos</h2>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Veja exemplos de como ajudamos negócios a transformar sua presença
        digital com soluções customizadas.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto justify-items-center">
        {projetos.map((proj, idx) => (
          <CardProjetos
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
