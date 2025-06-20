"use client";

import React from "react";
import Link from "next/link";
import NavItem, { NavItemInterface } from "./Item/index";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo/Logo";

export default function Navbar() {
  const items: NavItemInterface[] = [
    {
      url: "/produtos",
      label: "Soluções",
    },
    {
      url: "/sobre",
      label: "Sobre",
    },
    {
      url: "/contato",
      label: "Contato",
    },
    {
      url: "/blog",
      label: "Blog",
    },
  ];

  const pathName = usePathname();

  return (
    <header>
      <nav className="sm:h-[2em] bg-gradient-to-b  from-gray-700 to-gray-700 flex flex-row text-2xl justify-between items-center box-border">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex flex-row">
          {items.map((item, index) => (
            <NavItem
              key={index}
              url={item.url}
              label={item.label}
              isActive={pathName === item.url}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
