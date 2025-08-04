"use client";
import React from "react";

export default function MensagemHome() {
  return (
    <section className="w-full max-w-md bg-base-100 p-10 rounded-lg shadow">
      <h2 className="text-3xl font-bold text-center mb-4">
        Envie uma Mensagem
      </h2>
      <p className="text-center text-base-content/80 mb-8">
        Ficamos felizes em receber seu contato, deixe sua mensagem que logo
        retornaremos.
      </p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Nome*</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Email*</label>
          <input
            type="email"
            placeholder="Seu email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-2">Empresa</label>
          <input
            type="text"
            placeholder="Sua empresa"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-2">Mensagem*</label>
          <textarea
            placeholder="Sua mensagem"
            className="textarea textarea-bordered w-full h-32"
          />
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button type="submit" className="btn btn-primary px-8">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}
