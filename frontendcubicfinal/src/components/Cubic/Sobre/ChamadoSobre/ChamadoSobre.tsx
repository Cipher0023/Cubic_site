import React from "react";
import Link from "next/link";
import { MessageCircle, MapPin, Calendar, Coffee } from "lucide-react";

type Props = {};

export default function ChamadoSobre({}: Props) {
  return (
    <div className="gap-12 grid lg:grid-cols-2">
      <div>
        <h2 className="mb-6 font-bold text-base-content text-3xl">
          Como Trabalhamos
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex flex-shrink-0 justify-center items-center bg-accent rounded-full w-12 h-12">
              <MapPin className="w-6 h-6 text-accent-content" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-base-content text-lg">
                Abordagem <span className="text-info">presencial e local </span>
                em Primeiro Lugar
              </h3>
              <p className="text-base-content/75">
                Visitamos sua empresa para conversarmos presencialmente sobre o
                que você precisa e para ver o seu negócio em tempo real. Temos
                carinho com o seu negócio e sabemos que ter uma atenção
                individual no local é muito importante, caso deseje, tambem
                podemos atende-lo remotamente
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex flex-shrink-0 justify-center items-center bg-accent rounded-full w-12 h-12">
              <Calendar className="w-6 h-6 text-accent-content" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-base-content text-lg">
                Agenda Flexível
              </h3>
              <p className="text-base-content/75">
                Nos adaptamos à sua agenda e realidade. Sabemos que o dia a dia
                de um negócio é dinâmico e corrido, portanto não é você que se
                adapta ao sistema, é o sistema que se adapta a você
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex flex-shrink-0 justify-center items-center bg-accent rounded-full w-12 h-12">
              <Coffee className="w-6 h-6 text-accent-content" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-base-content text-lg">
                Toque Pessoal
              </h3>
              <p className="text-base-content/75">
                Acreditamos em criar relações pessoais com nossos clientes,
                portanto todos projetos feito pela Cubic são feitos sobe medida.
                Estamos sempre disponíveis para adaptar os designs, textos para
                o seu negócio!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-100 p-8 border border-base-300 rounded-2xl">
        <h3 className="mb-6 font-bold text-base-content text-2xl">
          Pronto para Trabalhar Juntos?
        </h3>
        <p className="mb-6 text-base-content/75">
          Adoraríamos conhecer seu negócio e discutir como podemos ajudar você a
          alcançar autonomia digital.
        </p>

        <div className="space-y-4">
          <Link
            href="/#contact"
            className="flex justify-center items-center gap-2 bg-accent hover:bg-accent/75 px-6 py-3 rounded-lg w-full font-medium transition-colors duration-200 text-accent-content"
          >
            <MessageCircle className="w-5 h-5" />
            Iniciar uma Conversa
          </Link>

          <Link
            href="/servicos"
            className="flex justify-center items-center gap-2 bg-transparent hover:bg-accent px-6 py-3 border border-accent rounded-lg w-full font-medium text-green-400 transition-colors duration-200 hover:text-accent-content"
          >
            Ver Nossos Serviços
          </Link>
        </div>

        <div className="mt-6 pt-6 border-gray-700 border-t">
          <p className="text-gray-400 text-sm text-center">
            Normalmente respondemos em até 24 horas • Consultoria gratuita • Sem
            compromisso
          </p>
        </div>
      </div>
    </div>
  );
}
