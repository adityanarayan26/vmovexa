export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Replace these purpose-built SVG placeholders with final photography/video posters.
export const media = {
  hero: {
    src: "/images/mobility-network.svg",
    alt: "Abstract connected mobility network visualisation",
    width: 1440,
    height: 1024,
  },
  ecosystem: {
    src: "/images/ecosystem-grid.svg",
    alt: "Abstract visualisation of an intelligent transport ecosystem",
    width: 1200,
    height: 800,
  },
} satisfies Record<string, MediaAsset>;
