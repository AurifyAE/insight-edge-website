import { generateMetadata } from "@/seo.config";
import GoldGlow from "@/app/components/services-v2/GoldGlow";
import ServicesHero from "@/app/components/services-v2/ServicesHero";
import ServicesOverviewGrid from "@/app/components/services-v2/ServicesOverviewGrid";
import WhyChooseBand from "@/app/components/services-v2/WhyChooseBand";

export const metadata = generateMetadata("services");

export default function ServicesPage() {
    return (
        <div className="relative overflow-x-hidden bg-[#F8F9FA]">
            <GoldGlow className="z-0" />

            <div className="relative z-10">
                <ServicesHero />
                <ServicesOverviewGrid />
                <WhyChooseBand />
            </div>
        </div>
    );
}
