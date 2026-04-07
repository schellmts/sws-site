"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, type RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useShowcaseGsap(scopeRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = scopeRef.current;
    if (!root) return;

    const navEntry =
      typeof window !== "undefined"
        ? performance.getEntriesByType("navigation")[0] as
            | PerformanceNavigationTiming
            | undefined
        : undefined;
    if (navEntry?.type === "back_forward") {
      return;
    }

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const hero = root.querySelector<HTMLElement>("[data-showcase-hero]");
      if (hero) {
        gsap.fromTo(
          hero.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
          },
        );
      }

      gsap.utils
        .toArray<HTMLElement>(root.querySelectorAll("[data-showcase-stagger]"))
        .forEach((container) => {
          const items = container.querySelectorAll(
            "[data-showcase-stagger-item]",
          );
          if (!items.length) return;
          if (ScrollTrigger.isInViewport(container, 0.1)) {
            gsap.set(items, { opacity: 1, y: 0 });
            return;
          }
          gsap.set(items, { opacity: 0, y: 40 });
          const st = ScrollTrigger.create({
            trigger: container,
            start: "top bottom",
            once: true,
            invalidateOnRefresh: false,
            onEnter: () => {
              gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
              });
            },
          });
          if (st.progress > 0 || st.isActive) {
            gsap.set(items, { opacity: 1, y: 0 });
            st.kill();
          }
        });

      gsap.utils
        .toArray<HTMLElement>(root.querySelectorAll("[data-showcase-parallax]"))
        .forEach((wrap) => {
          const inner = wrap.querySelector<HTMLElement>(
            "[data-showcase-parallax-inner]",
          );
          if (!inner) return;
          gsap.fromTo(
            inner,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: wrap,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.75,
              },
            },
          );
        });
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, [scopeRef]);
}
