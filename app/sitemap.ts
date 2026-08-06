import type { MetadataRoute } from "next";
import { materials } from "@/lib/materials";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://twinx-interiors.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/portfolio`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const materialRoutes: MetadataRoute.Sitemap = materials.map((m) => ({
    url: `${siteUrl}/materials/${m.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...materialRoutes];
}
