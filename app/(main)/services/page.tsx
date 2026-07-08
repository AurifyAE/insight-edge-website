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
                <div
                    className="relative mx-4 rounded-2xl bg-[#1E2E4B] bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/home/bg-img-2.jpeg)" }}
                >
                    <div className="absolute inset-0 rounded-2xl bg-[#1E2E4B]/90" />
                    <div className="relative z-10">
                    <ServicesOverviewGrid showHeader={false} />
                    </div>
                </div>
                <WhyChooseBand />
            </div>
        </div>
    );
}
