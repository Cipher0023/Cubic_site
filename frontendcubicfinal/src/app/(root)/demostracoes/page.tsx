import DemonstacaoEsq from "@/components/Cubic/Demonstracoes/DemonstracoesEsq/DemonstacaoEsq";
import DemonstacaoDir from "@/components/Cubic/Demonstracoes/DemonstacaoDir/DemonstacaoDir";

import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-base-200">
      <h1 className="text-4xl font-bold">
        Veja as demosntrações dos nossos produtos
      </h1>
      <p>
        conheça os dois produtos que desenvolvemos para resolver suas
        necessidades de vendas online e de visibilidade digital para sua empresa{" "}
      </p>
      <DemonstacaoEsq />
      <DemonstacaoDir />
    </div>
  );
};

export default Contact;
