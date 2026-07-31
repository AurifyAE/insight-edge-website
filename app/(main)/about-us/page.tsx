import WhoWeAreSection from "@/app/components/about/WhoWeAreSection";
import WhoWeServeSection from "@/app/components/about/WhoWeServeSection";
import WhoWeAre from "../../components/about/WhoWeAre";
import { TrendingUp } from "lucide-react";
import WhySpecialist from "../../components/about/WhySpecialist";
import { generateMetadata } from "@/seo.config";
import Image from "next/image";

export const metadata = generateMetadata("about");

export default function AboutPage() {
    return (
        <div className="">
            <div className="relative overflow-hidden px-8 pt-56 pb-16">
                {/* Background image */}
                <Image
                    src="/images/home/bg-img-1.jpeg"
                    alt=""
                    fill
                    fetchPriority="high"
                    loading="eager"
                    sizes="100vw"
                    className="object-cover object-center"
                    aria-hidden="true"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#1E2E4B]/80" />
                {/* Bottom fade into white */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/10 to-transparent" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About Insight Edge Global
                    </h1>
                    <p className="text-[#ABBD4F] text-sm md:text-base font-medium max-w-lg leading-relaxed">
                        UAE-registered audit and advisory firm with exclusive focus on the precious metals industry
                    </p>
                </div>
            </div>
            <WhoWeAre />
            {/* <WhoWeAreSection /> */}
            <WhySpecialist />
            <WhoWeServeSection />

            <div className="bg-gradient-to-b from-[#1E2E4B] to-[#283F67] py-10 md:py-20">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
                    <TrendingUp className="w-20 h-20 text-[#ABBD4F]" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        If your business touches gold, silver, platinum, or luxury assets
                    </h2>
                    <p className="text-[#ABBD4F] text-base md:text-lg font-medium leading-relaxed">
                        Insight Edge Global is your specialist partner
                    </p>
                </div>
            </div>
        </div>
    );
}
