import React from "react";
import "./globals.css";
import { merriweather } from "@/fonts/merriweather";
import { UserHydrator } from "@/components/Hydrators/UserHydrator";
import { AppHydrator } from "@/components/App_hydrator/App_hydrator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-base-100">
      <body className={merriweather.className}>
        <div className="top-0 z-50 sticky"></div>
        <AppHydrator>
          <UserHydrator>{children}</UserHydrator>
        </AppHydrator>
      </body>
    </html>
  );
}
