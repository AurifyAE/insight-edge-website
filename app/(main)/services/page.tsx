import Image from "next/image";
import dynamic from "next/dynamic";
import { generateMetadata } from "@/seo.config";
import GoldGlow from "@/app/components/services-v2/GoldGlow";
import ServicesHero from "@/app/components/services-v2/ServicesHero";
// import WhyChooseBand from "@/app/components/services-v2/WhyChooseBand";

// Below-the-fold: code-split out of the initial hydration bundle.
const ServicesOverviewGrid = dynamic(() => import("@/app/components/services-v2/ServicesOverviewGrid"));
const WhyChoose = dynamic(() => import("@/app/components/home/WhyChoose"));

export const metadata = generateMetadata("services");

export default function ServicesPage() {
    return (
        <div className="relative overflow-x-hidden bg-[#F8F9FA]">
            <GoldGlow className="z-0" />

            <div className="relative z-10">
                <ServicesHero />
                <div className="relative mx-4 overflow-hidden rounded-2xl bg-[#1E2E4B]">
                    <Image
                        src="/images/home/bg-img-2.jpeg"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-[#1E2E4B]/90" />
                    <div className="relative z-10">
                    <ServicesOverviewGrid showHeader={false} />
                    </div>
                </div>
                <WhyChoose />
            </div>
        </div>
    );
}
