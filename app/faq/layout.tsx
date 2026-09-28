import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about VMOVEXA's mobility intelligence platform, fleet solutions, and digital media.",
  keywords: ["vmovexa faq", "frequently asked questions", "mobility platform help", "vmovexa support"],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
