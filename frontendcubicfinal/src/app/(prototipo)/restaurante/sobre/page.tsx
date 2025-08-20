"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Award,
  Target,
  Heart,
  Truck,
  Shield,
  Star,
} from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "2018",
      title: "Fundação da Empresa",
      description:
        "Iniciamos nossa jornada com o sonho de revolucionar o e-commerce brasileiro, oferecendo produtos de qualidade com preços justos.",
    },
    {
      year: "2019",
      title: "Primeiro Milhão",
      description:
        "Alcançamos nossa primeira marca de 1 milhão de produtos vendidos, consolidando nossa presença no mercado nacional.",
    },
    {
      year: "2020",
      title: "Expansão Digital",
      description:
        "Durante a pandemia, investimos pesado em tecnologia e logística, triplicando nossa capacidade de entrega.",
    },
    {
      year: "2021",
      title: "Sustentabilidade",
      description:
        "Lançamos nosso programa de sustentabilidade, com embalagens 100% recicláveis e neutralização de carbono.",
    },
    {
      year: "2022",
      title: "Marketplace",
      description:
        "Abrimos nossa plataforma para vendedores parceiros, criando um ecossistema completo de comércio eletrônico.",
    },
    {
      year: "2023",
      title: "Inteligência Artificial",
      description:
        "Implementamos IA para personalização de experiência, recomendações inteligentes e atendimento automatizado.",
    },
    {
      year: "2024",
      title: "Expansão Internacional",
      description:
        "Iniciamos operações na América Latina, levando nossa expertise para novos mercados.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Paixão pelo Cliente",
      description:
        "Colocamos nossos clientes no centro de tudo que fazemos, sempre buscando superar expectativas.",
    },
    {
      icon: Shield,
      title: "Confiança e Segurança",
      description:
        "Garantimos transações seguras e proteção total dos dados dos nossos usuários.",
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description:
        "Logística eficiente para entregas no prazo, com rastreamento em tempo real.",
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description:
        "Selecionamos cuidadosamente cada produto para garantir a melhor experiência.",
    },
  ];

  const stats = [
    { number: "6+", label: "Anos de Experiência" },
    { number: "10M+", label: "Produtos Vendidos" },
    { number: "500K+", label: "Clientes Satisfeitos" },
    { number: "50+", label: "Cidades Atendidas" },
  ];

  return (
    <div className="bg-background pt-20 pb-20 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 dark:from-blue-950 to-indigo-100 dark:to-indigo-900 py-16">
        <div className="mx-auto px-4 text-center container">
          <Badge variant="secondary" className="mb-4">
            <Building2 className="mr-2 w-4 h-4" />
            Nossa História
          </Badge>
          <h1 className="mb-6 font-bold text-gray-900 dark:text-white text-4xl md:text-6xl">
            Sobre Nós
          </h1>
          <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
            Somos uma empresa brasileira apaixonada por tecnologia e inovação,
            dedicada a transformar a experiência de compras online no país.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="mx-auto px-4 container">
          <div className="gap-8 grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 font-bold text-blue-600 dark:text-blue-400 text-3xl md:text-4xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="mx-auto px-4 container">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="mb-6 font-bold text-gray-900 dark:text-white text-3xl md:text-4xl">
              Nossa Missão
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Democratizar o acesso a produtos de qualidade através da
              tecnologia, criando uma experiência de compra excepcional que
              conecta pessoas, marcas e sonhos em um só lugar.
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <Target className="mb-4 w-12 h-12 text-blue-600 dark:text-blue-400" />
                <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-2xl">
                  Nossa Visão
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ser a plataforma de e-commerce mais confiável e inovadora da
                  América Latina, reconhecida pela excelência no atendimento e
                  pela transformação digital do varejo.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="mb-4 w-12 h-12 text-green-600 dark:text-green-400" />
                <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-2xl">
                  Nossos Valores
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transparência, inovação, sustentabilidade e foco no cliente
                  são os pilares que guiam cada decisão e ação em nossa empresa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="mx-auto px-4 container">
          <h2 className="mb-12 font-bold text-gray-900 dark:text-white text-3xl md:text-4xl text-center">
            O Que Nos Move
          </h2>
          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-lg p-6 text-center transition-shadow"
              >
                <CardContent className="p-0">
                  <value.icon className="mx-auto mb-4 w-12 h-12 text-blue-600 dark:text-blue-400" />
                  <h3 className="mb-3 font-bold text-gray-900 dark:text-white text-xl">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16">
        <div className="mx-auto px-4 container">
          <h2 className="mb-12 font-bold text-gray-900 dark:text-white text-3xl md:text-4xl text-center">
            Nossa Jornada
          </h2>
          <div className="mx-auto max-w-4xl">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center bg-blue-600 dark:bg-blue-400 rounded-full w-12 h-12 font-bold text-white text-sm">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="bg-gray-300 dark:bg-gray-600 mt-4 w-0.5 h-16"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="mb-2 font-bold text-gray-900 dark:text-white text-xl">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 dark:bg-blue-700 py-16">
        <div className="mx-auto px-4 text-center container">
          <Award className="mx-auto mb-6 w-16 h-16 text-white" />
          <h2 className="mb-6 font-bold text-white text-3xl md:text-4xl">
            Faça Parte da Nossa História
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100 text-xl">
            Junte-se a milhares de clientes satisfeitos e descubra por que somos
            a escolha preferida para compras online.
          </p>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Começar a Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}
