import type { Metadata } from "next";

const BASE_URL = "https://insightedge.global";

export const defaultMetadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    authors: [{ name: "Insight Edge Global" }],
    creator: "Insight Edge Global",
    publisher: "Insight Edge Global",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_AE",
        siteName: "Insight Edge Global",
        images: [
            {
                url: `${BASE_URL}/images/home/logo.svg`,
                width: 1200,
                height: 630,
                alt: "Insight Edge Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@InsightEdgeGlobal",
    },
};

export type PageSEO = {
    slug: string;
    url: string;
    keywords: string[];
    title: string;
    description: string;
};

export const pageSEO: Record<string, PageSEO> = {
    home: {
        slug: "/",
        url: `${BASE_URL}/`,
        keywords: [
            "Account for precious metals industry",
            "Audit & Assurance Services UAE",
            "UAE advisory firm",
            "UAE-registered audit",
            "Insight Edge Global",
            "data analytics solutions",
            "business intelligence services",
            "competitive intelligence platform",
            "data science consulting",
            "predictive analytics",
            "market intelligence tools",
            "business strategy consulting",
            "data-driven decision making",
            "digital transformation services",
            "enterprise analytics",
            "real-time data insights",
            "data visualization tools",
            "machine learning solutions",
            "business growth strategies",
            "market research analytics",
            "data intelligence platform",
            "leadership consulting",
            "business consulting services",
            "strategic advisory",
            "organizational development",
            "executive coaching",
            "corporate training solutions",
        ],
        title: "Best Audit and Advisory Firm For Precious Metals Industry in UAE",
        description:
            "Insight Edge Global delivers best audit company for precious metals industry in UAE. We also provide all Financial Advisory, Taxation and Accounting Services.",
    },

    about: {
        slug: "/about-us",
        url: `${BASE_URL}/about-us`,
        keywords: [
            "Insight Edge Global",
            "about Insight Edge",
            "precious metals audit",
            "precious metals accounting",
            "gold industry accounting",
            "mining audit services",
            "metal trading compliance",
            "financial audit services",
            "accounting for metals industry",
        ],
        title: "Fast and Best Audit & Accounting Service for Precious Metals in UAE",
        description:
            "Insight Edge Global LLC provides a complete solution for auditing and assurance services for the Precious Metals Industry in UAE and other industries.",
    },

    solutions: {
        slug: "/solutions",
        url: `${BASE_URL}/solutions`,
        keywords: [
            "precious metals audit",
            "precious metals accounting",
            "gold industry audit",
            "silver accounting services",
            "metal trading compliance",
            "refinery audit services",
            "bullion accounting",
            "financial reporting metals industry",
            "precious metals compliance",
            "InsightEdge audit solutions",
        ],
        title:
            "Financial, Taxation, Audit & Accounting for Precious Metals Industries | InsightEdge",
        description:
            "Expert audit and accounting services for the precious metals industry. Ensure compliance, transparency, and financial accuracy with InsightEdge solutions.",
    },

    whoWeServe: {
        slug: "/who-we-serve",
        url: `${BASE_URL}/who-we-serve`,
        keywords: [
            "precious metals audit services",
            "accounting for precious metals industry",
            "bullion audit experts",
            "gold refinery accounting",
            "silver trading compliance",
            "metal industry financial services",
            "audit for metal dealers",
            "precious metals consultants",
            "InsightEdge services",
            "refinery financial reporting",
        ],
        title: "Precious Metals Audit & Accounting Experts in UAE | InsightEdge",
        description:
            "Serving the precious metals industry with expert audit, accounting, financial and taxation solutions. Supporting refiners, traders, and the precious metals industry in UAE.",
    },

    services: {
        slug: "/services",
        url: `${BASE_URL}/services`,
        keywords: [
            "precious metals audit services",
            "gold refinery accounting",
            "silver refinery audit",
            "bullion trading accounting",
            "jewellery business audit",
            "luxury watch dealer accounting",
            "precious metals compliance services",
            "international metal traders audit",
            "family trading house accounting",
            "online luxury marketplace accounting",
        ],
        title:
            "Audit & Accounting for Precious Metals Firms in UAE | InsightEdge",
        description:
            "Audit and accounting for gold refiners, bullion traders, jewellers, and luxury dealers. Trusted solutions for compliance, reporting, and financial clarity.",
    },

    contact: {
        slug: "/contact",
        url: `${BASE_URL}/contact`,
        keywords: [
            "contact precious metals audit",
            "audit accounting inquiry metals",
            "bullion audit contact",
            "gold industry accounting experts",
            "refinery audit consultation",
            "precious metals compliance services",
            "InsightEdge contact",
            "accounting services metals industry",
            "audit support precious metals",
        ],
        title: "Contact Precious Metals Audit Experts In UAE | InsightEdge",
        description:
            "Serving the precious metals industry with expert audit and accounting solutions. Supporting refiners, traders, and dealers with compliance and accuracy in UAE.",
    },
};

/**
 * Generate a Next.js Metadata object for a given page key.
 * Usage in app/page.tsx:  export const metadata = generateMetadata("home");
 * Usage in app/about-us/page.tsx: export const metadata = generateMetadata("about");
 */
export function generateMetadata(pageKey: keyof typeof pageSEO): Metadata {
    const page = pageSEO[pageKey];

    return {
        ...defaultMetadata,
        title: page.title,
        description: page.description,
        keywords: page.keywords,
        alternates: {
            canonical: page.url,
        },
        openGraph: {
            ...defaultMetadata.openGraph,
            title: page.title,
            description: page.description,
            url: page.url,
        },
        twitter: {
            ...defaultMetadata.twitter,
            title: page.title,
            description: page.description,
        },
    };
}