import React from "react";
import "./../globals.css";
import { merriweather } from "@/fonts/merriweather";
import Navbar_internal from "@/components/Dashboard_components/Navbar_internal/Navbar_internal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="pt-BR" className="bg-base-100">
      <div className={merriweather.className}>
        <div className="sticky top-0 z-50">
          <Navbar_internal />
        </div>
        {children}
      </div>
    </div>
  );
}
