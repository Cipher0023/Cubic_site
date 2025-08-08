import React from "react";

export type Estatistica = {
  numero: string;
  label: string;
  icone: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type Props = {
  estatisticas: Estatistica[];
};

export default function HeaderSobre({ estatisticas }: Props) {
  return (
    <header className="bg-gradient-to-r from-base-200 via-base-100 to-base-200 border-b border-base-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
        <div className="max-w-4xl">
          <h1 className="mb-6 font-bold text-white text-5xl sm:text-6xl">
            Sobre a <span className="text-primary">Cubic</span>
          </h1>
          <p className="mb-8 text-gray-300 text-xl leading-relaxed">
            Somos mais do que apenas uma agência de desenvolvimento. Somos seus
            parceiros na transformação digital, comprometidos em ajudar pequenas
            e médias empresas a alcançarem verdadeira autonomia digital.
            Perguntar ao ChatGPT
          </p>

          <div className="gap-6 grid grid-cols-2 md:grid-cols-4">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center items-center bg-transparent mx-auto mb-2 border-2 border-primary rounded-full w-16 h-16">
                  <stat.icone className="w-10 h-10 text-primary" />
                </div>
                <div className="font-bold text-white text-2xl">
                  {stat.numero}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
