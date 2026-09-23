"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export interface BlurRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  blur?: number;
  blurAmount?: number;
  y?: number;
  className?: string;
  as?: ElementType;
  inView?: boolean;
}

/**
 * BlurReveal:
 * Luxury blur-to-focus typographic fade.
 * Starts with cinematic Gaussian blur and slight vertical displacement,
 * resolving smoothly into crisp typography.
 */
export function BlurReveal({
  children,
  delay = 0,
  duration = 0.8,
  blur = 12,
  blurAmount,
  y = 12,
  className = "",
  as: Component = "div",
  inView = true,
}: BlurRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveBlur = blurAmount ?? blur;
  const containerRef = useRef<any>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px 80px 0px",
  });

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  const isAnimated = !inView || isInView;

  return (
    <Component ref={containerRef} className={className}>
      <motion.div
        initial={{ filter: `blur(${effectiveBlur}px)`, opacity: 0, y }}
        animate={
          isAnimated
            ? { filter: "blur(0px)", opacity: 1, y: 0 }
            : { filter: `blur(${effectiveBlur}px)`, opacity: 0, y }
        }
        transition={{
          duration,
          delay,
          ease: luxuryEase,
        }}
        style={{ willChange: "filter, opacity, transform" }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
