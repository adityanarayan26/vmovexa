import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { CtaBand, FeatureGrid, SectionHeading } from "@/components/sections/shared";
import { media } from "@/lib/media";
import { pillars, solutionCards, technologies } from "@/lib/site";

export function HomeExperience() {
  return (
    <>
      <section className="hero">
        <Image
          alt={media.hero.alt}
          className="hero__image"
          fill
          priority
          sizes="100vw"
          src={media.hero.src}
        />
        <div className="hero__shade" />
        <div className="hero__content container">
          <Reveal>
            <p className="eyebrow eyebrow--bright">Intelligent connected mobility</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Reimagining
              <br />
              transportation.
              <br />
              <em>For billions.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="hero__bottom">
              <p>
                The world&apos;s first mobility-integrated ecosystem—bringing safety,
                media, AI and clean energy into motion.
              </p>
              <div className="hero__actions">
                <Link className="button" href="/contact">
                  Book a demo <ArrowUpRight size={17} />
                </Link>
                <Link className="text-link" href="/platform">
                  Explore platform <ArrowDown size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
        <div aria-hidden="true" className="hero__index">
          01 <span />
        </div>
      </section>
      <section className="section section--why">
        <div className="container">
          <SectionHeading
            copy="We make transportation more perceptive, more useful and more valuable for the people moving through it."
            eyebrow="Why VMOVEXA"
            title="Transportation deserves better."
          />
          <FeatureGrid features={pillars} />
        </div>
      </section>
      <section className="section ecosystem">
        <div className="ecosystem__grid container">
          <Reveal className="ecosystem__visual">
            <div className="orb orb--one" />
            <div className="orb orb--two" />
            <div className="network-line network-line--one" />
            <div className="network-line network-line--two" />
            <span className="signal signal--one" />
            <span className="signal signal--two" />
            <span className="signal signal--three" />
          </Reveal>
          <div>
            <SectionHeading
              copy="One connected platform turns isolated vehicle hardware into a system that protects, communicates, earns and evolves."
              eyebrow="Our ecosystem"
              title="One platform. Infinite possibilities."
            />
            <Link className="text-link text-link--dark" href="/platform">
              See the ecosystem <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            eyebrow="Solutions snapshot"
            title="Impact, in the real world."
          />
          <FeatureGrid features={solutionCards} />
        </div>
      </section>
      <section className="section signal-section">
        <div className="signal-section__grid container">
          <div>
            <p className="eyebrow">Built to perform</p>
            <h2>Intelligence should travel at the speed of life.</h2>
            <p className="body-copy">
              From the vehicle edge to the cloud, VMOVEXA connects each moment of movement
              with dependable, actionable intelligence.
            </p>
            <Link className="button button--outline" href="/technology">
              Explore technology <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="signal-list">
            {technologies.map((technology, index) => (
              <Reveal
                className="signal-list__item"
                delay={index * 0.09}
                key={technology.title}
              >
                <technology.icon size={24} strokeWidth={1.4} />
                <div>
                  <span>0{index + 1}</span>
                  <h3>{technology.title}</h3>
                  <p>{technology.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section vision">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Vision 2031"
            title="Impact that moves the world."
          />
          <div className="stats">
            <Reveal>
              <strong>
                10,000<span>+</span>
              </strong>
              <p>Connected vehicles</p>
            </Reveal>
            <Reveal delay={0.07}>
              <strong>50M</strong>
              <p>Daily reach</p>
            </Reveal>
            <Reveal delay={0.14}>
              <strong>∞</strong>
              <p>Better journeys ahead</p>
            </Reveal>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
