import type { Metadata } from "next";
import { CtaBand, SectionHeading } from "@/components/sections/shared";
import { PageHero } from "@/app/platform/page";
export const metadata: Metadata = {
  title: "Company",
  description: "Meet the team building the future of intelligent, connected mobility.",
};
export default function CompanyPage() {
  return (
    <>
      <PageHero
        copy="We believe the world moves better when technology respects the people it serves."
        eyebrow="About VMOVEXA"
        title={
          <>
            A better future,
            <br />
            <em>in motion.</em>
          </>
        }
      />
      <section className="section">
        <div className="statement container">
          <SectionHeading
            eyebrow="Our purpose"
            title="Transform movement into a force for progress."
          />
          <p>
            VMOVEXA brings together mobility, media, artificial intelligence, safety and
            renewable energy to rethink what transportation can contribute to the world.
          </p>
        </div>
      </section>
      <section className="section section--muted" id="vision">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Vision 2031"
            title="A world where every journey creates more value."
          />
          <div className="stats">
            <div>
              <strong>
                10,000<span>+</span>
              </strong>
              <p>Connected vehicles</p>
            </div>
            <div>
              <strong>50M</strong>
              <p>People reached daily</p>
            </div>
            <div>
              <strong>0</strong>
              <p>Compromises on safety</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
