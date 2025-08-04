"use client";

import React from "react";
import Link from "next/link";
import NavItem, { NavItemInterface } from "./Item/item";
import { usePathname } from "next/navigation";
import Logo from "@/components/Cubic/Logo/Logo";
import { useViewportContext } from "@/context/ViewportContext";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathName = usePathname();
  const { isMobile } = useViewportContext();
  const items: NavItemInterface[] = [
    {
      url: "/projetos",
      label: "Projetos",
    },
    {
      url: "/servicos",
      label: "Servicos",
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
  if (isMobile) {
    return (
      <header>
        <nav className="bg-linear-to-b from-gray-800 to-gray-900 flex flex-row text-2xl justify-between items-center box-border p-2 text-white">
          <Link href="/">
            <Logo />
          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              {items.map((item, index) => (
                <NavItem
                  key={index}
                  url={item.url}
                  label={item.label}
                  isActive={pathName === item.url}
                />
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  return (
    <header>
      <nav className="bg-linear-to-b from-gray-800 to-gray-900 flex flex-row text-2xl justify-between items-center box-border p-1">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex flex-row space-x-4">
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
