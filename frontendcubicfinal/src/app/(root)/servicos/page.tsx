import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  Globe,
  Database,
  Check,
  Clock,
  Users,
  Headphones,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
  MessageCircle,
  Calendar,
  Award,
  TrendingUp,
} from "lucide-react";
import ServicesHero from "@/components/Cubic/HeroSection/ServicesHero.tsx/ServicesHero";
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
      titulo: "E-commerce Development",
      subtitulo: "Complete online store solutions",
      descricao:
        "Transform your business with a fully functional e-commerce platform. We handle everything from design to payment integration, giving you a professional online presence that drives sales.",
      preco: "Starting at $2,500",
      duracao: "4-8 weeks",
      beneficios: [
        "Increase sales by up to 300%",
        "24/7 automated sales system",
        "Professional brand presence",
        "Mobile-optimized shopping experience",
        "Secure payment processing",
        "Inventory management system",
      ],
      ideal_para: "Retail businesses, product manufacturers, distributors",
      cor: "green",
    },
    {
      id: 2,
      icone: Globe,
      titulo: "Landing Page Creation",
      subtitulo: "High-converting promotional pages",
      descricao:
        "Get more leads and customers with strategically designed landing pages. Every element is crafted to guide visitors toward taking action, whether that's making a purchase or getting in touch.",
      preco: "Starting at $800",
      duracao: "1-3 weeks",
      beneficios: [
        "Boost conversion rates by 150%",
        "Generate qualified leads daily",
        "Professional credibility",
        "Fast loading performance",
        "SEO optimized content",
        "Mobile-first design",
      ],
      ideal_para: "Service providers, consultants, product launches",
      cor: "blue",
    },
    {
      id: 3,
      icone: Database,
      titulo: "Digital Infrastructure",
      subtitulo: "Scalable backend solutions",
      descricao:
        "Build a solid foundation for your digital growth. We create robust, secure, and scalable infrastructure that grows with your business needs and handles increased traffic seamlessly.",
      preco: "Starting at $1,500",
      duracao: "2-6 weeks",
      beneficios: [
        "99.9% uptime guarantee",
        "Automatic scaling capabilities",
        "Enterprise-level security",
        "Performance optimization",
        "24/7 monitoring",
        "Disaster recovery",
      ],
      ideal_para: "Growing businesses, startups, enterprise systems",
      cor: "purple",
    },
  ];

  const metodologia = [
    {
      numero: "01",
      titulo: "Discovery",
      descricao:
        "We dive deep into your business goals, target audience, and competitive landscape to create the perfect strategy.",
      icone: Target,
      detalhes: [
        "Business analysis",
        "Market research",
        "Goal setting",
        "Success metrics",
      ],
    },
    {
      numero: "02",
      titulo: "Strategy",
      descricao:
        "Based on our findings, we develop a comprehensive plan that aligns with your objectives and budget.",
      icone: Lightbulb,
      detalhes: [
        "Solution architecture",
        "Timeline planning",
        "Resource allocation",
        "Risk assessment",
      ],
    },
    {
      numero: "03",
      titulo: "Execution",
      descricao:
        "Our expert team brings your vision to life with regular updates and transparent communication throughout.",
      icone: Zap,
      detalhes: [
        "Agile development",
        "Regular check-ins",
        "Quality assurance",
        "Performance testing",
      ],
    },
    {
      numero: "04",
      titulo: "Growth",
      descricao:
        "We don't just deliver and disappear. We provide ongoing support to ensure your continued success.",
      icone: TrendingUp,
      detalhes: [
        "Performance monitoring",
        "Optimization",
        "Technical support",
        "Growth consulting",
      ],
    },
  ];

  const garantias = [
    {
      icone: Shield,
      titulo: "100% Satisfaction Guarantee",
      descricao:
        "If you're not completely satisfied, we'll work until you are or provide a full refund.",
    },
    {
      icone: Clock,
      titulo: "On-Time Delivery",
      descricao:
        "We respect your timeline and deliver projects on schedule, every time.",
    },
    {
      icone: Headphones,
      titulo: "Ongoing Support",
      descricao:
        "Get 3 months of free support and maintenance with every project.",
    },
    {
      icone: Award,
      titulo: "Quality Assurance",
      descricao: "Every project goes through rigorous testing before launch.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header da página */}
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
        <ServicesHero />
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Serviços principais */}
        <section id="services" className="py-20">
          <ServicoCard servicos={servicos} />
        </section>

        {/* Nossa Metodologia */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl my-20 border border-gray-600">
          <Process metodologia={metodologia} />
        </section>

        {/* Garantias */}
        <section className="py-20">
          <Garantias garantias={garantias} />
        </section>

        {/* CTA Final */}
        <section id="contact" className="py-20">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Get a free consultation and detailed proposal. Well analyze your
              needs and show you exactly how we can help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/#contact"
                className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Start Free Consultation
              </Link>
              <Link
                href="/#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 rounded-full px-8 py-4 text-lg font-medium transition-colors duration-200 inline-flex items-center gap-2 bg-transparent"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
              <div className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                No commitment required
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Response within 24 hours
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Custom solution proposal
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
