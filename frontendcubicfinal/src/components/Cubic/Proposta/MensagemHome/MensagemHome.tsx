"use client";
import React from "react";

export default function MensagemHome() {
  return (
    <div className="relative group w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-30 rounded-2xl transition-opacity duration-300 blur"></div>
        <section className="bg-gradient-to-br from-base-300 to-base-100 shadow-md p-5 border border-base-300 rounded-2xl w-full h-full relative">
      <h2 className="mb-4 font-bold text-3xl text-center">
        Envie uma Mensagem
      </h2>
      <p className="mb-8 text-base-content/80 text-center">
        Ficamos felizes em receber seu contato, deixe sua mensagem que logo
        retornaremos.
      </p>
      <form className="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Nome*</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="input-bordered w-full input"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Email*</label>
          <input
            type="email"
            placeholder="Seu email"
            className="input-bordered w-full input"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className="mb-2 font-semibold">Empresa</label>
          <input
            type="text"
            placeholder="Sua empresa"
            className="input-bordered w-full input"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className="mb-2 font-semibold">Mensagem*</label>
          <textarea
            placeholder="Sua mensagem"
            className="textarea-bordered w-full h-32 textarea"
          />
        </div>
        <div className="flex justify-center md:col-span-2">
          <button type="submit" className="px-8 btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </section>
      </div>
  );
}
