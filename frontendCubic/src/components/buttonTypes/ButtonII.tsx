"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "light" | "dark" // Variante de cor do botão
}

/**
 * Componente de botão estilizado com efeito 3D/interativo
 * - Possui um shadow que cria profundidade quando pressionado
 * - Suporta duas variantes de cores (light/dark)
 * - Animação suave na interação do usuário
 * - Responsivo a eventos de mouse e touch
 */
export function ButtonII({ children, className, variant = "light", ...props }: ButtonProps) {
  // Estado para controlar a animação de pressionamento
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div className="relative inline-block">
      {/* ---------------------------------------------------------
          ELEMENTO DE SOMBRA (fake 3D effect) 
          - Cria a ilusão de profundidade abaixo do botão
          - Posição animada baseada no estado de pressionamento
      --------------------------------------------------------- */}
      <div
        className={cn(
          "absolute inset-0  top-[4px] left-[3px] right-[-2px] bottom-[-4px] rounded-2xl",
          variant === "light" ? "bg-gray-300" : "bg-gray-700", // Cor do shadow baseado na variante
        )}
      />

      {/* ---------------------------------------------------------
          BOTÃO PRINCIPAL 
          - Elemento interativo com todos os handlers de evento
          - Estilos condicionais baseados no estado e variante
      --------------------------------------------------------- */}
      <button
        className={cn(
          // Layout & Tipografia
          "relative inline-flex items-center justify-center  ",
          "px-6 h-12 font-normal text-base",
          "select-none rounded-0",
          "rounded-2xl font-bold text-xl",

          // Bordas e Sombras
          "border-0 border-gray-400 ",
          "shadow-sm",

          // Transições e Animações
          "transition-all duration-100 ease-out",

          // Variantes de Cor
          variant === "light"
            ? "bg-radial from-gray-100 from-75% to-gray-600 text-gray-900" // Light theme
            : "bg-gray-800 text-gray-100", // Dark theme

          // Estados Interativos
          isPressed && "translate-y-[4px] translate-x-[2px] shadow-none", // Efeito de pressionamento
          "focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-400", // Estilo de foco

          // Classe passível de override
          className
        )}
        // Handlers para estados interativos
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => isPressed && setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}