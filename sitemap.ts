import type { MetadataRoute } from "next";
import { pageSEO } from "@/seo.config";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        {
            url: pageSEO.home.url,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: pageSEO.about.url,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: pageSEO.solutions.url,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: pageSEO.whoWeServe.url,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: pageSEO.services.url,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: pageSEO.contact.url,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];
}