import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CtaBand, FeatureGrid, SectionHeading } from "@/components/sections/shared";
import { pillars } from "@/lib/site";
export const metadata: Metadata = {
  title: "Platform",
  description:
    "The connected intelligence platform unifying safety, media, AI and energy.",
};
export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The VMOVEXA platform"
        title={
          <>
            Every moving surface.
            <br />
            <em>One living system.</em>
          </>
        }
        copy="A single operating layer that turns every journey into a safer, more intelligent and more valuable experience."
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Designed as one"
            title="Five dimensions. One system."
          />
          <FeatureGrid features={pillars} />
        </div>
      </section>
      <section className="section section--muted">
        <div className="split-copy container">
          <div>
            <p className="eyebrow">A system that compounds</p>
            <h2>Signals become insight. Insight becomes better movement.</h2>
          </div>
          <p>
            VMOVEXA connects vehicle systems, passenger touchpoints and operations data
            through one extensible platform—so every layer works harder together.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        <Link className="text-link text-link--dark" href="/contact">
          Build with us <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
export { PageHero };
