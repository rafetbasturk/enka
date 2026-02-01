import { MetadataRoute } from "next";
import { SEO } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  const { site } = SEO;
  return {
    name: site.legalName || site.name.en,
    short_name: "En-Ka",
    description: site.description.en,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon-256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
