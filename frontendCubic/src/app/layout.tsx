"use client";

import React from "react";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import {
  useViewportContext,
  ViewportProvider,
} from "@/context/ViewportContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isMobile } = useViewportContext();
  return (
    <>
      <div className="sticky top-0 z-100"></div>
      {children}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <ViewportProvider>
          <LayoutContent>{children}</LayoutContent>
          <footer>
            <Footer />
          </footer>
        </ViewportProvider>
      </body>
    </html>
  );
}
