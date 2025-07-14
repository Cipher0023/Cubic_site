import { ButtonII } from "@/components/buttonTypes/ButtonII";
import Link from "next/link";
import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div
      className="flex flex-col w-full items-center aspect-square text-white
    bg-linear-to-br from-gray-950 via-indigo-950 to-sky-500 "
    >
      <div className="flex flex-row items-center gap-4 h-20">
        <p>Blog do Foguete</p>

        <Link href="/blog/blogDoFoguete">
          <ButtonII>Ir para blog </ButtonII>
        </Link>
      </div>
    </div>
  );
}
