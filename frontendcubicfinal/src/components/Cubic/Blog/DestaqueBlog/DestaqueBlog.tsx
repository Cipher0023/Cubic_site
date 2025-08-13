import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Tipos auxiliares
type Autor = {
  nome: string;
  cargo: string;
  avatar?: string;
};

type PostDestaque = {
  id: number;
  titulo: string;
  subtitulo: string;
  conteudo: string;
  imagem?: string;
  categoria: string;
  autor: Autor;
  dataPublicacao: string | Date;
  tempoLeitura: string;
  visualizacoes: number;
  likes: number;
  comentarios: number;
  tags: string[];
  featured: boolean;
};

// Props do componente
type Props = {
  postDestaque: PostDestaque;
};

export default function DestaqueBlog({ postDestaque }: Props) {
  // Função interna para formatar a data
  const formatarData = (data: string | Date) => {
    return new Date(data).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-accent rounded-full w-2 h-2"></div>
          <span className="font-medium text-accent text-sm uppercase tracking-wide">
            Featured Post
          </span>
        </div>
        <h2 className="font-bold text-white text-3xl">Latest from the Team</h2>
      </div>
      <article className="bg-base-100 shadow-2xl hover:shadow-3xl border border-base-300 rounded-3xl overflow-hidden transition-shadow duration-300">
        <div className="gap-0 grid lg:grid-cols-2">
          {/* Imagem */}
          <div className="relative h-80 lg:h-auto">
            <Image
              src={postDestaque.imagem || "/placeholder.svg"}
              alt={postDestaque.titulo}
              fill
              className="object-cover"
            />
            <div className="top-4 left-4 absolute bg-accent/75 px-3 py-1 rounded-full font-medium text-white text-sm">
              {postDestaque.categoria}
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={postDestaque.autor.avatar || "/placeholder.svg"}
                alt={postDestaque.autor.nome}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-white">
                  {postDestaque.autor.nome}
                </p>
                <p className="text-gray-400 text-sm">
                  {postDestaque.autor.cargo}
                </p>
              </div>
            </div>

            <h3 className="mb-4 font-bold text-white text-3xl leading-tight">
              {postDestaque.titulo}
            </h3>
            <p className="mb-6 text-gray-300 text-lg leading-relaxed">
              {postDestaque.subtitulo}
            </p>
            <p className="mb-6 text-gray-400 line-clamp-3">
              {postDestaque.conteudo}
            </p>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatarData(postDestaque.dataPublicacao)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {postDestaque.tempoLeitura}
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span>{postDestaque.visualizacoes} views</span>
                <span>{postDestaque.likes} likes</span>
                <span>{postDestaque.comentarios} comments</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {postDestaque.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-base-300 px-3 py-1 border border-gray-600 rounded-full text-gray-300 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${postDestaque.id}`}
              className="inline-flex items-center gap-2 bg-accent/75 hover:bg-green-700 px-6 py-3 rounded-lg w-fit font-medium text-white transition-colors duration-200"
            >
              Read Full Article
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
