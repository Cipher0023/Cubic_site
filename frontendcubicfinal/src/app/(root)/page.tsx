import Serviços from "@/components/Cubic/Serviços/Serviços";
import Sobre from "@/components/Cubic/Sobre/Sobre";
import HeroSection from "@/components/Cubic/HeroSection/HeroSection";
import ProjetosHome from "@/components/Cubic/Demonstracoes/DemosntracoesHome/DemonstracoesHome";
import Blog from "@/components/Cubic/Blog/Blog";
import Proposta from "@/components/Cubic/Proposta/Proposta";
import ChamadoStr from "@/components/Cubic/Chamado/ChamadoStr";
import ChamadoEnd from "@/components/Cubic/Chamado/ChamadoEnd";
//
export default function Home() {
  return (
    <div className="flex flex-col bg-base-200 w-full">
      <div className="flex bg-base-200 w-full">
        <HeroSection />
      </div>
      <main className="flex flex-col justify-center w-full">
        <ChamadoStr />

        <Sobre />

        <Serviços />

        <ProjetosHome />

        <ChamadoEnd />

        <Blog />

        <Proposta />
      </main>
      <footer className=""></footer>
    </div>
  );
}
