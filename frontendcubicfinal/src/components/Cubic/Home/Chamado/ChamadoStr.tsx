import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

type Props = object;

export default function ChamadoStr({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-base-200 via-base-100 to-base-200 p-20 pt-24 pb-16">
      <h2 className="mb-6 font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
        Autonomia digital{" "}
        <span className="text-primary"> para negócios reais</span>
      </h2>

      <p className="mx-auto mb-8 max-w-3xl text-gray-300 text-xl sm:text-2xl leading-relaxed">
        We build personalized e-commerces and web pages for small and
        medium-sized companies.
      </p>

      <div className="flex sm:flex-row flex-col justify-center items-center gap-4 mb-12">
        <Link
          href="#contact"
          className="flex items-center gap-2 bg-primary hover:bg-primary/30 shadow-lg hover:shadow-xl px-8 py-3 rounded-full font-semibold text-primary-content hover:text-primary text-lg transition-all duration-200"
        >
          Start your project
          <ArrowRight className="w-5 h-5" />
        </Link>

        <Link
          href="#contact"
          className="flex items-center gap-2 bg-transparent hover:bg-primary/30 px-8 py-3 border-2 border-primary rounded-full font-semibold text-primary hover:text-success text-lg transition-colors duration-200"
        >
          Contact us
          <Play className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
