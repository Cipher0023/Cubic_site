import React from "react";
import Navbar from "../../../../frontendcubicfinal/src/components/Cubic/Navbar/Navbar";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="sticky top-0 z-100 ">
          {" "}
          {/* Adicione esta div wrapper */}
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
