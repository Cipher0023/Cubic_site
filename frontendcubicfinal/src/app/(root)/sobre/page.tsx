import Link from "next/link";
import {
  Sparkles,
  Target,
  Heart,
  Zap,
  Shield,
  Users,
  Lightbulb,
  Award,
  TrendingUp,
  Code,
  MessageCircle,
  MapPin,
  Calendar,
  Coffee,
  MonitorCog,
  Rocket,
  MonitorPlay,
} from "lucide-react";
import HeaderSobre from "../../../components/Cubic/Sobre/HeaderSobre/HeaderSobre";
import Historia from "@/components/Cubic/Sobre/Historia/Historia";
import Timeline from "@/components/Cubic/Sobre/Timeline/Timeline";
import Valores from "@/components/Cubic/Sobre/Valores/Valores";
import NossaEquipe from "@/components/Cubic/Sobre/NossaEquipe/NossaEquipe";
import ChamadoSobre from "@/components/Cubic/Sobre/ChamadoSobre/ChamadoSobre";

export default function SobrePage() {
  const equipe = [
    {
      nome: "Alex Rodriguez",
      cargo: "Founder & Lead Developer",
      bio: "Full-stack developer with 8+ years of experience building scalable web applications. Passionate about creating digital solutions that empower small businesses.",
      especialidades: [
        "React/Next.js",
        "Node.js",
        "Database Design",
        "System Architecture",
      ],
      imagem: "/placeholder.svg?height=300&width=300&text=Alex+Rodriguez",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@cubic.com",
      },
    },
    {
      nome: "Sarah Chen",
      cargo: "UI/UX Designer",
      bio: "Creative designer focused on user experience and conversion optimization. Believes that great design should be both beautiful and functional.",
      especialidades: [
        "UI/UX Design",
        "Conversion Optimization",
        "Brand Identity",
        "User Research",
      ],
      imagem: "/placeholder.svg?height=300&width=300&text=Sarah+Chen",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@cubic.com",
      },
    },
    {
      nome: "Marcus Johnson",
      cargo: "Backend Specialist",
      bio: "Infrastructure expert who ensures our solutions are secure, scalable, and performant. Loves solving complex technical challenges.",
      especialidades: [
        "Cloud Infrastructure",
        "Database Optimization",
        "Security",
        "Performance",
      ],
      imagem: "/placeholder.svg?height=300&width=300&text=Marcus+Johnson",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "marcus@cubic.com",
      },
    },
  ];

  const timeline = [
    {
      ano: "2023",
      titulo: "O começo",
      descricao:
        "O idealizador Daniel S. Esparza percebe a necessidade de boas tecnologias para empresas durante seus estudos na USP",
      icone: Rocket,
      detalhes:
        "Vendo que era um setor com muitas possibilidades de crescimento e muitas dores, decide dar atenção ao tema",
    },
    {
      ano: " Outubro 2024",
      titulo: "Primeiros esboços",
      descricao:
        "Daniel inicia os primeiros esboços do que seriam as tecnologias e produtos usados e criados pela Cubic.",
      icone: MonitorCog,
      detalhes:
        "Neste momento muitas ideias são criadas e descartadas rapidamente, somente ficando aquilo que se mostra sólido para o crescimento da empresa",
    },
    {
      ano: "Fevereiro 2025",
      titulo: "Definiçoes de Desenvolvimento",
      descricao:
        "Após muitos esboços criados e alterados, é definido como será feito o primeiro protótipo!",
      icone: MonitorPlay,
      detalhes:
        "Durante este estágio testamos várias maneiras de criar produtos para a Cubic, buscávamos uma solução que fosse rápida e customizável com suporte a ferramenteas de Ia.",
    },
    {
      ano: "Junho 2025",
      titulo: "Mais membros, mais desenvolvimento",
      descricao:
        "Luan de Lima Sales, bacharel em engenharia mecânica pela UFSCar entra para a Cubic para a Cubic para auxiliar no desenvolvimento",
      icone: Award,
      detalhes:
        "Daniel e Luan eram colegas desde o início do curso de engenharia mecânica na UFSCar, apesar da saída de Daniel do curso, a amizade manteve-se. Luan sempre viu os planos de Daniel de criar uma empresa no setor de tecnologia, quando viu que estava acontecendo, não dúvidou que seria uma ótima empreitada juntos!",
    },
    {
      ano: "Junho 2025",
      titulo: "Mais membros, mais organização",
      descricao:
        "Leonardo Prado, mestrando em engenharia de produção pela USP entra para a Cubic como o primeiro gestor/CEO da Cubic",
      icone: Award,
      detalhes:
        "Daniel e Leonardo sempre tiveram uma via empreendedora, quando se conheceram, a vontade de empreender juntos surgiu. Após a venda de um carro, Daniel apresenta a Cubic a Leonardo, animado com os bons caminhos do que viu, decide participar da empreeitada e vira o primeiro gestor e CEO da Cubic!",
    },
    {
      ano: "Julho 2025",
      titulo: "Equipe formada!",
      descricao:
        "Em julho de 2025 completamos o quadro de sócios, cada um com uma habilidade que aumentava a qualidade do conjunto!",
      icone: TrendingUp,
      detalhes:
        "Kaio Sasaki bacharel em engenharia de materiais pela USP e especialista em UI UX, Arthur Moano/Burro estudannte de engenharia química na UFSCar especialista em comunicação e aprendiz de desenvolvimento, Arthur Baitos estudante de Ciência da computação pela USP especialista em estruturação de projetos",
    },
    {
      ano: "Julho 2025",
      titulo: "Backend padrão criado",
      descricao:
        "Após meses de desenvolvimento e testes chegamos a um backend seguro e escalável com as melhores tecnologias",
      icone: MonitorPlay,
      detalhes:
        "A ideia por trás é ter um padrão moldável ao qual podemos iterar sobre a alterar partes, de modo ao backend se moldar as necessidades básicas da maioria dos negócios.",
    },
    {
      ano: "começo de Agosto 2025",
      titulo: "Site oficial da Cubic é criado, com duas demonstrações!",
      descricao:
        "Em Agosto de 2025 a cubic pode ser acessada por meio do website https://cubic-dev.com! no site é possivel ver demostrações interativas dos nossos produtos!",
      icone: Sparkles,
      detalhes: "Site online e clientes vendo nosso dia a dia",
    },
  ];

  const estatisticas = [
    { numero: "50+", label: "Happy Clients", icone: Users },
    { numero: "100+", label: "Projects Completed", icone: Code },
    { numero: "99.9%", label: "Uptime Guarantee", icone: Shield },
    { numero: "24/7", label: "Support Available", icone: MessageCircle },
  ];

  const valores = [
    {
      icone: Zap,
      titulo: "Moderno & Rápido",
      descricao:
        "Usamos tecnologia de ponta para entregar soluções que não são apenas modernas, mas também extremamente rápidas.",
      detalhes:
        "Cada projeto é construído com os frameworks mais recentes e otimizado para máximo desempenho.",
    },
    {
      icone: Shield,
      titulo: "Confiável",
      descricao:
        "Confiabilidade e confiança são a base de cada parceria que construímos com nossos clientes.",
      detalhes:
        "Mantemos uma comunicação transparente e entregamos exatamente o que prometemos, no prazo prometido.",
    },
    {
      icone: Target,
      titulo: "Focado em Resultados",
      descricao:
        "Cada decisão que tomamos é guiada por um objetivo: entregar resultados mensuráveis para o seu negócio.",
      detalhes:
        "Não construímos apenas sites; criamos soluções digitais que impulsionam crescimento e sucesso.",
    },
    {
      icone: Lightbulb,
      titulo: "Inovador",
      descricao:
        "Exploramos constantemente novas tecnologias e abordagens para resolver desafios únicos de negócios.",
      detalhes:
        "Inovação não é apenas usar novas tecnologias — é encontrar soluções criativas para problemas reais.",
    },
    {
      icone: Heart,
      titulo: "Honesto & Transparente",
      descricao:
        "Acreditamos em comunicação honesta, preços justos e processos transparentes em todos os projetos.",
      detalhes:
        "Sem taxas ocultas, sem surpresas. Apenas trabalho honesto e comunicação clara do início ao fim.",
    },
    {
      icone: Users,
      titulo: "Parceria Verdadeira",
      descricao:
        "Não trabalhamos apenas para você — trabalhamos com você como verdadeiros parceiros na sua transformação digital.",
      detalhes:
        "O seu sucesso é o nosso sucesso. Estamos comprometidos com o seu crescimento a longo prazo e autonomia digital.",
    },
  ];

  return (
    <div className="bg-base-200 min-h-screen">
      {/* Header da página */}
      <HeaderSobre estatisticas={estatisticas} />

      <main className="mx-auto px-4 sm:px-6 lg:px-8 container">
        {/* Nossa História */}
        <Historia />

        {/* Timeline */}
        <section className="py-20">
          <Timeline timeline={timeline} />
        </section>

        {/* Nossos Valores */}
        <section className="bg-gradient-to-r from-base-100 to-base-300 my-20 py-20 border border-base-300 rounded-3xl">
          <Valores valores={valores} />
        </section>

        {/* Nossa Equipe */}
        <section className="py-20">
          <NossaEquipe equipe={equipe} />
        </section>

        {/* Localização e Contato */}
        <section className="py-20">
          <ChamadoSobre />
        </section>
      </main>
    </div>
  );
}
