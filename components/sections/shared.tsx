import { ArrowUpRight, Check } from "lucide-react";
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
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
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
      {features.map(({ icon: Icon, title, description, number }, index) => (
        <Reveal className="feature-card" delay={index * 0.06} key={title}>
          <div className="feature-card__top">
            <Icon aria-hidden="true" size={23} strokeWidth={1.5} />
            {number && <span>{number}</span>}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </Reveal>
      ))}
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
    <div className="image-panel">
      <Image
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 900px) 100vw, 55vw"
        src={src}
      />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band__inner container">
        <div>
          <p className="eyebrow">Ready to move forward?</p>
          <h2>Build the future of connected mobility.</h2>
        </div>
        <Link className="button button--light" href="/contact">
          Talk to our team <ArrowUpRight size={18} />
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
