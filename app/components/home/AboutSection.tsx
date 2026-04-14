"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── DATA ─────────────────────────────────────────── */

const stats = [
    { value: "100%", label: "Complete\nClient satisfaction", position: "top-left" },
    { value: "10%", label: "Innovation &\nValuable insights", position: "top-right" },
    { value: "10M", label: "Highly Efficient &\nFinancial Strategies", position: "bottom-left" },
];

interface ChallengeCard {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    column: 1 | 2;
}

const AMLIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="48" height="48" rx="10" fill="#F6FDD3" />
        <path d="M14 34V28M20 34V22M26 34V26M32 34V20" stroke="#365693" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 20L38 14" stroke="#ABBD4F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M36 14H38V16" stroke="#ABBD4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const InventoryIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="48" height="48" rx="10" fill="#F6FDD3" />
        <circle cx="24" cy="24" r="10" stroke="#365693" strokeWidth="2.5" />
        <path d="M24 18V24L28 28" stroke="#365693" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M17 12L14 9M31 12L34 9" stroke="#ABBD4F" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 36L14 39M31 36L34 39" stroke="#ABBD4F" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const PriceIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="48" height="48" rx="10" fill="#F6FDD3" />
        <path d="M10 34L18 24L24 30L32 18L38 22" stroke="#365693" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 14H40V20" stroke="#ABBD4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const VATIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="48" height="48" rx="10" fill="#F6FDD3" />
        <path d="M16 16H32V32H16V16Z" stroke="#ABBD4F" strokeWidth="2" />
        <path d="M21 20H27" stroke="#365693" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 24H27" stroke="#365693" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 28H24" stroke="#365693" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="14" r="4" fill="#ABBD4F" />
        <path d="M33 14H35M34 13V15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const TransferIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="48" height="48" rx="10" fill="#F6FDD3" />
        <path d="M14 20H34M30 16L34 20L30 24" stroke="#365693" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 28H14M18 24L14 28L18 32" stroke="#ABBD4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const challengeCards: ChallengeCard[] = [
    {
        id: 1,
        icon: <AMLIcon />,
        title: "High-value transactions with significant AML/CFT exposure",
        description: "",
        column: 1,
    },
    {
        id: 2,
        icon: <VATIcon />,
        title: "Specialized VAT and Corporate Tax treatment for gold and luxury assets",
        description: "",
        column: 2,
    },
    {
        id: 3,
        icon: <InventoryIcon />,
        title: "Complex inventory valuation across bullion, scrap, and jewellery",
        description: "",
        column: 1,
    },
    {
        id: 4,
        icon: <TransferIcon />,
        title: "Transfer pricing considerations in related party metal trading",
        description: "",
        column: 2,
    },
    {
        id: 5,
        icon: <PriceIcon />,
        title: "Global price volatility impacting margins, hedging strategies, and profitability",
        description: "",
        column: 1,
    },
];

/* ─── CARD COMPONENT ────────────────────────────────── */

function ChallengeCard({
    card,
    index,
    isInView,
    columnDelay,
}: {
    card: ChallengeCard;
    index: number;
    isInView: boolean;
    columnDelay: number;
}) {
    const cardIndexInColumn = index;

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{
                duration: 0.55,
                delay: columnDelay + cardIndexInColumn * 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-start gap-3 bg-[#F6FDD3] rounded-2xl p-4 shadow-sm border border-gray-100"
            style={{ minWidth: 200, maxWidth: 240 }}
        >
            <div className="shrink-0">{card.icon}</div>
            <p className="text-[12.5px] font-medium text-[#1e293b] leading-snug pt-1">
                {card.title}
            </p>
        </motion.div>
    );
}

/* ─── CONNECTOR LINE ────────────────────────────────── */

function ConnectorLine({ isInView }: { isInView: boolean }) {
    return (
        <div className="hidden lg:flex flex-col items-center justify-center mx-2 self-stretch">
            <motion.div
                className="w-px bg-linear-to-b from-transparent via-[#ABBD4F] to-transparent"
                style={{ height: "100%" }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            />
        </div>
    );
}

/* ─── MAIN COMPONENT ────────────────────────────────── */

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const col1Cards = challengeCards.filter((c) => c.column === 1);
    const col2Cards = challengeCards.filter((c) => c.column === 2);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden py-16 lg:py-24"
            style={{ background: "#f8fafc" }}
        >
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                    {/* ── LEFT SIDE ───────────────────────────────── */}
                    <div className="relative flex-1 min-h-[460px] lg:min-h-[520px]">
                        {/* World Map Background */}


                        {/* Top Stats Row */}
                        <div className="relative z-10 flex items-center justify-center gap-5 md:gap-10 pt-2 min-h-[220px]">
                            <div className="absolute inset-0 z-0 opacity-40">
                                <Image
                                    src="/images/home/world-map.svg"
                                    alt="World Map"
                                    fill
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>
                            {/* 100% Stat */}
                            <motion.div
                                className="z-10"
                                initial={{ opacity: 0, y: -20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <p
                                    className="font-extrabold leading-none text-center"
                                    style={{
                                        fontSize: "clamp(2rem, 5vw, 3rem)",
                                        color: "#1e293b",
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                >
                                    100%
                                </p>
                                <p className="text-[13px] text-[#365693] font-semibold mt-1 leading-tight text-center">
                                    Complete<br />Client satisfaction
                                </p>
                            </motion.div>

                            {/* 10% Stat */}
                            <motion.div
                                className="z-10"
                                initial={{ opacity: 0, y: -20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <p
                                    className="font-extrabold leading-none text-center"
                                    style={{
                                        fontSize: "clamp(2rem, 5vw, 3rem)",
                                        color: "#1e293b",
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                >
                                    10%
                                </p>
                                <p className="text-[13px] text-[#365693] font-semibold mt-1 leading-tight text-center">
                                    Innovation &amp;<br />Valuable insights
                                </p>
                            </motion.div>
                            <motion.div
                                className="z-10 block lg:hidden"
                                initial={{ opacity: 0, y: -20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <p
                                    className="font-extrabold leading-none text-center z-10"
                                    style={{
                                        fontSize: "clamp(2rem, 5vw, 3rem)",
                                        color: "#1e293b",
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                >
                                    10M
                                </p>
                                <p className="text-[13px] text-[#365693] font-semibold mt-1 leading-tight text-center">
                                    Highly Efficient &amp;<br />Financial Strategies
                                </p>
                            </motion.div>
                        </div>

                        {/* Center Blue Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="relative z-10 mt-8 rounded-2xl p-8 w-full lg:max-w-[85%]"
                            style={{
                                background: "linear-gradient(135deg, #1e3a6e 0%, #2c5282 60%, #365693 100%)",
                                boxShadow: "0 8px 40px rgba(30,58,110,0.25)",
                            }}
                        >
                            <h2
                                className="font-extrabold text-white leading-tight mb-4"
                                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                            >
                                Why Choose<br />Insight Edge<br />Global?
                            </h2>
                            <p className="text-[13.5px] text-blue-100 leading-relaxed">
                                The precious metals industry presents unique financial and regulatory complexities, including:
                            </p>
                        </motion.div>

                        {/* Bottom Stat */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="hidden relative z-10 min-h-[220px] lg:flex flex-col items-center justify-center"
                        >
                            <div className="absolute inset-0 z-0 opacity-40">
                                <Image
                                    src="/images/home/world-map.svg"
                                    alt="World Map"
                                    fill
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>
                            <p
                                className="font-extrabold leading-none text-center z-10"
                                style={{
                                    fontSize: "clamp(2rem, 5vw, 3rem)",
                                    color: "#1e293b",
                                    fontFamily: "Inter, sans-serif",
                                }}
                            >
                                10M
                            </p>
                            <p className="text-[13px] text-[#365693] font-semibold mt-1 leading-tight text-center">
                                Highly Efficient &amp;<br />Financial Strategies
                            </p>
                        </motion.div>
                    </div>

                    {/* ── RIGHT SIDE — Two Staggered Card Columns ── */}
                    <div className="flex-1 flex items-center">
                        <div className="flex gap-4 w-full justify-center lg:justify-start mx-auto">

                            {/* Column 1 — appears first */}
                            <div className="flex flex-col gap-4 justify-around">
                                {col1Cards.map((card, i) => (
                                    <ChallengeCard
                                        key={card.id}
                                        card={card}
                                        index={i}
                                        isInView={isInView}
                                        columnDelay={0.2}
                                    />
                                ))}
                            </div>

                            {/* Connector */}
                            <ConnectorLine isInView={isInView} />

                            {/* Column 2 — delayed */}
                            <div className="flex flex-col gap-4 justify-start lg:justify-around lg:mt-16">
                                {col2Cards.map((card, i) => (
                                    <ChallengeCard
                                        key={card.id}
                                        card={card}
                                        index={i}
                                        isInView={isInView}
                                        columnDelay={0.6}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
