"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * MagneticElement:
 * GSAP-powered magnetic cursor interaction for buttons, badges, and tech pills.
 * Robustly adapts to block/grid layouts when w-full is requested.
 */
export function MagneticElement({
  children,
  strength = 0.28,
  className = "",
  style,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = magneticRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;

      gsap.to(el, {
        x,
        y,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  const isBlock = className.includes("w-full") || className.includes("block");

  return (
    <div
      ref={magneticRef}
      className={className}
      style={{
        display: isBlock ? "block" : "inline-block",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * GsapScrollReveal:
 * Reliable entrance animation that smoothly reveals cards and layouts.
 */
export function GsapScrollReveal({
  children,
  className = "",
  style,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    // If already in viewport on mount, reveal smoothly without waiting
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, delay, ease: "power2.out" }
      );
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={`w-full ${className}`} style={style}>
      {children}
    </div>
  );
}

/**
 * GsapParallax:
 * Adds a vertical parallax effect relative to scroll using GSAP scrub.
 */
export function GsapParallax({
  children,
  className = "",
  style,
  speed = 0.5,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const ctx = gsap.context(() => {
      gsap.to(target, {
        y: () => (container.offsetHeight * speed) * -1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={style}>
      <div 
        ref={targetRef} 
        className="w-full h-full will-change-transform"
        style={{ height: `${100 + (Math.abs(speed) * 100)}%`, top: speed > 0 ? 0 : `-${Math.abs(speed) * 100}%`, position: 'absolute' }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * ParallaxElement:
 * Smoothly translates any element relative to scroll with GSAP scrub.
 * Perfect for floating cards, background posters, and architectural diagrams.
 */
export function ParallaxElement({
  children,
  offset = 40,
  className = "",
  style,
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -offset / 2 },
        {
          y: offset / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [offset]);

  return (
    <div ref={elRef} className={className} style={{ willChange: "transform", ...style }}>
      {children}
    </div>
  );
}
