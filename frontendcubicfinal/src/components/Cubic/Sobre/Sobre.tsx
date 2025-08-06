import React from "react";

type Props = object;

export default function Sobre({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center p-20 ">
      <div className="flex flex-col items-center justify-center p-20 gap-10 rounded-4xl bg-radial-[at_50%_50%] from-base-100/30 from-5% to-base-100/99 border-1 border-base-300">
        <h2 className="text-6xl text-accent font-bold">Sobre a Cubic</h2>
        <div className="text-2xl text-center p-10">
          Ajudamos empresas a se digitalizarem e conquistarem liberdade digital,
          dando ao empreendedor o poder de escolher seus próprios caminhos.
          Nossa missão é oferecer às pequenas e médias empresas as ferramentas
          certas para crescer com independência e segurança no mercado atual.
        </div>
      </div>
    </div>
  );
}
