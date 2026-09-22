"use client";

import { ArrowRight, Plus, Check, X } from "lucide-react";
import { EditorialLine } from "@/components/animations/editorial-text";

export function PlatformDifference() {

  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
        padding: "clamp(2rem, 5vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Header */}
      <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 3.5rem" }}>
        <EditorialLine delay={0}>
          <div
            style={{
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-cyan)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.8rem",
            }}
          >
            TECHNOLOGY PARADIGM SHIFT
          </div>
        </EditorialLine>
        <h3
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            margin: "0 0 1.2rem",
          }}
        >
          <EditorialLine delay={0.06}>
            Not Digital Signage.
          </EditorialLine>
          <EditorialLine delay={0.12}>
            <span className="gradient-text">A Mobility Intelligence Stack.</span>
          </EditorialLine>
        </h3>
        <EditorialLine delay={0.18}>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Traditional systems treat displays as dumb screens playing looping media playlists.
            VMOVEXA engineers the moving screen as an addressable, location-aware edge computing node.
          </p>
        </EditorialLine>
      </div>

      {/* Visual Contrast Architecture */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          marginBottom: "3.5rem",
        }}
      >
        {/* TRADITIONAL SIGNAGE */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(0, 0, 0, 0.4)",
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: 0.75,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                marginBottom: "0.5rem",
              }}
            >
              LEGACY ARCHITECTURE
            </div>
            <h4 style={{ fontSize: "1.5rem", color: "#cbd5e1", margin: "0 0 1.5rem" }}>
              Traditional Digital Signage
            </h4>

            {/* Simple linear box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px dashed rgba(255, 255, 255, 0.15)",
                borderRadius: "8px",
                padding: "1.2rem",
                marginBottom: "2rem",
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.85rem",
              }}
            >
              <span style={{ color: "#ffffff" }}>CONTENT</span>
              <ArrowRight size={18} color="var(--text-muted)" />
              <span style={{ color: "var(--text-muted)" }}>STATIC SCREEN</span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.9rem" }}>
              {[
                "Blind loop repetition without location context",
                "No vehicle telemetry or route awareness",
                "Unverified impressions & estimate-only reporting",
                "Fails during connectivity dropouts",
                "Single screen, zero device orchestration",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <X size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1.2rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.74rem",
              color: "var(--text-muted)",
            }}
          >
            PARADIGM: DUMB BROADCASTER
          </div>
        </div>

        {/* VMOVEXA INTELLIGENCE STACK */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--accent-cyan)",
            background: "linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(79, 70, 229, 0.08) 100%)",
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 0 35px rgba(0, 229, 255, 0.12)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.12em",
                }}
              >
                VMOVEXA ARCHITECTURE
              </div>
              <span
                style={{
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.68rem",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "99px",
                  background: "rgba(0, 229, 255, 0.15)",
                  color: "var(--accent-cyan)",
                  border: "1px solid rgba(0, 229, 255, 0.3)",
                }}
              >
                ACTIVE PLATFORM
              </span>
            </div>
            <h4 style={{ fontSize: "1.5rem", color: "#ffffff", margin: "0 0 1.5rem" }}>
              Cloud-to-Edge Mobility Stack
            </h4>

            {/* Fused multi-variable equation */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "rgba(0, 0, 0, 0.6)",
                border: "1px solid rgba(0, 229, 255, 0.3)",
                borderRadius: "8px",
                padding: "1.2rem 0.8rem",
                marginBottom: "2rem",
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.78rem",
                color: "var(--accent-cyan)",
              }}
            >
              <span>CONTENT</span>
              <Plus size={13} color="var(--text-muted)" />
              <span>LOCATION</span>
              <Plus size={13} color="var(--text-muted)" />
              <span>VEHICLE</span>
              <Plus size={13} color="var(--text-muted)" />
              <span>SCREEN</span>
              <Plus size={13} color="var(--text-muted)" />
              <span>CLOUD</span>
              <Plus size={13} color="var(--text-muted)" />
              <span style={{ color: "var(--accent-magenta)" }}>DATA</span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.9rem" }}>
              {[
                "Sub-second geofence triggers with high-precision GNSS",
                "Real-time vehicle vitals, speed, and ignition sensing",
                "Cryptographic proof-of-play verified down to coordinates & second",
                "100% offline resilience through local storage & caching",
                "Multi-surface sync (rooftop displays + in-cabin passenger screens)",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    fontSize: "0.88rem",
                    color: "var(--text-primary)",
                  }}
                >
                  <Check size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1.2rem",
              borderTop: "1px solid rgba(0, 229, 255, 0.2)",
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.74rem",
              color: "var(--accent-cyan)",
            }}
          >
            PARADIGM: INTELLIGENT EDGE NODE
          </div>
        </div>
      </div>

      {/* Mandatory Strong Philosophical Conclusion Statement */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "2.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.8rem)",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: 1.5,
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          &ldquo;The screen is only what you see. <br />
          <span className="gradient-text">The intelligence is everything behind it.&rdquo;</span>
        </div>
      </div>
    </div>
  );
}
