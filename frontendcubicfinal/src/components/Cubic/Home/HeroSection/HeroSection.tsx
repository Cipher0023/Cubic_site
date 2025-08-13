"use client";
import React from "react";
import { Chakra_Petch } from "next/font/google";
import { Cubic } from "@/components/Cubic/Home/HeroSection/cubeLogo/Cubic";
import { useViewportContext } from "@/context/ViewportContext";
import Background from "@/components/Cubic/Home/HeroSection/Background/Background";

const chakra = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

type Props = object;

export default function HeroSection({}: Props) {
  const { isMobile } = useViewportContext();

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background atrás de tudo */}
      <div className="absolute inset-0 w-full h-full">
        <Background />
      </div>

      {/* Conteúdo principal, muda layout conforme tela */}
      {isMobile ? (
        <div className="z-10 relative flex flex-col justify-center items-center gap-6 px-4 py-8">
          <h1
            className={`${chakra.className}  font-bold text-6xl bg-gradient-to-r from-base-content to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]`}
          >
            CUBIC developers
          </h1>
          <div className="flex justify-center items-center w-3/4 aspect-square">
            <Cubic />
          </div>
        </div>
      ) : (
        <div className="z-10 relative flex justify-between items-center p-25">
          <h1
            className={`${chakra.className} font-bold text-9xl bg-gradient-to-r from-base-content to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]`}
          >
            CUBIC developers
          </h1>
          <div className="hidden sm:flex justify-center items-center w-1/3 aspect-square">
            <Cubic />
          </div>
        </div>
      )}
    </section>
  );
}
