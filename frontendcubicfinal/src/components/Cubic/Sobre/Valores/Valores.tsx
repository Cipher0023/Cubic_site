"use client";
import React from "react";
import { Zap, Shield, Gauge, Lightbulb, Heart, Users } from "lucide-react";

type ValorItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const valores: ValorItem[] = [
  {
    icon: <Zap className="w-14 h-14 text-primary" />,
    title: "Modernidade",
    description: "Tecnologia e design de ponta.",
  },
  {
    icon: <Shield className="w-14 h-14 text-primary" />,
    title: "Segurança",
    description: "Segurança de ponta a todo momento.",
  },
  {
    icon: <Gauge className="w-14 h-14 text-primary" />,
    title: "Velocidade",
    description: "Entrega veloz sem comprometer a qualidade",
  },
  {
    icon: <Lightbulb className="w-14 h-14 text-primary" />,
    title: "Inovação",
    description: "Soluções criativas para desafios únicos do seu negócio",
  },
  {
    icon: <Heart className="w-14 h-14 text-primary" />,
    title: "Honestidade",
    description:
      "Comunicação e preços transparentes, simplificando a tecnologia",
  },
  {
    icon: <Users className="w-14 h-14 text-primary" />,
    title: "Parseiria",
    description: "Seu sucesso é nosso sucesso.",
  },
];

export default function Valores() {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-8 font-bold text-3xl text-center">Nossos Valores</h2>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {valores.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-4 p-6 text-center"
          >
            {item.icon}
            <h3 className="font-semibold text-xl">{item.title}</h3>
            <p className="text-base-content/80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
