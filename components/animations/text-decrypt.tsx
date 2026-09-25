"use client";

import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface TextDecryptProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  delay?: number;
  speed?: number;
  characters?: string;
  trigger?: "inView" | "mount";
  loopInterval?: number;
}

const DEFAULT_CHARS = "010101_•/[]<>~#%*+=ABCDEF0123456789";

/**
 * TextDecrypt:
 * Deep-tech telemetry character scrambling reveal.
 * Scrambles through randomized cyber glyphs before progressively locking into place.
 */
export function TextDecrypt({
  text,
  className = "",
  as: Component = "span",
  delay = 0,
  speed = 30,
  characters = DEFAULT_CHARS,
  trigger = "inView",
  loopInterval,
}: TextDecryptProps) {
  const delayMs = delay > 10 ? delay : delay * 1000;
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(text);
  const [isDone, setIsDone] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(text);
      setIsDone(true);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let loopTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const startDecryption = () => {
      if (hasTriggeredRef.current) return;
      hasTriggeredRef.current = true;

      let iteration = 0;
      const totalIterations = text.length;

      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          setDisplayText(() => {
            return text
              .split("")
              .map((char, index) => {
                if (char === " ") return " ";
                if (index < iteration) {
                  return text[index];
                }
                return characters[Math.floor(Math.random() * characters.length)];
              })
              .join("");
          });

          if (iteration >= totalIterations) {
            if (intervalId) clearInterval(intervalId);
            setDisplayText(text);
            setIsDone(true);
            
            if (loopInterval) {
              loopTimeoutId = setTimeout(() => {
                hasTriggeredRef.current = false;
                setIsDone(false);
                startDecryption();
              }, loopInterval);
            }
          }

          iteration += 1 / 2;
        }, speed);
      }, delayMs);
    };

    if (trigger === "mount") {
      startDecryption();
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            startDecryption();
            observer.disconnect();
          }
        },
        { rootMargin: "0px 0px 80px 0px", threshold: 0.05 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        observer.disconnect();
        if (timeoutId) clearTimeout(timeoutId);
        if (intervalId) clearInterval(intervalId);
        if (loopTimeoutId) clearTimeout(loopTimeoutId);
      };
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      if (loopTimeoutId) clearTimeout(loopTimeoutId);
    };
  }, [text, delayMs, speed, characters, shouldReduceMotion, trigger, loopInterval]);

  return (
    <Component
      ref={elementRef}
      className={`inline font-mono tracking-wider select-none ${className}`}
      aria-label={text}
    >
      <span className={isDone ? "" : "opacity-95"}>
        {displayText}
      </span>
    </Component>
  );
}
