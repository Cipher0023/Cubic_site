import React from "react";
import "./globals.css";
import { merriweather } from "@/fonts/merriweather";
import Navbar from "@/components/daisyUI/Navbar/Navbar";
import Dock from "@/components/daisyUI/Dock/Dock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-base-100">
      <body className={merriweather.className}>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {children}
        <Dock />
      </body>
    </html>
  );
}
