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
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Modernidade",
    description: "Tecnologia e design de ponta.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Segurança",
    description: "Segurança de ponta a todo momento.",
  },
  {
    icon: <Gauge className="w-8 h-8 text-primary" />,
    title: "Velocidade",
    description: "Entrega veloz sem comprometer a qualidade",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Inovação",
    description: "Soluções criativas para desafios únicos do seu negócio",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Honestidade",
    description:
      "Comunicação e preços transparentes, simplificando a tecnologia",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Parseiria",
    description: "Seu sucesso é nosso sucesso.",
  },
];

export default function Valores() {
  return (
    <section className="py-12 px-4 bg-base-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Nossos Valores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {valores.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-4 p-6 "
          >
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-base-content/80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
