"use client";
import { ReactNode, useEffect } from "react";
import usePrcStore from "@/store/usePrcStore";
// etc.

export function AppHydrator({ children }: { children: ReactNode }) {
  const fetchCategories = usePrcStore((s) => s.fetchCategories);
  // etc.

  useEffect(() => {
    fetchCategories();

    // …
  }, [fetchCategories]);

  return <>{children}</>;
}
