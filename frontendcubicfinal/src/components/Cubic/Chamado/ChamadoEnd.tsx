import React from "react";

type Props = object;

export default function ChamadoEnd({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-20 w-full">
      <p className="font-semibold text-accent text-6xl text-center">
        Pronto para começar o seu projeto?
      </p>
      <p className="p-10 text-2xl">
        {" "}
        vamos conversar para criar uma solução digital que se encaixa na
        necessidade do seu negócio
      </p>
      <button className="p-7 text-4xl text-accent-content btn btn-accent">
        Comece agora!
      </button>
    </div>
  );
}
