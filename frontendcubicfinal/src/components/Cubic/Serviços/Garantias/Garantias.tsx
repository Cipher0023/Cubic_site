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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">
          Our Commitment to You
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We stand behind our work with industry-leading guarantees and support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {garantias.map((garantia, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-green-600 transition-colors duration-200"
          >
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <garantia.icone className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">{garantia.titulo}</h3>
            <p className="text-sm text-gray-300">{garantia.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
