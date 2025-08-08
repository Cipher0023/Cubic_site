import React from "react";

// Tipo de cada item da timeline
export type TimelineItem = {
  ano: string;
  titulo: string;
  descricao: string;
  detalhes?: string;
  icone: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// Tipagem das props
type Props = {
  timeline: TimelineItem[];
};

export default function Timeline({ timeline }: Props) {
  return (
    <div>
      <div className="mb-16 text-center">
        <h2 className="mb-6 font-bold text-white text-4xl">Nossa Jornada</h2>
        <p className="mx-auto max-w-3xl text-gray-300 text-xl">
          De uma simples idea para uma empresa em expansão, aqui vemos a linha
          do tempo do desenvolvimento da Cubic.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="left-1/2 absolute bg-primary w-0.5 h-full -translate-x-px transform"></div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <div className="bg-base-100 shadow-lg p-6 border border-base-300 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    {index % 2 === 0 ? (
                      <>
                        <div>
                          <h3 className="font-bold text-white text-xl">
                            {item.titulo}
                          </h3>
                          <p className="font-medium text-accent">{item.ano}</p>
                        </div>
                        <div className="flex justify-center items-center bg-accent rounded-full w-12 h-12">
                          <item.icone className="w-6 h-6 text-accent-content" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-center items-center bg-accent rounded-full w-12 h-12">
                          <item.icone className="w-6 h-6 text-accent-content" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-xl">
                            {item.titulo}
                          </h3>
                          <p className="font-medium text-accent">{item.ano}</p>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="mb-2 text-gray-300">{item.descricao}</p>
                  {item.detalhes && (
                    <p className="text-gray-400 text-sm">{item.detalhes}</p>
                  )}
                </div>
              </div>

              {/* Timeline dot */}
              <div className="left-1/2 absolute bg-accent border-4 border-gray-900 rounded-full w-4 h-4 -translate-x-1/2 transform"></div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
