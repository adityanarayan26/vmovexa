"use client";

import { ArrowRight, ArrowUpRight, Sparkles, Bus, Building, Tv, Database, Cpu } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { EditorialLine } from "@/components/animations/editorial-text";
import { MagneticElement } from "@/components/animations/gsap-scroll-fx";
import { HeroTechStack } from "@/components/visuals/hero-tech-stack";
import { VehicleEvolution } from "@/components/visuals/vehicle-evolution";
import { CloudToEdgeDiagram } from "@/components/visuals/cloud-to-edge-diagram";
import { PlatformDifference } from "@/components/visuals/platform-difference";

export function HomeExperience() {
  const transformations = [
    {
      label: "01 // VEHICLES",
      title: "Connected Fleets",
      desc: "From mechanical transport to software-defined, connected edge computers on wheels.",
      icon: Bus,
    },
    {
      label: "02 // CITIES",
      title: "Smart Urban Corridors",
      desc: "From static transit networks to responsive, data-generating municipal infrastructure.",
      icon: Building,
    },
    {
      label: "03 // MEDIA",
      title: "Contextual Mobility Media",
      desc: "From static billboards to location-aware, dynamic digital surfaces verified in real time.",
      icon: Tv,
    },
    {
      label: "04 // INFRASTRUCTURE",
      title: "Distributed Edge Nodes",
      desc: "From central servers to compute deployed at the physical perimeter of movement.",
      icon: Cpu,
    },
    {
      label: "05 // DATA",
      title: "Actionable Spatial Telemetry",
      desc: "From isolated vehicle trip counters to continuous urban mobility intelligence.",
      icon: Database,
    },
  ];

  return (
    <>
      {/* 01 - CINEMATIC HERO SECTION */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "6.5rem",
          paddingBottom: "5rem",
          overflow: "hidden",
        }}
      >
        {/* Deep Tech Subtle Atmosphere & Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(0, 229, 255, 0.07) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.07) 0%, transparent 50%), linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "3.5rem",
              alignItems: "center",
            }}
          >
            {/* Left Column: Editorial Display Typography */}
            <div>
              <EditorialLine delay={0}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "var(--font-apple-mono)",
                    fontSize: "0.82rem",
                    color: "var(--accent-cyan)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginBottom: "1.2rem",
                  }}
                >
                  <Sparkles size={14} /> THE INTELLIGENCE LAYER FOR MOBILITY
                </div>
              </EditorialLine>

              <h1
                style={{
                  fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
                  fontWeight: 600,
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  margin: "0 0 1.5rem",
                }}
              >
                <EditorialLine delay={0.06}>
                  INTELLIGENCE
                </EditorialLine>
                <EditorialLine delay={0.12}>
                  <span className="gradient-text">IN MOTION.</span>
                </EditorialLine>
              </h1>

              <EditorialLine delay={0.18}>
                <p
                  style={{
                    fontSize: "clamp(1.05rem, 1.8vw, 1.22rem)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    maxWidth: "540px",
                    margin: "0 0 2.2rem",
                  }}
                >
                  VMOVEXA is building a cloud-to-edge technology platform that transforms connected vehicles into intelligent digital infrastructure.
                </p>
              </EditorialLine>

              <Reveal delay={0.24}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <MagneticElement strength={0.25}>
                    <Link className="button" href="/platform">
                      Explore the Platform <ArrowRight size={17} />
                    </Link>
                  </MagneticElement>
                  <MagneticElement strength={0.25}>
                    <Link className="button button--outline" href="/technology">
                      Discover the Technology <ArrowUpRight size={17} />
                    </Link>
                  </MagneticElement>
                </div>
              </Reveal>

              {/* Technical Node Specifications Metadata */}
              <Reveal delay={0.24}>
                <div
                  style={{
                    marginTop: "3rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid var(--border)",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1.2rem",
                    fontFamily: "var(--font-apple-mono)",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.12em" }}>
                      ARCHITECTURE
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 550, color: "#ffffff", marginTop: "0.2rem" }}>
                      Cloud-to-Edge
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.12em" }}>
                      EDGE OS
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 550, color: "var(--accent-cyan)", marginTop: "0.2rem" }}>
                      VMOVEXA CORE
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.12em" }}>
                      EXECUTION
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 550, color: "#ffffff", marginTop: "0.2rem" }}>
                      Sub-50ms Local
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Interactive Abstract Technology Stack */}
            <div>
              <Reveal delay={0.15}>
                <HeroTechStack />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 - THE BIG IDEA: BEYOND TRANSPORTATION */}
      <section
        style={{
          padding: "6rem 0",
          background: "var(--bg-black)",
          position: "relative",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <VehicleEvolution />
        </div>
      </section>

      {/* 03 - CLOUD TO MOVING EDGE ARCHITECTURE */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(180deg, var(--bg-black) 0%, rgba(12, 15, 23, 0.4) 100%)",
          position: "relative",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <CloudToEdgeDiagram />
        </div>
      </section>

      {/* 04 - PLATFORM DIFFERENCE: NOT DIGITAL SIGNAGE */}
      <section
        style={{
          padding: "6rem 0",
          background: "var(--bg-black)",
          position: "relative",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <PlatformDifference />
        </div>
      </section>

      {/* 05 - WHY NOW: THE WORLD IS BECOMING SOFTWARE-DEFINED */}
      <section
        style={{
          padding: "6.5rem 0",
          background: "linear-gradient(180deg, rgba(12, 15, 23, 0.6) 0%, var(--bg-black) 100%)",
          position: "relative",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 4rem" }}>
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
                MACRO INDUSTRY TRANSFORMATION
              </div>
            </EditorialLine>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                margin: "0 0 1.2rem",
              }}
            >
              <EditorialLine delay={0.06}>
                The World is Becoming
              </EditorialLine>
              <EditorialLine delay={0.12}>
                <span className="gradient-text">Software-Defined.</span>
              </EditorialLine>
            </h2>
            <EditorialLine delay={0.18}>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6, margin: 0 }}>
                Physical mobility is colliding with edge computing, cloud orchestration, and digital media. VMOVEXA bridges this intersection into a unified operating standard.
              </p>
            </EditorialLine>
          </div>

          {/* 5 Transformations Horizontal Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.2rem",
              marginBottom: "3.5rem",
            }}
          >
            {transformations.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  style={{
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border)",
                    background: "rgba(0, 0, 0, 0.4)",
                    padding: "1.8rem 1.4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "230px",
                    transition: "transform 0.2s ease, border-color 0.2s ease",
                  }}
                  className="tier-card"
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-apple-mono)",
                        fontSize: "0.7rem",
                        color: "var(--accent-cyan)",
                        letterSpacing: "0.1em",
                        marginBottom: "0.8rem",
                      }}
                    >
                      {t.label}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                      <Icon size={18} color="var(--accent-cyan)" />
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#ffffff", margin: 0 }}>
                        {t.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
                      {t.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-apple-mono)",
                      fontSize: "0.68rem",
                      color: "var(--text-muted)",
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      paddingTop: "0.6rem",
                      marginTop: "1rem",
                    }}
                  >
                    VMOVEXA INTEGRATED
                  </div>
                </div>
              );
            })}
          </div>

          {/* Synthesis Formula Banner */}
          <div
            style={{
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border-bright)",
              background: "linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(147, 51, 234, 0.08) 100%)",
              padding: "2rem",
              textAlign: "center",
              fontFamily: "var(--font-apple-mono)",
              fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
              color: "#ffffff",
              letterSpacing: "0.08em",
            }}
          >
            <span style={{ color: "var(--accent-cyan)" }}>Mobility</span> ×{" "}
            <span style={{ color: "var(--accent-indigo)" }}>Edge Computing</span> ×{" "}
            <span style={{ color: "#ffffff" }}>Cloud</span> ×{" "}
            <span style={{ color: "var(--accent-purple)" }}>Data</span> ×{" "}
            <span style={{ color: "var(--accent-magenta)" }}>Digital Media</span>
          </div>
        </div>
      </section>

      {/* 06 - FINAL HIGH-IMPACT CALL TO ACTION */}
      <section
        style={{
          padding: "6rem 0",
          background: "var(--bg-black)",
          borderTop: "1px solid var(--border)",
          position: "relative",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div
            style={{
              fontFamily: "var(--font-apple-mono)",
              fontSize: "0.8rem",
              color: "var(--accent-cyan)",
              letterSpacing: "0.15em",
              marginBottom: "1rem",
            }}
          >
            JOIN THE MOVING INTELLIGENCE REVOLUTION
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 600,
              color: "#ffffff",
              margin: "0 0 1.2rem",
              letterSpacing: "-0.02em",
            }}
          >
            The World Moves. <br />
            <span className="gradient-text">Intelligence Should Move With It.</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
            }}
          >
            Deploy VMOVEXA across your fleet, infrastructure, or digital media network.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link className="button" href="/contact">
              Let&apos;s Build <ArrowRight size={17} />
            </Link>
            <Link className="button button--outline" href="/platform">
              Explore Architecture <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
