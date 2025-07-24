import React from "react";
import "./../globals.css";
import { merriweather } from "@/fonts/merriweather";
import Navbar from "@/components/Navbar/Navbar";
import Dock from "@/components/Dock/Dock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="pt-BR" className="bg-base-100">
      <div className={merriweather.className}>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
        <div className="sticky botton-0 z-50">
          <Dock />
        </div>
      </div>
    </div>
  );
}
