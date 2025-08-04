"use client";
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function ButtonIV({ children = 'Botão IV' }: Props) {
  return (
    <div>
      <button
        className="group relative flex h-10 items-center justify-center overflow-hidden rounded-xl bg-cyan-400/80 px-6 text-sm font-bold text-white transition-all duration-300 active:scale-90 active:bg-cyan-900"
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-cyan-900 transition-transform duration-200 ease-out group-hover:translate-y-0 group-active:translate-y-0" />
      </button>
    </div>
  );
}
