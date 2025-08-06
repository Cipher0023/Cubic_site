import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export type Servico = {
  id: string | number;
  cor: "green" | "blue" | "purple";
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

export default function ServicoCard({ servicos }: Props) {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose the solution that fits your business needs. Each service is
          designed to deliver maximum ROI and long-term growth.
        </p>
      </div>

      <div className="space-y-16">
        {servicos.map((servico) => (
          <div
            key={servico.id}
            className="bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-700 shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Conteúdo principal */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      servico.cor === "green"
                        ? "bg-green-600"
                        : servico.cor === "blue"
                        ? "bg-blue-600"
                        : "bg-purple-600"
                    }`}
                  >
                    <servico.icone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {servico.titulo}
                    </h3>
                    <p className="text-lg text-gray-300">{servico.subtitulo}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {servico.descricao}
                </p>

                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-700 rounded-xl border border-gray-600">
                  <div>
                    <p className="text-sm font-medium text-gray-300 mb-1">
                      Investment
                    </p>
                    <p className="text-lg font-bold text-white">
                      {servico.preco}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300 mb-1">
                      Timeline
                    </p>
                    <p className="text-lg font-bold text-white">
                      {servico.duracao}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contact"
                    className={`${
                      servico.cor === "green"
                        ? "bg-green-600 hover:bg-green-700"
                        : servico.cor === "blue"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-purple-600 hover:bg-purple-700"
                    } text-white rounded-lg px-6 py-3 font-medium transition-colors duration-200 text-center flex items-center justify-center gap-2`}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    className={`border ${
                      servico.cor === "green"
                        ? "border-green-600 text-green-400 hover:bg-green-600"
                        : servico.cor === "blue"
                        ? "border-blue-600 text-blue-400 hover:bg-blue-600"
                        : "border-purple-600 text-purple-400 hover:bg-purple-600"
                    } hover:text-white bg-transparent rounded-lg px-6 py-3 font-medium transition-colors duration-200`}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Benefícios */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Key Benefits
                  </h4>
                  <div className="space-y-3">
                    {servico.beneficios.map((beneficio, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check
                          className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                            servico.cor === "green"
                              ? "text-green-400"
                              : servico.cor === "blue"
                              ? "text-blue-400"
                              : "text-purple-400"
                          }`}
                        />
                        <span className="text-gray-300">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                  <h5 className="font-semibold text-white mb-2">
                    Perfect for:
                  </h5>
                  <p className="text-sm text-gray-300">{servico.ideal_para}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
