"use client";
import Card from "@/components/Restaurante/frenteDeLoja/Card/Card";
import Carousel from "@/components/Restaurante/frenteDeLoja/Home/Carousel/Carousel";
import Footer from "@/components/Restaurante/UI/Footer/Footer";
import HeroShot from "@/components/Restaurante/frenteDeLoja/Home/HeroShot/HeroShot";
import { merriweather } from "@/fonts/merriweather";
import Tab from "@/components/Restaurante/UI/Tab/Tab";

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
          <a
            className={`text-5xl text-base-100 font-regular ${merriweather.className}`}
          >
            Pratos populares
          </a>
          <div className="flex flex-wrap justify-center items-end-safe gap-4 m-4 mb-4">
            <Card />
            <Card />
            <Card />
          </div>
        </h1>
        <div className="flex flex-col bg-base-200 w-full">
          <Tab />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
