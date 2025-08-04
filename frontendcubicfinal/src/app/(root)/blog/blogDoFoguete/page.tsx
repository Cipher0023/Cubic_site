"use client";

import { ButtonII } from "@/components/Cubic/ComponentesLegacy/ButtonII";
import ButtonIII from "@/components/Cubic/ComponentesLegacy/ButtonIII";
import ButtonIV from "@/components/Cubic/ComponentesLegacy/ButtonIV";
import DieterRamsButtons from "@/components/Cubic/ComponentesLegacy/DieterRamsButtons";
import React from "react";
import { TelaTheejs } from "@/components/Cubic/ComponentesLegacy/Tela3d/Tela3d";
import BlogPost from "@/components/Cubic/ComponentesLegacy/BlogPost/BlogPost";

type Props = object;

export default function page({}: Props) {
  return (
    <div
      className="flex flex-col w-full items-center aspect-square text-white 
bg-linear-to-br from-gray-950 via-indigo-950 to-sky-500 
relative shadow-inner shadow-blue-800/30 rounded-2xl"
    >
      <div className="flex flex-col items-left m-4 items-center ">
        <h1 className="text-7xl font-bold">Blog do Foguete 🚀</h1>
        <p className="text-3xl text-center">
          aqui falarei um pouco sobre o projeto e meus trabalhos, além de
          demonstá-los
        </p>
        <p className="text-xl  text-center p-10">
          Se um dia tudo for esquecido, que me reste ao menos isto: alguém falou
          com o silêncio e o silêncio respondeu
        </p>
      </div>

      <div className="w-9/10 bg-gray-900 border-2 border-white text-center m-4 rounded-3xl p-4 items items-center">
        <div className="text-center">
          {/*post*/}
          <p className="text-3xl  font-bold m-2">Botão padrão</p>
          <p className="font-bold">Início do projeto: 14/04/2025</p>
          <p className="m-4 text-start">
            Vendo que o botão padrão do nextJs era bem simples e não atendia o
            que eu gostaria para a empresa, decidi que seria necessário criar um
            botão 2.0, que incluisse animações e uma estética superior ao
            padrão.
            <br />
            <br /> Tentei de diversas maneiras, a de mais simples implementação
            e mais estéticamente agradável foi usando a bliblioteca Motion,
            porém não consegui faze-la funcionar na Navbar, tentei então com
            tailwindcss apenas e tive um resultado muito satisfatório.
            <br />
            <br />A baixo vocês podem ver e interagir com o protótipo em
            andamento
          </p>
        </div>

        <div className="w-full h-0.5 bg-white ">
          {" "}
          {/*separador, RESOLVER DEPOIS */}{" "}
        </div>

        <div className="p-0 items-center text-center m-2">
          <p className="font-bold m-2">Botão v2: 18/04/2025</p>
          <p className="m-2">
            Estéticamente o botão v2 até que ficou bom, mas não se encaixou com
            o layout da página, a animação ficou boa e bem fluida,
          </p>
          <div className="flex w-full justify-center m-4">
            {/*post do projeto */}
            <ButtonII>Botão V2</ButtonII>
          </div>
        </div>

        <div className="w-full h-0.5 bg-white">
          {" "}
          {/*separador, RESOLVER DEPOIS */}{" "}
        </div>

        <div className="p-0 items-center text-center m-2">
          <p className="font-bold m-2">Botão v3: 18/04/2025</p>
          <p className="m-2">
            O botão v3 foi criado pois não achei o v2 bom o suficiente, a
            maneira que programei-o não foi escalável, sem contar que nem a
            estética foi agradável. O v2 foi feito com o auxílio da IA V0 da
            vercell, tentei fazer este completamente por conta, integrando
            conceitos que usei na criação dos botões da navbar
          </p>
          <div className="flex w-full justify-center m-4">
            {/*post do projeto */}
            <ButtonIII />
          </div>
        </div>

        <div className="w-full h-0.5 bg-white">
          {" "}
          {/*separador, RESOLVER DEPOIS */}{" "}
        </div>

        <div className="p-0 items-center text-center m-2">
          <p className="font-bold m-2">Botão IA: 22/04/2025</p>
          <p className="m-2">
            O botão v3 se mostrou insuficiente na estética em geral, tentei de
            diversas formas melhora-lo, mas percebi que a IA V0 faria um
            trabalho, com a parte estética e com outros detalhes, muito melhor
            do que eu posso fazer com a quantidade de atribuições e com a
            urgência de lançamento do primeiro produto.<br></br>
            <br></br> Aqui você pode ver o resultado do prompt que fiz, minha
            ideia é alterar asc propriedades de cada um de modo que eu possa
            adequa-lo ao site. <br></br>
            <br></br>No fim a ideia é aprender com o que a IA gera para dominara
            a abilidade e poder trabalhar em sincronia com ela no futuro
            desenvolvendo novos componentes com ideias tiradas de conceitos
            criados pela IA
          </p>
          {/*post do projeto */}
          <div className="flex w-full justify-center m-4">
            <DieterRamsButtons></DieterRamsButtons>
          </div>
        </div>

        <div className="w-full h-0.5 bg-white">
          {" "}
          {/*separador, RESOLVER DEPOIS */}{" "}
        </div>

        <div className="p-0 items-center text-center m-2">
          <p className="font-bold m-2">Botão v4: 22/04/2025</p>
          <p className="m-2">
            Finalmente algo que me deixa satisfeito com a estética e animação!
          </p>
          {/*post do projeto */}
          <div className="flex w-full justify-center m-4">
            <ButtonIV></ButtonIV>
          </div>
        </div>
      </div>

      <div className="w-9/10 bg-gray-900 border-2 border-white text-center m-4 rounded-3xl p-4 items items-center">
        <p className="text-3xl  font-bold m-2">Integração API Google maps</p>
        <p className="font-bold">Início do projeto: 19/04/2025</p>
        <p className="m-2">
          Uma das implementações de maior importância era a integração do nosso
          site com alguma api externa. No nosso backend já temos isso, mas uma
          integração de api externa no frontend era uma tarefa um pouco
          assustadora, fui seguindo as documentações da google para criar uma
          conta na central de apis deles, fora isso também segui alguns
          tutoriais para fazer tudo rodar de acordo. <br></br>
          <br></br> Aparentemente tudo está rodando de acordo com o que era
          esperado, mas ainda não me aprofundei mais.
        </p>

        <div className="w-full h-0.5 bg-white">
          {" "}
          {/*separador, RESOLVER DEPOIS */}{" "}
        </div>
      </div>

      <div className="flex flex-col w-9/10 bg-gray-900 border-2 border-white text-center m-4 rounded-3xl p-4 items items-center">
        <p className="text-3xl  font-bold m-2">Elementos 3d</p>
        <p className="font-bold">Início do projeto: 19/04/2025</p>
        <p className="m-2">
          Uma das ideias de diferenciação de mercado era a criação de sites 3d,
          após muitas buscas, encontrei o ThreeJs, uma biblioteca de javascript
          que permite a criação de espaços 3d, onde o programador pode criar o
          que desejar no espaço delimitado. Sofri um pouco para fazer rodar como
          deveria, mas depois de algumas tentativas aqui está o resultado.{" "}
          <br></br>
          <br></br> Ainda não tive uma boa ideia de como usar isso no site em
          geral, mas é bom ter preparado
        </p>

        <div className="w-full h-0.5 bg-white">
          {" "}
          {/*separador, RESOLVER DEPOIS */}{" "}
        </div>

        <div className="w-full h-0.5 bg-white">
          {" "}
          {/*separador, RESOLVER DEPOIS */}{" "}
        </div>

        <div className="p-0 items-center text-center m-2">
          <p className="font-bold m-2">Elemento ThreeJS: 09/04/2025</p>
          <p className="m-2">
            Aqui você pode ver um modelo 3d manipulável pelo usuário
          </p>

          {/*post do projeto */}
          <div className="flex w-200 aspect-square justify-center m-4">
            <TelaTheejs />
          </div>
        </div>
      </div>

      <div className=" bg-radial-[at_25%_25%] from-trasnparent from-20% to-black/90 backdrop-blur-md w-9/10 border border-white rounded-3xl p-2 m-2">
        <p className="text-3xl  font-bold m-2">novo estilo para o site!</p>
        <p className="font-bold">Início do projeto: 25/04/2025</p>
        <p className="m-2">
          No começo, não havia nada e do nada veio o tudo e blablabla... sabe,
          no início desse projeto eu tinha como objetivo montar um site de uma
          marmitaria, acabei indo para uma tangente imensa e criei a minha
          empresa, a CUBIC. Durante todo o aprendizado de react javascript e
          outros, quis fazer algo que fosse estéticamente agradável,com um
          visual futurista e que fosse simples e funcional. O estilo que adotei
          de início, apesar de simples, tinha potêncial para crescer e
          escalonar, era feio, mas funcional.
          <br></br>
          <br></br> Agora, com a ajuda da IA V0, além de muitos tutoriais no
          youtube, consegui criar um estilo que me agrada e que é muito prático.
          <br></br>
          <br></br>A pardir daqui, você verá em primeira mão a mudanças que
          farão o novo estilo!
        </p>

        <div className="w-full h-0.5 bg-white">
          {" "}
          {/*separador, RESOLVER DEPOIS */}{" "}
        </div>

        <div className="p-0 items-center text-center m-2">
          <p className="font-bold m-2">Glassmorphism v1: 25/04/2025</p>
          <p className="m-2">
            Aqui temos algumas telas usando o efeito de glasmorphia que criei,
            não estou usando nada mais do que puro tailwindcss, o resultado é
            satisfatório, mas vejo que há muita margem para melhorias.
          </p>

          {/*post do projeto */}
          <div className="flex justify-center m-4">
            <div
              className=" bg-radial-[at_50%_50%] from-black/50 from-9% to-white/30 backdrop-blur 
            w-2/10 aspect-square border border-black rounded-3xl p-2 m-2"
            ></div>

            <div
              className=" bg-radial-[at_25%_25%] from-transparent from-50% to-white/70 backdrop-blur 
            w-2/10 aspect-square border border-white rounded-3xl p-2 m-2"
            ></div>

            <div
              className="relative bg-radial-[at_50%_50%] from-transparent from-5% to-white/14 backdrop-blur 
            w-2/10 aspect-square border-0 border-white rounded-3xl p-2 m-2"
            >
              <div
                className="absolute inset-0 bg-radial-[at_50%_50%] from-white/14 from-5% to-transparent backdrop-blur 
              rounded-3xl"
              >
                um em cima do outro
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-radial-[at_25%_25%] from-trasnparent from-20% to-black/90 backdrop-blur-md w-9/10 border border-white rounded-3xl p-2 m-2">
        <p className="text-3xl  font-bold m-2">
          Projeto blockchain e pagamentos
        </p>
        <p className="font-bold">Início do projeto: 28/04/2025</p>
        <p className="m-2">Eu estou cogitando aprender isso, tem potêncial</p>
      </div>

      <BlogPost
        title="Backend estruturado e banco de dados modelado"
        startDate="02/05/2025"
        description="Conforme fui desenvolvendo o frontend fui percebendo que o backend não comportava mais o que eu estava fazendo, então decidi reestruturar muita coisa, mas valeu a pena"
        version={[
          {
            title: "v1.0",
            endDate: "09/05/2025",
            description:
              "Após uma semana de trabalho fiz banco de dados estruturado e uma api de cadastro de desenvolvedor funcionando",
            image: [
              {
                src: "/images/posts/backendAtualizado/apiDev.png",
                alt: "Api de cadastro de desenvolvedor funcionando",
              },
              {
                src: "/images/posts/backendAtualizado/estruturaBancoDeDados.png",
                alt: "Estrutura do banco de dados",
              },
            ],
          },
        ]}
      />

      <BlogPost
        title="Componente Post"
        startDate="16/05/2025"
        description="Demorei um pouco para voltar ao frontend, mas voltei fazendo um componente que preotelei por um bom tempo"
        version={[
          {
            title: "v1.0",
            endDate: "16/05/2025",
            description:
              "Versão simples que aceita várias versões e varias imagens por versão em apenas um post",
            image: [
              {
                src: "/images/posts/componentePost/componentePost1.png",
                alt: "Arquivo",
              },
              {
                src: "/images/posts/componentePost/componentePost2.png",
                alt: "Código do componente",
              },
              {
                src: "/images/posts/componentePost/componentePost3.png",
                alt: "componente sendo usado",
              },
            ],
          },
        ]}
      />

      <BlogPost
        title="Instalar texturas para os componentes das páginas"
        startDate="16/05/2025"
        description="Para melhorar o apelo visual do site acredito que componente com texturas svg ficariam muito bons e relativamente leves de serem implmentados"
        version={[
          {
            title: "Svg de texturas v1.0",
            endDate: "19/05/2025",
            description:
              "tentei usar um tutorial de um vídeo no youtube, mas o resultado não atendeu em nada o que eu esperava, o maior problema foi que as cores ficaram embaralhadas e as formas geradas não eram nem um pouco controlaveis",
            image: [
              {
                src: "/images/posts/usandoTexturas/efeitoTurbulencia1.png",
                alt: "primeiro teste de textura turbulence",
              },
            ],
          },
        ]}
      />
    </div>
  );
}
