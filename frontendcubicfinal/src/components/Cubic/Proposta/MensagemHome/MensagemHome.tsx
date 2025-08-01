import React from "react";

type Props = object;

export default function MensagemHome({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center bg-base-300">
      <p>Send us a message</p>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center">
          <p>Nome*</p>
          <input type="text" placeholder="Seu nome" className="input" />
        </div>
        <div className="flex flex-col justify-center">
          <p>Email*</p>
          <input type="text" placeholder="Seu nome" className="input" />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full">
        <p>Empresa</p>
        <input type="text" placeholder="Seu nome" className="input w-full" />
      </div>
      <div className="flex flex-col justify-center w-full">
        <p>Mensagem*</p>
        <input type="text" placeholder="Seu nome" className="input w-full" />
      </div>
      <button className="btn btn-primary">enviar</button>
    </div>
  );
}
