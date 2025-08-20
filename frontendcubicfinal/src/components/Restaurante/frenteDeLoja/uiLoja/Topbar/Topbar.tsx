"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TopBar() {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

      if (scrollDirection === "down") {
        setScrollY(currentScrollY);
        setIsVisible(false);
      } else {
        const fastScrollY = Math.max(
          0,
          scrollY - (lastScrollY - currentScrollY) * 3
        );
        setScrollY(fastScrollY);
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollY]);

  const translateY = isVisible ? Math.max(-scrollY, -180) : -80;

  return (
    <header
      className="top-0 right-0 left-0 z-50 fixed bg-base-100 border-b border-base-200 transition-transform duration-200 ease-out"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-7xl">
        <div className="flex items-center">
          <div className="font-bold text-accent text-2xl">ShopLogo</div>
        </div>

        <div className="flex-1 mx-4 max-w-md">
          <div className="relative">
            <Search className="top-1/2 left-3 absolute w-4 h-4 text-base-100 -translate-y-1/2 transform" />
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="pr-4 pl-10 w-full"
            />
          </div>
        </div>

        <div className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="relative bg-transparent"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="-top-2 -right-2 absolute flex justify-center items-center bg-red-500 rounded-full w-5 h-5 text-white text-xs">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
