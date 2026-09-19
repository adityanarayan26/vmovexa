import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy",
  description: "VMOVEXA privacy information.",
};
export default function PrivacyPage() {
  return (
    <section className="legal container">
      <p className="eyebrow">Legal</p>
      <h1>Privacy policy</h1>
      <p>
        VMOVEXA respects your privacy. This placeholder policy should be replaced with the
        company&apos;s approved privacy notice before launch.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you contact us, we may collect the information you voluntarily provide so
        that we can respond to your request.
      </p>
      <h2>Contact</h2>
      <p>For privacy questions, contact hello@vmovexa.com.</p>
    </section>
  );
}
