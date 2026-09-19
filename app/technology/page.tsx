import type { Metadata } from "next";
import { CtaBand, FeatureGrid, SectionHeading } from "@/components/sections/shared";
import { PageHero } from "@/app/platform/page";
import { technologies } from "@/lib/site";
export const metadata: Metadata = {
  title: "Technology",
  description: "Explore the cloud, edge, AI and display technologies powering VMOVEXA.",
};
export default function TechnologyPage() {
  return (
    <>
      <PageHero
        copy="Purpose-built technology for movement that is connected, considerate and always ready."
        eyebrow="Technology, in motion"
        title={
          <>
            Intelligence,
            <br />
            <em>where it matters.</em>
          </>
        }
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            copy="Engineered as a quiet advantage for cities, fleet operators and the people they serve."
            eyebrow="The foundation"
            title="More signal. Less friction."
          />
          <FeatureGrid features={technologies} />
        </div>
      </section>
      <section className="section dark-panel">
        <div className="split-copy container">
          <div>
            <p className="eyebrow eyebrow--bright">Cloud + edge</p>
            <h2>Local response. Global perspective.</h2>
          </div>
          <p>
            Responsive intelligence at the vehicle level, paired with secure cloud
            capability to reveal patterns across fleets, routes and cities.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
