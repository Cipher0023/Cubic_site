import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  TrendingUp,
  MessageCircle,
  Heart,
  Share2,
  Search,
  Filter,
} from "lucide-react";

export default function BlogPage() {
  const autores = [
    {
      id: "alex-rodriguez",
      nome: "Alex Rodriguez",
      cargo: "Founder & Lead Developer",
      avatar: "/placeholder.svg?height=100&width=100&text=Alex",
      bio: "Full-stack developer sharing insights on modern web development and business growth.",
      especialidades: ["React", "Next.js", "Business Strategy", "Startups"],
      posts: 12,
      seguidores: 1200,
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
      posts: 8,
      seguidores: 850,
    },
    {
      id: "marcus-johnson",
      nome: "Marcus Johnson",
      cargo: "Backend Specialist",
      avatar: "/placeholder.svg?height=100&width=100&text=Marcus",
      bio: "Infrastructure expert sharing knowledge about scalable systems and security.",
      especialidades: ["DevOps", "Security", "Performance", "Cloud"],
      posts: 6,
      seguidores: 650,
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
    <div className="min-h-screen bg-gray-900">
      <Link href="/blog/blogDoFoguete">Ir para blog</Link>
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
              Cubic <span className="text-green-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Insights, tutorials, and thoughts from our team on web
              development, design, and digital business growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
                <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm">
                  26 articles published
                </span>
              </div>
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
                <MessageCircle className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm">2.7k readers</span>
              </div>
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
                <Heart className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-gray-300 text-sm">850 likes</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Post em Destaque */}
        <section className="py-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 font-medium text-sm uppercase tracking-wide">
                Featured Post
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white">
              Latest from the Team
            </h2>
          </div>

          <article className="bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Imagem */}
              <div className="relative h-80 lg:h-auto">
                <Image
                  src={postDestaque.imagem || "/placeholder.svg"}
                  alt={postDestaque.titulo}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {postDestaque.categoria}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={postDestaque.autor.avatar || "/placeholder.svg"}
                    alt={postDestaque.autor.nome}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-white font-medium">
                      {postDestaque.autor.nome}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {postDestaque.autor.cargo}
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {postDestaque.titulo}
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {postDestaque.subtitulo}
                </p>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {postDestaque.conteudo}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatarData(postDestaque.dataPublicacao)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {postDestaque.tempoLeitura}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{postDestaque.visualizacoes} views</span>
                    <span>{postDestaque.likes} likes</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {postDestaque.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${postDestaque.id}`}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-3 font-medium transition-colors duration-200 inline-flex items-center gap-2 w-fit"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* Blogs dos Funcionários */}
        <section className="py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Authors</h2>
            <p className="text-lg text-gray-300">
              Get to know the experts behind our content and follow their
              individual blogs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {autores.map((autor) => (
              <div
                key={autor.id}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-600 transition-colors duration-200 group"
              >
                <div className="text-center mb-6">
                  <Image
                    src={autor.avatar || "/placeholder.svg"}
                    alt={autor.nome}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 group-hover:scale-105 transition-transform duration-200"
                  />
                  <h3 className="text-xl font-bold text-white mb-1">
                    {autor.nome}
                  </h3>
                  <p className="text-green-400 text-sm font-medium mb-3">
                    {autor.cargo}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {autor.bio}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {autor.especialidades.map((especialidade, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600"
                      >
                        {especialidade}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                  <span>{autor.posts} posts</span>
                  <span>{autor.seguidores} followers</span>
                </div>

                <Link
                  href={`/blog/author/${autor.id}`}
                  className="w-full border border-green-600 text-green-400 hover:bg-green-600 hover:text-white rounded-lg py-2 px-4 font-medium transition-colors duration-200 text-center block"
                >
                  View Blog
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Filtros e Busca */}
        <section className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                All Articles
              </h2>
              <p className="text-gray-400">
                Browse our complete collection of insights and tutorials
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none w-full sm:w-64"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-8 py-2 text-white focus:border-green-500 focus:outline-none appearance-none">
                  {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Lista de Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-600 transition-colors duration-200 group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.imagem || "/placeholder.svg"}
                    alt={post.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-sm text-green-400 px-2 py-1 rounded text-xs font-medium">
                    {post.categoria}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={post.autor.avatar || "/placeholder.svg"}
                      alt={post.autor.nome}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-white text-sm font-medium">
                        {post.autor.nome}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {formatarData(post.dataPublicacao)}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-green-400 transition-colors duration-200">
                    {post.titulo}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.subtitulo}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-3">
                      <span>{post.tempoLeitura}</span>
                      <span>{post.visualizacoes} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-3 w-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-400 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-green-400 hover:text-green-300 font-medium text-sm inline-flex items-center gap-1 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get the latest insights, tutorials, and industry news delivered
              straight to your inbox. No spam, just valuable content from our
              team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
              />
              <button className="bg-white text-green-600 hover:bg-gray-100 rounded-lg px-6 py-3 font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>

            <p className="text-sm opacity-75 mt-4">
              Join 2,700+ developers and business owners. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
