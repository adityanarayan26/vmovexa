"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function BackgroundGradient() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const el = bgRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "400px top", // Fades in completely after 400px of scroll
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 pointer-events-none -z-10 opacity-0 transition-colors duration-1000"
      style={{
        background: `
          radial-gradient(75rem 52rem at -8% -8%, rgba(34, 211, 238, 0.15), transparent 58%),
          radial-gradient(60rem 50rem at 106% 14%, rgba(79, 70, 229, 0.2), transparent 60%),
          radial-gradient(48rem 42rem at 56% 110%, rgba(147, 51, 234, 0.15), transparent 62%)
        `,
      }}
    />
  );
}
