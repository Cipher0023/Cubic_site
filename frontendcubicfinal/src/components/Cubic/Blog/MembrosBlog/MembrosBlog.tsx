import React from "react";
import Image from "next/image";
import Link from "next/link";

type Autor = {
  id: number | string;
  nome: string;
  cargo: string;
  avatar?: string;
  bio: string;
  especialidades: string[];
};

type Props = {
  autores: Autor[];
};

export default function MembrosBlog({ autores }: Props) {
  return (
    <div>
      <div className="mb-12">
        <h2 className="mb-4 font-bold text-base-content text-3xl">
          Our Authors
        </h2>
        <p className="text-base-content/75 text-lg">
          Get to know the experts behind our content and follow their individual
          blogs.
        </p>
      </div>

      <div className="gap-8 grid md:grid-cols-3 mb-16">
        {autores.map((autor) => (
          <div
            key={autor.id}
            className="group bg-base-100 p-6 border hover:border-accent/75 border-base-300 rounded-2xl transition-colors duration-200"
          >
            <div className="mb-6 text-center">
              <Image
                src={autor.avatar || "/placeholder.jpg"}
                alt={autor.nome}
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-full group-hover:scale-105 transition-transform duration-200"
              />
              <h3 className="mb-1 font-bold text-base-content text-xl">
                {autor.nome}
              </h3>
              <p className="mb-3 font-medium text-accent text-sm">
                {autor.cargo}
              </p>
              <p className="text-sm text-base-content/75 leading-relaxed">
                {autor.bio}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 font-semibold text-sm text-base-content">
                Specialties:
              </h4>
              <div className="flex flex-wrap gap-2">
                {autor.especialidades.map((especialidade, index) => (
                  <span
                    key={index}
                    className="bg-base-300 px-2 py-1 border border-base-300 rounded text-xs text-base-content/75"
                  >
                    {especialidade}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/blog/author/${autor.id}`}
              className="block hover:bg-accent/75 px-4 py-2 border border-accent/75 rounded-lg w-full font-medium text-accent text-center transition-colors duration-200 hover:text-accent-content"
            >
              View Blog
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
