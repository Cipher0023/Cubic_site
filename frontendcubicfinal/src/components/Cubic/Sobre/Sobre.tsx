import React from "react";

type Props = object;

export default function Sobre({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-base-100">
      <h2 className="text-2xl">Sobre a Cubic</h2>
      <div>
        Ajudamos empresas a se digitalizarem e conquistarem liberdade digital,
        dando ao empreendedor o poder de escolher seus próprios caminhos. Nossa
        missão é oferecer às pequenas e médias empresas as ferramentas certas
        para crescer com independência e segurança no mercado atual.
      </div>
    </div>
  );
}
