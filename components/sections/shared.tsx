import { ArrowUpRight, Check, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Feature } from "@/lib/site";
import { Reveal } from "@/components/animations/reveal";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string | React.ReactNode;
  copy?: string | React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <p className="eyebrow eyebrow--gradient">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </Reveal>
  );
}

export function FeatureGrid({
  features,
  className = "",
}: {
  features: Feature[];
  className?: string;
}) {
  return (
    <div className={`feature-grid ${className}`}>
      {features.map(({ icon: Icon, title, description, number, tag }, index) => (
        <Reveal className="feature-card" delay={index * 0.05} key={title}>
          <div className="feature-card__top">
            <Icon aria-hidden="true" size={24} strokeWidth={1.5} />
            {tag ? (
              <span className="feature-card__badge">{tag}</span>
            ) : number ? (
              <span className="number">{number}</span>
            ) : null}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function ArchitectureTierGrid({
  tiers,
}: {
  tiers: {
    level: string;
    title: string;
    subtitle: string;
    items: string[];
    icon: LucideIcon;
  }[];
}) {

  return (
    <div className="tier-grid">
      {tiers.map((tier, idx) => {
        const Icon = tier.icon;
        return (
          <Reveal className="tier-card" delay={idx * 0.08} key={tier.title}>
            <div className="tier-card__header">
              <span className="tier-card__level">{tier.level}</span>
              <Icon size={22} style={{ color: "var(--accent-cyan)" }} />
            </div>
            <h3>{tier.title}</h3>
            <span className="tier-card__subtitle">{tier.subtitle}</span>
            <ul className="tier-card__list">
              {tier.items.map((item) => (
                <li key={item}>
                  <span className="bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        );
      })}
    </div>
  );
}

export function ImagePanel({
  alt,
  src,
  priority = false,
}: {
  alt: string;
  src: string;
  priority?: boolean;
}) {
  return (
    <div className="image-panel relative overflow-hidden">
      <Image
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 900px) 100vw, 55vw"
        src={src}
      />
      {/* 4-Corner Vignette / Faded Look Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `
            radial-gradient(ellipse 95% 90% at 50% 50%, transparent 35%, rgba(1, 5, 11, 0.5) 70%, rgba(1, 5, 11, 0.95) 100%),
            radial-gradient(circle at 0% 0%, rgba(1, 5, 11, 0.95) 0%, transparent 35%),
            radial-gradient(circle at 100% 0%, rgba(1, 5, 11, 0.95) 0%, transparent 35%),
            radial-gradient(circle at 0% 100%, rgba(1, 5, 11, 0.95) 0%, transparent 35%),
            radial-gradient(circle at 100% 100%, rgba(1, 5, 11, 0.95) 0%, transparent 35%),
            linear-gradient(to right, rgba(1, 5, 11, 0.8) 0%, transparent 12%, transparent 88%, rgba(1, 5, 11, 0.8) 100%),
            linear-gradient(to bottom, rgba(1, 5, 11, 0.7) 0%, transparent 15%, transparent 80%, rgba(1, 5, 11, 0.95) 100%)
          `,
        }}
      />
      <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_60px_rgba(1,5,11,0.9)]" />
    </div>
  );
}

export function CtaBand({
  eyebrow = "THE WORLD MOVES",
  title = "Intelligence Should Move With It.",
  ctaText = "Explore VMOVEXA",
  ctaHref = "/platform",
}: {
  eyebrow?: string;
  title?: string | React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <section className="cta-band">
      <div className="cta-band__inner container">
        <div>
          <p className="eyebrow eyebrow--gradient">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <Link className="button button--light" href={ctaHref}>
          {ctaText} <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" size={16} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  ctaText = "Let's Build",
  ctaHref = "/contact",
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow eyebrow--gradient">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        <Link className="button button--outline" href={ctaHref}>
          {ctaText} <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

