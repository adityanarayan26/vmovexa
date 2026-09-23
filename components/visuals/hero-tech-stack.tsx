"use client";

import { useEffect, useRef, useState } from "react";
import { Cloud, Cpu, Radio, Monitor } from "lucide-react";

export function HeroTechStack() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeLayer, setActiveLayer] = useState<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle telemetry stream simulation
    const particles: {
      x: number;
      y: number;
      speedY: number;
      radius: number;
      alpha: number;
      color: string;
    }[] = [];

    const colors = ["#ffffff", "#e4e4e7", "#d4d4d8", "#a1a1aa"];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: 0.4 + Math.random() * 0.9,
        radius: 1 + Math.random() * 1.5,
        alpha: 0.15 + Math.random() * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle technical grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Connecting data streams between vertical nodes
      const centerX = width * 0.5;
      const gradient = ctx.createLinearGradient(centerX, 40, centerX, height - 40);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
      gradient.addColorStop(0.5, "rgba(200, 200, 200, 0.25)");
      gradient.addColorStop(1, "rgba(120, 120, 120, 0.15)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(centerX, 50);
      ctx.lineTo(centerX, height - 50);
      ctx.stroke();
      ctx.setLineDash([]);

      // Flowing telemetry particles along data stream
      particles.forEach((p) => {
        p.y += p.speedY;
        if (p.y > height) {
          p.y = 0;
          p.x = width * 0.35 + Math.random() * (width * 0.3);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stackLayers = [
    {
      id: 0,
      badge: "LAYER 01 // ORCHESTRATION",
      title: "Cloud Orchestration",
      icon: Cloud,
      desc: "Centralized policy, fleet configuration, audience pacing & fleet-wide coordination.",
      specs: ["Fleet Routing", "Content Dispatch", "Telemetry Ingestion"],
      color: "var(--accent-cyan)",
    },
    {
      id: 1,
      badge: "LAYER 02 // REAL-TIME FABRIC",
      title: "Data Streams & Pipelines",
      icon: Radio,
      desc: "Bidirectional encrypted synchronization between central cloud and moving vehicles.",
      specs: ["Near-Real-Time Sync", "Bandwidth-Aware", "Delta Updates"],
      color: "var(--accent-indigo)",
    },
    {
      id: 2,
      badge: "LAYER 03 // IN-VEHICLE EDGE",
      title: "VMOVEXA CORE Edge Node",
      icon: Cpu,
      desc: "Hardware-agnostic edge computing runtime executing local triggers and media pipelines.",
      specs: ["Offline Cache", "Low-Latency Geo Logic", "Multi-Screen Sync"],
      color: "var(--accent-purple)",
    },
    {
      id: 3,
      badge: "LAYER 04 // PHYSICAL ENDPOINTS",
      title: "Connected Vehicle & Displays",
      icon: Monitor,
      desc: "Digital displays, high-precision GPS, multi-sensor telemetry & vehicle vitals.",
      specs: ["Contextual Triggers", "Telemetry Engine", "Proof-of-Play"],
      color: "var(--accent-magenta)",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.85) 0%, rgba(5, 6, 8, 0.95) 100%)",
        overflow: "hidden",
        minHeight: "520px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Canvas background for animated streams */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Top Engineering Status Header */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "1.2rem 1.6rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.8rem",
          background: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--accent-cyan)",
              boxShadow: "0 0 10px var(--accent-cyan)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.74rem",
              letterSpacing: "0.14em",
              color: "var(--accent-cyan)",
              fontWeight: 700,
            }}
          >
            ARCHITECTURE // CLOUD-TO-EDGE
          </span>
        </div>
        <div
          style={{
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
          }}
        >
          SYS_STATE: SYNCHRONIZED
        </div>
      </div>

      {/* Stack Interactive Nodes */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {stackLayers.map((layer) => {
          const IconComponent = layer.icon;
          const isActive = activeLayer === layer.id;

          return (
            <div
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              style={{
                position: "relative",
                padding: "1.1rem 1.4rem",
                borderRadius: "var(--radius-sm)",
                background: isActive ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.4)",
                border: `1px solid ${isActive ? "rgba(0, 229, 255, 0.4)" : "var(--border)"}`,
                boxShadow: isActive ? "0 0 24px rgba(0, 229, 255, 0.1)" : "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.4rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isActive ? "rgba(0, 229, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
                      color: isActive ? "var(--accent-cyan)" : "#cbd5e1",
                    }}
                  >
                    <IconComponent size={16} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-apple-mono)",
                        fontSize: "0.68rem",
                        color: isActive ? "var(--accent-cyan)" : "var(--text-muted)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {layer.badge}
                    </div>
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      {layer.title}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-apple-mono)",
                    fontSize: "0.68rem",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "99px",
                    background: isActive ? "rgba(0, 229, 255, 0.1)" : "rgba(255, 255, 255, 0.04)",
                    color: isActive ? "var(--accent-cyan)" : "var(--text-muted)",
                    border: `1px solid ${isActive ? "rgba(0, 229, 255, 0.3)" : "rgba(255, 255, 255, 0.06)"}`,
                  }}
                >
                  {isActive ? "ACTIVE NODE" : "READY"}
                </div>
              </div>

              <p
                style={{
                  margin: "0.4rem 0 0.8rem",
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                {layer.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                {layer.specs.map((spec) => (
                  <span
                    key={spec}
                    style={{
                      fontFamily: "var(--font-apple-mono)",
                      fontSize: "0.7rem",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                      background: "rgba(0, 0, 0, 0.5)",
                      border: "1px solid rgba(255, 255, 255, 0.07)",
                      color: "var(--text-muted)",
                    }}
                  >
                    • {spec}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Telemetry Bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0.9rem 1.6rem",
          background: "rgba(0, 0, 0, 0.6)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.8rem",
          fontFamily: "var(--font-apple-mono)",
          fontSize: "0.72rem",
          color: "var(--text-muted)",
        }}
      >
        <span>EDGE_LATENCY: &lt; 50ms</span>
        <span>CACHE: RESILIENT (OFFLINE READY)</span>
        <span style={{ color: "var(--accent-cyan)" }}>NODE: ACTIVE_SYNC</span>
      </div>
    </div>
  );
}
