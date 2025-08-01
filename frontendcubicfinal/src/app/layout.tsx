"use client";

import React from "react";
import "./globals.css";
import { ViewportProvider } from "@/context/ViewportContext";

function LayoutContent({ children }: { children: React.ReactNode }) {
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
    <html data-theme="cubic" lang="pt-BR">
      <body>
        <ViewportProvider>
          <LayoutContent>{children}</LayoutContent>
        </ViewportProvider>
      </body>
    </html>
  );
}
