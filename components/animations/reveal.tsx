"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

const cubertoEase = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  duration = 0.85,
  className = "",
  style,
  id,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px 80px 0px",
  });

  if (reduceMotion) {
    return (
      <div className={className} id={id} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      id={id}
      style={style}
    >
      <motion.div
        initial={{ y: "115%", rotate: 2, opacity: 0 }}
        animate={
          isInView
            ? { y: "0%", rotate: 0, opacity: 1 }
            : { y: "115%", rotate: 2, opacity: 0 }
        }
        transition={{ duration, delay, ease: cubertoEase }}
        style={{
          transformOrigin: "left center",
          willChange: "transform, opacity",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
