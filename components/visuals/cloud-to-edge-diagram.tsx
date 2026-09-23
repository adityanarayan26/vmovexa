"use client";

import { useState } from "react";
import { Cloud, Cpu, Truck, Database } from "lucide-react";
import { EditorialTabTransition, EditorialTabItem } from "@/components/animations/editorial-text";

export function CloudToEdgeDiagram() {
  const [activeTier, setActiveTier] = useState<string>("all");

  const architectureTiers = [
    {
      id: "cloud",
      level: "TIER 01",
      name: "CLOUD ORCHESTRATION",
      role: "Centralized Intelligence & Coordination",
      icon: Cloud,
      accent: "var(--accent-cyan)",
      gradient: "linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(79, 70, 229, 0.1) 100%)",
      border: "rgba(0, 229, 255, 0.3)",
      components: [
        { name: "Centralized Orchestration", desc: "Fleet-wide policy enforcement and synchronized scheduling." },
        { name: "Fleet Management", desc: "Real-time topology, vehicle groupings, route tracking & trip lifecycle." },
        { name: "Configuration & Over-The-Air (OTA)", desc: "Zero-touch edge software deployment and fleet parameter updates." },
        { name: "Mobility Analytics", desc: "Aggregated spatial density, route coverage, and transit dwell analysis." },
        { name: "Digital Media Management", desc: "Targeting rules, campaign quotas, ad pacing, and creative review." },
      ],
      state: "ORCHESTRATING // ACTIVE",
    },
    {
      id: "edge",
      level: "TIER 02",
      name: "EDGE EXECUTION (VMOVEXA CORE)",
      role: "In-Vehicle Computational Runtime",
      icon: Cpu,
      accent: "var(--accent-indigo)",
      gradient: "linear-gradient(135deg, rgba(79, 70, 229, 0.18) 0%, rgba(147, 51, 234, 0.12) 100%)",
      border: "rgba(79, 70, 229, 0.4)",
      components: [
        { name: "Local Execution Engine", desc: "Low-latency policy evaluation without roundtrip network latency." },
        { name: "Device Coordination", desc: "Hardware driver synchronization across connected vehicle peripherals." },
        { name: "Geofence Trigger Matrix", desc: "High-frequency polygon boundary collision detection." },
        { name: "Telemetry Engine", desc: "Sensor stream ingestion, edge validation, and state monitoring." },
        { name: "Offline Operation & Cache", desc: "Local asset caching ensuring operational uptime through network blackouts." },
      ],
      state: "EXECUTING // REAL-TIME",
    },
    {
      id: "vehicle",
      level: "TIER 03",
      name: "CONNECTED VEHICLE & SURFACES",
      role: "Physical Sensors & Digital Displays",
      icon: Truck,
      accent: "var(--accent-purple)",
      gradient: "linear-gradient(135deg, rgba(147, 51, 234, 0.18) 0%, rgba(217, 70, 239, 0.12) 100%)",
      border: "rgba(147, 51, 234, 0.4)",
      components: [
        { name: "Digital Displays", desc: "Exterior high-nit transit displays and passenger-facing screens." },
        { name: "Multi-Constellation GNSS / GPS", desc: "Continuous high-precision geographic coordinate resolution." },
        { name: "Vehicle Sensors", desc: "Speed, ignition state, ambient lighting, power draw, temperature." },
        { name: "Multi-Network Connectivity", desc: "Carrier-redundant cellular uplink with automatic fallback." },
        { name: "Embedded Computing Unit", desc: "Automotive-grade hardware running the VMOVEXA CORE edge runtime." },
      ],
      state: "TRANSIENT // TELEMETRY LINKED",
    },
    {
      id: "data",
      level: "TIER 04",
      name: "DATA & MOBILITY INTELLIGENCE",
      role: "Actionable Operational Infrastructure",
      icon: Database,
      accent: "var(--accent-magenta)",
      gradient: "linear-gradient(135deg, rgba(217, 70, 239, 0.18) 0%, rgba(0, 229, 255, 0.12) 100%)",
      border: "rgba(217, 70, 239, 0.4)",
      components: [
        { name: "Operational Intelligence", desc: "Fleet utilization, corridor efficiency, and schedule compliance." },
        { name: "Mobility Information", desc: "Urban movement telemetry, transit demand corridors, and live flow." },
        { name: "Device Status & Diagnostics", desc: "Hardware vitals, screen runtime logs, and preventative alarms." },
        { name: "Media Performance & Proof-of-Play", desc: "Cryptographically verifiable impression and geo-playback logs." },
      ],
      state: "INGESTED // VERIFIED",
    },
  ];

  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Data Flow Vectors */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />

      {/* Header Section */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-cyan)",
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
            }}
          >
            SYSTEM ARCHITECTURE // FOUR INTEGRATED TIERS
          </div>
          <h3
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            From Cloud To <span className="gradient-text">Moving Edge.</span>
          </h3>
        </div>

        {/* Tier filter pill buttons */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            background: "rgba(0, 0, 0, 0.5)",
            padding: "0.3rem",
            borderRadius: "99px",
            border: "1px solid var(--border)",
          }}
        >
          {["all", "cloud", "edge", "vehicle", "data"].map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              type="button"
              style={{
                background: activeTier === tier ? "rgba(0, 229, 255, 0.15)" : "transparent",
                color: activeTier === tier ? "var(--accent-cyan)" : "var(--text-muted)",
                border: activeTier === tier ? "1px solid rgba(0, 229, 255, 0.4)" : "1px solid transparent",
                borderRadius: "99px",
                padding: "0.35rem 0.8rem",
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.72rem",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
              }}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* The 4 Connected Architectural Tiers with Editorial Transitions */}
      <EditorialTabTransition
        tabKey={activeTier}
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {architectureTiers.map((tier, idx) => {
          const Icon = tier.icon;
          const isVisible = activeTier === "all" || activeTier === tier.id;

          if (!isVisible) return null;

          return (
            <EditorialTabItem key={tier.id} delayOffset={idx * 0.05}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div
                style={{
                  borderRadius: "var(--radius-sm)",
                  border: `1px solid ${tier.border}`,
                  background: tier.gradient,
                  padding: "1.8rem 2rem",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Tier Title Bar */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "1.2rem",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingBottom: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "8px",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: "1px solid var(--border-bright)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: tier.accent,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-apple-mono)",
                          fontSize: "0.72rem",
                          color: tier.accent,
                          letterSpacing: "0.12em",
                        }}
                      >
                        {tier.level} {"//"} {tier.role.toUpperCase()}
                      </div>
                      <div
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#ffffff",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {tier.name}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-apple-mono)",
                      fontSize: "0.72rem",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "99px",
                      background: "rgba(0, 0, 0, 0.5)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: tier.accent,
                    }}
                  >
                    {tier.state}
                  </div>
                </div>

                {/* Micro Components Matrix inside Tier */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {tier.components.map((c) => (
                    <div
                      key={c.name}
                      style={{
                        background: "rgba(0, 0, 0, 0.4)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        borderRadius: "8px",
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: "#ffffff",
                          marginBottom: "0.3rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: tier.accent }} />
                        {c.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                        }}
                      >
                        {c.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                {/* Bidirectional Flow Indicator between tiers */}
                {idx < architectureTiers.length - 1 && activeTier === "all" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1.5rem",
                      padding: "0.2rem 0",
                      fontFamily: "var(--font-apple-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <div style={{ width: "30px", height: "1px", background: "rgba(255, 255, 255, 0.15)" }} />
                    <span style={{ color: "var(--accent-cyan)" }}>
                      ↕ CONTINUOUS BIDIRECTIONAL TELEMETRY &amp; OTA POLICIES
                    </span>
                    <div style={{ width: "30px", height: "1px", background: "rgba(255, 255, 255, 0.15)" }} />
                  </div>
                )}
              </div>
            </EditorialTabItem>
          );
        })}
      </EditorialTabTransition>
    </div>
  );
}
