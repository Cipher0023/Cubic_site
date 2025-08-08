import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Heart,
  Zap,
  Shield,
  Users,
  Lightbulb,
  Award,
  TrendingUp,
  Code,
  Palette,
  Database,
  MessageCircle,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Coffee,
  MonitorCog,
  Rocket,
  MonitorPlay,
} from "lucide-react";
import HeaderSobre from "./HeaderSobre/HeaderSobre";
import Historia from "@/components/Cubic/Sobre/Historia/Historia";
import Timeline from "@/components/Cubic/Sobre/Timeline/Timeline";

export default function SobrePage() {
  const valores = [
    {
      icone: Zap,
      titulo: "Modern & Fast",
      descricao:
        "We use cutting-edge technology to deliver solutions that are not only modern but also lightning-fast.",
      detalhes:
        "Every project is built with the latest frameworks and optimized for maximum performance.",
    },
    {
      icone: Shield,
      titulo: "Trustworthy",
      descricao:
        "Reliability and trust are the foundation of every partnership we build with our clients.",
      detalhes:
        "We maintain transparent communication and deliver exactly what we promise, when we promise it.",
    },
    {
      icone: Target,
      titulo: "Results-Focused",
      descricao:
        "Every decision we make is driven by one goal: delivering measurable results for your business.",
      detalhes:
        "We don't just build websites; we create digital solutions that drive growth and success.",
    },
    {
      icone: Lightbulb,
      titulo: "Innovative",
      descricao:
        "We constantly explore new technologies and approaches to solve unique business challenges.",
      detalhes:
        "Innovation isn't just about using new tech—it's about finding creative solutions to real problems.",
    },
    {
      icone: Heart,
      titulo: "Honest & Transparent",
      descricao:
        "We believe in honest communication, fair pricing, and transparent processes throughout every project.",
      detalhes:
        "No hidden fees, no surprises. Just honest work and clear communication from start to finish.",
    },
    {
      icone: Users,
      titulo: "True Partnership",
      descricao:
        "We don't just work for you—we work with you as true partners in your digital transformation.",
      detalhes:
        "Your success is our success. We're invested in your long-term growth and digital autonomy.",
    },
  ];

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
        "Após muitos esboços criados e alterados, é definido como será feito o primeiro protótipo",
      icone: MonitorPlay,
      detalhes:
        "Expanded capabilities to offer comprehensive digital transformation services.",
    },
    {
      ano: "Julho 2025",
      titulo: "Backend inicial criado",
      descricao:
        "Serving 50+ businesses with custom digital solutions and ongoing support.",
      icone: Award,
      detalhes:
        "Continuing to innovate and help businesses thrive in the digital landscape.",
    },
    {
      ano: "2024",
      titulo: "Present Day",
      descricao:
        "Serving 50+ businesses with custom digital solutions and ongoing support.",
      icone: Award,
      detalhes:
        "Continuing to innovate and help businesses thrive in the digital landscape.",
    },
  ];

  const estatisticas = [
    { numero: "50+", label: "Happy Clients", icone: Users },
    { numero: "100+", label: "Projects Completed", icone: Code },
    { numero: "99.9%", label: "Uptime Guarantee", icone: Shield },
    { numero: "24/7", label: "Support Available", icone: MessageCircle },
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
        <section className="bg-gradient-to-r from-gray-800 to-gray-700 my-20 py-20 border border-gray-600 rounded-3xl">
          <div className="px-8 lg:px-12">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-bold text-white text-4xl">Our Values</h2>
              <p className="mx-auto max-w-3xl text-gray-300 text-xl">
                These core principles guide everything we do and shape how we
                work with our clients.
              </p>
            </div>

            <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
              {valores.map((valor, index) => (
                <div
                  key={index}
                  className="group bg-gray-800 p-6 border border-gray-600 hover:border-accent rounded-xl transition-colors duration-200"
                >
                  <div className="flex justify-center items-center bg-accent mb-4 rounded-full w-12 h-12 group-hover:scale-110 transition-transform duration-200">
                    <valor.icone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-3 font-bold text-white text-xl">
                    {valor.titulo}
                  </h3>
                  <p className="mb-3 text-gray-300">{valor.descricao}</p>
                  <p className="text-gray-400 text-sm">{valor.detalhes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-20">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-bold text-white text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl">
              The talented individuals behind Cubic who make digital
              transformation possible for our clients.
            </p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
            {equipe.map((membro, index) => (
              <div
                key={index}
                className="bg-gray-800 shadow-lg hover:shadow-xl border border-gray-700 rounded-2xl overflow-hidden transition-shadow duration-300"
              >
                <div className="flex justify-center items-center bg-gradient-to-br from-gray-700 to-gray-800 aspect-square">
                  <Image
                    src={membro.imagem || "/placeholder.svg"}
                    alt={membro.nome}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-1 font-bold text-white text-xl">
                    {membro.nome}
                  </h3>
                  <p className="mb-3 font-medium text-green-400">
                    {membro.cargo}
                  </p>
                  <p className="mb-4 text-gray-300 text-sm leading-relaxed">
                    {membro.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-white text-sm">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {membro.especialidades.map((especialidade, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-700 px-2 py-1 border border-gray-600 rounded text-gray-300 text-xs"
                        >
                          {especialidade}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={membro.social.linkedin}
                      className="flex justify-center items-center bg-gray-700 hover:bg-green-600 rounded-full w-8 h-8 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 text-gray-300 hover:text-white" />
                    </Link>
                    <Link
                      href={membro.social.twitter}
                      className="flex justify-center items-center bg-gray-700 hover:bg-green-600 rounded-full w-8 h-8 transition-colors duration-200"
                    >
                      <Twitter className="w-4 h-4 text-gray-300 hover:text-white" />
                    </Link>
                    <Link
                      href={`mailto:${membro.social.email}`}
                      className="flex justify-center items-center bg-gray-700 hover:bg-green-600 rounded-full w-8 h-8 transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4 text-gray-300 hover:text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Localização e Contato */}
        <section className="py-20">
          <div className="gap-12 grid lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-bold text-white text-3xl">
                Where We Work
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-green-600 rounded-full w-12 h-12">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white text-lg">
                      Remote-First Approach
                    </h3>
                    <p className="text-gray-300">
                      We work remotely with clients worldwide, allowing us to
                      offer competitive rates while maintaining the highest
                      quality standards. This approach also means we're
                      available across different time zones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-green-600 rounded-full w-12 h-12">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white text-lg">
                      Flexible Scheduling
                    </h3>
                    <p className="text-gray-300">
                      We adapt to your schedule and time zone. Whether you
                      prefer morning meetings or late-night calls, we'll find a
                      time that works for both of us.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex flex-shrink-0 justify-center items-center bg-green-600 rounded-full w-12 h-12">
                    <Coffee className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white text-lg">
                      Personal Touch
                    </h3>
                    <p className="text-gray-300">
                      Despite being remote, we believe in building personal
                      relationships. We're always available for video calls, and
                      we love getting to know our clients and their businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 border border-gray-700 rounded-2xl">
              <h3 className="mb-6 font-bold text-white text-2xl">
                Ready to Work Together?
              </h3>
              <p className="mb-6 text-gray-300">
                We'd love to learn about your business and discuss how we can
                help you achieve digital autonomy.
              </p>

              <div className="space-y-4">
                <Link
                  href="/#contact"
                  className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg w-full font-medium text-white transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start a Conversation
                </Link>

                <Link
                  href="/servicos"
                  className="flex justify-center items-center gap-2 bg-transparent hover:bg-green-600 px-6 py-3 border border-green-600 rounded-lg w-full font-medium text-green-400 hover:text-white transition-colors duration-200"
                >
                  View Our Services
                </Link>
              </div>

              <div className="mt-6 pt-6 border-gray-700 border-t">
                <p className="text-gray-400 text-sm text-center">
                  Typically respond within 24 hours • Free consultation • No
                  commitment required
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
