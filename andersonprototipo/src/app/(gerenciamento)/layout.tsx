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
    <html lang="pt-BR" className="bg-base-100">
      <body className={merriweather.className}>
        <div className="sticky top-0 z-50">
          <Navbar_internal />
        </div>
        {children}
      </body>
    </html>
  );
}
