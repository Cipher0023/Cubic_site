"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Search, Info, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const dockItems = [
  { id: "home", label: "Home", icon: Home, href: "/restaurante" },
  { id: "orders", label: "Pedidos", icon: ShoppingBag, href: "/restaurante/pedidos" },
  { id: "search", label: "Busca", icon: Search, href: "/restaurante/busca" },
  { id: "about", label: "Sobre nós", icon: Info, href: "/restaurante/sobre" },
  { id: "profile", label: "Perfil", icon: User, href: "/restaurante/perfil" },
];

export default function BottomDock() {
  const pathname = usePathname();

  return (
    <div className="right-0 bottom-0 left-0 z-50 fixed bg-white px-4 py-2 border-gray-200 border-t">
      <div className="flex justify-around items-center mx-auto max-w-md">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const href = item.href;
          const isActive = pathname === href || pathname.startsWith(href + "/");

          return (
            <Button
              key={item.id}
              asChild
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
                isActive
                  ? "text-accent-content bg-accent"
                  : "text-base-300 hover:text-base-100"
              }`}
            >
              <Link href={href}>
                <Icon size={20} />
                <span className="font-medium text-xs">{item.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
