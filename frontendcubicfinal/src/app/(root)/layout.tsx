"use client";
import React from "react";
import Navbar from "../../../../frontendcubicfinal/src/components/Cubic/Navbar/Navbar";
import "../globals.css";
import { useThemeByRoute } from "@/hooks/useThemeByRoute";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useThemeByRoute();
  return (
    <body>
      <div className="sticky top-0 z-100 ">
        <Navbar />
      </div>
      {children}
    </body>
  );
}
