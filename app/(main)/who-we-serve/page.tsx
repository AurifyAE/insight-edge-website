import WhoWeServeSection from "@/app/components/about/WhoWeServeSection";
import WhySpecialist from "@/app/components/about/WhySpecialist";
import Image from "next/image";

export default function WhoWeServePage() {
    return (
        <div>
            {/* Hero banner */}
            <div className="relative overflow-hidden px-8 pt-56 pb-16">
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
                <div className="absolute inset-0 bg-[#1E2E4B]/80" />
                <div className="relative z-10 max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Who We Serve
                    </h1>
                    <p className="text-[#ABBD4F] text-sm md:text-base font-medium max-w-lg leading-relaxed">
                        Exclusive advisory services for every entity in the precious metals and luxury assets value chain
                    </p>
                </div>
            </div>
            <WhoWeServeSection />
            <WhySpecialist />
        </div>
    );
}