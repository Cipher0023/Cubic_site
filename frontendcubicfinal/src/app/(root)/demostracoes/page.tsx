"use client";

import Link from "next/link";
import { ShoppingCart, Globe } from "lucide-react";
import Demonstracao from "@/components/Cubic/Demonstracoes/Demonstracao";

export default function ProdutosPage() {
  const projetos = [
    {
      id: 1,
      tipo: "E-commerce Completo",
      titulo: "Loja Online Funcional",
      subtitulo: "Plataforma completa de vendas online",
      descricao:
        "E-commerce totalmente funcional desenvolvido do zero, com todas as funcionalidades necessárias para vendas online. Inclui catálogo de produtos, carrinho de compras, processamento de pagamentos, painel administrativo completo e sistema de gestão de pedidos.",
      imagem: "/placeholder.svg?height=400&width=600&text=E-commerce+Funcional",
      icone: ShoppingCart,
      funcionalidades: [
        "Catálogo de produtos com categorias",
        "Carrinho de compras inteligente",
        "Checkout seguro e otimizado",
        "Integração com gateways de pagamento",
        "Painel administrativo completo",
        "Gestão de estoque em tempo real",
        "Sistema de pedidos e entregas",
        "Área do cliente personalizada",
        "Relatórios de vendas detalhados",
        "SEO otimizado para produtos",
      ],
      tecnologias: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Stripe",
        "Database",
        "Admin Panel",
      ],
      status: "Ativo",
      lancamento: "2024",
      clientes: "Empresas de varejo",
      resultados: [
        "100% funcional e operacional",
        "Interface moderna e responsiva",
        "Pagamentos seguros integrados",
        "Painel admin intuitivo",
      ],
      link: "/restaurante",
    },
    {
      id: 2,
      tipo: "Landing Page",
      titulo: "Página de Conversão",
      subtitulo: "Design focado em resultados",
      descricao:
        "Landing page profissional desenvolvida com foco total em conversão. Design moderno, responsivo e otimizado para capturar leads e apresentar produtos/serviços de forma convincente, com carregamento ultra-rápido e integração com ferramentas de analytics.",
      imagem:
        "/placeholder.svg?height=400&width=600&text=Landing+Page+Conversão",
      icone: Globe,
      funcionalidades: [
        "Design focado em conversão",
        "Formulários de captação otimizados",
        "Call-to-actions estratégicos",
        "Seções de depoimentos",
        "Galeria de produtos/serviços",
        "Integração com WhatsApp",
        "SEO completamente otimizado",
        "Carregamento ultra-rápido",
        "Analytics e tracking integrados",
        "Mobile-first responsive",
      ],
      tecnologias: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Forms",
        "Analytics",
        "SEO",
      ],
      status: "Ativo",
      lancamento: "2024",
      clientes: "PMEs e profissionais liberais",
      resultados: [
        "Alta taxa de conversão",
        "Carregamento em menos de 2s",
        "100% responsivo",
        "SEO otimizado",
      ],
      link: "/landingpage",
    },
  ];

  return (
    <div className="bg-base-200 min-h-screen">
      {/* Header da página */}
      <header className="bg-gradient-to-r from-bse-200 to-base-100 border-gray-700 border-b">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 container">
          <div className="max-w-3xl">
            <h1 className="mb-4 font-bold text-accent text-4xl sm:text-5xl">
              Nossos Produtos
            </h1>
            <p className="text-base-content text-xl leading-relaxed">
              Conheça os dois projetos que desenvolvemos e mantemos atualmente.
              Cada um representa nossa expertise em diferentes áreas do
              desenvolvimento web.
            </p>
          </div>
        </div>
      </header>

      {/* Projetos */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-16 container">
        {projetos.map((projeto, index) => (
          <Demonstracao key={projeto.id} projeto={projeto} index={index} />
        ))}

        {/* Seção de contato */}
        <div className="bg-gradient-to-r from-base-100 to-base-300 mt-20 p-8 lg:p-12 border border-base-300 rounded-2xl text-center">
          <h2 className="mb-4 font-bold text-white text-3xl">
            Interessado em um Projeto Similar?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300 text-lg">
            Desenvolvemos soluções personalizadas baseadas na experiência destes
            projetos. Entre em contato para discutirmos como podemos criar algo
            único para o seu negócio.
          </p>
          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-block bg-accent hover:bg-green-700 px-8 py-4 rounded-full font-medium text-white text-lg transition-colors duration-200"
            >
              Solicitar Orçamento Gratuito
            </Link>
            <Link
              href="/"
              className="inline-block bg-transparent hover:bg-accent px-8 py-4 border border-green-600 rounded-full font-medium text-green-400 hover:text-white text-lg transition-colors duration-200"
            >
              Conhecer nossos serviços
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
