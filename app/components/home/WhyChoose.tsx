"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import {
    Users,
    Clock,
    ShieldCheck,
    ClipboardCheck,
    Footprints,
    Eye,
    type LucideIcon,
} from "lucide-react";

interface Point {
    icon: LucideIcon;
    label: string;
}

const POINTS: Point[] = [
    { icon: Users, label: "Specialist precious metals industry expertise" },
    { icon: Clock, label: "Up-to-date insight on UAE & OECD developments" },
    { icon: ShieldCheck, label: "Partner-led engagements with senior oversight" },
    { icon: ClipboardCheck, label: "Defined scope, timelines, and deliverables" },
    { icon: Footprints, label: "Risk-based, practical approach" },
    { icon: Eye, label: "Clear and transparent reporting" },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function WhyChoose() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="w-full bg-white py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
                    {/* ── Left: image ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative aspect-[4/5] sm:aspect-[5/5] overflow-hidden rounded-3xl lg:order-first"
                    >
                        <Image
                            src="/images/home/bg-img-1.jpeg"
                            alt="Insight Edge Global — precious metals advisory"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1E2E4B]/20" />
                    </motion.div>

                    {/* ── Right: content ── */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block rounded-full bg-[#283F67]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#283F67]"
                        >
                            Why Insight Edge
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-4 text-[#1E2E4B] font-bold leading-tight tracking-tight text-[28px] sm:text-[34px] lg:text-[40px]"
                        >
                            Aligned with{" "}
                            <span className="text-[#7A9329]">Evolving UAE & OECD Standards</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-4 text-[#454748] text-sm sm:text-base leading-relaxed max-w-lg"
                        >
                            Insight Edge Global delivers audit, tax, and advisory services
                            grounded in deep precious metals sector knowledge and a clear
                            understanding of UAE regulatory and compliance requirements.
                        </motion.p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {POINTS.map((point, i) => {
                                const Icon = point.icon;
                                return (
                                    <motion.div
                                        key={point.label}
                                        custom={i}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        variants={fadeUp}
                                        className="flex items-center gap-3 rounded-xl border border-[#1E2E4B]/8 bg-[#F7F8F4] p-4 transition-colors duration-200 hover:bg-[#EFF3DD]"
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#283F67]/8">
                                            <Icon className="h-4.5 w-4.5 text-[#283F67]" strokeWidth={1.75} />
                                        </div>
                                        <p className="text-[13px] sm:text-[13.5px] font-medium leading-snug text-[#1E2E4B]">
                                            {point.label}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
