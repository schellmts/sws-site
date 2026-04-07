"use client";

import { useLayoutEffect, type RefObject } from "react";

export function useShowcaseGsap(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    // Animacoes temporariamente desativadas.
    void scopeRef;
  }, [scopeRef]);
}
