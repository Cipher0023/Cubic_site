import React from "react";
import MensagemHome from "./MensagemHome/MensagemHome";
import ContatosHome from "./ContatosHome/ContatosHome";

type Props = object;

export default function Proposta({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center p-5 w-full">
      <p className="p-20 font-semibold text-accent text-6xl">
        Vamos juntos começar sua jornada digital!
      </p>
      <p className="p-10 text-2xl">
        Pronto para transformar seu negócio? Entre em contato conosco e vamos
        conversar sobre como podemos ajudá-lo a conquistar autonomia digital.
      </p>
      <div className="flex md:flex-row flex-col justify-center items-start gap-8 py-10">
        <ContatosHome />
        <MensagemHome />
      </div>
    </div>
  );
}
