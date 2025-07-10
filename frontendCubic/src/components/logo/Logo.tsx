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
          className="w-14 aspect-square"
        />
        <p className="text-white text-xl">Cubic</p>
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-center items-center">
      <img
        src="/isometric-cube.svg"
        alt="logo Cubic"
        className="w-20 aspect-square"
      />
      <p className="text-white text-xl">Cubic</p>
    </div>
  );
}
