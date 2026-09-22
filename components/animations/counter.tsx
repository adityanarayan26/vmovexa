"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [motionValue, inView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{decimals > 0 ? "." + "0".repeat(decimals) : ""}{suffix}
    </span>
  );
}
