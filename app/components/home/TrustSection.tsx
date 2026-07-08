"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { BadgeCheck, Gem, Globe2, ShieldCheck } from "lucide-react";

interface TrustItem {
    icon: React.ElementType;
    title: string;
    description: string;
}

const trustItems: TrustItem[] = [
    {
        icon: BadgeCheck,
        title: "Certified Excellence",
        description: "UAE registered & approved audit firm.",
    },
    {
        icon: Gem,
        title: "Sector Specialists",
        description: "100% dedicated to the precious metals industry.",
    },
    {
        icon: ShieldCheck,
        title: "Full Coverage",
        description: "360° end-to-end financial & compliance support.",
    },
    {
        icon: Globe2,
        title: "Global Standards",
        description: "Advisory aligned with OECD & international best practice.",
    },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const TrustSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="w-full py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* ── Left: heading + CTA ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-white font-bold leading-tight tracking-tight text-2xl sm:text-3xl lg:text-4xl">
                            Your Trusted Precious Metals Advisory Partner.
                        </h2>
                        <p className="mt-4 text-[#C5C7C8] text-sm sm:text-base leading-relaxed max-w-md">
                            Insight Edge Global is a UAE-registered audit and advisory firm dedicated exclusively to the precious metals industry. We help bullion traders, refineries, and jewellery businesses navigate complex tax, audit, and regulatory requirements with industry-specific expertise, strengthening compliance, reducing risk, and enabling sustainable growth.
                        </p>
                        <Link
                            href="/about-us"
                            className="mt-7 inline-flex items-center justify-center rounded-xl border border-[#C6DB5A] px-7 py-3 text-sm font-semibold text-[#C6DB5A] transition-colors duration-200 hover:bg-[#C6DB5A] hover:text-[#1E2E4B]"
                        >
                            About Us
                        </Link>
                    </motion.div>

                    {/* ── Right: 2x2 feature grid ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                        {trustItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    custom={i}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    variants={fadeUp}
                                    className="group rounded-2xl p-5 -m-5 transition-colors duration-300 hover:bg-[#32405c]"
                                >
                                    <Icon
                                        className="h-7 w-7 text-[#C6DB5A]"
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="mt-3 text-white font-semibold text-base sm:text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1.5 text-[#AAABAC] text-sm sm:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
