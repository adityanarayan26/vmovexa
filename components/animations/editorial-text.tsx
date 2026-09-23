"use client";

import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";

const editorialEase = [0.16, 1, 0.3, 1] as const;

export interface EditorialMaskTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  mode?: "words" | "lines";
  inView?: boolean;
}

/**
 * EditorialMaskText:
 * Reveals words progressively with luxury editorial easing without breaking whitespace or text flow.
 * Uses useInView on the unclipped wrapper so words reveal reliably in any viewport context.
 */
export function EditorialMaskText({
  text,
  className = "",
  style,
  as: Component = "span",
  delay = 0,
  stagger = 0.035,
  inView = true,
}: EditorialMaskTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<any>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px 80px 0px",
  });
  const words = text ? text.split(" ") : [];

  if (shouldReduceMotion || words.length === 0) {
    return (
      <Component className={className} style={style}>
        {text}
      </Component>
    );
  }

  const isAnimated = !inView || isInView;

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "115%", rotate: 2.5, opacity: 0 },
    visible: {
      y: "0%",
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.82,
        ease: editorialEase,
      },
    },
  };

  return (
    <Component
      ref={containerRef}
      className={className}
      style={{ display: "inline", ...style }}
    >
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isAnimated ? "visible" : "hidden"}
        style={{ display: "inline" }}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="editorial-mask-inline"
            style={{
              overflow: "hidden",
              display: "inline-block",
              verticalAlign: "top",
              paddingBottom: "0.15em",
              marginBottom: "-0.15em",
              marginRight: i === words.length - 1 ? 0 : "0.28em",
            }}
          >
            <motion.span
              variants={itemVariants}
              style={{
                display: "inline-block",
                transformOrigin: "left center",
                willChange: "transform, opacity",
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

/**
 * EditorialLine:
 * Cuberto overflow-mask kinetic text/element reveal.
 * Wraps children in an overflow-hidden boundary that smoothly glides up with subtle tilt.
 * Uses useInView on the unclipped wrapper so it never gets clipped out by the browser.
 */
export function EditorialLine({
  children,
  delay = 0,
  className = "",
  style,
  inView = true,
  as: Component = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  inView?: boolean;
  as?: ElementType;
}) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<any>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px 80px 0px",
  });

  if (shouldReduceMotion) {
    return (
      <Component className={className} style={style}>
        {children}
      </Component>
    );
  }

  const isAnimated = !inView || isInView;

  return (
    <Component
      ref={containerRef}
      className={`overflow-hidden pb-2 -mb-2 pt-0.5 -mt-0.5 ${className}`}
      style={style}
    >
      <motion.div
        initial={{ y: "115%", rotate: 2, opacity: 0 }}
        animate={
          isAnimated
            ? { y: "0%", rotate: 0, opacity: 1 }
            : { y: "115%", rotate: 2, opacity: 0 }
        }
        transition={{
          duration: 0.85,
          delay,
          ease: editorialEase,
        }}
        style={{
          transformOrigin: "left center",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </Component>
  );
}

/**
 * EditorialTabTransition:
 * Specifically engineered for tab switches across VMOVEXA interactive components.
 */
export function EditorialTabTransition({
  tabKey,
  children,
  className = "",
  style,
}: {
  tabKey: string | number;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.02,
        duration: 0.35,
        ease: editorialEase,
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tabKey}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * EditorialTabItem:
 * An individual item inside an EditorialTabTransition.
 */
export function EditorialTabItem({
  children,
  className = "",
  style,
  delayOffset = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delayOffset?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={{
        hidden: { y: 14, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: delayOffset,
            ease: editorialEase,
          },
        },
      }}
      className={className}
      style={{ willChange: "transform, opacity", ...style }}
    >
      {children}
    </motion.div>
  );
}

// Re-export dedicated Cuberto components
export { CubertoReveal, CubertoLines, CubertoWords } from "./cuberto-text-reveal";
