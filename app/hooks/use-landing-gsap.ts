"use client";

import { useLayoutEffect, type RefObject } from "react";

export function useLandingGsap(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    // Animacoes temporariamente desativadas.
    void scopeRef;
  }, [scopeRef]);
}
