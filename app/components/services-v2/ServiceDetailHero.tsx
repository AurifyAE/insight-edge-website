"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { ServiceSectionData } from "@/app/lib/services-data";
import SubServiceCard from "./SubServiceCard";
import RateBands from "./RateBands";
import ServiceTimeline from "./ServiceTimeline";

// Below the primary hero/subservices content: code-split out of the
// initial hydration bundle.
const ExtraSections = dynamic(() => import("./ExtraSections"));
const ServiceFaqs = dynamic(() => import("./ServiceFaqs"));

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetailHero({ data }: { data: ServiceSectionData }) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const ctx = gsap.context(() => {
            gsap.set(".section-heading-mask", { yPercent: 100 });
            gsap.to(".section-heading-mask", {
                yPercent: 0,
                duration: 0.9,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.from(".section-intro", {
                opacity: 0,
                y: 16,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            gsap.from(".service-card", {
                opacity: 0,
                y: 24,
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.07,
                scrollTrigger: {
                    trigger: ".service-grid",
                    start: "top 85%",
                },
            });

            if (!reduceMotion) {
                gsap.to(".ghost-number", {
                    yPercent: -15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden px-6 py-10 md:py-20 sm:px-10 lg:px-16">
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-right-top opacity-[0.07]"
                style={{ backgroundImage: "url(/images/home/service-bg-img.png)" }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#1E2E4B]/[0.04] via-transparent to-[#C6DB5A]/[0.10]"
                aria-hidden="true"
            />

            <div className="mx-auto max-w-[1200px]">
                <span
                    className="ghost-number pointer-events-none absolute -top-6 right-0 select-none font-(family-name:--font-heading) text-[120px] font-bold leading-none text-transparent sm:text-[200px]"
                    style={{ WebkitTextStroke: "1px rgba(30,46,75,0.06)" }}
                    aria-hidden="true"
                >
                    {data.number}
                </span>

                <Link
                    href="/services"
                    className="relative inline-flex items-center gap-2 text-sm text-[#44474D] transition-colors hover:text-[#576500]"
                >
                    <ArrowLeft className="h-4 w-4" />
                    All Services
                </Link>

                <div className="relative mt-6 max-w-[760px]">
                    <div className="overflow-hidden">
                        <h1 className="section-heading-mask font-(family-name:--font-heading) text-[28px] font-bold leading-tight text-[#1E2E4B] sm:text-[40px]">
                            {data.title}
                        </h1>
                    </div>
                    <div className="mt-2 h-px w-16 bg-[#C6DB5A]" />
                </div>

                <div className="relative mt-8 aspect-16/7 w-full overflow-hidden rounded-xl">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        fetchPriority="high"
                        loading="eager"
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1E2E4B]/30 via-transparent to-transparent" />
                </div>

                {data.timeline && <ServiceTimeline milestones={data.timeline} />}

                <p className="section-intro mt-8 text-[14.5px] leading-relaxed text-[#44474D] sm:text-base max-w-[1200px]">
                    {data.intro}
                </p>

                {data.rateBands && <RateBands bands={data.rateBands} />}

                <div className="service-grid relative mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {data.subServices.map((item) => (
                        <SubServiceCard key={item.title} item={item} />
                    ))}
                </div>

                {/* {data.features && (
                    <div className="relative mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {data.features.map((feature) => (
                            <div
                                key={feature.title}
                                className="relative overflow-hidden rounded-sm border border-[#1E2E4B]/[0.06] bg-white p-4 shadow-[0_10px_30px_-18px_rgba(30,46,75,0.12)]"
                            >
                                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C6DB5A] to-[#576500]" />
                                <p className="font-(family-name:--font-heading) text-sm font-semibold text-[#576500]">
                                    {feature.title}
                                </p>
                                <p className="mt-1 text-[12px] leading-snug text-[#44474D]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )} */}

                {data.extraSections && <ExtraSections sections={data.extraSections} serviceImage={data.image} />}

                {data.highlights && (
                    <div className="relative mt-10 overflow-hidden rounded-lg border border-[#1E2E4B]/10 bg-gradient-to-br from-[#1E2E4B] to-[#283F67] p-6 sm:p-8">
                        <div
                            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#C6DB5A]/20 blur-3xl"
                            aria-hidden="true"
                        />
                        <h3 className="relative font-(family-name:--font-heading) text-[17px] font-semibold text-white sm:text-[19px]">
                            Why Choose Insight Edge for {data.title}
                        </h3>
                        <div className="relative mt-2 h-px w-12 bg-[#C6DB5A]" />
                        <ul className="relative mt-4 space-y-2">
                            {data.highlights.map((point) => (
                                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80">
                                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#C6DB5A]" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {data.faqs && <ServiceFaqs faqs={data.faqs} />}
            </div>
        </section>
    );
}
