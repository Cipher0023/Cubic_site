"use client";
import React from "react";
import { merriweather } from "@/fonts/merriweather";
import Dock from "@/components/Restaurante/frenteDeLoja/uiLoja/Dock/Dock";
import { useThemeByRoute } from "@/hooks/useThemeByRoute";
import { TopBar } from "@/components/Restaurante/frenteDeLoja/uiLoja/Topbar/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useThemeByRoute();
  return (
    <div className={`bg-base-100 ${merriweather.className}`}>
      <div className="top-0 z-50 sticky">
        <TopBar />
      </div>
      {children}
      <div className="bottom-0 z-50 sticky">
        <Dock />
      </div>
    </div>
  );
}
