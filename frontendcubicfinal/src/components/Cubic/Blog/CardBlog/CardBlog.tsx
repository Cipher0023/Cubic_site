import React from "react";
import Image from "next/image";

type Props = {
  info: string;
  titulo: string;
  conteudo: string;
};

export default function CardBlog({ info, titulo, conteudo }: Props) {
  return (
    <div className="card bg-radial-[at_50%_100%] from-base-100/99 from-30% to-base-100/10 border-1 border-base-300 w-96 shadow-sm">
      <figure>
        <Image
          src="/placeholder.jpg"
          alt="placeholder"
          width={400}
          height={400}
          className="rounded-2xl shadow-xl"
        />
      </figure>
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{info}</span>
        <h2 className="card-title">{titulo}</h2>
        <p>{conteudo}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">ler</button>
        </div>
      </div>
    </div>
  );
}
