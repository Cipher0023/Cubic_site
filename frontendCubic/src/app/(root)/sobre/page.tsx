import ImagensEquipe from "@/components/imagensEquipe/ImagensEquipe";
import Sobre from "@/components/sobre/Sobre";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 w-full min-h-screen p-10">
      <Sobre
        title="Sobre nós"
        callToAction="Pense fora da caixa, seja Cubic!"
        text={`A Cubic é uma startup de tecnologia formada por estudantes da cidade de São Carlos, interior do estado de São Paulo.

      Temos o objetivo de espalhar a inovação dos tempos atuais para microempresas, pequeno e médios empresários nas quais gostariam de se integrar no mercado digital amparado por especialistas no assunto.
      
      Nosso diferencial é a abordagem do problema, onde, através de didatismo e longanimidade, será manuseado de forma na qual o cliente terá acesso ao tecnicismo envolvido e também independência e preparo para tornar seu decoro uma realidade.`}
      />

      <div className="w-full h-0.5 bg-white">
        {" "}
        {/*separador, RESOLVER DEPOIS */}{" "}
      </div>

      <ImagensEquipe
        Member={[
          {
            name: "Daniel Silva Esparza",
            image: "/fotosMembros/fotoDan.jpg",
            description:
              "Daniel é um desenvolvedor web com experiência em front-end e back-end. Estudou na USP, UFSCar e Unesp",
          },
          {
            name: "Luis",
            image: "/fotosMembros/luis.jpg",
            description: "Luis é o nosso bixo da Mecatronica",
          },
        ]}
      />
    </div>
  );
};

export default page;
