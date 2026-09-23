"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export interface ImageCurtainRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  curtainColor?: string;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  zoom?: boolean;
}

/**
 * ImageCurtainReveal:
 * Standard luxury shutter curtain reveal for photos and media cards.
 * An animated mask curtain sweeps away while the inner image smoothly un-scales.
 * Uses useInView on the unclipped outer wrapper for 100% reliable trigger.
 */
export function ImageCurtainReveal({
  children,
  delay = 0,
  duration = 0.9,
  curtainColor = "bg-gradient-to-t from-black via-cyan-950/40 to-black",
  className = "",
  direction = "up",
  zoom = true,
}: ImageCurtainRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px 80px 0px",
  });

  if (shouldReduceMotion) {
    return <div className={`relative overflow-hidden ${className}`}>{children}</div>;
  }

  // Curtain wipe direction variants
  const curtainVariants = {
    hidden: {
      scaleY: direction === "up" || direction === "down" ? 1 : 1,
      scaleX: direction === "left" || direction === "right" ? 1 : 1,
    },
    visible: {
      scaleY: direction === "up" || direction === "down" ? 0 : 1,
      scaleX: direction === "left" || direction === "right" ? 0 : 1,
      transition: {
        duration,
        delay,
        ease: luxuryEase,
      },
    },
  };

  const origin =
    direction === "up"
      ? "top center"
      : direction === "down"
      ? "bottom center"
      : direction === "left"
      ? "center left"
      : "center right";

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Zoom-out Image Layer */}
      <motion.div
        initial={zoom ? { scale: 1.08, filter: "brightness(0.85)" } : false}
        animate={
          isInView && zoom
            ? { scale: 1, filter: "brightness(1)" }
            : zoom
            ? { scale: 1.08, filter: "brightness(0.85)" }
            : undefined
        }
        transition={{ duration: duration * 1.25, delay, ease: luxuryEase }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

      {/* Shutter Curtain Overlay */}
      <motion.div
        variants={curtainVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ transformOrigin: origin, willChange: "transform" }}
        className={`absolute inset-0 z-30 pointer-events-none ${curtainColor}`}
      />

      {/* Modern Specular Sheen Glint on entry */}
      <ModernImageSheen delay={delay + 0.25} />
    </div>
  );
}

/**
 * ModernImageSheen (Specular Glass Gleam):
 * Standard modern tech aesthetic (Apple, Linear, Stripe).
 * A single, soft diagonal light reflection sweeps across the glass frame
 * when entering the viewport, giving the media an ultra-premium, polished look.
 */
export function ModernImageSheen({
  delay = 0.2,
  className = "",
}: {
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px 80px 0px",
  });

  if (shouldReduceMotion) return null;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-20 ${className}`}
    >
      <motion.div
        initial={{ x: "-140%", opacity: 0 }}
        animate={
          isInView
            ? { x: "240%", opacity: [0, 0.35, 0.55, 0.35, 0] }
            : { x: "-140%", opacity: 0 }
        }
        transition={{
          duration: 1.4,
          delay,
          ease: luxuryEase,
        }}
        className="w-[45%] h-[240%] -top-[70%] absolute -rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md pointer-events-none"
      />
    </div>
  );
}

// Backward compatibility alias: replaces repeating laser scan with modern specular sheen
export const ScanlineBeam = ModernImageSheen;

/**
 * AmbientMediaGlow:
 * Soft ambient atmospheric illumination behind media frames.
 */
export function AmbientMediaGlow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute -inset-2 rounded-3xl bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent -z-10 blur-xl opacity-60 pointer-events-none group-hover:opacity-100 transition-opacity duration-700 ${className}`}
    />
  );
}

/**
 * FloatingElement:
 * Gentle levitation sine-wave floating motion for badges, chips, and visual assets.
 */
export function FloatingElement({
  children,
  y = 8,
  yOffset,
  duration = 4,
  className = "",
}: {
  children: ReactNode;
  y?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const effectiveY = yOffset ?? y;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-effectiveY / 2, effectiveY / 2, -effectiveY / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
