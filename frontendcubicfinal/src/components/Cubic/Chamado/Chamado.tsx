import React from "react";

type Props = object;

export default function Chamado({}: Props) {
  return (
    <div className="flex flex-col w-full bg-base-100 items-center justify-center">
      <p className="text-2xl">Peonto para começar o seu projeto?</p>
      <p>
        {" "}
        vamos conversar para criar uma solução digital que se encaixa na
        necessidade do seu negócio
      </p>
      <button className="btn btn-primary">Comece agora!</button>
    </div>
  );
}
