"use client";

import { useEffect, useState } from "react";
import { Cloud, Cpu, Truck, Monitor, Database } from "lucide-react";

export function PlatformHeroArchitecture() {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    {
      id: 0,
      label: "CLOUD CONTROL",
      sub: "Central Orchestrator",
      icon: Cloud,
      color: "var(--accent-cyan)",
      state: "ORCHESTRATING",
    },
    {
      id: 1,
      label: "VMOVEXA CORE",
      sub: "In-Vehicle Edge OS",
      icon: Cpu,
      color: "var(--accent-indigo)",
      state: "EXECUTING",
    },
    {
      id: 2,
      label: "CONNECTED VEHICLE",
      sub: "Mobile Computing Node",
      icon: Truck,
      color: "var(--accent-purple)",
      state: "IN TRANSIT",
    },
    {
      id: 3,
      label: "DISPLAYS / GPS / SENSORS",
      sub: "Physical Hardware Endpoints",
      icon: Monitor,
      color: "var(--accent-magenta)",
      state: "TRIGGER READY",
    },
    {
      id: 4,
      label: "MOBILITY DATA",
      sub: "Verified Proof-of-Play & Vitals",
      icon: Database,
      color: "var(--accent-cyan)",
      state: "CONTINUOUS LOG",
    },
  ];

  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.9) 0%, rgba(5, 6, 8, 0.95) 100%)",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
      }}
    >
      {/* Top Banner with the core principle */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.8rem",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "1rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.72rem",
              color: "var(--accent-cyan)",
              letterSpacing: "0.14em",
            }}
          >
            CORE ARCHITECTURAL PRINCIPLE
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginTop: "0.2rem" }}>
            The Cloud Orchestrates. The Edge Executes.
          </div>
        </div>

        <div
          style={{
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.68rem",
            padding: "0.25rem 0.65rem",
            borderRadius: "99px",
            background: "rgba(0, 229, 255, 0.1)",
            border: "1px solid rgba(0, 229, 255, 0.3)",
            color: "var(--accent-cyan)",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent-cyan)",
              boxShadow: "0 0 8px var(--accent-cyan)",
            }}
          />
          REAL-TIME BUS ACTIVE
        </div>
      </div>

      {/* Vertical Pipeline Nodes */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isPulse = pulseIndex === idx;

          return (
            <div key={node.id} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <div
                style={{
                  borderRadius: "var(--radius-sm)",
                  border: isPulse ? `1px solid ${node.color}` : "1px solid var(--border)",
                  background: isPulse ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.4)",
                  padding: "0.9rem 1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: isPulse ? `0 0 20px ${node.color}33` : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      background: isPulse ? `${node.color}22` : "rgba(255, 255, 255, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: node.color,
                      border: `1px solid ${isPulse ? node.color : "rgba(255, 255, 255, 0.08)"}`,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-apple-mono)",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {node.label}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {node.sub}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-apple-mono)",
                    fontSize: "0.68rem",
                    color: isPulse ? node.color : "var(--text-muted)",
                  }}
                >
                  {node.state}
                </div>
              </div>

              {/* Data Flow Indicator */}
              {idx < nodes.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "2px",
                      height: "100%",
                      background: isPulse
                        ? `linear-gradient(180deg, ${node.color}, var(--accent-indigo))`
                        : "rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Technical Telemetry Spec */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "0.8rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-apple-mono)",
          fontSize: "0.7rem",
          color: "var(--text-muted)",
        }}
      >
        <span>FAILOVER: ZERO-DOWNTIME CACHE</span>
        <span>LATENCY: &lt; 50MS LOCAL</span>
      </div>
    </div>
  );
}
