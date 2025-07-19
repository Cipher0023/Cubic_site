import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next.js + Tailwind v4",
  description: "Um projeto básico com Next.js e Tailwind CSS v4",
};

export default function Rootlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
