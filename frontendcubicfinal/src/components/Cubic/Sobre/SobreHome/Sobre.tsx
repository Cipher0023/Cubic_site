import React from "react";
import ValoresHome from "@/components/Cubic/Sobre/Valores/ValoresHome";
import Proposito from "@/components/Cubic/Sobre/Proposito/Proposito";
type Props = object;

export default function Sobre({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-base-200 py-10">
      {" "}
      <h1 className="mb-6 pt-10 font-bold text-accentr text-4xl sm:text-4xl">
        Sobre a Cubic
      </h1>
      <div className="w-3/5 text-gray-300 text-xl leading-relaxed">
        Ajudamos empresas a se digitalizarem e conquistarem liberdade digital,
        dando ao empreendedor o poder de escolher seus próprios caminhos. Nossa
        missão é oferecer às pequenas e médias empresas as ferramentas certas
        para crescer com independência e segurança no mercado atual.
      </div>
      <Proposito />
      <ValoresHome />
    </div>
  );
}
