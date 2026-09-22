"use client";

import { useState } from "react";
import {
  Wifi,
  Film,
  Calendar,
  MapPin,
  Compass,
  Activity,
  Monitor,
  ShieldCheck,
  RefreshCw,
  HardDrive,
} from "lucide-react";
import { EditorialTabTransition, EditorialTabItem } from "@/components/animations/editorial-text";

type SurfaceMode = "independent" | "mirrored" | "synchronized" | "split" | "multizone";

export function VmovexaCoreLayers() {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [surfaceMode, setSurfaceMode] = useState<SurfaceMode>("synchronized");
  const [offlineStep, setOfflineStep] = useState<number>(2);

  const coreLayers = [
    {
      id: 0,
      name: "Network Engine",
      badge: "LAYER 01 // CONNECTIVITY",
      icon: Wifi,
      role: "Carrier-redundant cellular uplink with automatic fallback & bandwidth-adaptive transmission.",
      telemetry: "Dual eSIM | 4G/5G Failover | TLS 1.3",
    },
    {
      id: 1,
      name: "Media Engine",
      badge: "LAYER 02 // RENDERING",
      icon: Film,
      role: "Automotive GPU-accelerated video decoding, seamless transitions, and frame-accurate playback.",
      telemetry: "Hardware H.264/H.265 | 60 FPS | 4K Output",
    },
    {
      id: 2,
      name: "Campaign Engine",
      badge: "LAYER 03 // RULES",
      icon: Calendar,
      role: "Evaluates multi-variable targeting schedules, impressions quotas, and pacing constraints locally.",
      telemetry: "Local Schedule Queue | Zero Latency",
    },
    {
      id: 3,
      name: "Geo-Fence Engine",
      badge: "LAYER 04 // SPATIAL",
      icon: MapPin,
      role: "High-frequency polygonal coordinate collision detection triggering content in under 50 milliseconds.",
      telemetry: "Polygonal Mesh | <50ms Collision Check",
    },
    {
      id: 4,
      name: "GPS & Positioning",
      badge: "LAYER 05 // GNSS",
      icon: Compass,
      role: "Multi-constellation GNSS (GPS, GLONASS, Galileo, BeiDou) with dead reckoning for urban canyons.",
      telemetry: "Sub-meter Precision | 10Hz Update Rate",
    },
    {
      id: 5,
      name: "Telemetry Engine",
      badge: "LAYER 06 // VITALS",
      icon: Activity,
      role: "Monitors display health, thermal states, ignition, battery voltage, and trip metrics in real time.",
      telemetry: "Sensors Polled at 100ms | Health Score 99.9%",
    },
    {
      id: 6,
      name: "Multi-Screen Controller",
      badge: "LAYER 07 // SURFACES",
      icon: Monitor,
      role: "Orchestrates rooftop exterior screens and in-cabin passenger displays with millisecond sync.",
      telemetry: "Up to 6 Simultaneous Display Channels",
    },
    {
      id: 7,
      name: "Hardware Security",
      badge: "LAYER 08 // INTEGRITY",
      icon: ShieldCheck,
      role: "Cryptographic hardware key storage, signed firmware verification, and tamper-resistant audit logs.",
      telemetry: "Secure Boot | Encrypted Storage at Rest",
    },
    {
      id: 8,
      name: "OTA Management",
      badge: "LAYER 09 // UPGRADES",
      icon: RefreshCw,
      role: "Atomic over-the-air firmware updates with dual-bank automatic rollback protection.",
      telemetry: "A/B Dual Partition | Delta Compression",
    },
    {
      id: 9,
      name: "Offline Storage & Cache",
      badge: "LAYER 10 // RESILIENCE",
      icon: HardDrive,
      role: "Full campaign creative and rule caching on in-vehicle solid state storage for continuous playback.",
      telemetry: "NVMe Edge Cache | 100% Offline Autonomy",
    },
  ];

  const currentLayer = coreLayers[activeLayer];
  const CurrentIcon = currentLayer.icon;

  const offlinePhases = [
    {
      id: 0,
      title: "CLOUD DISPATCH",
      desc: "Central rules, geofence polygons, and media assets deployed over cellular network.",
      status: "SYNC_COMPLETE",
    },
    {
      id: 1,
      title: "LOCAL EDGE RECEPTION",
      desc: "VMOVEXA CORE verifies cryptographic signatures and writes assets to high-speed cache.",
      status: "NVME_WRITTEN",
    },
    {
      id: 2,
      title: "CACHED OPERATION (OFFLINE)",
      desc: "Vehicle enters underground tunnel, rural dead zone, or network blackout. Playback continues uninterrupted.",
      status: "100% CONTINUOUS",
      highlight: true,
    },
    {
      id: 3,
      title: "CONNECTIVITY RETURNS",
      desc: "Cellular link re-establishes handshake with VMOVEXA cloud orchestrator.",
      status: "LINK_ACQUIRED",
    },
    {
      id: 4,
      title: "DELTA SYNCHRONIZATION",
      desc: "Locally recorded telemetry, proof-of-play timestamps, and diagnostic logs upload seamlessly.",
      status: "VERIFIED_AUDIT",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      {/* 1. The 10 In-Vehicle Edge Layers */}
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
            VMOVEXA CORE // EMBEDDED ARCHITECTURE
          </div>
          <h3
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 0.8rem",
            }}
          >
            The 10 Computational Layers <br />
            <span className="gradient-text">Inside the Vehicle Edge.</span>
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
            VMOVEXA CORE turns vehicles into autonomous edge computing environments. Select any layer to inspect its subsystem role.
          </p>
        </div>

        {/* Interactive Layer Browser */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Vertical Stack List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.45rem",
              maxHeight: "440px",
              overflowY: "auto",
              paddingRight: "0.5rem",
            }}
          >
            {coreLayers.map((l, idx) => {
              const Icon = l.icon;
              const isSelected = activeLayer === idx;

              return (
                <button
                  key={l.name}
                  onClick={() => setActiveLayer(idx)}
                  type="button"
                  style={{
                    borderRadius: "8px",
                    border: `1px solid ${isSelected ? "var(--accent-cyan)" : "var(--border)"}`,
                    background: isSelected ? "rgba(0, 229, 255, 0.12)" : "rgba(0, 0, 0, 0.3)",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Icon size={16} color={isSelected ? "var(--accent-cyan)" : "var(--text-muted)"} />
                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: isSelected ? "#ffffff" : "var(--text-secondary)" }}>
                      {l.name}
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.68rem", color: isSelected ? "var(--accent-cyan)" : "var(--text-muted)" }}>
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Layer Inspector */}
          <div
            style={{
              borderRadius: "var(--radius-sm)",
              border: "1px solid rgba(0, 229, 255, 0.4)",
              background: "rgba(0, 0, 0, 0.7)",
              padding: "2.5rem 2rem",
              boxShadow: "0 0 35px rgba(0, 229, 255, 0.1)",
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <EditorialTabTransition tabKey={activeLayer}>
              <EditorialTabItem>
                <div
                  style={{
                    fontFamily: "var(--font-apple-mono)",
                    fontSize: "0.75rem",
                    color: "var(--accent-cyan)",
                    letterSpacing: "0.14em",
                    marginBottom: "0.6rem",
                  }}
                >
                  {currentLayer.badge}
                </div>
              </EditorialTabItem>

              <EditorialTabItem delayOffset={0.06}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
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
                  <h4 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    {currentLayer.name}
                  </h4>
                </div>
              </EditorialTabItem>

              <EditorialTabItem delayOffset={0.12}>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.65, margin: "0 0 1.5rem" }}>
                  {currentLayer.role}
                </p>
              </EditorialTabItem>
            </EditorialTabTransition>

            <div
              style={{
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "1rem 1.2rem",
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.76rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <span style={{ color: "var(--text-muted)" }}>EDGE TELEMETRY SPECIFICATION:</span>
              <span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>{currentLayer.telemetry}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Multi-Screen Intelligence */}
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
            CORE // SURFACE ORCHESTRATION
          </div>
          <h3
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 0.8rem",
            }}
          >
            One Vehicle. <span className="gradient-text">Multiple Digital Surfaces.</span>
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
            A single vehicle acts as a coordinated visual environment. Switch modes to inspect how surfaces coordinate:
          </p>
        </div>

        {/* Mode switcher tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {[
            { id: "synchronized", label: "Synchronized", desc: "Coordinated timing across exterior and interior displays" },
            { id: "independent", label: "Independent", desc: "Separate campaigns on rooftop vs passenger screens" },
            { id: "mirrored", label: "Mirrored", desc: "Identical creative playback on both sides of transit vehicle" },
            { id: "split", label: "Split Screen", desc: "Transit route telemetry on top half, sponsor creative on bottom" },
            { id: "multizone", label: "Multi-Zone", desc: "Dynamic zones: weather, next stop, dynamic advertisement" },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSurfaceMode(mode.id as SurfaceMode)}
              type="button"
              style={{
                background: surfaceMode === mode.id ? "rgba(0, 229, 255, 0.15)" : "rgba(255, 255, 255, 0.03)",
                border: `1px solid ${surfaceMode === mode.id ? "var(--accent-cyan)" : "var(--border)"}`,
                borderRadius: "8px",
                padding: "0.6rem 1.1rem",
                color: surfaceMode === mode.id ? "#ffffff" : "var(--text-muted)",
                fontFamily: "var(--font-apple-mono)",
                fontSize: "0.76rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Visualized Vehicle Surfaces Environment */}
        <div
          style={{
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--border)",
            background: "rgba(0, 0, 0, 0.5)",
            padding: "2.5rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Surface 1: Rooftop Exterior Display Left */}
          <div
            style={{
              borderRadius: "8px",
              border: "1px solid var(--border-bright)",
              background: "rgba(0, 0, 0, 0.6)",
              padding: "1.5rem",
            }}
          >
            <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.7rem", color: "var(--accent-cyan)", marginBottom: "0.4rem" }}>
              SURFACE 01 // ROOFTOP LEFT
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.8rem" }}>
              Curbside Pedestrian View
            </div>
            <div style={{ background: "rgba(0, 229, 255, 0.08)", border: "1px solid rgba(0, 229, 255, 0.2)", borderRadius: "6px", padding: "1rem", textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.78rem", color: "var(--accent-cyan)" }}>
                MODE: {surfaceMode.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Surface 2: Rooftop Exterior Display Right */}
          <div
            style={{
              borderRadius: "8px",
              border: "1px solid var(--border-bright)",
              background: "rgba(0, 0, 0, 0.6)",
              padding: "1.5rem",
            }}
          >
            <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.7rem", color: "var(--accent-magenta)", marginBottom: "0.4rem" }}>
              SURFACE 02 // ROOFTOP RIGHT
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.8rem" }}>
              Traffic Lane Driver View
            </div>
            <div style={{ background: "rgba(217, 70, 239, 0.08)", border: "1px solid rgba(217, 70, 239, 0.2)", borderRadius: "6px", padding: "1rem", textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.78rem", color: "var(--accent-magenta)" }}>
                MODE: {surfaceMode.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Surface 3: Passenger In-Cabin Infotainment */}
          <div
            style={{
              borderRadius: "8px",
              border: "1px solid var(--border-bright)",
              background: "rgba(0, 0, 0, 0.6)",
              padding: "1.5rem",
            }}
          >
            <div style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.7rem", color: "var(--accent-indigo)", marginBottom: "0.4rem" }}>
              SURFACE 03 // PASSENGER SCREEN
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.8rem" }}>
              In-Cabin Interactive Screen
            </div>
            <div style={{ background: "rgba(79, 70, 229, 0.08)", border: "1px solid rgba(79, 70, 229, 0.2)", borderRadius: "6px", padding: "1rem", textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-apple-mono)", fontSize: "0.78rem", color: "var(--accent-indigo)" }}>
                MODE: {surfaceMode.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Offline Resilience Architecture */}
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
            OFFLINE RESILIENCE // DETERMINISTIC AUTONOMY
          </div>
          <h3
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 0.8rem",
            }}
          >
            Connectivity Can Disappear. <br />
            <span className="gradient-text">The System Shouldn&apos;t.</span>
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", margin: 0, maxWidth: "680px" }}>
            Vehicles regularly encounter tunnels, underground parking, and remote zones. VMOVEXA CORE maintains 100% operational uptime through localized edge caching and state synchronization.
          </p>
        </div>

        {/* 5-Step Sequence */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {offlinePhases.map((phase, idx) => {
            const isSelected = offlineStep === idx;

            return (
              <div
                key={phase.id}
                onClick={() => setOfflineStep(idx)}
                style={{
                  borderRadius: "var(--radius-sm)",
                  border: isSelected ? "1px solid var(--accent-cyan)" : "1px solid var(--border)",
                  background: isSelected ? "rgba(0, 229, 255, 0.1)" : "rgba(0, 0, 0, 0.4)",
                  padding: "1.4rem",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "220px",
                  transition: "all 0.2s ease",
                  boxShadow: isSelected ? "0 0 24px rgba(0, 229, 255, 0.15)" : "none",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-apple-mono)",
                      fontSize: "0.68rem",
                      color: isSelected ? "var(--accent-cyan)" : "var(--text-muted)",
                      letterSpacing: "0.1em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    PHASE 0{idx + 1}
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.6rem" }}>
                    {phase.title}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                    {phase.desc}
                  </p>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-apple-mono)",
                    fontSize: "0.7rem",
                    color: isSelected ? "var(--accent-cyan)" : "var(--text-muted)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingTop: "0.6rem",
                    marginTop: "1rem",
                  }}
                >
                  {phase.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
