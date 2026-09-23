"use client";

import { useState } from "react";
import {
  Server,
  Cpu,
  Radio,
  Wifi,
  Megaphone,
  MapPin,
  Database,
  ShieldCheck,
} from "lucide-react";
import { EditorialTabTransition, EditorialTabItem } from "@/components/animations/editorial-text";

/* 1. DISCIPLINE ARCHITECTURAL NODE MAP */
export function DisciplinesArchitectureNode() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<number>(0);

  const disciplines = [
    { title: "Cloud Computing", icon: Server, desc: "Centralized policy, fleet orchestration, and media dispatch across thousands of edge nodes.", role: "Global Control Plane" },
    { title: "Edge Computing", icon: Cpu, desc: "In-vehicle deterministic runtime executing media pipelines and geofence collision detection locally.", role: "Low-Latency Local Compute" },
    { title: "IoT & Telemetry", icon: Radio, desc: "High-frequency operational state sensing, hardware diagnostics, and sensor data ingestion.", role: "Continuous System Sensing" },
    { title: "Connected Vehicles", icon: Wifi, desc: "Multi-carrier cellular uplink with automated failover and bandwidth-adaptive streaming.", role: "Physical Transport Gateway" },
    { title: "Digital Media", icon: Megaphone, desc: "Hardware-accelerated dynamic multi-screen rendering and frame-accurate synchronized display.", role: "Dynamic Visual Surfaces" },
    { title: "Location Intelligence", icon: MapPin, desc: "Designed for sub-meter GNSS positioning paired with high-frequency polygonal geofence triggers.", role: "Spatial Context Logic" },
    { title: "Data Infrastructure", icon: Database, desc: "Event-driven mobility logs, cryptographic proof-of-play timestamps, and verified audits.", role: "Verifiable Data Pipeline" },
    { title: "Security & OTA", icon: ShieldCheck, desc: "Hardware root-of-trust, encrypted storage, and dual-bank atomic over-the-air firmware updates.", role: "Hardened Security Perimeter" },
  ];

  const current = disciplines[selectedDiscipline];
  const CurrentIcon = current.icon;

  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem)",
      }}
    >
      <div style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.8rem",
            color: "var(--accent-cyan)",
            letterSpacing: "0.15em",
            marginBottom: "0.5rem",
          }}
        >
          FOUNDATIONAL DISCIPLINES // UNIFIED STACK
        </div>
        <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 0.8rem" }}>
          The Eight Pillars of <span className="gradient-text">Mobility Intelligence.</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
          VMOVEXA synthesizes 8 advanced engineering fields into one cohesive operating environment. Click any pillar to explore its architectural integration.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {/* Node Matrix Selector */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.8rem",
          }}
        >
          {disciplines.map((d, idx) => {
            const Icon = d.icon;
            const isSelected = selectedDiscipline === idx;

            return (
              <button
                key={d.title}
                onClick={() => setSelectedDiscipline(idx)}
                type="button"
                style={{
                  borderRadius: "8px",
                  border: `1px solid ${isSelected ? "var(--accent-cyan)" : "var(--border)"}`,
                  background: isSelected ? "rgba(0, 229, 255, 0.12)" : "rgba(0, 0, 0, 0.4)",
                  padding: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Icon size={18} color={isSelected ? "var(--accent-cyan)" : "var(--text-muted)"} />
                  <span style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.68rem", color: isSelected ? "var(--accent-cyan)" : "var(--text-muted)" }}>
                    0{idx + 1}
                  </span>
                </div>
                <div style={{ fontSize: "0.86rem", fontWeight: 600, color: isSelected ? "#ffffff" : "var(--text-secondary)" }}>
                  {d.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Discipline Deep-Dive */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid rgba(0, 229, 255, 0.4)",
            background: "rgba(0, 0, 0, 0.65)",
            padding: "2.5rem 2rem",
            boxShadow: "0 0 35px rgba(0, 229, 255, 0.1)",
            minHeight: "340px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <EditorialTabTransition tabKey={selectedDiscipline}>
            <EditorialTabItem>
              <div
                style={{
                  fontFamily: "var(--font-apple-mono)",
                  fontSize: "0.72rem",
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.14em",
                  marginBottom: "0.5rem",
                }}
              >
                PILLAR 0{selectedDiscipline + 1} {"//"} ARCHITECTURE ROLE
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.06}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "var(--gradient-brand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  <CurrentIcon size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    {current.title}
                  </h4>
                  <div style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", marginTop: "0.2rem" }}>
                    {current.role}
                  </div>
                </div>
              </div>
            </EditorialTabItem>

            <EditorialTabItem delayOffset={0.12}>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: 1.65, margin: 0 }}>
                {current.desc}
              </p>
            </EditorialTabItem>
          </EditorialTabTransition>

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.74rem",
              color: "var(--text-muted)",
            }}
          >
            <span>STATUS: CORE_ENGINEERING</span>
            <span style={{ color: "var(--accent-cyan)" }}>INTEROPERABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 2. TWO WORLDS. ONE ARCHITECTURE (CLOUD + EDGE) */
export function TwoWorldsArchitecture() {
  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem)",
      }}
    >
      <div style={{ marginBottom: "3rem", textAlign: "center", maxWidth: "720px", margin: "0 auto 3rem" }}>
        <div
          style={{
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.8rem",
            color: "var(--accent-cyan)",
            letterSpacing: "0.15em",
            marginBottom: "0.5rem",
          }}
        >
          CONVERGENCE // CLOUD & EDGE
        </div>
        <h3 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 1rem" }}>
          Two Worlds. <span className="gradient-text">One Architecture.</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>
          Centralized coordination in the cloud paired with localized execution at the edge. A continuous bidirectional data flow ensures synchronization even across intermittent connections.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          position: "relative",
        }}
      >
        {/* WORLD 1: CLOUD */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid rgba(0, 229, 255, 0.3)",
            background: "rgba(0, 229, 255, 0.04)",
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
              <Server size={24} color="var(--accent-cyan)" />
              <h4 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                Centralized Cloud
              </h4>
            </div>
            <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.75rem", color: "var(--accent-cyan)", marginBottom: "1.2rem" }}>
              ROLE: CENTRALIZED COORDINATION
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
              {[
                "Global fleet topology and grouping rules",
                "Cross-fleet audience pacing & quota management",
                "Campaign creation, approval, and scheduling",
                "Fleet-wide OTA firmware rollout orchestrator",
                "Aggregated spatial telemetry & proof-of-play indexing",
              ].map((item) => (
                <li key={item} style={{ fontSize: "0.88rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "var(--accent-cyan)" }}>•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
            }}
          >
            DISPATCHES POLICIES &amp; CAMPAIGN DELTAS
          </div>
        </div>

        {/* WORLD 2: EDGE */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid rgba(147, 51, 234, 0.4)",
            background: "rgba(147, 51, 234, 0.05)",
            padding: "2.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
              <Cpu size={24} color="var(--accent-magenta)" />
              <h4 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                In-Vehicle Edge (VMOVEXA CORE)
              </h4>
            </div>
            <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.75rem", color: "var(--accent-magenta)", marginBottom: "1.2rem" }}>
              ROLE: LOCALIZED EXECUTION
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
              {[
                "Sub-50ms local geofence collision detection",
                "Hardware-accelerated 60fps video decode on displays",
                "Autonomous local caching for offline blackouts",
                "Real-time sensor vitals sampling at 100ms intervals",
                "Encrypted proof-of-play generation with coordinate tags",
              ].map((item) => (
                <li key={item} style={{ fontSize: "0.88rem", color: "var(--text-secondary)", display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "var(--accent-magenta)" }}>•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
            }}
          >
            EXECUTES LOCALLY &amp; STREAMS TELEMETRY
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3. PROGRAMMABLE GEOGRAPHY (GPS & GEOFENCING) */
export function ProgrammableGeography() {
  const [activeZone, setActiveZone] = useState(0);

  const zones = [
    {
      coords: "17.4435° N, 78.3772° E",
      zone: "FINANCIAL DISTRICT CORRIDOR",
      context: "Corporate rush hour, premium vehicle density, executive footfall",
      logic: "EXECUTE: Priority Tier 1 B2B Campaign (Frequency Capped)",
    },
    {
      coords: "17.2403° N, 78.4294° E",
      zone: "AIRPORT EXPRESS ARTERY",
      context: "High-speed transit, international flights inbound, hospitality demand",
      logic: "EXECUTE: Global Telecom & Premium Travel Creative",
    },
    {
      coords: "17.4125° N, 78.4089° E",
      zone: "RETAIL BOULEVARD",
      context: "Low speed (<20 km/h), high pedestrian dwell, retail density",
      logic: "EXECUTE: Dynamic Footfall Directional & Retail Promotion",
    },
  ];

  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem)",
      }}
    >
      <div style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.8rem",
            color: "var(--accent-cyan)",
            letterSpacing: "0.15em",
            marginBottom: "0.5rem",
          }}
        >
          SPATIAL COMPUTING // GEOFENCE ENGINE
        </div>
        <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 0.8rem" }}>
          Make Geography <span className="gradient-text">Programmable.</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
          Raw latitude and longitude are transformed into semantic spatial context, triggering deterministic edge logic designed for high-precision GNSS positioning.
        </p>
      </div>

      {/* 3 Step Formula */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.2rem",
          marginBottom: "2.5rem",
        }}
      >
        <div style={{ background: "rgba(0, 0, 0, 0.4)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "1.5rem" }}>
          <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--accent-cyan)", marginBottom: "0.4rem" }}>
            STEP 01
          </div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>
            Coordinates
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
            High-precision GNSS coordinates continuously stream from in-vehicle receivers into VMOVEXA CORE.
          </p>
        </div>

        <div style={{ background: "rgba(0, 0, 0, 0.4)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "1.5rem" }}>
          <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--accent-indigo)", marginBottom: "0.4rem" }}>
            STEP 02
          </div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>
            Context
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
            Polygonal geofence boundaries resolve whether the vehicle has entered commercial, transit, or event corridors.
          </p>
        </div>

        <div style={{ background: "rgba(0, 0, 0, 0.4)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "1.5rem" }}>
          <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--accent-magenta)", marginBottom: "0.4rem" }}>
            STEP 03
          </div>
          <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>
            Logic
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
            Targeting rules, frequency caps, and contextual creative dynamically execute on displays in &lt;50ms.
          </p>
        </div>
      </div>

      {/* Interactive Zone Trigger Simulator */}
      <div
        style={{
          borderRadius: "var(--radius-sm)",
          border: "1px solid rgba(0, 229, 255, 0.3)",
          background: "rgba(0, 0, 0, 0.6)",
          padding: "2rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {zones.map((z, idx) => (
            <button
              key={z.zone}
              onClick={() => setActiveZone(idx)}
              type="button"
              style={{
                background: activeZone === idx ? "rgba(0, 229, 255, 0.15)" : "rgba(255, 255, 255, 0.04)",
                border: `1px solid ${activeZone === idx ? "var(--accent-cyan)" : "var(--border)"}`,
                borderRadius: "8px",
                padding: "0.5rem 1rem",
                color: activeZone === idx ? "#ffffff" : "var(--text-muted)",
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.75rem",
                cursor: "pointer",
              }}
            >
              ZONE 0{idx + 1}: {z.zone.split(" ")[0]}
            </button>
          ))}
        </div>

        <EditorialTabTransition tabKey={activeZone}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            <div>
              <EditorialTabItem>
                <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>GNSS COORDINATE:</div>
                <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "1rem", color: "var(--accent-cyan)", fontWeight: 700, margin: "0.2rem 0 1rem" }}>
                  {zones[activeZone].coords}
                </div>
              </EditorialTabItem>
              <EditorialTabItem delayOffset={0.06}>
                <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>TARGET BOUNDARY:</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginTop: "0.2rem" }}>
                  {zones[activeZone].zone}
                </div>
              </EditorialTabItem>
            </div>

            <div>
              <EditorialTabItem>
                <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>SPATIAL CONTEXT:</div>
                <div style={{ fontSize: "0.92rem", color: "var(--text-secondary)", margin: "0.2rem 0 1rem" }}>
                  {zones[activeZone].context}
                </div>
              </EditorialTabItem>
              <EditorialTabItem delayOffset={0.06}>
                <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>EDGE EXECUTION RESULT:</div>
                <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.85rem", color: "var(--accent-magenta)", fontWeight: 600, marginTop: "0.2rem" }}>
                  {zones[activeZone].logic}
                </div>
              </EditorialTabItem>
            </div>
          </div>
        </EditorialTabTransition>
      </div>
    </div>
  );
}

/* 4. TELEMETRY: THE VEHICLE SPEAKS IN DATA */
export function TelemetryStreamVisualizer() {
  const telemetryStreams = [
    { label: "DEVICE STATE", metric: "CPU 24% | Temp 41°C | RAM 1.8/4GB | NVMe Healthy", status: "NOMINAL" },
    { label: "NETWORK HEALTH", metric: "5G Primary (-78 dBm) | LTE Failover Standby | RTT 28ms", status: "OPTIMAL" },
    { label: "SCREEN OPERATION", metric: "Display A: 60 FPS | Display B: 60 FPS | Backlight 85%", status: "SYNCED" },
    { label: "VEHICLE POSITION", metric: "17.4435° N, 78.3772° E | Speed: 42 km/h | Heading: 248° WSW", status: "LOCKED" },
    { label: "OPERATIONAL VITAL", metric: "Ignition: RUNNING | Voltage: 13.8V | Odometer: 14,208 km", status: "ACTIVE" },
    { label: "SYSTEM EVENT LOG", metric: "Geofence_Entered: FinDistrict_CBD_01 | Playback_Logged: True", status: "RECORDED" },
  ];

  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem)",
      }}
    >
      <div style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.8rem",
            color: "var(--accent-cyan)",
            letterSpacing: "0.15em",
            marginBottom: "0.5rem",
          }}
        >
          VEHICLE TELEMETRY // CONTINUOUS VITAL BROADCAST
        </div>
        <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 0.8rem" }}>
          The Vehicle <span className="gradient-text">Speaks in Data.</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
          Moving vehicles generate vital operational signals across compute, network, screen, and location subsystems. Telemetry is validated at the edge before batch delivery.
        </p>
      </div>

      {/* Illustrative Telemetry Console */}
      <div
        style={{
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border)",
          background: "rgba(0, 0, 0, 0.7)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
          fontFamily: "var(--font-apple-mono)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "0.8rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
          }}
        >
          <span>SIMULATED_EDGE_TELEMETRY_STREAM</span>
          <span style={{ color: "var(--accent-cyan)" }}>POLL_RATE: 100MS // ILLUSTRATIVE</span>
        </div>

        {telemetryStreams.map((s) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
              padding: "0.75rem 0.5rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
              fontSize: "0.8rem",
            }}
          >
            <span style={{ color: "var(--accent-cyan)", minWidth: "160px" }}>{s.label}</span>
            <span style={{ color: "#ffffff", flex: 1 }}>{s.metric}</span>
            <span
              style={{
                fontSize: "0.68rem",
                padding: "0.15rem 0.5rem",
                borderRadius: "4px",
                background: "rgba(0, 229, 255, 0.1)",
                color: "var(--accent-cyan)",
                border: "1px solid rgba(0, 229, 255, 0.2)",
              }}
            >
              {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 5. API READY ECOSYSTEM (NODE-BASED ARCHITECTURE) */
export function ApiReadyEcosystem() {
  const nodes = [
    { name: "Fleet Systems", type: "CAD/AVL & Dispatch Platforms", role: "Bidirectional asset sync & route updates" },
    { name: "Mobility Platforms", type: "GTFS-RT & Urban Transit Feeds", role: "Real-time schedule compliance & passenger alerts" },
    { name: "Mapping & GIS", type: "Spatial Vector Coordinate Layers", role: "Automated geofence polygon synchronization" },
    { name: "Digital Media Exchanges", type: "Programmatic SSP/DSP & Ad Servers", role: "Dynamic inventory availability & pacing rules" },
    { name: "Enterprise SaaS", type: "ERP, CRM & Operations Dashboards", role: "Webhook telemetry & corporate reporting" },
    { name: "Connected Devices", type: "Automotive Bus Gateways & Screens", role: "Hardware protocol translation & display control" },
    { name: "Data Platforms", type: "Urban Mobility Analytics Lakes", role: "Verified proof-of-play & movement logs" },
  ];

  return (
    <div
      style={{
        borderRadius: "var(--radius)",
        border: "1px solid var(--border-bright)",
        background: "linear-gradient(180deg, rgba(12, 15, 23, 0.95) 0%, rgba(5, 6, 8, 0.98) 100%)",
        padding: "clamp(2rem, 5vw, 3.5rem)",
      }}
    >
      <div style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            fontFamily: "var(--font-apple-mono)",
            fontSize: "0.8rem",
            color: "var(--accent-cyan)",
            letterSpacing: "0.15em",
            marginBottom: "0.5rem",
          }}
        >
          INTEROPERABILITY // OPEN INTEGRATION
        </div>
        <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 0.8rem" }}>
          Built to <span className="gradient-text">Connect.</span>
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
          VMOVEXA does not operate as an isolated silo. Our secure REST and webhook APIs plug directly into existing transit, media, and enterprise technology ecosystems.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.2rem",
        }}
      >
        {nodes.map((n, idx) => (
          <div
            key={n.name}
            style={{
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border)",
              background: "rgba(0, 0, 0, 0.45)",
              padding: "1.4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "180px",
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.68rem", color: "var(--accent-cyan)", marginBottom: "0.4rem" }}>
                NODE 0{idx + 1}
              </div>
              <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.2rem" }}>
                {n.name}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--accent-indigo)", marginBottom: "0.8rem" }}>
                {n.type}
              </div>
              <p style={{ fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                {n.role}
              </p>
            </div>

            <div
              style={{
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                paddingTop: "0.6rem",
                marginTop: "1rem",
              }}
            >
              SECURE REST &amp; WEBHOOK READY
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
