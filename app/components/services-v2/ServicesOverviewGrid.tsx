"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/app/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesOverviewGrid() {
    const containerRef = useRef<HTMLDivElement>(null);

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
        <div
            ref={containerRef}
            className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-5 px-6 py-20 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-16"
        >
            {servicesData.map((service) => {
                const Icon =
                    (Icons[service.subServices[0]?.icon as keyof typeof Icons] as LucideIcon) ??
                    Icons.Sparkle;

                return (
                    <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        className="overview-card group relative flex flex-col overflow-hidden rounded-sm border border-[#1E2E4B]/6 bg-white p-6 shadow-[0_15px_40px_-20px_rgba(30,46,75,0.12)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_rgba(30,46,75,0.18)] sm:p-7"
                    >
                        <span
                            className="pointer-events-none absolute -top-4 right-2 select-none font-(family-name:--font-heading) text-[80px] font-bold leading-none text-transparent sm:text-[110px]"
                            style={{ WebkitTextStroke: "1px rgba(30,46,75,0.05)" }}
                            aria-hidden="true"
                        >
                            {service.number}
                        </span>

                        <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#283F67]/6">
                            <Icon className="h-5 w-5 text-[#1E2E4B]" strokeWidth={1.5} />
                        </div>

                        <h3 className="mt-4 font-(family-name:--font-heading) text-[18px] font-semibold leading-snug text-[#191C1D] sm:text-[20px]">
                            {service.title}
                        </h3>

                        <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[#44474D]">
                            {service.shortIntro}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#576500]">
                            Explore
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
