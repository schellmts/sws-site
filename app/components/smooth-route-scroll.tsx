"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Rola suavemente ao topo ao mudar de rota (cliques em <Link> entre páginas).
 * Ignora a primeira montagem para não animar o carregamento inicial.
 */
export function SmoothRouteScroll() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [pathname]);

  return null;
}
