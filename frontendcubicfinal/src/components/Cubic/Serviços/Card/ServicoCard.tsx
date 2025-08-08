import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export type Servico = {
  id: string | number;
  cor: "green" | "blue" | "purple"; // green->accent, blue->primary, purple->info
  icone: React.ComponentType<{ className?: string }>;
  titulo: string;
  subtitulo: string;
  descricao: string;
  preco: string;
  duracao: string;
  beneficios: string[];
  ideal_para: string;
};

type Props = {
  servicos: Servico[];
};

// Mapa de classes por cor padronizado
const colorClasses = {
  green: {
    // verde -> accent
    badgeBg: "bg-accent",
    badgeText: "text-accent-content",
    ctaBg: "bg-accent",
    ctaText: "text-accent-content",
    outlineBorder: "border-accent",
    outlineText: "text-accent",
    outlineHoverBg: "hover:bg-accent",
    outlineHoverText: "hover:text-accent-content",
    check: "text-accent",
  },
  blue: {
    // azul -> primary
    badgeBg: "bg-primary",
    badgeText: "text-primary-content",
    ctaBg: "bg-primary",
    ctaText: "text-primary-content",
    outlineBorder: "border-primary",
    outlineText: "text-primary",
    outlineHoverBg: "hover:bg-primary",
    outlineHoverText: "hover:text-primary-content",
    check: "text-primary",
  },
  purple: {
    // roxo -> info
    badgeBg: "bg-info",
    badgeText: "text-info-content",
    ctaBg: "bg-info",
    ctaText: "text-info-content",
    outlineBorder: "border-info",
    outlineText: "text-info",
    outlineHoverBg: "hover:bg-info",
    outlineHoverText: "hover:text-info-content",
    check: "text-info",
  },
} as const;

export default function ServicoCard({ servicos }: Props) {
  return (
    <div>
      <div className="mb-16 text-center">
        <h2 className="mb-6 font-bold text-white text-4xl">Nossos serviços</h2>
        <p className="mx-auto max-w-3xl text-gray-300 text-xl">
          Veja os serviços que prestamos
        </p>
      </div>

      <div className="space-y-16">
        {servicos.map((servico) => {
          const palette = colorClasses[servico.cor];

          return (
            <div
              key={servico.id}
              className="group isolate relative rounded-3xl"
            >
              {/* Glow externo */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-30 blur-lg rounded-3xl transition-opacity duration-300 pointer-events-none"></div>

              {/* Card */}
              <div className="z-10 relative bg-base-100 shadow-2xl p-8 lg:p-12 border border-base-300 rounded-3xl">
                <div className="items-center gap-12 grid lg:grid-cols-2">
                  {/* Conteúdo principal */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center ${palette.badgeBg}`}
                      >
                        <servico.icone
                          className={`w-8 h-8 ${palette.badgeText}`}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-3xl">
                          {servico.titulo}
                        </h3>
                        <p className="text-gray-300 text-lg">
                          {servico.subtitulo}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {servico.descricao}
                    </p>

                    <div className="gap-4 grid grid-cols-2 bg-base-100 p-4 border border-base-300 rounded-xl">
                      <div>
                        <p className="mb-1 font-medium text-gray-300 text-sm">
                          Investimento
                        </p>
                        <p className="font-bold text-white text-lg">
                          {servico.preco}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 font-medium text-gray-300 text-sm">
                          Prazo
                        </p>
                        <p className="font-bold text-white text-lg">
                          {servico.duracao}
                        </p>
                      </div>
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4">
                      <Link
                        href="/#contact"
                        className={`${palette.ctaBg} ${palette.ctaText} hover:brightness-110 rounded-full px-6 py-3 font-medium transition-colors duration-200 text-center flex items-center justify-center gap-2`}
                      >
                        Começar agora
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/#contact"
                        className={`border ${palette.outlineBorder} ${palette.outlineText} bg-transparent rounded-full px-6 py-3 font-medium transition-colors duration-200 text-center hover:brightness-110 ${palette.outlineHoverBg} ${palette.outlineHoverText}`}
                      >
                        Saiba mais
                      </Link>
                    </div>
                  </div>

                  {/* Benefícios */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-4 font-bold text-white text-xl">
                        Principais benefícios
                      </h4>
                      <div className="space-y-3">
                        {servico.beneficios.map((beneficio, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check
                              className={`h-5 w-5 mt-0.5 flex-shrink-0 ${palette.check}`}
                            />
                            <span className="text-gray-300">{beneficio}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-base-100 p-4 border border-base-300 rounded-xl">
                      <h5 className="mb-2 font-semibold text-white">
                        Ideal para:
                      </h5>
                      <p className="text-gray-300 text-sm">
                        {servico.ideal_para}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
