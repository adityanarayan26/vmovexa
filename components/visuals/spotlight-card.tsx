"use client";

import React, { useRef, useState, useCallback, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  spotlightColor?: string;
  borderGlowColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  style,
  spotlightColor = "rgba(34, 211, 238, 0.12)",
  borderGlowColor = "rgba(34, 211, 238, 0.35)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative overflow-hidden rounded-2xl bg-[#020712] border border-white/10 transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      {/* Mouse Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {/* Border Follow Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          border: `1px solid ${borderGlowColor}`,
          maskImage: `radial-gradient(200px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(200px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
        }}
      />
      {/* Children with relative z-index */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
