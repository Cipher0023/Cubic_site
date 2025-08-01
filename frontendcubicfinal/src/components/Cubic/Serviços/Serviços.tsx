"use client";
import React from "react";
import PricingCard from "./Card/PricingCard";
import { ShoppingCart, Globe, Database } from "lucide-react";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  itemName: string[];
};

export default function Serviços() {
  const services: Service[] = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: "Loja digital E-commerce",
      description: "Loja online completa para seu negócio",
      itemName: ["Loja virtual", "Carrinho integrado", "Pagamentos seguros"],
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Site personalizado Minha loja",
      description: "Sites institucionais responsivos",
      itemName: ["Até 10 páginas", "SEO básico", "Design customizável"],
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Performance",
      description: "Otimizações e análises de velocidade",
      itemName: [
        "Relatórios semanais",
        "Compressão de ativos",
        "Cache configurado",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-2xl font-bold mb-4">Nossos Serviços</h2>
      <p className="mb-8 text-center max-w-2xl">
        Soluções digitais completas, projetadas para transformar o seu negócio e
        oferecer a autonomia que você precisa para ter sucesso no ambiente
        online.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto justify-items-center">
        {services.map((srv, idx) => (
          <PricingCard
            key={idx}
            icon={srv.icon}
            title={srv.title}
            description={srv.description}
            itemName={srv.itemName}
          />
        ))}
      </div>

      <button className="btn btn-primary mt-12 w-full">Saiba mais</button>
    </section>
  );
}
