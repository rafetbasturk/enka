import { MetadataRoute } from "next";
import { SEO } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SEO.site.baseUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
