import HeroSection from "@/app/components/home/HeroSection";
import TrustSection from "@/app/components/home/TrustSection";
import AffiliateSection from "@/app/components/home/AffiliateSection";
import CTASection from "@/app/components/home/CTASection";
// import Testimonials from "@/app/components/home/Testimonials";
import ServicesSection from "@/app/components/home/ServiceSection";
import AboutSection from "@/app/components/home/AboutSection";
import { generateMetadata } from "@/seo.config";

export const metadata = generateMetadata("home");

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <AboutSection />
      <AffiliateSection />
      <CTASection />
      {/* <Testimonials /> */}
    </div>
  );
}
