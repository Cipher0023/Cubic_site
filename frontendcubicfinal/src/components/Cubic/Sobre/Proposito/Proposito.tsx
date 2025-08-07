import React from "react";
import Image from "next/image";

type Props = object;

export default function Proposito({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-5 p-20">
        <div className="flex flex-col justify-center items-left gap-5 w-full">
          <p className="font-semibold text-4xl">Nosso propósito</p>
          <p className="w-3/4">
            {" "}
            Acreditamos que todo negócio merece autonomia digital. Por isso,
            criamos soluções personalizadas que oferecem controle total sobre
            sua presença online, com suporte contínuo e foco total no cliente.
          </p>
          <div className="group relative">
            <div className="relative bg-gradient-to-br from-base-300 to-base-100 shadow-md p-10 border border-base-300 rounded-2xl">
              <p className="font-semibold text-primary text-3xl">
                Nosso Compromisso
              </p>
              <p>
                Apoio constante e uma parceria que evolui junto com o seu
                negócio. Não somos apenas desenvolvedores – somos seus aliados
                na transformação digital do seu negócio!
              </p>
            </div>
          </div>
        </div>
        <div className="group relative w-full aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-30 rounded-xl transition-opacity duration-300 blur"></div>
          <div className="relative bg-gradient-to-br from-base-300 to-base-100 shadow-md border border-base-300 rounded-xl w-full h-full">
            <Image
              src="/placeholder.jpg"
              alt="AG Restaurante Logo"
              fill
              className="shadow-xl p-10 rounded-4xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
