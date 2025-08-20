import React from "react";
import { merriweather } from "@/fonts/merriweather";
import Image from "next/image";

type Props = object;

function HeroShot({}: Props) {
  return (
    <div className="bg-base-200 pt-10 hero">
      <div className="lg:flex-row flex-col m-4 hero-content">
        <Image
          src="/logo.png"
          alt="AG Restaurante Logo"
          width={500}
          height={500}
          className="shadow-xl rounded-4xl"
        />
        <div>
          <h1
            className={`text-8xl text-base-300 font-bold ${merriweather.className}`}
          >
            Restaurante
          </h1>
          <p className={`text-xl font-regular ${merriweather.className}`}>
            A melhor comida da cidade, com ingredientes frescos e um atendimento
            excepcional. Venha experimentar nossos pratos!
          </p>
          <button className="btn btn-secondary">Nosso cardápio</button>
        </div>
      </div>
    </div>
  );
}

export default HeroShot;
