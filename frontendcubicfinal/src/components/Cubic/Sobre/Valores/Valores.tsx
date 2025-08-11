import React from "react";

export type ValoresItem = {
  icone: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  titulo: string;
  descricao: string;
  detalhes: string;
};
type Props = {
  valores: ValoresItem[];
};

export default function Valores({ valores }: Props) {
  return (
    <div className="px-8 lg:px-12">
      <div className="mb-16 text-center">
        <h2 className="mb-6 font-bold text-primary text-4xl">Nossos Valores</h2>
        <p className="mx-auto max-w-3xl text-base-content text-xl">
          Estes são os princícios na qual a Cubic foi fundada
        </p>
      </div>

      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
        {valores.map((valor, index) => (
          <div
            key={index}
            className="group bg-base-100 p-6 border hover:border-primary border-base-300 rounded-xl transition-colors duration-200"
          >
            <div className="flex justify-center items-center bg-accent mb-4 rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-200">
              <valor.icone className="w-6 h-6 text-accent-content" />
            </div>
            <h3 className="mb-3 font-bold text-base-content text-xl">
              {valor.titulo}
            </h3>
            <p className="mb-3 text-base-content">{valor.descricao}</p>
            <p className="text-sm text-base-content/75">{valor.detalhes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
