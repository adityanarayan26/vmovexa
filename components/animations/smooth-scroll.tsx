"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScroll() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.__lenis = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Use robust requestAnimationFrame instead of gsap.ticker to prevent time mismatches
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Smooth anchor click handling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Force recalculation of sizes after a short delay to account for lazy images
    const resizeTimeout = setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimeout);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Recalculate ScrollTrigger on route transition
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
      // Small timeout ensures DOM is fully rendered before refreshing GSAP
      setTimeout(() => {
        window.__lenis?.resize();
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [pathname]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 9999,
        pointerEvents: "none",
        background: "linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)",
        transformOrigin: "left center",
        scaleX,
        boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
      }}
    />
  );
}
