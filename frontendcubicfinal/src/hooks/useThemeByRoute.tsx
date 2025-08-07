import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useThemeByRoute() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (pathname.startsWith("/prototipoRestaurante")) {
        document.documentElement.setAttribute("data-theme", "anderson");
      } else {
        document.documentElement.setAttribute("data-theme", "cubic");
      }
    }
  }, [pathname]);
}
