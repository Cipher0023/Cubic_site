"use client";
import Carousel from "@/components/Restaurante/frenteDeLoja/Home/Carousel/Carousel";
import Footer from "@/components/Restaurante/UI/Footer/Footer";
import HeroShot from "@/components/Restaurante/frenteDeLoja/Home/HeroShot/HeroShot";
import { merriweather } from "@/fonts/merriweather";
import Populares from "@/components/Restaurante/frenteDeLoja/Home/Populares/Populares";
import Produtos from "@/components/Restaurante/frenteDeLoja/Home/Produtos/Produtos";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "Promoção do mês",
      content: "Aproveite descontos incríveis nos pratos selecionados.",
      bgColor: "bg-primary",
    },
    {
      id: 2,
      title: "Novidades no cardápio",
      content: "Conheça nossas novas opções gourmet recém-lançadas.",
      bgColor: "bg-secondary",
    },
    {
      id: 3,
      title: "Delivery rápido",
      content: "Peça agora e receba em casa com rapidez e segurança.",
      bgColor: "bg-accent",
    },
  ];

  return (
    <div className="">
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <HeroShot />
          <div className="m-8 w-full">
            <Carousel slides={slides} />
          </div>
        </div>
        <h1 className="flex flex-col justify-center items-center bg-primary p-4 w-full">
          <Populares />
        </h1>
        <div className="flex flex-col bg-base-200 p-20 w-full">
          <Produtos />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
