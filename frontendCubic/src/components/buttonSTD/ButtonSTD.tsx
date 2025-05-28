"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "small" | "large"
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-neutral-100 p-4">
      <div className="flex flex-col gap-8 md:flex-row">
        <DieterRamsButton>Primary Button</DieterRamsButton>
        <DieterRamsButton variant="secondary">Secondary Button</DieterRamsButton>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <DieterRamsButton size="small">Small</DieterRamsButton>
        <DieterRamsButton>Default</DieterRamsButton>
        <DieterRamsButton size="large">Large</DieterRamsButton>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <DieterRamsButton disabled>Disabled</DieterRamsButton>
      </div>
    </div>
  )
}

function DieterRamsButton({
  children,
  variant = "primary",
  size = "default",
  className,
  onClick,
  disabled = false,
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const baseStyles =
    "inline-flex items-center justify-center font-normal tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden"

  const variantStyles = {
    primary: "bg-neutral-900 text-neutral-50",
    secondary: "bg-neutral-200 text-neutral-900",
  }

  const sizeStyles = {
    small: "h-8 rounded-sm px-3 text-xs",
    default: "h-10 rounded-sm px-4 text-sm",
    large: "h-12 rounded-sm px-6 text-base",
  }

  return (
    <motion.button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (isPressed) setIsPressed(false)
      }}
      initial={{ y: 0 }}
      animate={{
        y: isPressed ? 4 : 0,
        backgroundColor: isPressed
          ? variant === "primary"
            ? "#000000"
            : "#d4d4d4"
          : isHovered
            ? variant === "primary"
              ? "#262626"
              : "#e5e5e5"
            : variant === "primary"
              ? "#171717"
              : "#e5e5e5",
        boxShadow: isPressed
          ? "0 0px 0px rgba(0, 0, 0, 0)"
          : isHovered
            ? "0 6px 0px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)"
            : "0 4px 0px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      {children}
      {isPressed && !disabled && (
        <motion.span
          className={`absolute inset-0 ${variant === "primary" ? "bg-white" : "bg-black"} opacity-10`}
          initial={{ scale: 0, opacity: 0.3 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  )
}
