import ServiçosHome from "@/components/Cubic/Home/ServicosHome/ServicosHome";
import Sobre from "@/components/Cubic/Home/SobreHome/Sobre";
import HeroSection from "@/components/Cubic/Home/HeroSection/HeroSection";
import ProjetosHome from "@/components/Cubic/Home/DemosntracoesHome/DemonstracoesHome";
import Blog from "@/components/Cubic/Home/Blog/Blog";
import Proposta from "@/components/Cubic/Home/Proposta/Proposta";
import ChamadoStr from "@/components/Cubic/Home/Chamado/ChamadoStr";
import ChamadoEnd from "@/components/Cubic/Home/Chamado/ChamadoEnd";
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

        <ServiçosHome />

        <ProjetosHome />

        <ChamadoEnd />

        <Blog />

        <Proposta />
      </main>
      <footer className=""></footer>
    </div>
  );
}
