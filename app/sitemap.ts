import type { MetadataRoute } from "next";
import { pageSEO } from "@/seo.config";
import { servicesData } from "@/app/lib/services-data";

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
        ...servicesData.map((service) => ({
            url: `${pageSEO.services.url}/${service.id}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
        {
            url: pageSEO.contact.url,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];
}