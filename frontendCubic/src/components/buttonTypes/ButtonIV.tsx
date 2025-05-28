import React from 'react'

type Props = object

export interface NavItemInterface {
  label: string
}


export default function ButtonIV({}: Props) {
  return (
    <div>

      {/* para que a animação funcione são criados três elementos, 
      o primeiro é o retângulo principal, que será exibido ao user 
      na maioria do tempo, o elemento de texto e o elemento de efeito 
      que será exibido quando o usuário passar o mouse sobre o botão.
      */}
      <button className="group relative flex h-10 items-center justify-center overflow-hidden 
      rounded-xl bg-cyan-400/80 px-6 text-sm font-bold text-white transition-all duration-300 
      active:scale-90 active:bg-cyan-900"
      >
        <span className="relative z-1">Botão IV</span>
        <span className="absolute inset-0 z-0 h-full w-full translate-y-full bg-cyan-900 
        transition-transform duration-200 ease-out group-hover:translate-y-0 
        group-active:translate-y-0"
        />
      </button>
    </div>
  )
}