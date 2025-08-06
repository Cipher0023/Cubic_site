import React from "react";

export type EtapaProcesso = {
  numero: string;
  titulo: string;
  descricao: string;
  icone: React.ComponentType<{ className?: string }>;
  detalhes: string[];
};

type Props = {
  metodologia: EtapaProcesso[];
};

export default function Process({ metodologia }: Props) {
  return (
    <div>
      <div className="px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We follow a systematic approach that ensures every project delivers
            exceptional results and exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metodologia.map((etapa, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <etapa.icone className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {etapa.numero}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {etapa.titulo}
              </h3>
              <p className="text-gray-300 mb-4">{etapa.descricao}</p>
              <div className="space-y-1">
                {etapa.detalhes.map((detalhe, idx) => (
                  <div key={idx} className="text-sm text-gray-400">
                    • {detalhe}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
