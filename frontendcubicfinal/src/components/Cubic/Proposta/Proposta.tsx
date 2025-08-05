import React from "react";
import MensagemHome from "./MensagemHome/MensagemHome";
import ContatosHome from "./ContatosHome/ContatosHome";

type Props = object;

export default function Proposta({}: Props) {
  return (
    <div className="flex flex-col w-full justify-center items-center p-5">
      <p className="text-6xl p-20 text-accent">
        Vamos juntos começar sua jornada digital!
      </p>
      <p className="text-2xl p-10">
        Pronto para transformar seu negócio? Entre em contato conosco e vamos
        conversar sobre como podemos ajudá-lo a conquistar autonomia digital.
      </p>
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 py-10">
        <ContatosHome />
        <MensagemHome />
      </div>
    </div>
  );
}
