import React from "react";

interface GridWaveBackgroundProps {
  variant?: "cyan" | "blue" | "purple" | "indigo";
  className?: string;
  gridOpacity?: string;
  waveOpacity?: string;
}

export function GridWaveBackground({
  variant = "cyan",
  className = "",
  gridOpacity = "opacity-[0.03]",
  waveOpacity = "opacity-20",
}: GridWaveBackgroundProps) {
  const glowMap = {
    cyan: "bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.05)_0%,transparent_70%)]",
    blue: "bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_70%)]",
    purple: "bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.05)_0%,transparent_70%)]",
    indigo: "bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05)_0%,transparent_70%)]",
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Ambient Radial Flare */}
      <div className={`absolute inset-0 ${glowMap[variant]} pointer-events-none`} />

      {/* Coordinate Grid */}
      <div
        className={`absolute inset-0 ${gridOpacity} pointer-events-none`}
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Vector Wave & Dynamic Nodes */}
      <div className={`absolute inset-0 ${waveOpacity} pointer-events-none overflow-hidden`}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100,400 C300,700 500,100 1300,400"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
          <path
            d="M-100,600 C400,800 600,200 1300,200"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.5"
          />
          <circle cx="350" cy="530" r="4" fill="#3b82f6" className="animate-pulse" />
          <circle cx="850" cy="270" r="4" fill="#6366f1" className="animate-pulse" />
          <circle cx="200" cy="630" r="2" fill="#8b5cf6" />
          <circle cx="1000" cy="300" r="2" fill="#0ea5e9" />
        </svg>
      </div>
    </div>
  );
}
