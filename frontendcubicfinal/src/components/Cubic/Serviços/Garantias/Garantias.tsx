import { Handshake } from "lucide-react";
import React from "react";

export type Garantia = {
  icone: React.ComponentType<{ className?: string }>;
  titulo: string;
  descricao: string;
};

type Props = {
  garantias: Garantia[];
};

export default function Garantias({ garantias }: Props) {
  return (
    <div>
      <div className="mb-16 text-center">
        <h2 className="mb-6 font-bold text-white text-4xl">
          {" "}
          Nosso <span className="text-warning"> compromisso</span> com você
        </h2>

        <p className="mx-auto max-w-3xl text-gray-300 text-xl">
          O sucesso do seu negócio é muito importante para a Cubic, acreditamos
          na filosofia <span className="text-warning"> ganha ganha.</span> Se
          seu negócio cresce nós crescemos junto!
        </p>
      </div>

      <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
        {garantias.map((garantia, index) => (
          <div
            key={index}
            className="bg-base-100 p-6 border hover:border-accent border-base-300 rounded-xl text-center transition-colors duration-200"
          >
            <div className="flex justify-center items-center bg-accent mx-auto mb-4 rounded-full w-12 h-12">
              <garantia.icone className="w-6 h-6 text-accent-content" />
            </div>
            <h3 className="mb-2 font-semibold text-white">{garantia.titulo}</h3>
            <p className="text-gray-300 text-sm">{garantia.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
