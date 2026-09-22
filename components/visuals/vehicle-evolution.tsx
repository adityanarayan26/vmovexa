"use client";

import { useState } from "react";
import { Cpu, Radio, Monitor, Activity, Database, Truck, CheckCircle2 } from "lucide-react";
import { EditorialTabTransition, EditorialTabItem } from "@/components/animations/editorial-text";

export function VehicleEvolution() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      stage: "STAGE 01 // PHYSICAL MOBILITY",
      title: "The Physical Asset",
      subtitle: "Moving from point A to point B",
      concept: "Traditional transportation treats the vehicle purely as a mechanical chassis. Its route is traversed, its fuel consumed, but its computational potential remains inert.",
      nodeRole: "Physical Carrier",
      vitals: { status: "Mechanical", compute: "None", connectivity: "Isolated", telemetry: "Local Dash" },
      highlight: "Chassis & Engine",
    },
    {
      id: 1,
      stage: "STAGE 02 // EDGE COMPUTING",
      title: "The Computing Node",
      subtitle: "VMOVEXA CORE Embedded",
      concept: "Hardware-agnostic edge computing runtime is embedded directly into the vehicle. It executes triggers locally, caches mission-critical assets, and makes decisions with zero cloud latency.",
      nodeRole: "Local Intelligence",
      vitals: { status: "Edge Active", compute: "Quad-Core ARM", connectivity: "Dual Cellular", telemetry: "Bus Bridge" },
      highlight: "In-Vehicle Runtime",
    },
    {
      id: 2,
      stage: "STAGE 03 // MULTI-NETWORK MESH",
      title: "The Communication Node",
      subtitle: "Cloud-to-Edge Bidirectional Link",
      concept: "The vehicle becomes an active communications outpost. High-precision multi-constellation GNSS pairs with low-latency cellular links to feed location and receive dynamic policy updates.",
      nodeRole: "Mobile Gateway",
      vitals: { status: "GNSS Locked", compute: "Sync Daemon", connectivity: "4G/5G Failover", telemetry: "50Hz Stream" },
      highlight: "Satellite & Cellular Uplink",
    },
    {
      id: 3,
      stage: "STAGE 04 // SURFACE ORCHESTRATION",
      title: "The Digital Media Node",
      subtitle: "Dynamic Screen Environment",
      concept: "Exterior rooftop displays, passenger infotainment screens, and driver tablets become synchronized digital inventory—displaying location-triggered, context-responsive content.",
      nodeRole: "Dynamic Surfaces",
      vitals: { status: "Displays Synced", compute: "GPU Pipeline", connectivity: "HDMI / LVDS", telemetry: "Proof-of-Play" },
      highlight: "Multi-Screen Architecture",
    },
    {
      id: 4,
      stage: "STAGE 05 // SYSTEM HEALTH",
      title: "The Telemetry Node",
      subtitle: "Continuous Operational Vitals",
      concept: "Hardware state, display operating temperature, power draw, network signal strength, and trip milestones are continuously monitored and locally logged for deterministic reliability.",
      nodeRole: "Sensor Matrix",
      vitals: { status: "Vitals Stream", compute: "Sensor Ingestion", connectivity: "Buffered Queue", telemetry: "Self-Healing" },
      highlight: "Hardware Health Matrix",
    },
    {
      id: 5,
      stage: "STAGE 06 // DISTRIBUTED EDGE",
      title: "The Mobility Data Node",
      subtitle: "Physical Movement as Live Infrastructure",
      concept: "The vehicle generates urban mobility intelligence as it traverses streets: corridor dwell times, transit pattern density, and geo-performance metrics that empower smart cities and enterprises.",
      nodeRole: "Urban Endpoint",
      vitals: { status: "Ecosystem Node", compute: "Distributed Edge", connectivity: "Mesh Fabric", telemetry: "Spatial Data" },
      highlight: "Digital Infrastructure",
    },
  ];

  const current = steps[activeStep];

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
      {/* Background Subtle Tech Ambient Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 20%, rgba(0, 229, 255, 0.08) 0%, transparent 60%), linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Top Header */}
      <div style={{ position: "relative", zIndex: 2, marginBottom: "2.5rem" }}>
        <div
          style={{
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.8rem",
            color: "var(--accent-cyan)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.6rem",
          }}
        >
          PROGRESSIVE ARCHITECTURE TRANSFORMATION
        </div>
        <h3
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            margin: "0 0 1rem",
          }}
        >
          How A Vehicle Becomes An <span className="gradient-text">Intelligent Edge Node.</span>
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.05rem",
            maxWidth: "680px",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Explore the progressive software layers that transform an isolated mechanical transport asset into a software-defined, connected intelligence platform.
        </p>
      </div>

      {/* Interactive Horizontal Evolution Tracker */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
          paddingBottom: "1.2rem",
          marginBottom: "2rem",
          borderBottom: "1px solid var(--border)",
        }}
        className="no-scrollbar"
      >
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              type="button"
              style={{
                background: isActive
                  ? "linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)"
                  : "rgba(255, 255, 255, 0.03)",
                border: `1px solid ${isActive ? "var(--accent-cyan)" : "var(--border)"}`,
                borderRadius: "var(--radius-sm)",
                padding: "0.75rem 1.1rem",
                color: isActive ? "#ffffff" : "var(--text-secondary)",
                cursor: "pointer",
                textAlign: "left",
                whiteSpace: "nowrap",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                minWidth: "160px",
                transition: "all 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.68rem",
                  color: isActive ? "var(--accent-cyan)" : "var(--text-muted)",
                  letterSpacing: "0.1em",
                }}
              >
                0{idx + 1} {"//"} {isActive ? "SELECTED" : "LAYER"}
              </span>
              <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>{step.title.replace("The ", "")}</span>
            </button>
          );
        })}
      </div>

      {/* Main Visual Display Split */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          alignItems: "center",
        }}
      >
        {/* Left: Technical Schematic Visualization */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border-bright)",
            background: "rgba(0, 0, 0, 0.6)",
            padding: "2rem",
            position: "relative",
            minHeight: "340px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Blueprint schematic header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.72rem",
              color: "var(--accent-cyan)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "0.75rem",
            }}
          >
            <span>NODE_SCHEMATIC: V-EDGE-NODE</span>
            <span>LAYER: 0{activeStep + 1} / 06</span>
          </div>

          {/* Abstract Node Architecture Centerpiece */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              padding: "2.5rem 1rem",
              position: "relative",
            }}
          >
            {/* Animated Pulses Ring */}
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "1px dashed var(--accent-cyan)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                background: "radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)",
                boxShadow: "0 0 30px rgba(0, 229, 255, 0.2)",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "var(--gradient-brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                {activeStep === 0 && <Truck size={30} />}
                {activeStep === 1 && <Cpu size={30} />}
                {activeStep === 2 && <Radio size={30} />}
                {activeStep === 3 && <Monitor size={30} />}
                {activeStep === 4 && <Activity size={30} />}
                {activeStep === 5 && <Database size={30} />}
              </div>
            </div>

            <EditorialTabTransition tabKey={activeStep} style={{ textAlign: "center" }}>
              <EditorialTabItem>
                <div
                  style={{
                    fontFamily: "var(--font-apple-mono)",
                    fontSize: "0.78rem",
                    color: "var(--accent-cyan)",
                    letterSpacing: "0.12em",
                    marginBottom: "0.25rem",
                  }}
                >
                  ROLE: {current.nodeRole.toUpperCase()}
                </div>
              </EditorialTabItem>
              <EditorialTabItem delayOffset={0.06}>
                <div style={{ fontSize: "1.15rem", fontWeight: 600, color: "#ffffff" }}>
                  {current.highlight}
                </div>
              </EditorialTabItem>
            </EditorialTabTransition>
          </div>

          {/* Vitals Telemetry Box */}
          <EditorialTabTransition tabKey={activeStep}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.75rem",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "8px",
                padding: "0.85rem",
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.72rem",
              }}
            >
              <div>
                <span style={{ color: "var(--text-muted)" }}>STATUS: </span>
                <span style={{ color: "#ffffff" }}>{current.vitals.status}</span>
              </div>
              <div>
                <span style={{ color: "var(--text-muted)" }}>COMPUTE: </span>
                <span style={{ color: "#ffffff" }}>{current.vitals.compute}</span>
              </div>
              <div>
                <span style={{ color: "var(--text-muted)" }}>NETWORK: </span>
                <span style={{ color: "#ffffff" }}>{current.vitals.connectivity}</span>
              </div>
              <div>
                <span style={{ color: "var(--text-muted)" }}>TELEMETRY: </span>
                <span style={{ color: "var(--accent-cyan)" }}>{current.vitals.telemetry}</span>
              </div>
            </div>
          </EditorialTabTransition>
        </div>

        {/* Right: Architectural Narrative with Editorial Mask Transitions */}
        <EditorialTabTransition tabKey={activeStep}>
          <EditorialTabItem>
            <span
              style={{
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.78rem",
                color: "var(--accent-cyan)",
                letterSpacing: "0.14em",
                display: "inline-block",
              }}
            >
              {current.stage}
            </span>
          </EditorialTabItem>

          <EditorialTabItem delayOffset={0.06}>
            <h4
              style={{
                fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0.6rem 0 0.3rem",
                letterSpacing: "-0.01em",
              }}
            >
              {current.title}
            </h4>
          </EditorialTabItem>

          <EditorialTabItem delayOffset={0.12}>
            <div
              style={{
                fontSize: "1rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              {current.subtitle}
            </div>
          </EditorialTabItem>

          <EditorialTabItem delayOffset={0.18}>
            <p
              style={{
                fontSize: "1.02rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              {current.concept}
            </p>
          </EditorialTabItem>

          <EditorialTabItem delayOffset={0.24}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.4rem",
                borderRadius: "var(--radius-sm)",
                background: "rgba(0, 229, 255, 0.05)",
                border: "1px solid rgba(0, 229, 255, 0.2)",
              }}
            >
              <CheckCircle2 size={20} color="var(--accent-cyan)" />
              <div style={{ fontSize: "0.88rem", color: "#ffffff" }}>
                <strong>Architectural Impact:</strong> Turns transit downtime and route traverse into continuous computational value.
              </div>
            </div>
          </EditorialTabItem>
        </EditorialTabTransition>
      </div>
    </div>
  );
}
