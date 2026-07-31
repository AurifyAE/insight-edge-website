"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import {
    Coins,
    Banknote,
    Store,
    Factory,
    Watch,
    Globe2,
    Home,
    ShoppingCart,
    type LucideIcon,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

interface ServiceCard {
    id: number;
    label: string;
    icon: LucideIcon;
}

const services: ServiceCard[] = [
    { id: 1, label: "Gold & Silver Refiners", icon: Coins },
    { id: 2, label: "Bullion Trading Companies", icon: Banknote },
    { id: 3, label: "Jewellery Wholesalers & Retailers", icon: Store },
    { id: 4, label: "Jewellery Manufacturers", icon: Factory },
    { id: 5, label: "Luxury Watch Dealers", icon: Watch },
    { id: 6, label: "International Precious Metal Traders", icon: Globe2 },
    { id: 7, label: "Family-Owned Trading Houses", icon: Home },
    { id: 8, label: "Online Luxury Asset Marketplaces", icon: ShoppingCart },
];

const VISIBLE = 3;

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
};

// ── Mobile vertical carousel ──────────────────────────────────────────────────

const CARD_H = 84; // card height px
const GAP = 8;     // gap between cards px
const STEP = CARD_H + GAP;

const MOVE_MS = 500;  // time to glide from one card to the next
const DWELL_MS = 900; // pause on each card before moving on

// easeInOutQuad
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

function MobileCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);
    const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number | null>(null);
    const expectedTopRef = useRef(0);

    // Duplicate list so we can loop seamlessly
    const doubled = [...services, ...services];
    const loopHeight = services.length * STEP;

    useEffect(() => {
        if (paused) return;
        const el = containerRef.current;
        if (!el) return;

        let dwelling = true;
        let phaseStart: number | null = null;
        // Align to the nearest card so moves land cleanly on card boundaries
        let fromTop = Math.round(el.scrollTop / STEP) * STEP;
        if (fromTop >= loopHeight) fromTop -= loopHeight;
        el.scrollTop = fromTop;
        expectedTopRef.current = fromTop;

        const tick = (ts: number) => {
            const node = containerRef.current;
            if (!node) return;
            if (phaseStart === null) phaseStart = ts;
            const elapsed = ts - phaseStart;

            if (dwelling) {
                if (elapsed >= DWELL_MS) {
                    dwelling = false;
                    phaseStart = ts;
                    fromTop = expectedTopRef.current;
                }
            } else {
                const t = Math.min(elapsed / MOVE_MS, 1);
                let next = fromTop + STEP * ease(t);
                if (next >= loopHeight) next -= loopHeight;
                node.scrollTop = next;
                expectedTopRef.current = next;
                if (t >= 1) {
                    dwelling = true;
                    phaseStart = ts;
                }
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [paused, loopHeight]);

    const handleScroll = () => {
        const el = containerRef.current;
        if (!el) return;
        // Ignore scroll events triggered by our own programmatic auto-scroll
        if (Math.abs(el.scrollTop - expectedTopRef.current) < 2) return;
        setPaused(true);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => setPaused(false), 3000);
    };

    return (
        <div className="relative" style={{ height: `${VISIBLE * STEP - GAP}px` }}>
            <div
                ref={containerRef}
                data-lenis-prevent
                onScroll={handleScroll}
                className={`h-full overflow-y-auto overscroll-contain flex flex-col gap-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                    paused ? "snap-y snap-mandatory" : ""
                }`}
            >
                {doubled.map((service, i) => {
                    const Icon = service.icon;
                    const bgImage = service.id % 2 === 0 ? "bg-img-2.jpeg" : "bg-img-1.jpeg";
                    return (
                        <motion.button
                            key={`${service.id}-${i}`}
                            type="button"
                            whileTap={{ scale: 0.97 }}
                            className="group relative flex items-center gap-4 rounded-2xl overflow-hidden mx-1 shadow-sm shrink-0 snap-start cursor-pointer select-none transition-all duration-200 ease-out active:shadow-lg active:shadow-[#C6DB5A]/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6DB5A]"
                            style={{ height: `${CARD_H}px` }}
                        >
                            <Image
                                src={`/images/home/${bgImage}`}
                                alt=""
                                fill
                                sizes="384px"
                                className="object-cover object-center transition-transform duration-300 group-active:scale-105"
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-[#1E2E4B]/75 transition-colors duration-200 group-active:bg-[#1E2E4B]/85" />
                            <div className="relative z-10 flex items-center justify-center ml-5 shrink-0 transition-transform duration-200 group-active:scale-110">
                                <Icon className="h-7 w-7 text-[#C6DB5A]" strokeWidth={1.5} />
                            </div>
                            <p className="relative z-10 text-sm font-semibold leading-snug text-white pr-4 text-left">
                                {service.label}
                            </p>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}

// ── Main Component ────────────────────────────────────────────────────────────

const WhoWeServeSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="w-full bg-white py-24 px-4">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-[#1E2E4B] mb-3 tracking-tight">
                    Who We Serve
                </h2>
                <p className="text-[#4A5565] text-sm md:text-base leading-relaxed">
                    Exclusive advisory services for every entity in the precious metals and luxury
                    <br className="hidden sm:block" /> assets value chain
                </p>
            </div>

            {/* Mobile: vertical auto-carousel */}
            <div className="sm:hidden max-w-sm mx-auto">
                <MobileCarousel />
            </div>

            {/* Desktop: grid */}
            <div className="hidden sm:grid max-w-5xl mx-auto grid-cols-4 gap-5">
                {services.map((service, i) => {
                    const Icon = service.icon;
                    const bgImage = i % 2 === 0 ? "bg-img-1.jpeg" : "bg-img-2.jpeg";
                    return (
                        <motion.button
                            key={service.id}
                            type="button"
                            custom={i}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeUp}
                            className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl cursor-pointer select-none shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C6DB5A]/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6DB5A]"
                            style={{ minHeight: "220px" }}
                        >
                            <Image
                                src={`/images/home/${bgImage}`}
                                alt=""
                                fill
                                sizes="(max-width: 1024px) 25vw, 300px"
                                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-[#1E2E4B]/75 transition-colors duration-200 group-hover:bg-[#1E2E4B]/85" />
                            <div className="relative z-10 flex items-center justify-center rounded-xl p-2 transition-transform duration-200 group-hover:scale-110">
                                <Icon className="h-9 w-9 text-[#C6DB5A]" strokeWidth={1.5} />
                            </div>
                            <p className="relative z-10 text-center text-sm md:text-base font-semibold leading-snug text-white px-5">
                                {service.label}
                            </p>
                        </motion.button>
                    );
                })}
            </div>
        </section>
    );
};

export default WhoWeServeSection;
