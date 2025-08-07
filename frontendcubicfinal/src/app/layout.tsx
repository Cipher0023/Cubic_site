"use client";

import React from "react";
import "./globals.css";
import { ViewportProvider } from "@/context/ViewportContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <ViewportProvider>{children}</ViewportProvider>
    </html>
  );
}
