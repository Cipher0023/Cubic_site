"use client";
import React from "react";
import { Chakra_Petch } from "next/font/google";
import { Cubic } from "@/components/Cubic/HeroSection/cubeLogo/Cubic";
import { useViewportContext } from "@/context/ViewportContext";
import Background from "@/components/Cubic/Background/Background";

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
    <section className="relative w-full h-auto overflow-hidden">
      {/* Background atrás de tudo */}
      <div className="absolute inset-0">
        <Background />
      </div>

      {/* Conteúdo principal, muda layout conforme tela */}
      {isMobile ? (
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 gap-6">
          <h1
            className={`${chakra.className} font-bold text-4xl text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400`}
          >
            CUBIC developers
          </h1>
          <div className="w-3/4 aspect-square flex items-center justify-center">
            <Cubic />
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex items-center justify-between p-25">
          <h1
            className={`${chakra.className} font-bold text-9xl text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400`}
          >
            CUBIC developers
          </h1>
          <div className="hidden sm:flex w-1/3 aspect-square items-center justify-center">
            <Cubic />
          </div>
        </div>
      )}
    </section>
  );
}
