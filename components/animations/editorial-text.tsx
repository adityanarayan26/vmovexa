"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

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
  const words = text ? text.split(" ") : [];

  if (shouldReduceMotion || words.length === 0) {
    return (
      <Component className={className} style={style}>
        {text}
      </Component>
    );
  }

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
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: editorialEase,
      },
    },
  };

  const motionProps = inView
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "0px 0px -20px 0px" },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <Component className={className} style={{ display: "inline", ...style }}>
      <motion.span
        variants={containerVariants}
        {...motionProps}
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
              marginRight: i === words.length - 1 ? 0 : "0.28em",
            }}
          >
            <motion.span
              variants={itemVariants}
              style={{
                display: "inline-block",
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
 * Wraps a block in a subtle, high-performance slide-up fade reveal.
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

  if (shouldReduceMotion) {
    return (
      <Component className={className} style={style}>
        {children}
      </Component>
    );
  }

  const motionProps = inView
    ? {
        initial: { y: 20, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true, margin: "0px 0px -30px 0px" },
      }
    : {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

  return (
    <Component className={className} style={style}>
      <motion.div
        {...motionProps}
        transition={{
          duration: 0.55,
          delay,
          ease: editorialEase,
        }}
        style={{ willChange: "transform, opacity" }}
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
