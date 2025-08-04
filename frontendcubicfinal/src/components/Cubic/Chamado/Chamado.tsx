import React from "react";

type Props = object;

export default function Chamado({}: Props) {
  return (
    <div className="flex flex-col w-full bg-base-300 items-center justify-center gap-5 p-10">
      <p className="text-4xl text-accent">Pronto para começar o seu projeto?</p>
      <p className="text-2xl">
        {" "}
        vamos conversar para criar uma solução digital que se encaixa na
        necessidade do seu negócio
      </p>
      <button className="btn btn-accent text-4xl text-accent-content p-7">
        Comece agora!
      </button>
    </div>
  );
}
