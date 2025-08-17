"use client";
import { ReactNode } from "react";
import { useCheckUser } from "@/hooks/useCheckUser";

export function UserHydrator({ children }: { children: ReactNode }) {
  useCheckUser();
  return <>{children}</>;
}
