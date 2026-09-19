import type { Metadata } from "next";
import { CtaBand, FeatureGrid, SectionHeading } from "@/components/sections/shared";
import { PageHero } from "@/app/platform/page";
import { solutionCards } from "@/lib/site";
export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Connected mobility solutions for public transport, fleet operations, communication and media.",
};
export default function SolutionsPage() {
  return (
    <>
      <PageHero
        copy="The right capability, exactly where the city and the journey need it."
        eyebrow="Solutions"
        title={
          <>
            From the route
            <br />
            to the <em>real world.</em>
          </>
        }
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Built for impact"
            title="Connected mobility, applied."
          />
          <FeatureGrid features={solutionCards} />
        </div>
      </section>
      <section className="section section--muted">
        <div className="split-copy container">
          <div>
            <p className="eyebrow">One shared advantage</p>
            <h2>Make public movement feel personal.</h2>
          </div>
          <p>
            Whether the mission is safer public transport, a more responsive fleet, or
            more relevant communication, VMOVEXA creates a clear connection between
            infrastructure and people.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
