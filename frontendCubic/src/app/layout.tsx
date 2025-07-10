import React from "react";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
