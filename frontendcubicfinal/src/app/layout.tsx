
import React from "react";
import "./globals.css";
import { ViewportProvider } from "@/context/ViewportContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <ViewportProvider>{children}</ViewportProvider>
      </body>
    </html>
  );
}
