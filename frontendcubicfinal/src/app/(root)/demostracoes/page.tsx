import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-base-100">
      <h1 className="text-4xl font-bold">
        Veja as demosntrações dos nossos produtos
      </h1>
      <p>
        conheça os dois produtos que desenvolvemos para resolver suas
        necessidades de vendas online e de visibilidade digital para sua empresa{" "}
      </p>
      <div className="w-full flex flex-row p-20 gap-10">
        <div className="w-full h-100 bg-red-500">imagem</div>
        <div className="w-full">
          <div className="badge badge-success">E-commerce Completo!</div>
          <div className="w-full flex flex-col items-center justify-center">
            <div>Loja online</div>
            <p>Plataforma completa de vendas online</p>
            <p>
              E-commerce totalmente funcional desenvolvido do zero, com todas as
              funcionalidades necessárias para vendas online. Inclui catálogo de
              produtos, carrinho de compras, processamento de pagamentos, painel
              administrativo completo e sistema de gestão de pedidos.
            </p>
          </div>
          <div className="w-full bg-amber-800">items</div>
          <div>
            <div>principais funcionalidades:</div>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
          <div>
            <div>Tecnologias Utilizadas</div>
            <ul className="flex flex-row">
              <li>
                <div className="badge badge-success">E-commerce</div>
              </li>
              <li>
                <div className="badge badge-success">E-commerce</div>
              </li>
              <li>
                <div className="badge badge-success">E-commerce</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
