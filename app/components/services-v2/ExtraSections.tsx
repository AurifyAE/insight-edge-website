"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import type { ExtraSection } from "@/app/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

// Fallback images cycled when a section has no specific image
const FALLBACK_IMAGES = [
    "/images/home/bg-img-1.jpeg",
    "/images/home/bg-img-2.jpeg",
];

export default function ExtraSections({
    sections,
    serviceImage,
}: {
    sections: ExtraSection[];
    serviceImage?: string;
}) {
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
        <div ref={containerRef} className="relative mt-12 flex flex-col gap-6">
            {sections.map((section, i) => {
                const img =
                    section.image ??
                    (i === 0 && serviceImage ? serviceImage : FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]);
                const imageRight = i % 2 === 0;

                return (
                    <div
                        key={section.heading}
                        className={`extra-section flex flex-col overflow-hidden rounded-xl border border-[#1E2E4B]/6 bg-white shadow-[0_15px_40px_-20px_rgba(30,46,75,0.12)] sm:flex-row ${imageRight ? "" : "sm:flex-row-reverse"}`}
                    >
                        {/* Image pane */}
                        <div className="relative h-52 w-full shrink-0 sm:h-auto sm:w-2/5">
                            <Image
                                src={img}
                                alt={section.heading}
                                fill
                                sizes="(max-width: 640px) 100vw, 40vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#1E2E4B]/30" />
                        </div>

                        {/* Text pane */}
                        <div className="relative flex flex-1 flex-col justify-center p-6 sm:p-8">
                            <div
                                className={`absolute top-0 h-full w-1 bg-[#C6DB5A] ${imageRight ? "left-0" : "right-0"}`}
                                aria-hidden="true"
                            />
                            <h3 className="font-(family-name:--font-heading) text-[17px] font-semibold text-[#1E2E4B] sm:text-[19px]">
                                {section.heading}
                            </h3>

                            {Array.isArray(section.body) ? (
                                <div className="mt-3 space-y-3">
                                    {section.body.map((paragraph, j) => (
                                        <p key={j} className="text-sm leading-relaxed text-[#44474D]">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            ) : (
                                <p className="mt-3 text-sm leading-relaxed text-[#44474D]">{section.body}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
