"use client";
import React from "react";
import Link from "next/link";
import PricingCard from "./Card/PricingCard";
import { ShoppingCart, Globe, Database } from "lucide-react";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  itemName: string[];
};

export default function ServiçosHome() {
  const services: Service[] = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Loja digital E-commerce",
      description: "Loja online completa para seu negócio",
      itemName: ["Loja virtual", "Carrinho integrado", "Pagamentos seguros"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Site personalizado Minha loja",
      description: "Sites institucionais responsivos",
      itemName: ["Até 10 páginas", "SEO básico", "Design customizável"],
    },
    {
      icon: <Database className="w-8 h-8" />,
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
    <section
      id="services"
      className="flex flex-col justify-center items-center gap-10 px-4 py-12"
    >
      <h2 className="mb-6 font-bold text-primary text-6xl">Nossos Serviços</h2>
      <p className="pb-5 w-3/5 text-gray-300 text-2xl leading-relaxed">
        Soluções digitais completas, projetadas para transformar o seu negócio e
        oferecer a autonomia que você precisa para ter sucesso no ambiente
        online.
      </p>
      <div className="justify-items-center gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mx-auto w-full max-w-7xl">
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

      <Link href="/servicos" className="mt-12 w-1/4 text-xl btn btn-info">
        Saiba mais
      </Link>
    </section>
  );
}
