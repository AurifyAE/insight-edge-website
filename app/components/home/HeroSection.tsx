"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ── Slides ────────────────────────────────────────────────────────────────────

const SLIDES = [
    {
        bg: "/images/services/audit-and-assurance.jpg",
        title: "Specialized Financial & Compliance Solutions for the Precious Metals Industry",
        description:
            "Helping bullion traders, refineries, manufacturers, and jewellery businesses stay compliant, reduce risk, and achieve sustainable growth.",
        buttons: [
            { label: "Book a Consultation", href: "/services", variant: "solid" as const },
            { label: "Contact Us", href: "/contact", variant: "outline" as const },
        ],
    },
    {
        bg: "/images/services/Business-strategy-advisory.jpg",
        title: "Corporate Tax Compliance for the Precious Metals Industry",
        description: [
            "Filing Deadline: 30 September 2026*",
            "Gold traders, bullion dealers, refineries, and jewellery businesses face complex tax, inventory, and reporting obligations. Ensure your Corporate Tax return is filed accurately and on time.",
        ],
        buttons: [
            { label: "Book a Consultation", href: "/services/corporate-tax", variant: "solid" as const },
            { label: "Contact Us", href: "/contact", variant: "outline" as const },
        ],
        rightPanel: [
            { amount: "AED 500", period: "per month", note: "Late filing penalty (first 12 months)" },
            { amount: "AED 1,000", period: "per month", note: "Late filing penalty (after 12 months)" },
            { amount: "AED 10,000", period: "one-time", note: "Penalty for late registration" },
            { amount: "14%", period: "per annum", note: "Annual charge on unpaid tax amounts" },
        ],
    },
    {
        bg: "/images/services/E-invoicing.jpg",
        title: "UAE E-Invoicing is Coming to the Precious Metals Industry",
        description:
            "Mandatory from 1 January 2027 for businesses with revenue above AED 50 million. Mandatory from 1 July 2027 for all other businesses in scope.",
        buttons: [
            { label: "Book Your E-Invoicing Readiness Assessment", href: "/services/e-invoicing", variant: "solid" as const },
        ],
    },
];

type PenaltyItem = { amount: string; period: string; note: string };

const PENALTY_SPANS = ["col-span-2", "col-span-3", "col-span-3", "col-span-2"];

function PenaltyCard({ item, index }: { item: PenaltyItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
            className={`group relative overflow-hidden rounded-xl bg-[#1E2E4B]/75 backdrop-blur-sm p-4 cursor-default ${PENALTY_SPANS[index]}`}
            style={{ WebkitBackdropFilter: "blur(4px)" }}
        >
            {/* shimmer sweep on hover */}
            <motion.div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)" }}
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
                aria-hidden="true"
            />

            <p className="font-bold text-[#C6DB5A] text-[22px] leading-none tracking-tight">
                {item.amount}
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                {item.period}
            </p>
            <p className="mt-2.5 text-[12px] leading-snug text-white/80">
                {item.note}
            </p>
        </motion.div>
    );
}

function GridRight() {
    return (
        <svg
            className="absolute -right-10 top-1/2 -translate-y-1/2 w-full h-full max-w-[604px] opacity-72"
            viewBox="0 0 604 459"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.72" clipPath="url(#clip0_91_1411)">
                {/* Grid lines */}
                <g opacity="0.3">
                    <path d="M601.713 451.605H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.713 410.194H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.713 367.405H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.713 325.997H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.713 250.081H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.713 290.802H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.713 206.608H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.713 165.193H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.713 122.411H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.713 81H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M504.926 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M553.727 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M601.715 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M452.812 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M403.18 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M351.893 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M302.258 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M204.65 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M253.455 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M152.531 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M102.904 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M51.6211 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.98633 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                {/* Navy chart line */}
                <path d="M0 290.802L52.5668 327.396L101.771 250.077L152.801 366.814L203.827 204.597L251.209 251.594L300.413 163.666L351.439 287.979L400.643 248.561L453.491 289.495L506.343 206.11L553.725 249.323" stroke="#193654" strokeOpacity="0.53" strokeWidth="2.354" strokeLinecap="round" strokeLinejoin="round" />
                {/* Green chart line */}
                <path d="M1.41406 362.264L50.6289 168.209L103.491 409.269L149.062 291.012L200.099 325.88L252.961 287.979L305.827 368.331L355.042 210.66L404.257 407.749L449.824 363.781L506.334 454.746L553.727 410.782" stroke="#C6DB5A" strokeOpacity="0.53" strokeWidth="2.354" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_91_1411">
                    <rect width="608" height="459" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

function GridLeft() {
    return <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full max-w-[604px] opacity-72"
        viewBox="0 0 604 459"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g opacity="0.72" clipPath="url(#clip0_91_1411)">
            {/* Grid lines */}
            <g opacity="0.3">
                <path d="M601.713 451.605H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.713 410.194H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.713 367.405H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.713 325.997H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.713 250.081H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.713 290.802H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.713 206.608H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.713 165.193H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.713 122.411H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.713 81H1.98633" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.18" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M504.926 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M553.727 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M601.715 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M452.812 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M403.18 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M351.893 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M302.258 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M204.65 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M253.455 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M152.531 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M102.904 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M51.6211 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.98633 82.1104V534.004" stroke="#BBBDBF" strokeOpacity="0.53" strokeWidth="1.175" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {/* Navy chart line */}
            <path d="M0 290.802L52.5668 327.396L101.771 250.077L152.801 366.814L203.827 204.597L251.209 251.594L300.413 163.666L351.439 287.979L400.643 248.561L453.491 289.495L506.343 206.11L553.725 249.323" stroke="#193654" strokeOpacity="0.53" strokeWidth="2.354" strokeLinecap="round" strokeLinejoin="round" />
            {/* Green chart line */}
            <path d="M1.41406 362.264L50.6289 168.209L103.491 409.269L149.062 291.012L200.099 325.88L252.961 287.979L305.827 368.331L355.042 210.66L404.257 407.749L449.824 363.781L506.334 454.746L553.727 410.782" stroke="#C6DB5A" strokeOpacity="0.53" strokeWidth="2.354" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_91_1411">
                <rect width="608" height="459" fill="white" />
            </clipPath>
        </defs>
    </svg>
}

export default function HeroSection() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((p) => (p + 1) % SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = SLIDES[active];

    return (
        <section className="relative w-full overflow-hidden mt-15 lg:mt-18">

            {/* ── Shared background image (mobile + desktop) ── */}
            <div className="absolute inset-0 md:mx-4 md:rounded-t-2xl md:mt-9 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slide.bg}
                            fill
                            alt="Hero Background"
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Top navy fade */}
                <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-[#1E2E4B]/60 to-transparent" />
                {/* Bottom white fade */}
                <div className="absolute inset-x-0 bottom-0 h-[480px] bg-linear-to-t from-white via-white/80 to-transparent" />
                {/* Subtle mid overlay for text area legibility */}
                <div className="absolute inset-0 bg-white/10" />
            </div>

            {/* ── Layout shell ── */}
            <div className="relative min-h-[480px] sm:min-h-[520px] md:min-h-[480px] lg:min-h-[580px] max-w-7xl mx-auto lg:px-8 flex items-end">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className={`w-full flex items-end mb-10 md:mb-8 lg:mb-12 gap-8 ${slide.rightPanel ? "lg:flex-row" : ""}`}
                    >
                        {/* ── Text card ── */}
                        <div className={slide.rightPanel ? "flex-1 min-w-0" : "w-full lg:w-1/2"}>
                            <div className="px-5 py-0 sm:px-8 lg:px-12 flex flex-col gap-3 md:gap-4">
                                {/* Headline */}
                                <h1 className="text-[#1E2E4B] font-bold leading-tight tracking-tight text-[20px] sm:text-[24px] lg:text-4xl text-pretty">
                                    {slide.title}
                                </h1>

                                {/* Sub-headline */}
                                <div className="text-[#454748] leading-relaxed text-[13px] sm:text-sm lg:text-base lg:max-w-md space-y-1.5">
                                    {Array.isArray(slide.description)
                                        ? slide.description.map((line, i) => (
                                            <p key={i} className={i === 0 ? "font-semibold text-[#1E2E4B]" : ""}>
                                                {line}
                                            </p>
                                        ))
                                        : <p>{slide.description}</p>
                                    }
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-2.5 mt-1">
                                    {slide.buttons.map((btn) => (
                                        <a
                                            key={btn.label}
                                            href={btn.href}
                                            className={
                                                btn.variant === "solid"
                                                    ? "inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3 rounded-xl bg-[#C6DB5A] hover:bg-[#D8ED6A] text-[#283F67] text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
                                                    : "inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3 rounded-xl border border-[#283F67] hover:bg-[#283F67]/10 text-[#283F67] text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
                                            }
                                        >
                                            {btn.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── Right panel: penalty cards (slide 2 only, desktop) ── */}
                        <AnimatePresence>
                            {slide.rightPanel && (
                                <motion.div
                                    key="penalty-panel"
                                    initial={{ opacity: 0, x: 48, filter: "blur(6px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, x: 48, filter: "blur(6px)" }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="hidden lg:flex flex-col shrink-0 w-[420px] xl:w-[480px] px-4 pb-2"
                                >
                                    <motion.p
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="text-[10px] font-semibold uppercase tracking-widest text-[#1E2E4B]/50 mb-3"
                                    >
                                        Non-compliance penalties
                                    </motion.p>
                                    <div className="grid grid-cols-5 gap-2">
                                        {slide.rightPanel.map((item, i) => (
                                            <PenaltyCard key={item.note} item={item} index={i} />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── Slide indicators ── */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setActive(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[#C6DB5A]" : "w-1.5 bg-[#1E2E4B]/60 hover:bg-[#1E2E4B]/80"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}