import Serviços from "@/components/Cubic/Serviços/Serviços";
import Sobre from "@/components/Cubic/Sobre/Sobre";
import Valores from "@/components/Cubic/Valores/Valores";
import HeroSection from "@/components/Cubic/HeroSection/HeroSection";
import Image from "next/image";
import Proposito from "@/components/Cubic/Proposito/Proposito";
import CardProjetos from "@/components/Cubic/ProjetosHome/CardProjetos/CardProjetos";
import ProjetosHome from "@/components/Cubic/ProjetosHome/ProjetosHome";
import Chamado from "@/components/Cubic/Chamado/Chamado";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-base-200">
      <div className="flex w-full bg-base-100">
        <HeroSection />
      </div>
      <main className="flex flex-col w-full justify-center">
        <Sobre />

        <Proposito />

        <Valores />

        <Serviços />

        <ProjetosHome />

        <Chamado />
      </main>
      <footer className=""></footer>
    </div>
  );
}
