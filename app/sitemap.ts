import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const HIGH = new Set([
  "pladur-ceuta",
  "lana-de-roca-ceuta",
  "aislamiento-termico-acustico-ceuta",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SERVICES.map((s) => ({
      url: `${SITE.url}${s.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: HIGH.has(s.slug) ? 0.95 : 0.85,
    })),
  ];
}
