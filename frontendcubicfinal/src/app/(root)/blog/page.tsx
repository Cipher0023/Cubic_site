import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Search, Filter } from "lucide-react";
import HeaderBlog from "@/components/Cubic/Home/Blog/HeaderBlog/HeaderBlog";
import DestaqueBlog from "@/components/Cubic/Blog/DestaqueBlog/DestaqueBlog";
import MembrosBlog from "@/components/Cubic/Blog/MembrosBlog/MembrosBlog";
import Artigos from "@/components/Cubic/Blog/Artigos/Artigos";
import Newsletter from "@/components/Cubic/Blog/Newsletter/Newsletter";

export default function BlogPage() {
  const autores = [
    {
      id: "alex-rodriguez",
      nome: "Alex Rodriguez",
      cargo: "Founder & Lead Developer",
      avatar: "/placeholder.svg?height=100&width=100&text=Alex",
      bio: "Full-stack developer sharing insights on modern web development and business growth.",
      especialidades: ["React", "Next.js", "Business Strategy", "Startups"],
    },
    {
      id: "sarah-chen",
      nome: "Sarah Chen",
      cargo: "UI/UX Designer",
      avatar: "/placeholder.svg?height=100&width=100&text=Sarah",
      bio: "Designer focused on creating beautiful, conversion-optimized user experiences.",
      especialidades: [
        "UI/UX",
        "Design Systems",
        "Conversion",
        "User Research",
      ],
    },
    {
      id: "marcus-johnson",
      nome: "Marcus Johnson",
      cargo: "Backend Specialist",
      avatar: "/placeholder.svg?height=100&width=100&text=Marcus",
      bio: "Infrastructure expert sharing knowledge about scalable systems and security.",
      especialidades: ["DevOps", "Security", "Performance", "Cloud"],
    },
  ];

  const postDestaque = {
    id: 1,
    titulo: "The Complete Guide to E-commerce Success in 2024",
    subtitulo:
      "Everything you need to know to build and scale a profitable online store",
    conteudo:
      "In today's digital landscape, e-commerce has become more competitive than ever. Success requires more than just a beautiful website – you need a strategic approach that combines user experience, conversion optimization, and scalable infrastructure...",
    autor: autores[0],
    dataPublicacao: "2024-01-15",
    tempoLeitura: "12 min read",
    categoria: "E-commerce",
    tags: ["E-commerce", "Business Strategy", "Conversion", "Growth"],
    imagem:
      "/placeholder.svg?height=400&width=800&text=E-commerce+Success+Guide",
    visualizacoes: 2400,
    comentarios: 18,
    likes: 156,
    featured: true,
  };

  const posts = [
    {
      id: 2,
      titulo: "10 UI/UX Principles That Actually Drive Conversions",
      subtitulo: "Practical design principles backed by real conversion data",
      conteudo:
        "Great design isn't just about aesthetics – it's about results. After analyzing hundreds of landing pages and e-commerce sites, we've identified the key principles that consistently drive higher conversion rates...",
      autor: autores[1],
      dataPublicacao: "2024-01-12",
      tempoLeitura: "8 min read",
      categoria: "Design",
      tags: ["UI/UX", "Conversion", "Design", "Psychology"],
      imagem: "/placeholder.svg?height=300&width=500&text=UI+UX+Principles",
      visualizacoes: 1800,
      comentarios: 12,
      likes: 89,
    },
    {
      id: 3,
      titulo: "Building Scalable Infrastructure for Growing Startups",
      subtitulo: "How to architect systems that grow with your business",
      conteudo:
        "One of the biggest challenges for growing startups is building infrastructure that can scale. Too often, companies find themselves rebuilding their entire tech stack as they grow...",
      autor: autores[2],
      dataPublicacao: "2024-01-10",
      tempoLeitura: "15 min read",
      categoria: "Infrastructure",
      tags: ["DevOps", "Scalability", "Startups", "Architecture"],
      imagem:
        "/placeholder.svg?height=300&width=500&text=Scalable+Infrastructure",
      visualizacoes: 1200,
      comentarios: 8,
      likes: 67,
    },
    {
      id: 4,
      titulo: "Why Small Businesses Need Digital Transformation Now",
      subtitulo: "The competitive advantage of going digital in 2024",
      conteudo:
        "Digital transformation isn't just for large corporations anymore. Small and medium businesses that embrace digital tools are outperforming their competitors by significant margins...",
      autor: autores[0],
      dataPublicacao: "2024-01-08",
      tempoLeitura: "10 min read",
      categoria: "Business Strategy",
      tags: ["Digital Transformation", "SMB", "Strategy", "Growth"],
      imagem:
        "/placeholder.svg?height=300&width=500&text=Digital+Transformation",
      visualizacoes: 1600,
      comentarios: 15,
      likes: 92,
    },
    {
      id: 5,
      titulo: "The Psychology of Color in Web Design",
      subtitulo: "How color choices impact user behavior and conversions",
      conteudo:
        "Color is one of the most powerful tools in a designer's arsenal. The right color choices can increase conversions, build trust, and guide users through your desired actions...",
      autor: autores[1],
      dataPublicacao: "2024-01-05",
      tempoLeitura: "7 min read",
      categoria: "Design",
      tags: ["Color Theory", "Psychology", "Conversion", "Branding"],
      imagem: "/placeholder.svg?height=300&width=500&text=Color+Psychology",
      visualizacoes: 1400,
      comentarios: 10,
      likes: 78,
    },
    {
      id: 6,
      titulo: "Security Best Practices for E-commerce Sites",
      subtitulo:
        "Protecting your customers and your business from cyber threats",
      conteudo:
        "Security breaches can destroy customer trust and cost businesses millions. Here are the essential security measures every e-commerce site needs to implement...",
      autor: autores[2],
      dataPublicacao: "2024-01-03",
      tempoLeitura: "12 min read",
      categoria: "Security",
      tags: ["Security", "E-commerce", "Best Practices", "Privacy"],
      imagem: "/placeholder.svg?height=300&width=500&text=E-commerce+Security",
      visualizacoes: 1100,
      comentarios: 6,
      likes: 54,
    },
  ];

  const categorias = [
    "All",
    "E-commerce",
    "Design",
    "Infrastructure",
    "Business Strategy",
    "Security",
  ];

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <Link href="/blog/blogDoFoguete">Ir para blog</Link>
      {/* Header da página */}
      <header className="bg-gradient-to-r from-base-200 via-base-100 to-base-200 border-b border-base-300">
        <HeaderBlog />
      </header>

      <main className="mx-auto px-4 sm:px-6 lg:px-8 container">
        {/* Post em Destaque */}
        <section className="py-16">
          <DestaqueBlog postDestaque={postDestaque} />
        </section>

        {/* Blogs dos Funcionários */}
        <section className="py-16">
          <MembrosBlog autores={autores} />
        </section>

        {/* Filtros e Busca */}
        <section className="py-8 border-t border-base-100">
          <Artigos posts={posts} categorias={categorias} />
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <Newsletter />
        </section>
      </main>
    </div>
  );
}
