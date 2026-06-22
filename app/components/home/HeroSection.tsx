"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ── Slides ────────────────────────────────────────────────────────────────────

const SLIDES = [
    {
        bg: "/images/home/hero-bg.jpg",
        title: "Safeguarding Value Through Financial Expertise",
        description:
            "Exclusive Financial & Compliance Advisory for the Precious Metals Industry",
        buttons: [
            { label: "Our Services", href: "/services", variant: "solid" as const },
            { label: "Get in Touch", href: "/contact", variant: "outline" as const },
        ],
    },
    {
        bg: "/images/home/hero-bg.jpg",
        title: "Trusted Advisory for the Gold & Bullion Trade",
        description:
            "Specialized Audit, Tax, and Risk Consulting Built Around the Precious Metals Supply Chain",
        buttons: [
            { label: "About Us", href: "/about-us", variant: "solid" as const },
            { label: "Connect with an Expert", href: "/contact", variant: "outline" as const },
        ],
    },
];

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

            {/* ── Mobile: stacked layout. Desktop: background image with overlaid card ── */}

            {/* Background image — hidden on mobile, shown from md up */}
            <div className="hidden md:block absolute inset-0 mx-4 rounded-t-2xl mt-9 overflow-hidden">
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
                            width={1920}
                            height={1080}
                            alt="Hero Background"
                            className="w-full h-full object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Dark overlay so text card sits on a predictable bg */}
                <div className="absolute inset-0 bg-[#1a2e5a]/20" />
                {/* Bottom fade so the section blends into the content below */}
                <div className="absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-white to-transparent" />
            </div>

            {/* Mobile image — in-flow, visible only on mobile */}
            <div className="block md:hidden w-full h-[240px] sm:h-[300px] relative">
                <Image
                    src={slide.bg}
                    fill
                    alt="Hero Background"
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* ── Layout shell ── */}
            <div className="relative md:min-h-[640px] lg:min-h-[800px] max-w-7xl mx-auto lg:px-8 -mt-10 lg:mt-0 flex items-end justify-start">

                {/* ── Text card ── */}
                <div className="w-1/2 md:mb-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14 flex flex-col gap-4 mb-40"
                        >
                            {/* Headline */}
                            <h1 className="
                    text-[#1E2E4B] font-bold leading-tight tracking-tight
                    text-[22px] sm:text-[26px] lg:text-4xl text-pretty
                ">
                                {slide.title}
                            </h1>

                            {/* Sub-headline */}
                            <p className="
                    text-[#454748] leading-relaxed
                    text-[13px] sm:text-[14px] lg:text-base
                    lg:max-w-md
                ">
                                {slide.description}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-3">
                                {slide.buttons.map((btn) => (
                                    <a
                                        key={btn.label}
                                        href={btn.href}
                                        className={
                                            btn.variant === "solid"
                                                ? "inline-flex items-center justify-center px-7 py-3 rounded-xl bg-[#C6DB5A] hover:bg-[#C6DB5A] text-white text-[13.5px] font-semibold transition-colors duration-200 whitespace-nowrap"
                                                : "inline-flex items-center justify-center px-7 py-3 rounded-xl border border-[#283F67] hover:bg-[#283F67]/10 text-[#283F67] text-[13.5px] font-semibold transition-colors duration-200 whitespace-nowrap"
                                        }
                                    >
                                        {btn.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
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