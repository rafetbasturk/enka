import { MetadataRoute } from "next";
import { SEO } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO.site.baseUrl;

  const routes = ["", "/machines", "/references", "/contact"];
  const locales = ["en", "tr"];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            tr: `${baseUrl}/tr${route}`,
          },
        },
      });
    });
  });

  return sitemap;
}
