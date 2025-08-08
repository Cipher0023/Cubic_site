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
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-bold text-base-content text-4xl">
            Nosso processo de criação
          </h2>
          <p className="mx-auto max-w-3xl text-gray-300 text-xl">
            Seguimos um processo esquematizado com fono no dialogo, para assim
            entregar uma solução sob medida para seus probemas reais e digitais
          </p>
        </div>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
          {metodologia.map((etapa, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <div className="flex justify-center items-center bg-primary mx-auto mb-4 rounded-full w-20 h-20 group-hover:scale-110 transition-transform duration-200">
                  <etapa.icone className="w-10 h-10 text-primary-content" />
                </div>
                <div className="-top-2 -right-2 absolute flex justify-center items-center bg-base-300 rounded-full w-8 h-8 font-bold text-sm text-base-content">
                  {etapa.numero}
                </div>
              </div>
              <h3 className="mb-3 font-bold text-base-content text-xl">
                {etapa.titulo}
              </h3>
              <p className="mb-4 text-base-content">{etapa.descricao}</p>
              <div className="space-y-1">
                {etapa.detalhes.map((detalhe, idx) => (
                  <div key={idx} className="text-md text-base-content/60">
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
