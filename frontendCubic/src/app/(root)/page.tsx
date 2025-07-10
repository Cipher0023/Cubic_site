"use client";

import React from "react";
import Link from "next/link";
import { Chakra_Petch } from "next/font/google";
import { Cubic } from "@/components/cubeLogo/Cubic";

const chakra = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-gray-950 via-indigo-950 to-sky-500 p-6">
      <div className=" w-3/4">
        {/* Container do título e cubo */}
        <div className="m-4 flex flex-col items-center">
          <div className="flex items-center">
            <h1
              className={`
              ${chakra.className} font-bold sm:text-[5em] md:text-[5em] lg:text-[9em] italic
              text-transparent
              bg-clip-text 
              bg-gradient-to-r from-white to-gray-400    
            `}
            >
              CUBIC developers
            </h1>

            <div className="flex bg-red-500-0 w-2/5 aspect-square items-center justify-center">
              <Cubic />
            </div>
          </div>

          <h2
            className={`text-white m-4 mt-6 md:text-3xl ${chakra.className} italic`}
          >
            Tecnologia que Impulsiona seu Negócio: Soluções de tecnologia
            completas para pequenas e médias empresas
          </h2>

          <p className={`text-xl m-4 text-white ${chakra.className}`}>
            Oferecemos ferramentas digitais, suporte técnico e estratégias
            inteligentes para você vender mais, organizar sua operação e crescer
            com segurança.
          </p>
        </div>
        <div className="bg-white w-full h-1 rounded-full"></div>{" "}
        {/* divisão provisória */}
        <div className=" flex flex-col m-4 text-white text-center">
          <p className="text-2xl">Sobre nós</p>

          <p className="text-white">
            Na Cubic, somos especialistas em transformar desafios de pequenos
            negócios em oportunidades digitais. Atuamos no local do seu negócio
            para entender suas necessidades e oferecer soluções personalizadas,
            desde a criação de sites e gestão de redes sociais até sistemas de
            gestão (ERP/CRM) e consultoria em Inteligência Artificial. Nosso
            objetivo? *Simplificar a tecnologia para você focar no que realmente
            importa: seu cliente.
          </p>
        </div>
        <div className="bg-white w-full h-1 rounded-full"></div>{" "}
        {/* divisão provisória */}
        <section className="text-center w-full ">
          <p className="text-white md:text-3xl">Serviços</p>
        </section>
        <div className="bg-white w-full h-1 rounded-full"></div>{" "}
        {/* divisão provisória */}
        <div className="text-white m-4">
          <p className="">Diferenciais</p>

          <ul>
            <li>
              Atendimento Presencial: Vamos até você para entender suas dores e
              oferecer soluções práticas.
            </li>
            <li>
              Pacotes Flexíveis: Serviços avulsos ou combos adaptados ao seu
              orçamento.
            </li>
            <li>
              Suporte Contínuo: Não somos vendedores de projetos – estamos com
              você pós-venda.
            </li>
            <li>
              Tecnologia Acessível: Linguagem simples, sem termos técnicos
              complicados.
            </li>
          </ul>
        </div>
        <div className="bg-white w-full h-1 rounded-full"></div>{" "}
        {/* divisão provisória */}
        <div className="text-white flex flex-col m-4">
          <p>Pronto para modernizar seu negócio?</p>
          <p>
            Agende uma visita gratuita e receba um diagnóstico tecnológico para
            sua empresa.
          </p>

          <Link
            href="/contato"
            className="bg-blue-700 text-white text-center hover:bg-blue-500 m-4 rounded-full"
          >
            fale conosco
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
