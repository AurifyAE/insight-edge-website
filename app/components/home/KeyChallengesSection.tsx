"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

interface Challenge {
    title: string;
    description: string;
}

const CHALLENGES: Challenge[] = [
    {
        title: "Gold as a Currency Asset",
        description:
            "Managing gold-denominated transactions and valuation fluctuations creates significant accounting and reporting complexities.",
    },
    {
        title: "Unfixed Gold Trading Exposure",
        description:
            "Price volatility and unsettled contracts can impact profitability, risk management, and financial transparency.",
    },
    {
        title: "IFRS Compliance Challenges",
        description:
            "Traditional bookkeeping practices often fall short when dealing with precious metals inventory, valuation, and financial reporting requirements.",
    },
    {
        title: "RCM, Import & Re-Export Complexities",
        description:
            "Reverse Charge Mechanism (RCM), import-for-re-export transactions, dore bars, and varying purity standards create unique taxation, invoicing, and bookkeeping challenges.",
    },
    {
        title: "Non-Standard Invoicing Practices",
        description:
            "Many businesses still operate with inconsistent invoicing structures, making compliance, reconciliation, and audit readiness increasingly difficult.",
    },
    {
        title: "E-Invoicing Readiness",
        description:
            "As regulatory frameworks evolve, businesses need standardized digital invoicing systems that align with international best practices and future compliance requirements.",
    },
    {
        title: "OECD-Aligned Responsible Sourcing",
        description:
            "Increasing regulatory and stakeholder expectations require businesses to demonstrate robust due diligence, supply chain traceability, risk assessment, and responsible sourcing practices aligned with OECD guidance.",
    },
    {
        title: "Supply Chain Traceability & Transparency",
        description:
            "Tracking material origin, ownership changes, and movement across the supply chain remains a significant operational challenge.",
    },
    {
        title: "Regulatory & Cross-Border Compliance",
        description:
            "Businesses must navigate evolving local and international regulations, customs requirements, sanctions screening, and reporting obligations.",
    },
    {
        title: "Data Fragmentation Across Operations",
        description:
            "Disconnected trading, refining, inventory, finance, and compliance systems often result in limited visibility and inefficient decision-making.",
    },
    {
        title: "Audit Readiness & Documentation Control",
        description:
            "Maintaining accurate records and supporting documentation for audits, compliance reviews, and stakeholder reporting remains a persistent challenge.",
    },
];

function ChallengeItem({
    challenge,
    index,
    isOpen,
    onToggle,
}: {
    challenge: Challenge;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const numberLabel = String(index + 1).padStart(2, "0");

    return (
        <div className="relative border-b border-gray-200 last:border-b-0">
            {isOpen && (
                <motion.div
                    layoutId="challenge-highlight"
                    className="absolute inset-0 bg-[#1E2E4B]/[0.035] rounded-xl"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
            )}

            <motion.span
                className="absolute left-0 top-0 h-full w-[3px] bg-[#C6DB5A] origin-top"
                initial={false}
                animate={{ scaleY: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />

            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="relative z-10 w-full flex items-center gap-5 py-5 sm:py-6 pl-5 pr-2 text-left cursor-pointer group"
            >
                <motion.span
                    animate={{
                        scale: isOpen ? 1.08 : 1,
                        color: isOpen ? "#1E2E4B" : "rgba(30,46,75,0.35)",
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="font-(family-name:--font-heading) text-[15px] font-semibold tabular-nums"
                >
                    {numberLabel}
                </motion.span>

                <motion.span
                    animate={{ x: isOpen ? 4 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex-1 font-semibold text-[15px] sm:text-lg leading-snug transition-colors duration-300 ${
                        isOpen ? "text-[#1E2E4B]" : "text-[#1E2E4B]/80 group-hover:text-[#1E2E4B]"
                    }`}
                >
                    {challenge.title}
                </motion.span>

                <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen
                            ? "bg-[#1E2E4B] border-[#1E2E4B] text-white"
                            : "border-[#1E2E4B]/20 text-[#1E2E4B]"
                    }`}
                >
                    <Plus className="h-4 w-4" strokeWidth={2} />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 overflow-hidden"
                    >
                        <motion.p
                            initial={{ y: -6, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="pl-5 pr-10 pb-6 text-[#454748] text-sm sm:text-[15px] leading-relaxed max-w-2xl"
                        >
                            {challenge.description}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function KeyChallengesSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const total = CHALLENGES.length;
    const progress = openIndex === null ? 0 : (openIndex + 1) / total;

    return (
        <section className="max-w-6xl mx-auto px-6 py-16 lg:px-8 lg:py-24">
            <div className="text-center mb-10 lg:mb-14">
                <h2 className="text-[#1E2E4B] font-bold leading-tight tracking-tight text-[28px] sm:text-[34px] lg:text-5xl">
                    Key Challenges
                </h2>
                <p className="mt-4 text-[#454748] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                    The realities precious metals businesses face across accounting,
                    taxation, sourcing, and compliance.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14">
                {/* ── Live preview panel ── */}
                <div className="hidden lg:flex flex-col justify-between rounded-2xl bg-[#1E2E4B] p-7 sticky top-28 h-[360px] overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-[#C6DB5A] text-xs font-semibold tracking-widest uppercase">
                            Challenge
                        </p>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={openIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="font-(family-name:--font-heading) text-white text-6xl font-bold mt-3"
                            >
                                {openIndex === null ? "-" : String(openIndex + 1).padStart(2, "0")}
                            </motion.p>
                        </AnimatePresence>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={openIndex ?? "none"}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="text-white/80 text-sm leading-snug mt-4"
                            >
                                {openIndex === null ? "Select a challenge" : CHALLENGES[openIndex].title}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Progress bar */}
                    <div className="relative z-10">
                        <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-[#C6DB5A]"
                                animate={{ width: `${progress * 100}%` }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>
                        <p className="text-white/50 text-xs mt-2 tabular-nums">
                            {openIndex === null ? "0" : openIndex + 1} / {total}
                        </p>
                    </div>

                    {/* Decorative glow */}
                    <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-[#C6DB5A]/15 blur-3xl" />
                </div>

                {/* ── Accordion list ── */}
                <div>
                    {CHALLENGES.map((challenge, i) => (
                        <ChallengeItem
                            key={challenge.title}
                            challenge={challenge}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
