"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { ExtraSection } from "@/app/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

export default function ExtraSections({ sections }: { sections: ExtraSection[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".extra-section", {
                opacity: 0,
                y: 24,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {sections.map((section) => (
                <div
                    key={section.heading}
                    className="extra-section relative overflow-hidden rounded-sm border border-[#1E2E4B]/6 bg-white p-6 shadow-[0_15px_40px_-20px_rgba(30,46,75,0.12)] sm:p-8"
                >
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#C6DB5A]" aria-hidden="true" />
                    <h3 className="font-(family-name:--font-heading) text-[17px] font-semibold text-[#1E2E4B] sm:text-[19px]">
                        {section.heading}
                    </h3>

                    {Array.isArray(section.body) ? (
                        <div className="mt-3 space-y-3">
                            {section.body.map((paragraph, i) => (
                                <p key={i} className="text-[13.5px] leading-relaxed text-[#44474D]">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ) : (
                        <p className="mt-3 text-[13.5px] leading-relaxed text-[#44474D]">{section.body}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
