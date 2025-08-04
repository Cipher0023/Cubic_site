import React from "react";
import MensagemHome from "./MensagemHome/MensagemHome";
import ContatosHome from "./ContatosHome/ContatosHome";

type Props = object;

export default function Proposta({}: Props) {
  return (
    <div className="flex flex-col w-full justify-center">
      <p>Vamos juntos começar sua jornada digital!</p>
      <p>
        Ready to transform your business? Get in touch with us and let's discuss
        how we can help you achieve digital autonomy.
      </p>
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 py-10">
        <ContatosHome />
        <MensagemHome />
      </div>
    </div>
  );
}
