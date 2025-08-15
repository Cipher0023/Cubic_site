"use client";
import React from "react";
import { merriweather } from "@/fonts/merriweather";
import Navbar from "@/components/restaurante/Navbar/Navbar";
import Dock from "@/components/restaurante/Dock/Dock";
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
      <div className="z-50 sticky bottom-0">
        <Dock />
      </div>
    </div>
  );
}
