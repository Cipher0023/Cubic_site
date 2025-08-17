"use client";
import React, { ReactNode, useEffect } from "react";
import usePrcStore from "@/store/usePrcStore";
import useCpgStore from "@/store/useCpgStore";

export function AppHydrator({ children }: { children: ReactNode }) {
  const fetchCategories = usePrcStore((s) => s.fetchCategories);
  const fetchCampaigns = useCpgStore((s) => s.fetchCampaigns);

  useEffect(() => {
    fetchCategories();
    fetchCampaigns();
  }, [fetchCategories, fetchCampaigns]);

  return <>{children}</>;
}