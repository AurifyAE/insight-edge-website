"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── DATA ────────────────────────────────────────────── */

const cards = [
    {
        id: "approachable",
        label: "Approachable",
        description: "We make complex processes transparent and accessible",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                <path d="M24 12C24 12 14 18 14 26C14 31.5228 18.4772 36 24 36C29.5228 36 34 31.5228 34 26C34 18 24 12 24 12Z" stroke="#ABBD4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 26C24 26 19 22 19 26C19 28.7614 21.2386 31 24 31C26.7614 31 29 28.7614 29 26C29 22 24 26 24 26Z" stroke="#ABBD4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "passionate",
        label: "Passionate",
        description: "We bring deep expertise and genuine care to every engagement",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                <circle cx="24" cy="24" r="12" stroke="#ABBD4F" strokeWidth="2" />
                <circle cx="24" cy="24" r="6" stroke="#ABBD4F" strokeWidth="2" />
                <circle cx="24" cy="24" r="2" fill="#ABBD4F" />
            </svg>
        ),
    },
    {
        id: "impactful",
        label: "Impactful",
        description: "We deliver measurable outcomes that truly move the needle",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                <circle cx="24" cy="20" r="8" stroke="#ABBD4F" strokeWidth="2" />
                <path d="M12 38C12 32.4772 17.3726 28 24 28C30.6274 28 36 32.4772 36 38" stroke="#ABBD4F" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
];

const T = {
    COLLAPSE: 0.5,
    EXIT: 0.18,
    ENTER: 0.28,
    ENTER_DELAY: 0.22,
    ICON_H: 0.42,
} as const;

/* ─── CARD COMPONENT ─────────────────────────────────── */

function ValueCard({
    card,
    isExpanded,
    onClick,
}: {
    card: (typeof cards)[0];
    isExpanded: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            onClick={onClick}
            className="relative flex overflow-hidden cursor-pointer select-none rounded-2xl border"
            animate={{
                flex: isExpanded ? 3 : 1,
                backgroundColor: isExpanded ? "#1e3a6e" : "#ffffff",
                borderColor: isExpanded ? "transparent" : "#e2e8f0",
            }}
            transition={{
                flex: { duration: T.COLLAPSE, ease: [0.4, 0, 0.2, 1] },
                backgroundColor: { duration: T.COLLAPSE, ease: [0.4, 0, 0.2, 1] },
                borderColor: { duration: T.COLLAPSE, ease: [0.4, 0, 0.2, 1] },
            }}
            style={{ minHeight: 240 }}
        >
            <div className="relative flex w-full h-full">

                {/* ── Vertical label column ── */}
                <div
                    className="flex flex-col items-center justify-center flex-shrink-0"
                    style={{ width: 72, padding: "20px 0px", gap: 12 }}
                >
                    <motion.div
                        animate={
                            isExpanded
                                ? { height: 0, opacity: 0, scale: 0.7 }
                                : { height: 80, opacity: 1, scale: 1 }
                        }
                        transition={{
                            height: { duration: T.ICON_H, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
                            scale: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
                        }}
                        style={{
                            overflow: "hidden",
                            flexShrink: 0,
                            pointerEvents: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {card.icon}
                    </motion.div>

                    <motion.span
                        className="tracking-wide whitespace-nowrap"
                        animate={{
                            fontSize: isExpanded ? 20 : 18,
                            color: isExpanded ? "#ffffff" : "#1e3a6e",
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                            fontWeight: 500,
                            letterSpacing: "0.04em",
                        }}
                    >
                        {card.label}
                    </motion.span>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            key="expanded-content"
                            className="flex flex-col justify-center flex-1 p-5"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{
                                opacity: 0,
                                x: -10,
                                transition: { duration: T.EXIT, ease: [0.4, 0, 0.2, 1] },
                            }}
                            transition={{
                                opacity: { duration: T.ENTER, ease: [0.4, 0, 0.2, 1], delay: T.ENTER_DELAY },
                                x: { duration: T.ENTER, ease: [0.4, 0, 0.2, 1], delay: T.ENTER_DELAY },
                            }}
                        >
                            <div className="flex justify-start" style={{ opacity: 0.9 }}>
                                {card.icon}
                            </div>
                            <p
                                style={{
                                    fontSize: 13,
                                    lineHeight: 1.65,
                                    color: "#bfdbfe",
                                    margin: 0,
                                    maxWidth: 220,
                                    textDecoration: "underline",
                                    textDecorationColor: "rgba(191,219,254,0.5)",
                                    textUnderlineOffset: "3px",
                                }}
                            >
                                {card.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </motion.div>
    );
}

/* ─── MAIN SECTION ─────────────────────────────────────── */

export default function WhoWeAreSection() {
    const [expandedId, setExpandedId] = useState<string | null>(cards[0].id);

    const handleCardClick = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2
                    className="font-bold mb-6"
                    style={{
                        fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                        color: "#1e3a6e",
                        fontFamily: "Inter, sans-serif",
                    }}
                >
                    Who We Are
                </h2>

                <div className="text-[#364153] flex flex-col gap-4 mb-14">
                    <p className="text-[14.5px] leading-relaxed">
                        Insight Edge Global LLC is a UAE-registered audit and advisory firm with
                        exclusive focus on the precious metals industry - from gold and silver trading
                        to refining, logistics, and storage.
                    </p>
                    <p className="text-[14.5px] leading-relaxed">
                        We deliver the depth of a Big-4 practice with the agility and sector-specific
                        knowledge that only a specialist firm can provide.
                    </p>
                </div>

                {/* ── Value Cards Row ── */}
                <div className="max-w-2xl mx-auto h-52 mb-14">
                    <div className="flex gap-3 items-stretch">
                        {cards.map((card) => (
                            <ValueCard
                                key={card.id}
                                card={card}
                                isExpanded={expandedId === card.id}
                                onClick={() => handleCardClick(card.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Our Mission Card ── */}
                <div className="max-w-4xl mx-auto">
                    <div
                        className="rounded-2xl border border-[#e2e8f0] bg-white px-8 py-7"
                        style={{ borderLeft: "4px solid #ABBD4F" }}
                    >
                        <h3
                            className="font-semibold mb-3"
                            style={{
                                fontSize: 16,
                                color: "#1e3a6e",
                                fontFamily: "Inter, sans-serif",
                            }}
                        >
                            Our Mission
                        </h3>
                        <p
                            className="text-[#364153]"
                            style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 680 }}
                        >
                            To make complex financial and compliance processes transparent, efficient,
                            and secure — helping precious metals businesses stay ahead in an ever-evolving,
                            tightly regulated market. We bring clarity, accuracy, and confidence to every
                            engagement.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}