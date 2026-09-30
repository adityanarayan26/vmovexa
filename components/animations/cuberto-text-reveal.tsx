"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";

export const cubertoEase = [0.16, 1, 0.3, 1] as const;

export interface CubertoRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  rotate?: number;
  className?: string;
  wrapperClassName?: string;
  as?: ElementType;
  inView?: boolean;
  once?: boolean;
  style?: React.CSSProperties;
}

/**
 * CubertoReveal:
 * Iconic Cuberto overflow-mask kinetic text/element reveal.
 * The child element glides up from behind an invisible overflow mask with subtle tilt.
 * Uses useInView on the unclipped wrapper so intersection detection never fails.
 */
export function CubertoReveal({
  children,
  delay = 0,
  duration = 0.85,
  rotate = 2,
  className = "",
  wrapperClassName = "",
  as: Component = "div",
  inView = true,
  once = true,
  style,
}: CubertoRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<any>(null);
  const isInView = useInView(containerRef, {
    once,
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
      className={`overflow-hidden pb-2 -mb-2 pt-1 -mt-1 ${wrapperClassName}`}
      style={style}
    >
      <motion.div
        initial={{ y: "115%", rotate, opacity: 0 }}
        animate={
          isAnimated
            ? { y: "0%", rotate: 0, opacity: 1 }
            : { y: "115%", rotate, opacity: 0 }
        }
        transition={{
          duration,
          delay,
          ease: cubertoEase,
        }}
        className={className}
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

export interface CubertoLinesProps {
  lines: (string | ReactNode)[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  rotate?: number;
  inView?: boolean;
}

/**
 * CubertoLines:
 * Splits a multiline title into individual masked lines, revealing each
 * with staggered Cuberto kinetic physics.
 * Observes the unclipped parent container so all lines reveal together reliably.
 */
export function CubertoLines({
  lines,
  as: Component = "div",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  duration = 0.88,
  rotate = 2.2,
  inView = true,
}: CubertoLinesProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<any>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px 80px 0px",
  });

  if (shouldReduceMotion) {
    return (
      <Component className={`${className} uppercase`.trim()}>
        {lines.map((line, idx) => (
          <div key={idx} className={lineClassName}>
            {line}
          </div>
        ))}
      </Component>
    );
  }

  const isAnimated = !inView || isInView;

  return (
    <Component ref={containerRef} className={`${className} uppercase`.trim()}>
      {lines.map((line, idx) => {
        const itemDelay = delay + idx * stagger;

        return (
          <div
            key={idx}
            className="overflow-hidden py-0.5 block"
          >
            <motion.div
              initial={{ y: "115%", rotate, opacity: 0 }}
              animate={
                isAnimated
                  ? { y: "0%", rotate: 0, opacity: 1 }
                  : { y: "115%", rotate, opacity: 0 }
              }
              transition={{
                duration,
                delay: itemDelay,
                ease: cubertoEase,
              }}
              className={lineClassName}
              style={{
                transformOrigin: "left center",
                willChange: "transform, opacity",
              }}
            >
              {line}
            </motion.div>
          </div>
        );
      })}
    </Component>
  );
}

export interface CubertoWordsProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  rotate?: number;
  inView?: boolean;
}

/**
 * CubertoWords:
 * Masks and reveals text word-by-word with Cuberto kinetic physics.
 */
export function CubertoWords({
  text,
  as: Component = "span",
  className = "",
  delay = 0,
  stagger = 0.035,
  duration = 0.8,
  rotate = 3,
  inView = true,
}: CubertoWordsProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<any>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px 80px 0px",
  });
  const words = text ? text.split(" ") : [];

  if (shouldReduceMotion || words.length === 0) {
    return <Component className={className}>{text}</Component>;
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
    hidden: { y: "115%", rotate, opacity: 0 },
    visible: {
      y: "0%",
      rotate: 0,
      opacity: 1,
      transition: {
        duration,
        ease: cubertoEase,
      },
    },
  };

  return (
    <Component ref={containerRef} className={className} style={{ display: "inline" }}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isAnimated ? "visible" : "hidden"}
        style={{ display: "inline" }}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            style={{
              overflow: "hidden",
              display: "inline-block",
              verticalAlign: "top",
              paddingBottom: "0.2em",
              marginBottom: "-0.2em",
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
