import React from "react";

type Props = object;

export default function Chamado({}: Props) {
  return (
    <div className="flex flex-col w-full  items-center justify-center gap-5 p-20">
      <p className="text-6xl text-accent text-center">
        Pronto para começar o seu projeto?
      </p>
      <p className="text-2xl p-10">
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
