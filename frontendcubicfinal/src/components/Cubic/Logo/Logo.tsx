"use client";

import React from "react";
import { useViewportContext } from "@/context/ViewportContext";

type Props = object;

export default function Logo({}: Props) {
  const { isMobile } = useViewportContext();
  if (isMobile) {
    return (
      <div className="flex flex-row justify-center items-center">
        <img
          src="/isometric-cube.svg"
          alt="logo Cubic"
          className="w-10 aspect-square"
        />
        <p className="text-white text-2xl">Cubic</p>
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-center items-center">
      <img
        src="/isometric-cube.svg"
        alt="logo Cubic"
        className="w-15 aspect-square"
      />
      <p className="text-white text-3xl">Cubic</p>
    </div>
  );
}
