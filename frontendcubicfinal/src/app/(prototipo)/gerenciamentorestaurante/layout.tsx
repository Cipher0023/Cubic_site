import React from "react";
import { merriweather } from "@/fonts/merriweather";
import Navbar_internal from "@/components/restaurante/Dashboard_components/Navbar_internal/Navbar_internal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="pt-BR" className="bg-base-100">
      <div className={merriweather.className}>
        <div className="top-0 z-50 sticky">
          <Navbar_internal />
        </div>
        {children}
      </div>
    </div>
  );
}
