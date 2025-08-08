import Link from "next/link";
import {
  ShoppingCart,
  Globe,
  Database,
  Check,
  Clock,
  Headphones,
  Shield,
  Zap,
  Target,
  Lightbulb,
  MessageCircle,
  Calendar,
  Award,
  TrendingUp,
} from "lucide-react";
import ServicesHero from "@/components/Cubic/Serviços/ServicesHero.tsx/ServicesHero";
import ServicoCard, {
  Servico,
} from "@/components/Cubic/Serviços/Card/ServicoCard";
import Process from "@/components/Cubic/Serviços/Process/Process";
import Garantias from "@/components/Cubic/Serviços/Garantias/Garantias";

export default function ServicosPage() {
  const servicos: Servico[] = [
    {
      id: 1,
      icone: ShoppingCart,
      titulo: "Desenvolvimento de E-commerce",
      subtitulo: "Soluções completas para loja online",
      descricao:
        "Transforme seu negócio com uma plataforma de e-commerce completa. A gente cuida de tudo, do design à integração de pagamentos, pra você ter uma presença online profissional que realmente vende.",
      preco: "A partir de R$ 12.500",
      duracao: "4-8 semanas",
      beneficios: [
        "Aumente suas vendas em até 300%",
        "Sistema de vendas automatizado 24/7",
        "Marca mais profissional",
        "Experiência de compra otimizada pro celular",
        "Pagamentos seguros",
        "Gestão de estoque fácil",
      ],
      ideal_para: "Lojas, fabricantes, distribuidores",
      cor: "green",
    },
    {
      id: 2,
      icone: Globe,
      titulo: "Criação de Landing Page",
      subtitulo: "Páginas promocionais que convertem",
      descricao:
        "Conquiste mais clientes com landing pages feitas pra converter. Cada detalhe é pensado pra levar o visitante a agir, seja comprando ou entrando em contato.",
      preco: "A partir de R$ 4.000",
      duracao: "1-3 semanas",
      beneficios: [
        "Aumente suas conversões em até 150%",
        "Gere leads qualificados todo dia",
        "Mais credibilidade pra sua marca",
        "Carregamento rápido",
        "Conteúdo otimizado pra SEO",
        "Design focado no mobile",
      ],
      ideal_para: "Prestadores de serviço, consultores, lançamentos",
      cor: "blue",
    },
    {
      id: 3,
      icone: Database,
      titulo: "Infraestrutura Digital",
      subtitulo: "Back-end escalável de verdade",
      descricao:
        "Monte uma base sólida pro seu crescimento digital. A gente cria infraestrutura robusta, segura e pronta pra escalar junto com o seu negócio, sem dor de cabeça com picos de acesso.",
      preco: "A partir de R$ 7.500",
      duracao: "2-6 semanas",
      beneficios: [
        "Garantia de 99,9% de uptime",
        "Escalabilidade automática",
        "Segurança nível empresa",
        "Otimização de performance",
        "Monitoramento 24/7",
        "Plano de recuperação de desastres",
      ],
      ideal_para: "Empresas em crescimento, startups, sistemas corporativos",
      cor: "purple",
    },
  ];

  const metodologia = [
    {
      numero: "01",
      titulo: "Descoberta",
      descricao:
        "A gente mergulha nos seus objetivos, público e concorrência pra bolar a estratégia perfeita.",
      icone: Target,
      detalhes: [
        "Análise do negócio",
        "Pesquisa de mercado",
        "Definição de metas",
        "Métricas de sucesso",
      ],
    },
    {
      numero: "02",
      titulo: "Estratégia",
      descricao:
        "Com tudo em mãos, montamos um plano completo que cabe no seu bolso e nos seus objetivos.",
      icone: Lightbulb,
      detalhes: [
        "Arquitetura da solução",
        "Planejamento de prazos",
        "Alocação de recursos",
        "Avaliação de riscos",
      ],
    },
    {
      numero: "03",
      titulo: "Execução",
      descricao:
        "Nosso time coloca a mão na massa e te mantém por dentro de tudo, sem enrolação.",
      icone: Zap,
      detalhes: [
        "Desenvolvimento ágil",
        "Acompanhamento constante",
        "Garantia de qualidade",
        "Testes de performance",
      ],
    },
    {
      numero: "04",
      titulo: "Crescimento",
      descricao:
        "A gente não some depois da entrega. Seguimos juntos pra garantir seu sucesso.",
      icone: TrendingUp,
      detalhes: [
        "Monitoramento de performance",
        "Otimização contínua",
        "Suporte técnico",
        "Consultoria pra crescer",
      ],
    },
  ];

  const garantias = [
    {
      icone: Shield,
      titulo: "Satisfação 100% Garantida",
      descricao:
        "Se não ficar satisfeito, a gente ajusta até você ficar ou devolve seu dinheiro.",
    },
    {
      icone: Clock,
      titulo: "Entrega no Prazo",
      descricao:
        "A gente respeita seu tempo e entrega tudo dentro do combinado, sempre.",
    },
    {
      icone: Headphones,
      titulo: "Suporte Garantido",
      descricao:
        "Você ganha 3 meses de suporte e manutenção grátis em todo projeto.",
    },
    {
      icone: Award,
      titulo: "Qualidade Garantida",
      descricao: "Todo projeto passa por testes pesados antes de ir pro ar.",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Header da página */}
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-gray-700 border-b">
        <ServicesHero />
      </header>

      <main className="mx-auto px-4 sm:px-6 lg:px-8 container">
        {/* Serviços principais */}
        <section id="services" className="py-20">
          <ServicoCard servicos={servicos} />
        </section>

        {/* Nossa Metodologia */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 my-20 py-20 border border-gray-600 rounded-3xl">
          <Process metodologia={metodologia} />
        </section>

        {/* Garantias */}
        <section className="py-20">
          <Garantias garantias={garantias} />
        </section>

        {/* CTA Final */}
        <section id="contact" className="py-20">
          <div className="bg-gradient-to-b from-info to-info/30 p-8 lg:p-16 rounded-3xl text-info-content text-center">
            <h2 className="mb-6 font-bold text-4xl">
              Bora transformar seu negócio?
            </h2>
            <p className="opacity-90 mx-auto mb-8 max-w-3xl text-2xl">
              Peça uma consultoria gratuita e receba uma proposta detalhada. A
              gente analisa sua necessidade e mostra exatamente como pode te
              ajudar a bater suas metas.
            </p>

            <div className="flex sm:flex-row flex-col justify-center gap-4 mb-8">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-info hover:bg-secondary px-8 py-4 rounded-full font-medium hover:text-info text-base-content text-lg transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Quero consultoria grátis
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white px-8 py-4 border-2 border-white rounded-full font-medium text-white hover:text-info text-lg transition-colors duration-200"
              >
                <Calendar className="w-5 h-5" />
                Agendar uma call
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 opacity-90 text-base-content text-lg">
              <div className="flex items-center">
                <Check className="mr-2 w-4 h-4" />
                Sem compromisso
              </div>
              <div className="flex items-center">
                <Check className="mr-2 w-4 h-4" />
                Resposta em até 24h
              </div>
              <div className="flex items-center">
                <Check className="mr-2 w-4 h-4" />
                Proposta sob medida
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
