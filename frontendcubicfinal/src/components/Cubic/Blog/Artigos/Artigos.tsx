import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Search, Filter } from "lucide-react";

type Autor = {
  nome: string;
  avatar?: string;
};

type Post = {
  id: string | number;
  titulo: string;
  subtitulo: string;
  categoria: string;
  imagem?: string;
  autor: Autor;
  dataPublicacao: string | Date;
  tempoLeitura: string;
  visualizacoes: number;
  likes: number;
  tags: string[];
};

type Props = {
  posts: Post[];
  categorias: string[];
};

export default function Artigos({ posts, categorias }: Props) {
  const formatarData = (data: string | Date) => {
    const d = new Date(data);
    return d.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div>
      {" "}
      <div className="flex lg:flex-row flex-col justify-between items-center gap-6 mb-8">
        <div>
          <h2 className="mb-2 font-bold text-white text-2xl">All Articles</h2>
          <p className="text-gray-400">
            Browse our complete collection of insights and tutorials
          </p>
        </div>

        <div className="flex sm:flex-row flex-col gap-4 w-full lg:w-auto">
          <div className="relative">
            <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 -translate-y-1/2 transform" />
            <input
              type="text"
              placeholder="Search articles..."
              className="bg-base-100 py-2 pr-4 pl-10 border focus:border-green-500 border-base-300 rounded-lg focus:outline-none w-full sm:w-64 text-white placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <Filter className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 -translate-y-1/2 transform" />
            <select className="bg-base-100 py-2 pr-8 pl-10 border focus:border-green-500 border-base-300 rounded-lg focus:outline-none text-white appearance-none">
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Lista de Posts */}
      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group bg-base-100 border hover:border-accent/75 border-base-300 rounded-2xl overflow-hidden transition-colors duration-200"
          >
            <div className="relative h-48">
              <Image
                src={post.imagem || "/placeholder.svg"}
                alt={post.titulo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="top-3 left-3 absolute bg-base-200/80 backdrop-blur-sm px-2 py-1 rounded font-medium text-accent text-xs">
                {post.categoria}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={post.autor.avatar || "/placeholder.svg"}
                  alt={post.autor.nome}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-white text-sm">
                    {post.autor.nome}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {formatarData(post.dataPublicacao)}
                  </p>
                </div>
              </div>

              <h3 className="mb-2 font-bold text-white group-hover:text-accent text-lg line-clamp-2 transition-colors duration-200">
                {post.titulo}
              </h3>
              <p className="mb-4 text-gray-400 text-sm line-clamp-2">
                {post.subtitulo}
              </p>

              <div className="flex justify-between items-center mb-4 text-gray-500 text-xs">
                <div className="flex items-center gap-3">
                  <span>{post.tempoLeitura}</span>
                  <span>{post.visualizacoes} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-3 h-3" />
                  <span>{post.likes}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-base-300 px-2 py-1 rounded text-gray-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 2 && (
                  <span className="px-2 py-1 text-gray-500 text-xs">
                    +{post.tags.length - 2} more
                  </span>
                )}
              </div>

              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-1 font-medium text-accent hover:text-green-300 text-sm transition-colors duration-200"
              >
                Read More
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
