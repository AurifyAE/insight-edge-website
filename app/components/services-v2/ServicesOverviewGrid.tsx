"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "@/app/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;
const VISUAL_BLOCK_INACTIVE = 360;
const VISUAL_BLOCK_ACTIVE = 200;

export default function ServicesOverviewGrid({ showHeader = true }: { showHeader?: boolean }) {
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
        <div className="mx-auto max-w-[1200px] px-6 pt-10 md:pt-20 sm:px-10 lg:px-16">
            {showHeader && (
                <div className="flex flex-wrap items-center justify-between gap-4 pb-10">
                    <h2 className="font-(family-name:--font-heading) text-[26px] font-bold text-white sm:text-4xl">
                        Our Services
                    </h2>
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center rounded-xl border border-[#C6DB5A] px-7 py-3 text-sm font-semibold text-[#C6DB5A] transition-colors duration-200 hover:bg-[#C6DB5A] hover:text-white"
                    >
                        View All Services
                    </Link>
                </div>
            )}

            <div
                ref={containerRef}
                className="relative grid grid-cols-1 gap-5 pb-10 md:pb-20 sm:grid-cols-2 lg:grid-cols-3"
            >
                {servicesData.map((service, index) => {
                const Icon =
                    (Icons[service.subServices[0]?.icon as keyof typeof Icons] as LucideIcon) ??
                    Icons.Sparkle;
                const isActive = activeIndex === index;

                return (
                    <div
                        key={service.id}
                        onMouseEnter={() => setActiveIndex(index)}
                        onTouchStart={() => setActiveIndex(index)}
                        className="overview-card relative block cursor-pointer"
                    >
                        <motion.div
                            className="relative flex h-[385px] flex-col overflow-hidden rounded-2xl p-3"
                            animate={{
                                backgroundColor: isActive ? "#FFFFFF" : "#EDEDE9",
                                boxShadow: isActive
                                    ? "0 20px 50px -18px rgba(30,46,75,0.25)"
                                    : "0 0px 0px -18px rgba(30,46,75,0)",
                            }}
                            transition={{ duration: 0.6, ease: EASE }}
                        >
                            {/* ── Top visual block - grows to fill the card when inactive ── */}
                            <motion.div
                                className="relative shrink-0 overflow-hidden rounded-xl"
                                animate={{
                                    height: isActive ? VISUAL_BLOCK_ACTIVE : VISUAL_BLOCK_INACTIVE,
                                }}
                                transition={{ duration: 0.6, ease: EASE }}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />

                                <motion.div
                                    className="absolute inset-0 bg-[#1E2E4B]"
                                    animate={{ opacity: isActive ? 0.45 : 0.25 }}
                                    transition={{ duration: 0.6, ease: EASE }}
                                />

                                <motion.span
                                    className="absolute left-3 top-3 z-10 origin-top-left font-(family-name:--font-heading) text-4xl font-semibold text-white/80"
                                    animate={{ scale: isActive ? 0.39 : 1 }}
                                    transition={{ duration: 0.6, ease: EASE }}
                                    aria-hidden="true"
                                >
                                    {service.number}
                                </motion.span>

                                {/* Title always pinned to bottom of image */}
                                <div className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-8 bg-linear-to-t from-[#1E2E4B]/80 to-transparent">
                                    <h3 className="font-(family-name:--font-heading) text-[16px] font-semibold leading-snug text-white sm:text-[18px]">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Active: icon badge - pops in from center */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
                                    transition={{ duration: 0.45, ease: isActive ? [0.34, 1.56, 0.64, 1] : EASE }}
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C6DB5A]/90">
                                        <Icon className="h-8 w-8 text-[#1E2E4B]" strokeWidth={1.5} />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* ── Text block - only shown on hover ── */}
                            <div className="flex shrink-0 flex-col overflow-hidden px-3 pb-2 pt-3">
                                <motion.p
                                    className="text-sm leading-relaxed text-[#44474D]"
                                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                                    transition={{ duration: 0.5, delay: isActive ? 0.08 : 0, ease: EASE }}
                                >
                                    {service.shortIntro}
                                </motion.p>

                                <motion.div
                                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                                    transition={{ duration: 0.5, delay: isActive ? 0.13 : 0, ease: EASE }}
                                    className="mt-2"
                                >
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#576500] hover:text-[#1E2E4B] transition-colors"
                                    >
                                        Explore
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                );
            })}
            </div>
        </div>
    );
}
