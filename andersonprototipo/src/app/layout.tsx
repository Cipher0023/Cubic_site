import React from "react";
import "./globals.css";
import { merriweather } from "@/fonts/merriweather";
import { UserHydrator } from "@/components/Hydrators/UserHydrator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-base-100">
      <body className={merriweather.className}>
        <div className="sticky top-0 z-50"></div>
        <UserHydrator>{children}</UserHydrator>
      </body>
    </html>
  );
}
