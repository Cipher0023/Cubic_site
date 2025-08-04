"use client";
import React from "react";
import CardBlog from "./CardBlog/CardBlog";

type Post = {
  info: string;
  titulo: string;
  conteudo: string;
};

export default function Blog() {
  const posts: Post[] = [
    {
      info: "Novidade",
      titulo: "Lançamento da versão 2.0",
      conteudo:
        "Apresentamos a nova versão com melhorias de performance e interface renovada.",
    },
    {
      info: "Tutorial",
      titulo: "Como integrar nossa API",
      conteudo:
        "Aprenda passo a passo a conectar sistemas externos usando nossos endpoints REST.",
    },
    {
      info: "Case",
      titulo: "Sucesso com o Projeto X",
      conteudo:
        "Veja como ajudamos a empresa X a aumentar 50% das vendas online.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-base-200">
      <h2 className="text-6xl font-bold text-center text-primary mb-4">Blog</h2>
      <p className="text-2xl text-center max-w-2xl mx-auto mb-8">
        Veja os posts das novidades implementadas nos produtos!
      </p>
      <div className="flex gap-6 overflow-x-auto max-w-7xl mx-auto">
        {posts.map((post, idx) => (
          <CardBlog
            key={idx}
            info={post.info}
            titulo={post.titulo}
            conteudo={post.conteudo}
          />
        ))}
      </div>
    </section>
  );
}
