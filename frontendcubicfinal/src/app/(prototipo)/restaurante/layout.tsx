"use client";
import React from "react";
import { merriweather } from "@/fonts/merriweather";
import Navbar from "@/components/Restaurante/frenteDeLoja/uiLoja/Navbar/Navbar";
import Dock from "@/components/Restaurante/frenteDeLoja/uiLoja/Dock/Dock";
import { useThemeByRoute } from "@/hooks/useThemeByRoute";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useThemeByRoute();
  return (
    <div className={`bg-base-100 ${merriweather.className}`}>
      <div className="top-0 z-50 sticky">
        <Navbar />
      </div>
      {children}
      <div className="bottom-0 z-50 sticky">
        <Dock />
      </div>
    </div>
  );
}
