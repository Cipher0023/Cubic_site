"use client";
import React from "react";
import Image from "next/image";

type Props = {
  info: string;
  titulo: string;
  conteudo: string;
};

export default function CardDemonstacoes({ info, titulo, conteudo }: Props) {
  return (
    <div className="relative group w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-30 rounded-2xl transition-opacity duration-300 blur"></div>
      <div className="bg-gradient-to-br from-base-300 to-base-100 shadow-md p-5 border border-base-300 rounded-2xl w-full card relative">
        <figure>
          <Image
            src="/placeholder.jpg"
            alt="placeholder"
            width={400}
            height={400}
            className="shadow-xl rounded-2xl"
          />
        </figure>
        <div className="card-body">
          <span className="badge badge-xs badge-warning">{info}</span>
          <h2 className="card-title">{titulo}</h2>
          <p>{conteudo}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Saiba mais</button>
          </div>
        </div>
      </div>
    </div>
  );
}