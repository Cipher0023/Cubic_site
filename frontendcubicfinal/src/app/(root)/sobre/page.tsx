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
  Rocket,
} from "lucide-react";

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
      ano: "2022",
      titulo: "The Beginning",
      descricao:
        "Cubic was founded with a simple mission: help small businesses achieve digital autonomy.",
      icone: Rocket,
      detalhes:
        "Started as a freelance project, quickly grew into a full-service digital agency.",
    },
    {
      ano: "2023",
      titulo: "First Major Success",
      descricao:
        "Launched our first e-commerce platform that increased client sales by 300% in 6 months.",
      icone: TrendingUp,
      detalhes:
        "This success validated our approach and attracted more ambitious projects.",
    },
    {
      ano: "2024",
      titulo: "Team Expansion",
      descricao:
        "Grew our team to include specialized designers and infrastructure experts.",
      icone: Users,
      detalhes:
        "Expanded capabilities to offer comprehensive digital transformation services.",
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
    <div className="min-h-screen bg-gray-900">
      {/* Header da página */}
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About <span className="text-green-400">Cubic</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We're more than just a development agency. We're your partners in
              digital transformation, committed to helping small and medium
              businesses achieve true digital autonomy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {estatisticas.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icone className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.numero}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nossa História */}
        <section className="py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Cubic was born from a simple observation: too many small
                  businesses were being left behind in the digital revolution.
                  While large corporations had entire IT departments, smaller
                  companies struggled to find affordable, reliable digital
                  solutions.
                </p>
                <p>
                  We founded Cubic in 2022 with a clear mission: to democratize
                  digital transformation. We believe every business, regardless
                  of size, deserves access to modern, professional digital tools
                  that can compete with industry giants.
                </p>
                <p>
                  Today, we're proud to have helped over 50 businesses achieve
                  digital autonomy through custom e-commerce platforms,
                  high-converting landing pages, and robust digital
                  infrastructure. But we're just getting started.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-300">
                  To empower small and medium businesses with digital autonomy
                  through custom, scalable, and affordable solutions that drive
                  real growth and success.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-3xl">C</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Digital Autonomy
                    </h3>
                    <p className="text-gray-300">
                      Empowering businesses through technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a simple idea to a growing agency, here's how we've evolved
              to better serve our clients.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-600"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        {index % 2 === 0 ? (
                          <>
                            <div>
                              <h3 className="text-xl font-bold text-white">
                                {item.titulo}
                              </h3>
                              <p className="text-green-400 font-medium">
                                {item.ano}
                              </p>
                            </div>
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                              <item.icone className="h-6 w-6 text-white" />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                              <item.icone className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">
                                {item.titulo}
                              </h3>
                              <p className="text-green-400 font-medium">
                                {item.ano}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                      <p className="text-gray-300 mb-2">{item.descricao}</p>
                      <p className="text-sm text-gray-400">{item.detalhes}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-gray-900"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl my-20 border border-gray-600">
          <div className="px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we
                work with our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valores.map((valor, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-600 hover:border-green-600 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <valor.icone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-300 mb-3">{valor.descricao}</p>
                  <p className="text-sm text-gray-400">{valor.detalhes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The talented individuals behind Cubic who make digital
              transformation possible for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((membro, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Image
                    src={membro.imagem || "/placeholder.svg"}
                    alt={membro.nome}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {membro.nome}
                  </h3>
                  <p className="text-green-400 font-medium mb-3">
                    {membro.cargo}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {membro.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {membro.especialidades.map((especialidade, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600"
                        >
                          {especialidade}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={membro.social.linkedin}
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                    >
                      <Linkedin className="h-4 w-4 text-gray-300 hover:text-white" />
                    </Link>
                    <Link
                      href={membro.social.twitter}
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                    >
                      <Twitter className="h-4 w-4 text-gray-300 hover:text-white" />
                    </Link>
                    <Link
                      href={`mailto:${membro.social.email}`}
                      className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4 text-gray-300 hover:text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Localização e Contato */}
        <section className="py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Where We Work
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
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
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
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
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
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

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Ready to Work Together?
              </h3>
              <p className="text-gray-300 mb-6">
                We'd love to learn about your business and discuss how we can
                help you achieve digital autonomy.
              </p>

              <div className="space-y-4">
                <Link
                  href="/#contact"
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 px-6 font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start a Conversation
                </Link>

                <Link
                  href="/servicos"
                  className="w-full border border-green-600 text-green-400 hover:bg-green-600 hover:text-white rounded-lg py-3 px-6 font-medium transition-colors duration-200 flex items-center justify-center gap-2 bg-transparent"
                >
                  View Our Services
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
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
