import HeroSection from "@/app/components/home/HeroSection";
import TrustSection from "@/app/components/home/TrustSection";
import AffiliateSection from "@/app/components/home/AffiliateSection";
import CTASection from "@/app/components/home/CTASection";
import Testimonials from "@/app/components/home/Testimonials";
// import ServicesSection from "@/app/components/home/ServiceSection";
import AboutSection from "@/app/components/home/AboutSection";
import { generateMetadata } from "@/seo.config";
import WhoWeServeSection from "../components/about/WhoWeServeSection";
import ServicesOverviewGrid from "../components/services-v2/ServicesOverviewGrid";
import FAQSection from "@/app/components/home/FAQSection";
import KeyChallengesSection from "@/app/components/home/KeyChallengesSection";
import WhyChoose from "@/app/components/home/WhyChoose";

export const metadata = generateMetadata("home");

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WhoWeServeSection />
      <div
        className="relative mx-4 rounded-2xl bg-[#1E2E4B] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/home/bg-img-2.jpeg)" }}
      >
        <div className="absolute inset-0 rounded-2xl bg-[#1E2E4B]/90" />
        <div className="relative z-10">
          <ServicesOverviewGrid />
        </div>
      </div>
      <KeyChallengesSection />

      <div
        className="relative mx-4 rounded-2xl bg-[#1E2E4B] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/home/bg-img-1.jpeg)" }}
      >
        <div className="absolute inset-0 rounded-2xl bg-[#1E2E4B]/95" />
        <div className="relative z-10">
          <TrustSection />
        </div>
      </div>
      <WhyChoose />
      {/* <ServicesSection /> */}
      {/* <AboutSection /> */}
      <div
        className="relative mx-4 rounded-2xl bg-[#1E2E4B] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/home/bg-img-1.jpeg)" }}
      >
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
