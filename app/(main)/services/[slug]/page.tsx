import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { defaultMetadata } from "@/seo.config";
import { servicesData } from "@/app/lib/services-data";
import GoldGlow from "@/app/components/services-v2/GoldGlow";
import ServiceDetailHero from "@/app/components/services-v2/ServiceDetailHero";
import ServicesPageNav from "@/app/components/services-v2/ServicesPageNav";
// import WhyChooseBand from "@/app/components/services-v2/WhyChooseBand";

// Below-the-fold: code-split out of the initial hydration bundle.
const WhyChoose = dynamic(() => import("@/app/components/home/WhyChoose"));

const BASE_URL = "https://insightedge.global";

export function generateStaticParams() {
    return servicesData.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData.find((s) => s.id === slug);

    if (!service) return defaultMetadata;

    const title = `${service.title} | Insight Edge Global`;
    const description = service.shortIntro;
    const url = `${BASE_URL}/services/${service.id}`;

    return {
        ...defaultMetadata,
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            ...defaultMetadata.openGraph,
            title,
            description,
            url,
        },
        twitter: {
            ...defaultMetadata.twitter,
            title,
            description,
        },
    };
}

export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.id === slug);

    if (!service) notFound();

    return (
        <div className="relative overflow-x-clip bg-[#F8F9FA]">
            <GoldGlow className="z-0" />
            <div className="relative z-10">
                <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-6 pt-28 sm:px-10 lg:flex-row lg:gap-12 lg:px-16">
                    <ServicesPageNav activeId={service.id} />
                    <div className="min-w-0 flex-1">
                        <ServiceDetailHero data={service} />
                    </div>
                </div>
                <WhyChoose />
            </div>
        </div>
    );
}
