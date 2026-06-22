"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/app/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

const DOT_COLORS = ["#283F67", "#7FA0C9", "#C6DB5A", "#9DB8E0", "#586F94"];

function DotCluster({ seed }: { seed: number }) {
    const dots = Array.from({ length: 9 }, (_, i) => {
        const x = ((i * 37 + seed * 13) % 100);
        const y = ((i * 53 + seed * 29) % 100);
        const color = DOT_COLORS[(i + seed) % DOT_COLORS.length];
        const size = 8 + ((i + seed) % 3) * 3;
        return { x, y, color, size, key: i };
    });

    return (
        <div className="pointer-events-none absolute inset-0">
            {dots.map((dot) => (
                <span
                    key={dot.key}
                    className="absolute rounded-sm opacity-70"
                    style={{
                        left: `${15 + dot.x * 0.7}%`,
                        top: `${15 + dot.y * 0.6}%`,
                        width: dot.size,
                        height: dot.size,
                        backgroundColor: dot.color,
                    }}
                />
            ))}
        </div>
    );
}

export default function ServicesOverviewGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".overview-card", {
                opacity: 0,
                y: 24,
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.08,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="mx-auto max-w-[1200px] px-6 pt-20 sm:px-10 lg:px-16">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-10">
                <h2 className="font-(family-name:--font-heading) text-[26px] font-bold text-white sm:text-[32px]">
                    Our Services
                </h2>
                <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-[#C6DB5A] px-7 py-3 text-[13.5px] font-semibold text-[#C6DB5A] transition-colors duration-200 hover:bg-[#C6DB5A] hover:text-white"
                >
                    View All Services
                </Link>
            </div>

            <div
                ref={containerRef}
                className="relative grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-3"
            >
                {servicesData.map((service, index) => {
                const Icon =
                    (Icons[service.subServices[0]?.icon as keyof typeof Icons] as LucideIcon) ??
                    Icons.Sparkle;
                const isActive = activeIndex === index;

                return (
                    <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`overview-card relative flex h-[440px] flex-col overflow-hidden rounded-2xl p-3 transition-[background-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isActive
                                ? "bg-white shadow-[0_20px_50px_-18px_rgba(30,46,75,0.25)]"
                                : "bg-[#EDEDE9]"
                        }`}
                    >
                        {/* ── Top visual block — grows to fill the card when inactive ── */}
                        <div
                            className={`relative shrink-0 overflow-hidden rounded-xl transition-[flex-grow,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                isActive ? "bg-[#283F67]" : "bg-[#E4E4DF]"
                            }`}
                            style={{ flexGrow: isActive ? 0 : 1, height: isActive ? "11rem" : undefined }}
                        >
                            <span
                                className={`absolute left-3 top-3 z-10 font-(family-name:--font-heading) text-sm font-semibold transition-colors duration-700 ${
                                    isActive ? "text-white/70" : "text-[#A8A89F]"
                                }`}
                                aria-hidden="true"
                            >
                                {service.number}
                            </span>

                            {/* Inactive: scattered dots */}
                            <div
                                className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                    isActive ? "-translate-x-4 opacity-0" : "translate-x-0 opacity-100"
                                }`}
                            >
                                <DotCluster seed={index} />
                            </div>

                            {/* Active: gradient block with icon */}
                            <div
                                className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                    isActive ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                                }`}
                                style={{
                                    background:
                                        "radial-gradient(circle at 30% 30%, #C6DB5A 0%, #283F67 75%)",
                                }}
                            >
                                <Icon className="h-10 w-10 text-white/90" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* ── Text block — title always pinned bottom, description/button slide up from below ── */}
                        <div className="flex shrink-0 flex-col overflow-hidden px-3 pb-3 pt-4">
                            <h3
                                className={`font-(family-name:--font-heading) text-[17px] font-semibold leading-snug transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[19px] ${
                                    isActive ? "text-[#191C1D]" : "text-[#A8A89F]"
                                }`}
                            >
                                {service.title}
                            </h3>

                            <div
                                className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <p
                                        className={`mt-3 text-[13px] leading-relaxed text-[#44474D] transition-[opacity,transform] duration-700 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                            isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                        }`}
                                    >
                                        {service.shortIntro}
                                    </p>

                                    <div
                                        className={`mt-4 inline-flex items-center gap-2 text-[13px] font-semibold transition-[opacity,color,transform] delay-200 duration-500 ease-out ${
                                            isActive
                                                ? "translate-y-0 text-[#576500] opacity-100"
                                                : "translate-y-4 text-[#A8A89F] opacity-0"
                                        }`}
                                    >
                                        Explore
                                        <ArrowUpRight className="h-4 w-4 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
            </div>
        </div>
    );
}
