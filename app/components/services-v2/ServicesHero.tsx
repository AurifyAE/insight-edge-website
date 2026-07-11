"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { heroContent } from "@/app/lib/services-data";

export default function ServicesHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const ctx = gsap.context(() => {
            gsap.set(".hero-mask", { yPercent: 100 });
            gsap.to(".hero-mask", {
                yPercent: 0,
                duration: 1.1,
                ease: "power4.out",
                stagger: 0.08,
                delay: 0.2,
            });

            gsap.from(".hero-statement, .hero-eyebrow", {
                opacity: 0,
                y: 16,
                duration: 0.9,
                ease: "power2.out",
                delay: 0.5,
                stagger: 0.1,
            });

            if (!reduceMotion) {
                gsap.to(".hero-blob", {
                    rotate: 360,
                    duration: 90,
                    repeat: -1,
                    ease: "none",
                });
                gsap.to(".hero-blob-inner", {
                    scale: 1.15,
                    duration: 6,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex min-h-[60vh] md:min-h-[80vh] items-center overflow-hidden px-6 pt-32 pb-10 md:pb-20 sm:px-10 lg:px-16"
        >
            {/* animated lime accent blob */}
            <div className="hero-blob pointer-events-none absolute right-[-10%] top-1/2 h-[480px] w-[480px] -translate-y-1/2 sm:h-[600px] sm:w-[600px]">
                <div className="hero-blob-inner h-full w-full rounded-full" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1200px]">
                <div className="relative max-w-[680px] rounded-lg border border-[#1E2E4B]/[0.06] bg-white p-8 shadow-[0_20px_60px_-15px_rgba(30,46,75,0.08)] sm:p-12">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-lg bg-gradient-to-r from-transparent via-[#1E2E4B]/15 to-transparent" />

                    <p className="hero-eyebrow text-[12px] font-semibold uppercase tracking-[0.28em] text-[#576500]">
                        {heroContent.eyebrow}
                    </p>

                    <div className="mt-3 overflow-hidden">
                        <h1 className="hero-mask font-(family-name:--font-heading) text-[44px] font-bold leading-[1.05] text-[#1E2E4B] sm:text-[64px]">
                            {heroContent.title}
                        </h1>
                    </div>

                    <p className="hero-statement mt-6 max-w-[480px] text-sm leading-relaxed text-[#44474D] sm:text-base">
                        {heroContent.statement}
                    </p>
                </div>
            </div>

            <style jsx>{`
                .hero-blob {
                    filter: blur(2px);
                }

                .hero-blob-inner {
                    background: radial-gradient(
                        circle at 35% 35%,
                        rgba(198, 219, 90, 0.45),
                        rgba(198, 219, 90, 0.08) 55%,
                        transparent 75%
                    );
                    filter: blur(60px);
                }

                @media (prefers-reduced-motion: reduce) {
                    .hero-blob,
                    .hero-blob-inner {
                        animation: none !important;
                    }
                }

                @media (max-width: 768px) {
                    .hero-blob {
                        opacity: 0.5;
                        filter: blur(40px);
                    }
                }
            `}</style>
        </section>
    );
}
