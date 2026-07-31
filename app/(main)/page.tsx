import Image from "next/image";
import dynamic from "next/dynamic";
import HeroSection from "@/app/components/home/HeroSection";
import CTASection from "@/app/components/home/CTASection";
import Testimonials from "@/app/components/home/Testimonials";
// import ServicesSection from "@/app/components/home/ServiceSection";
import AboutSection from "@/app/components/home/AboutSection";
import { generateMetadata } from "@/seo.config";
import WhoWeServeSection from "../components/about/WhoWeServeSection";
import FAQSection from "@/app/components/home/FAQSection";

// Below-the-fold, animation-heavy sections: code-split out of the initial
// hydration bundle. Still server-rendered (ssr defaults to true) for content/
// SEO, but each hydrates from its own chunk instead of one large upfront
// bundle, which is what was driving mobile TBT.
const ServicesOverviewGrid = dynamic(() => import("../components/services-v2/ServicesOverviewGrid"));
const KeyChallengesSection = dynamic(() => import("@/app/components/home/KeyChallengesSection"));
const TrustSection = dynamic(() => import("@/app/components/home/TrustSection"));
const WhyChoose = dynamic(() => import("@/app/components/home/WhyChoose"));
const AffiliateSection = dynamic(() => import("@/app/components/home/AffiliateSection"));

export const metadata = generateMetadata("home");

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WhoWeServeSection />
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
          <ServicesOverviewGrid />
        </div>
      </div>
      <KeyChallengesSection />

      <div className="relative mx-4 overflow-hidden rounded-2xl bg-[#1E2E4B]">
        <Image
          src="/images/home/bg-img-1.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 rounded-2xl bg-[#1E2E4B]/95" />
        <div className="relative z-10">
          <TrustSection />
        </div>
      </div>
      <WhyChoose />
      {/* <ServicesSection /> */}
      {/* <AboutSection /> */}
      <div className="relative mx-4 overflow-hidden rounded-2xl bg-[#1E2E4B]">
        <Image
          src="/images/home/bg-img-1.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 rounded-2xl bg-[#1E2E4B]/95" />
        <div className="relative z-10">
          <AffiliateSection />
        </div>
      </div>
      {/* <Testimonials /> */}
      <FAQSection />
      <CTASection />
    </div>
  );
}
