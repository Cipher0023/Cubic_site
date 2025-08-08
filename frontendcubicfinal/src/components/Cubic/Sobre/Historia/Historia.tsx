import React from "react";

type Props = object;

export default function Historia({}: Props) {
  return (
    <section className="py-20">
      <div className="items-center gap-16 grid lg:grid-cols-2">
        <div>
          <h2 className="mb-6 font-bold text-white text-4xl">Nossa história</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              A Cubic nasceu a partir de uma constatação: muitas pequenas
              empresas estão ficando para trás na revolução digital. Cada vez
              mais, o empresário depende de intermediários como iFood, Mercado
              Livre ou Magalu para vender seus produtos, perdendo parte de sua
              autonomia e reduzindo seus lucros.
            </p>
            <p>
              Fundamos a Cubic em 2024 com uma missão clara: democratizar a
              transformação digital para todos. Acreditamos que todo negócio,
              independentemente do tamanho, merece acesso às melhores
              ferramentas digitais as mesmas utilizadas pelas grandes empresas
              sem que isso signifique custos exorbitantes. Por isso, criamos
              e-commerces, páginas digitais, aplicativos, sistemas internos e
              tudo o que sua empresa precisar para crescer nesse novo cenário.
            </p>
            <p>
              Hoje, temos orgulho de ver nossos primeiros produtos ganhando vida
              e entregando resultados. Desenvolvemos um e-commerce com ERP
              integrado e uma landing page simples, mas eficiente, para conectar
              redes sociais e apresentar seus produtos de forma profissional.
            </p>
          </div>

          <div className="bg-gray-800 mt-8 p-6 border border-gray-700 rounded-xl">
            <h3 className="mb-3 font-bold text-white text-xl">Nossa missão</h3>
            <p className="text-gray-300">
              Capacitar pequenas e médias empresas a conquistarem autonomia
              digital, oferecendo soluções personalizadas, escaláveis e
              acessíveis que gerem crescimento real e resultados duradouros.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-20 rounded-2xl blur"></div>
          <div className="relative bg-gray-800 p-8 border border-gray-700 rounded-2xl">
            <div className="flex justify-center items-center bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl aspect-square">
              <div className="text-center">
                <div className="flex justify-center items-center bg-green-600 mx-auto mb-6 rounded-full w-24 h-24">
                  <span className="font-bold text-white text-3xl">C</span>
                </div>
                <h3 className="mb-2 font-bold text-white text-2xl">
                  Digital Autonomy
                </h3>
                <p className="text-gray-300">
                  Empowering businesses through technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
