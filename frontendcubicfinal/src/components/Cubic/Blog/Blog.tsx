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
    <section className="bg-gradient-to-br from-base-200 via-base-100 to-base-200 p-20 px-4 py-12 pt-24 pb-16">
      <h2 className="mb-4 font-semibold text-primary text-6xl text-center">
        Blog
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-2xl text-center">
        Veja os posts das novidades implementadas nos produtos!
      </p>
      <div className="flex gap-6 mx-auto max-w-7xl overflow-x-auto">
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
