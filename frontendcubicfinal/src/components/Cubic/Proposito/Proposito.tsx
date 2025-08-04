import React from "react";
import Image from "next/image";

type Props = object;

export default function Proposito({}: Props) {
  return (
    <div className="flex flex-row  p-20 gap-5">
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-5xl">Nosso propósito</p>
        <p>
          {" "}
          Acreditamos que todo negócio merece autonomia digital. Por isso,
          criamos soluções personalizadas que oferecem controle total sobre sua
          presença online, com suporte contínuo e foco total no cliente.
        </p>
        <div className="bg-radial-[at_50%_50%] from-white/30 from-9% to-base-300 backdrop-blur rounded-2xl p-5 shadow-sm shadow-primary">
          <p className="text-2xl text-primary">Nosso Compromisso</p>
          <p>
            Apoio constante e uma parceria que evolui junto com o seu negócio.
            Não somos apenas desenvolvedores – somos seus aliados na
            transformação digital do seu negócio!
          </p>
        </div>
      </div>
      <Image
        src="/placeholder.jpg"
        alt="AG Restaurante Logo"
        width={400}
        height={400}
        className="rounded-4xl shadow-xl"
      />
    </div>
  );
}
