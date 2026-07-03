"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { whyChooseUs } from "@/app/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseBand() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".why-heading-mask", { yPercent: 100 });
            gsap.to(".why-heading-mask", {
                yPercent: 0,
                duration: 0.9,
                ease: "power4.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
            });

            gsap.from(".why-item", {
                opacity: 0,
                y: 16,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.06,
                scrollTrigger: { trigger: ".why-list", start: "top 85%" },
            });

            gsap.from(".why-cta", {
                opacity: 0,
                y: 16,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: { trigger: ".why-cta", start: "top 90%" },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative px-6 py-24 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-[1200px]">
                <div className="relative overflow-hidden rounded-lg border border-[#1E2E4B]/[0.06] bg-white p-8 shadow-[0_20px_60px_-15px_rgba(30,46,75,0.08)] sm:p-14">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1E2E4B]/15 to-transparent" />
                    <div
                        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C6DB5A]/15 blur-3xl"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#283F67]/8 blur-3xl"
                        aria-hidden="true"
                    />

                    <div className="overflow-hidden">
                        <h2 className="why-heading-mask font-(family-name:--font-heading) text-[28px] font-bold leading-tight text-[#1E2E4B] sm:text-[40px]">
                            Why Choose Insight Edge
                        </h2>
                    </div>
                    <div className="mt-2 h-px w-16 bg-[#C6DB5A]" />

                    <ul className="why-list mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {whyChooseUs.map((point) => (
                            <li key={point} className="why-item flex items-start gap-3">
                                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#576500]" strokeWidth={2} />
                                <span className="text-[15px] leading-relaxed text-[#44474D]">{point}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="why-cta mt-12 flex flex-col items-start gap-4 border-t border-[#1E2E4B]/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-[440px] text-base leading-relaxed text-[#44474D]">
                            Every precious metals business is unique. Let&apos;s discuss the specific
                            audit, tax, or advisory needs of yours.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-sm bg-[#C6DB5A] px-7 py-3 text-sm font-semibold text-[#1E2E4B] transition-colors hover:bg-[#d5ea67]"
                        >
                            Contact Our Team
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
