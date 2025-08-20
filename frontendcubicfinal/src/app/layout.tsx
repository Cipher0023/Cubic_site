import React from "react";
import "./globals.css";
import { ViewportProvider } from "@/context/ViewportContext";
import { AppHydrator } from "@/components/Geral/App_hydrator/App_hydrator";
import { UserHydrator } from "@/components/Geral/Hydrators/UserHydrator";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <ViewportProvider>
          {" "}
          <AppHydrator>
            <UserHydrator>{children}</UserHydrator>
          </AppHydrator>
        </ViewportProvider>
      </body>
    </html>
  );
}
