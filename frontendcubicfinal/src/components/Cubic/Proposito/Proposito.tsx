import React from "react";
import Image from "next/image";

type Props = object;

export default function Proposito({}: Props) {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl">Nosso propósito</p>
        <p>
          {" "}
          Acreditamos que todo negócio merece autonomia digital. Por isso,
          criamos soluções personalizadas que oferecem controle total sobre sua
          presença online, com suporte contínuo e foco total no cliente.
        </p>
        <p>Nosso Compromisso</p>
        <p>
          Apoio constante e uma parceria que evolui junto com o seu negócio. Não
          somos apenas desenvolvedores – somos seus aliados na transformação
          digital do seu negócio!
        </p>
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
