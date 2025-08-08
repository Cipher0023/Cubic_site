import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

type Props = object;

export default function ServicesHero({}: Props) {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
      <div className="max-w-4xl">
        <h1 className="mb-6 font-bold text-white text-5xl sm:text-6xl">
          Soluções digitais que{" "}
          <span className="text-primary">entregam resultados</span>
        </h1>
        <p className="mb-8 text-gray-300 text-xl leading-relaxed">
          Não apenas criamos sites ou sistemas, somos parceiros de negócio,
          preparados para te ajudar na nossa área de expertise.
        </p>

        <div className="flex sm:flex-row flex-col gap-4 mb-8">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/30 px-8 py-4 rounded-full font-medium hover:text-accent text-lg transition-colors duration-200 text-accent-content"
          >
            Consultoria grátis
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-accent px-8 py-4 border border-accent rounded-full font-medium text-green-400 text-lg transition-colors duration-200 hover:text-accent-content"
          >
            Veja nossos Serviços
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center text-gray-300">
            <Check className="mr-2 w-5 h-5 text-green-400" />
            Free consultation & quote
          </div>
          <div className="flex items-center text-gray-300">
            <Check className="mr-2 w-5 h-5 text-green-400" />
            100% satisfaction guarantee
          </div>
          <div className="flex items-center text-gray-300">
            <Check className="mr-2 w-5 h-5 text-green-400" />3 months free
            support
          </div>
        </div>
      </div>
    </div>
  );
}
