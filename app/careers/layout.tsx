import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join VMOVEXA and build the future of mobility intelligence. Explore open positions in engineering, data science, and product development.",
  keywords: ["vmovexa careers", "jobs at vmovexa", "mobility tech jobs", "hiring engineers", "data science jobs mobility"],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
