"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "@/app/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;
const VISUAL_BLOCK_INACTIVE = 336;
const VISUAL_BLOCK_ACTIVE = 176;

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
                        className="overview-card relative block"
                    >
                        <motion.div
                            className="relative flex h-[440px] flex-col overflow-hidden rounded-2xl p-3"
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
                                    backgroundColor: isActive ? "#283F67" : "rgba(0,0,0,0)",
                                }}
                                transition={{ duration: 0.6, ease: EASE }}
                            >
                                <motion.span
                                    className="absolute left-3 top-3 z-10 origin-top-left font-(family-name:--font-heading) text-4xl font-semibold"
                                    animate={{
                                        scale: isActive ? 0.39 : 1,
                                        color: isActive ? "rgba(255,255,255,0.7)" : "#A8A89F",
                                    }}
                                    transition={{ duration: 0.6, ease: EASE }}
                                    aria-hidden="true"
                                >
                                    {service.number}
                                </motion.span>

                                {/* Inactive: scattered dots */}
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        opacity: isActive ? 0 : 1,
                                        x: isActive ? -16 : 0,
                                    }}
                                    transition={{ duration: 0.6, ease: EASE }}
                                >
                                    <DotCluster seed={index} />
                                </motion.div>

                                {/* Active: gradient block with icon - pops in from center */}
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
                                    transition={{ duration: 0.45, ease: isActive ? [0.34, 1.56, 0.64, 1] : EASE }}
                                    style={{
                                        background:
                                            "radial-gradient(circle at 30% 30%, #C6DB5A 0%, #283F67 75%)",
                                    }}
                                >
                                    <Icon className="h-10 w-10 text-white/90" strokeWidth={1.5} />
                                </motion.div>
                            </motion.div>

                            {/* ── Text block - title always pinned bottom, description/button slide up from below ── */}
                            <div className="flex shrink-0 flex-col overflow-hidden px-3 pb-3 pt-4">
                                <motion.h3
                                    className="font-(family-name:--font-heading) text-[17px] font-semibold leading-snug sm:text-[19px]"
                                    animate={{ color: isActive ? "#1E2E4B" : "#5C5F60" }}
                                    transition={{ duration: 0.6, ease: EASE }}
                                >
                                    {service.title}
                                </motion.h3>

                                <motion.p
                                    className="mt-3 text-sm leading-relaxed text-[#44474D]"
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        y: isActive ? 0 : 16,
                                    }}
                                    transition={{ duration: 0.5, delay: isActive ? 0.1 : 0, ease: EASE }}
                                >
                                    {service.shortIntro}
                                </motion.p>

                                <motion.div
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#576500]"
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        y: isActive ? 0 : 16,
                                    }}
                                    transition={{ duration: 0.5, delay: isActive ? 0.15 : 0, ease: EASE }}
                                >
                                    Explore
                                    <ArrowUpRight className="h-4 w-4" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </Link>
                );
            })}
            </div>
        </div>
    );
}
