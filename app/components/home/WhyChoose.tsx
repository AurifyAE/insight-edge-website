"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import {
    Target,
    ArrowLeftRight,
    BadgeCheck,
    FileText,
    Wrench,
    Coins,
    type LucideIcon,
} from "lucide-react";

interface Point {
    icon: LucideIcon;
    label: string;
}

const POINTS: Point[] = [
    { icon: Target, label: "Exclusive focus on the precious metals industry" },
    { icon: ArrowLeftRight, label: "Expertise in Transfer Pricing for refineries, traders, and bullion logistics networks" },
    { icon: BadgeCheck, label: "Strong understanding of UAE Good Delivery Rules and industry pricing mechanisms" },
    { icon: FileText, label: "Compliance solutions aligned with UAE Corporate Tax Law and OECD guidelines" },
    { icon: Wrench, label: "Practical, commercially aligned frameworks across audit, tax, and advisory" },
    { icon: Coins, label: "Institutionally credible approach to digital assets and bullion tokenization" },
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
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
                    {/* ── Left: image ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative aspect-[4/5] sm:aspect-[5/5] overflow-hidden rounded-3xl lg:order-first"
                    >
                        <Image
                            src="/images/services/audit-and-assurance.jpg"
                            alt="Insight Edge Global - precious metals advisory"
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
                            Why Choose Us?
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-4 text-[#1E2E4B] font-bold leading-tight tracking-tight text-[28px] sm:text-[34px] lg:text-[40px]"
                        >
                            Why Choose{" "}
                            <span className="text-[#7A9329]">Insight Edge Global?</span>
                        </motion.h2>

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
                                        className="flex items-center gap-3 rounded-xl border border-[#1E2E4B]/8 bg-white p-4 transition-colors duration-200 hover:bg-[#EFF3DD]"
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#283F67]/8">
                                            <Icon className="h-4.5 w-4.5 text-[#283F67]" strokeWidth={1.75} />
                                        </div>
                                        <p className="text-sm font-medium leading-snug text-[#1E2E4B]">
                                            {point.label}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-8 rounded-xl bg-[#1E2E4B]/4 border border-[#1E2E4B]/8 p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                        >
                            <p className="flex-1 text-sm text-[#454748] leading-relaxed">
                                Every precious metals business is unique. Let&apos;s discuss the specific audit, tax, or advisory needs of yours.
                            </p>
                            <a
                                href="/contact"
                                className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1E2E4B] text-white text-sm font-semibold hover:bg-[#283F67] transition-colors duration-200 whitespace-nowrap"
                            >
                                Contact Our Team
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
