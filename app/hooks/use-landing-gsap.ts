"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, type RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useLandingGsap(scopeRef: RefObject<HTMLElement | null>) {
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
    if (prefersReduced) {
      return;
    }

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.08,
      });

      if (root.querySelector("[data-hero-eyebrow]")) {
        heroTl.from("[data-hero-eyebrow]", {
          opacity: 0,
          y: 18,
          duration: 0.55,
        });
      }

      if (root.querySelector(".hero-line-inner")) {
        heroTl.from(
          ".hero-line-inner",
          {
            yPercent: 100,
            duration: 0.9,
            stagger: 0.1,
          },
          "-=0.15",
        );
      }

      heroTl
        .from(
          "[data-hero-sub]",
          { opacity: 0, y: 24, duration: 0.65 },
          "-=0.45",
        )
        .from(
          "[data-hero-logo]",
          { opacity: 0, y: 24, duration: 0.7, ease: "power3.out" },
          "-=0.35",
        );

      gsap.utils
        .toArray<HTMLElement>(root.querySelectorAll("[data-gsap-reveal]"))
        .forEach((el) => {
          if (ScrollTrigger.isInViewport(el, 0.15)) {
            gsap.set(el, { opacity: 1, y: 0 });
            return;
          }
          gsap.set(el, { opacity: 0, y: 44 });
          const st = ScrollTrigger.create({
            trigger: el,
            start: "top bottom",
            once: true,
            invalidateOnRefresh: false,
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            },
          });
          if (st.progress > 0 || st.isActive) {
            gsap.set(el, { opacity: 1, y: 0 });
            st.kill();
          }
        });

      gsap.utils
        .toArray<HTMLElement>(root.querySelectorAll("[data-gsap-stagger]"))
        .forEach((container) => {
          const items = container.querySelectorAll("[data-gsap-stagger-item]");
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
                duration: 0.75,
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

      const parallaxInner = root.querySelector<HTMLElement>(
        "[data-parallax-inner]",
      );
      const parallaxWrap = root.querySelector<HTMLElement>(
        "[data-parallax-wrap]",
      );
      if (parallaxInner && parallaxWrap) {
        gsap.fromTo(
          parallaxInner,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: parallaxWrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.75,
            },
          },
        );
      }
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, [scopeRef]);
}
