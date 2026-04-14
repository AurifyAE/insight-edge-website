"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Service {
    id: number;
    icon: string;
    title: string;
    description: string;
    iconBg: string;
}

const services: Service[] = [
    {
        id: 1,
        icon: "01",
        title: "Audit & Assurance",
        description:
            "Independent examination ensuring accuracy, regulatory compliance, and a true & fair view.",
        iconBg: "emerald",
    },
    {
        id: 2,
        icon: "02",
        title: "Special Audits & Risk Consulting",
        description:
            "Protecting assets and driving operational excellence across the precious metals value chain.",
        iconBg: "blue",
    },
    {
        id: 3,
        icon: "03",
        title: "Financial Advisory",
        description:
            "Strategic financial guidance tailored to the unique demands of precious metals businesses.",
        iconBg: "emerald",
    },
    {
        id: 4,
        icon: "04",
        title: "Taxation Services",
        description:
            "Comprehensive UAE tax compliance and strategic advisory for precious metals.",
        iconBg: "blue",
    },
    {
        id: 5,
        icon: "05",
        title: "CFO Services",
        description:
            "Expert-level financial leadership without the cost of a full-time hire.",
        iconBg: "emerald",
    },
    {
        id: 6,
        icon: "06",
        title: "Digital Assets & Tokenization",
        description:
            "Helping precious metals businesses innovate securely with governance frameworks.",
        iconBg: "bg-blue-700",
    },
    {
        id: 7,
        icon: "07",
        title: "Compliance & AML",
        description:
            "End-to-end anti-money laundering solutions designed for the precious metals sector.",
        iconBg: "bg-emerald-600",
    },
];

// ─── Desktop scatter config (unchanged) ───────────────────────────────────────
const CARD_W = 210;
const CARD_H = 140;

const cardPositions: { x: number; y: number; zIndex: number }[] = [
    { x: -380, y: -160, zIndex: 2 },
    { x: -20, y: -200, zIndex: 2 },
    { x: 350, y: -160, zIndex: 3 },
    { x: -380, y: 150, zIndex: 2 },
    { x: -20, y: 10, zIndex: 2 },
    { x: -20, y: 200, zIndex: 2 },
    { x: 350, y: 150, zIndex: 2 },
];

function ServiceCard({
    service,
    index,
    isAnimated,
}: {
    service: Service;
    index: number;
    isAnimated: boolean;
}) {
    const pos = cardPositions[index];
    const iconGradient = "linear-gradient(135deg,#365693,#7491C9)";

    return (
        <motion.div
            className="absolute"
            style={{
                width: CARD_W,
                left: `calc(50% - ${CARD_W / 2}px)`,
                top: `calc(50% - ${CARD_H / 2}px)`,
                zIndex: pos.zIndex,
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.6 }}
            animate={
                isAnimated
                    ? { x: pos.x, y: pos.y, opacity: 1, scale: 1 }
                    : { x: 0, y: 0, opacity: 0, scale: 0.6 }
            }
            transition={{
                duration: 0.8,
                delay: isAnimated ? index * 0.08 : 0,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                scale: 1.05,
                y: pos.y - 6,
                zIndex: 10,
                transition: { duration: 0.2 },
            }}
        >
            <div
                className="relative w-72 bg-white rounded-2xl p-5 overflow-hidden group cursor-pointer border-l-4 border-l-[#ABBD4F] grid grid-cols-4"
                style={{
                    boxShadow: "0 4px 28px rgba(0,0,0,0.08)",
                    minHeight: CARD_H,
                }}
            >
                <div className="col-span-1 flex justify-center">
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                        style={{ background: iconGradient }}
                    >
                        <span className="text-[#ABBD4F] text-[10px] font-extrabold tracking-wider">
                            {service.icon}
                        </span>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col gap-2">
                    <h3 className="text-[13px] font-semibold text-[#365693] leading-snug mb-1.5">
                        {service.title}
                    </h3>
                    <p className="text-[11.5px] text-[#4A5565] leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Mobile Carousel ──────────────────────────────────────────────────────────
function MobileCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const iconGradient = "linear-gradient(135deg,#365693,#7491C9)";

    const paginate = (dir: number) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + services.length) % services.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) paginate(diff > 0 ? 1 : -1);
        touchStartX.current = null;
    };

    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 280 : -280,
            opacity: 0,
            scale: 0.92,
        }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (dir: number) => ({
            x: dir > 0 ? -280 : 280,
            opacity: 0,
            scale: 0.92,
        }),
    };

    const service = services[current];

    return (
        <div className="flex flex-col items-center gap-6 px-4">
            {/* Card viewport */}
            <div
                className="relative w-full max-w-sm overflow-hidden"
                style={{ height: 180 }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <AnimatePresence custom={direction} mode="popLayout">
                    <motion.div
                        key={service.id}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div
                            className="w-3/4 bg-white rounded-2xl p-5 border-l-4 border-l-[#ABBD4F] grid grid-cols-4"
                            style={{
                                boxShadow: "0 4px 28px rgba(0,0,0,0.10)",
                                minHeight: 140,
                            }}
                        >
                            <div className="col-span-1 flex justify-start pt-0.5">
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                                    style={{ background: iconGradient }}
                                >
                                    <span className="text-[#ABBD4F] text-[10px] font-extrabold tracking-wider">
                                        {service.icon}
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-3 flex flex-col gap-2">
                                <h3 className="text-[14px] font-semibold text-[#365693] leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-[12px] text-[#4A5565] leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls row */}
            <div className="flex items-center gap-5">
                {/* Prev */}
                <button
                    onClick={() => paginate(-1)}
                    aria-label="Previous"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#365693" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                {/* Pill dots */}
                <div className="flex gap-1.5">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > current ? 1 : -1);
                                setCurrent(i);
                            }}
                            aria-label={`Go to slide ${i + 1}`}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: i === current ? 20 : 7,
                                height: 7,
                                background: i === current ? "#365693" : "#CBD5E1",
                            }}
                        />
                    ))}
                </div>

                {/* Next */}
                <button
                    onClick={() => paginate(1)}
                    aria-label="Next"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm active:scale-95 transition-transform"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#365693" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ServicesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView) {
            const t = setTimeout(() => setHasAnimated(true), 150);
            return () => clearTimeout(t);
        }
    }, [isInView]);

    return (
        <section className="relative w-full overflow-hidden py-20 bg-white">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/service-bg-img.png"
                    alt=""
                    fill
                    className="object-cover object-center bg-blend-multiply"
                    priority
                />
            </div>

            {/* Header */}
            <motion.div
                className="relative z-10 text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: "easeOut" }}
            >
                <h2
                    className="font-bold tracking-tight mb-2"
                    style={{ fontSize: "clamp(1.6rem,3vw,2rem)", color: "#1e293b" }}
                >
                    Our Services
                </h2>
                <p className="text-sm text-slate-500 max-w-[500px] mx-auto leading-relaxed">
                    Comprehensive financial and compliance solutions tailored exclusively
                    for the precious metals industry
                </p>
            </motion.div>

            {/* ── DESKTOP: scatter layout (hidden below md) ── */}
            <div
                ref={ref}
                className="relative mx-auto hidden md:block"
                style={{ width: "100%", height: 500 }}
            >
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                        isAnimated={hasAnimated}
                    />
                ))}
            </div>

            {/* ── MOBILE: carousel (hidden at md and above) ── */}
            <div className="relative z-10 block md:hidden">
                <MobileCarousel />
            </div>

            {/* CTA Button */}
            <motion.div
                className="relative z-10 flex justify-center mt-20"
                initial={{ opacity: 0, y: 12 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.7 }}
            >
                <button
                    className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-200 active:scale-95"
                    style={{
                        background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                        boxShadow: "0 4px 18px rgba(37,99,235,0.35)",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                            "0 6px 24px rgba(37,99,235,0.5)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                            "0 4px 18px rgba(37,99,235,0.35)";
                    }}
                >
                    View All Services
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </motion.div>
        </section>
    );
}