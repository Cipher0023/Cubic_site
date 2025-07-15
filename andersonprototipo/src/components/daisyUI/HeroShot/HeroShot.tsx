import React from "react";
import { merriweather } from "@/fonts/merriweather";
import Image from "next/image";

type Props = object;

function HeroShot({}: Props) {
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/logo.png"
          alt="AG Restaurante Logo"
          width={500}
          height={500}
          className="rounded-4xl"
        />
        <div>
          <h1
            className={`text-5xl text-base-300 font-bold ${merriweather.className}`}
          >
            Anderson Restaurante
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
