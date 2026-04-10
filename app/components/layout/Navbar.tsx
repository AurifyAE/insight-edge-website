"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

// ── Data ──────────────────────────────────────────────────────────────────────

const OUR_SOLUTIONS_COLUMNS = [
    {
        heading: "Audit & Assurance",
        items: [
            "Statutory / External Audit",
            "Internal Audit Services",
            "Forensic Audit",
            "Inventory Verification",
            "Supply Chain Audit",
            "Internal Audit Services",
            "Inventory Verification",
            "UAE Ministry of Economy Review",
        ],
        subSections: [
            {
                heading: "Financial Advisory Services",
                items: [
                    "Financial Due Diligence & Business Valuation",
                    "Feasibility Studies & Business Planning",
                    "Treasury, Hedging & Market Risk Advisory",
                ],
            },
            {
                heading: "Digital Assets & Tokenization",
                items: [
                    "Bullion Tokenization Advisory",
                    "Blockchain Custody & Governance",
                    "AI Governance & Technology Risk",
                    "Cybersecurity & Data Integrity",
                ],
            },
        ],
    },
    {
        heading: "Accounting & MIS",
        items: [
            "Accounting & Financial Close",
            "ERP & Accounting Software",
            "Inventory Verification",
            "Payroll & IFRS Implementation",
        ],
        subSections: [
            {
                heading: "Taxation Services",
                items: [
                    "Corporate Tax Advisory",
                    "VAT Compliance & Advisory",
                    "Transfer Pricing Advisory",
                    "BEPS, PE & Tax Risk Management",
                ],
            },
            {
                heading: "Compliance & Responsible Business",
                items: [
                    "AML / CFT Compliance",
                    "Regulatory Licensing",
                    "AML Inspection Support",
                    "Regulatory Compliance",
                    "Responsible Sourcing",
                    "Ethical Business Conduct",
                    "Supply Chain Due Diligence",
                ],
            },
        ],
    },
    {
        heading: "Special Audits & Risk Consulting",
        items: [
            "Standard Operating Procedures (SOPs)",
            "Internal Controls & Governance",
            "Corporate Governance",
            "Supply Chain Risk Management",
            "M&A Risk Management",
            "AI / Tech Governance & Risk",
        ],
        subSections: [
            {
                heading: "Business Strategy Advisory",
                items: [
                    "Sourcing & Procurement Services",
                    "Corporate Training Services",
                    "SCA Compliance Advisory",
                ],
            },
            {
                heading: "Outsourced CFO Services",
                items: [
                    "Financial Strategy & Transformation",
                    "Treasury & Working Capital Optimization",
                    "Debt, Credit & Financing Advisory",
                    "Integrated Performance Management",
                    "M&A and Business Expansion Support",
                ],
            },
        ],
    },
];

const WHO_WE_SERVE_ITEMS = [
    { label: "Gold & Silver Refiners", active: true },
    { label: "Luxury Watch Dealers" },
    { label: "Bullion Trading Companies" },
    { label: "Jewellery Wholesalers & Retailers" },
    { label: "Jewellery Manufacturers" },
    { label: "International Precious Traders" },
    { label: "Family-Owned Trading Houses" },
    { label: "Online Luxury Asset Marketplaces" },
];

const NAV_LINKS = [
    { label: "About Us", href: "/about-us" },
    { label: "Our Solutions", href: "/solutions", hasMega: "solutions" as const },
    { label: "Who We Serve", href: "/who-we-serve", hasMega: "who-we-serve" as const },
    { label: "Contact", href: "/contact" },
    // { label: "Blogs & News", href: "/blogs" },
];

// ── Animation variants ────────────────────────────────────────────────────────

const megaVariants: Variants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scaleY: 1,
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        y: -6,
        scaleY: 0.98,
        transition: { duration: 0.16, ease: "easeIn" },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -4 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.02, duration: 0.18, ease: "easeOut" },
    }),
};

// ── Mega Menu: Our Solutions ──────────────────────────────────────────────────

function SolutionsMegaMenu() {
    return (
        <motion.div
            key="solutions-mega"
            variants={megaVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-[1200px] bg-white border-t-2 border-[#8B9C32] shadow-2xl z-50 origin-top"
            style={{ boxShadow: "0 16px 48px 0 rgba(30,50,90,0.13)" }}
        >
            {/* Top accent strip */}
            <div className="h-0.5 w-full bg-gradient-to-r from-[#365693] via-[#8B9C32] to-[#365693] opacity-30" />

            <div className="px-8 py-8 grid grid-cols-3 gap-x-10 gap-y-0">
                {OUR_SOLUTIONS_COLUMNS.map((col, ci) => (
                    <div key={ci} className="flex flex-col gap-7">
                        {/* Primary section */}
                        <Section heading={col.heading} items={col.items} startIndex={0} />

                        {/* Sub-sections */}
                        {col.subSections?.map((sub, si) => (
                            <Section
                                key={si}
                                heading={sub.heading}
                                items={sub.items}
                                startIndex={col.items.length + si * 4}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* Footer strip */}
            <div className="border-t border-gray-100 px-8 py-3 flex items-center justify-between bg-gray-50/60">
                <p className="text-[11px] text-gray-400 tracking-wide">
                    Comprehensive advisory across every touchpoint of your business
                </p>
                <a
                    href="/solutions"
                    className="text-[12px] font-semibold text-[#365693] hover:text-[#8B9C32] transition-colors flex items-center gap-1"
                >
                    View all solutions
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
}

function Section({
    heading,
    items,
    startIndex,
}: {
    heading: string;
    items: string[];
    startIndex: number;
}) {
    return (
        <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#8B9C32] mb-2.5 pb-1.5 border-b border-[#8B9C32]/20">
                {heading}
            </p>
            <ul className="flex flex-col gap-0.5">
                {items.map((item, ii) => (
                    <motion.li
                        key={item}
                        custom={startIndex + ii}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <a
                            href="#"
                            className="flex items-center gap-1.5 text-[12px] text-gray-600 hover:text-[#365693] transition-all duration-150 leading-snug py-0.5 group"
                        >
                            <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#8B9C32] transition-colors duration-150 shrink-0" />
                            {item}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}

// ── Mega Menu: Who We Serve ───────────────────────────────────────────────────

function WhoWeServeMegaMenu() {
    return (
        <motion.div
            key="who-mega"
            variants={megaVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-[1200px] bg-white border-t-2 border-[#8B9C32] shadow-2xl z-50 origin-top"
            style={{ boxShadow: "0 16px 48px 0 rgba(30,50,90,0.13)" }}
        >
            <div className="h-0.5 w-full bg-gradient-to-r from-[#365693] via-[#8B9C32] to-[#365693] opacity-30" />

            <div className="px-8 py-8 flex gap-16">
                {/* Left: list */}
                <div className="flex-1 max-w-xs">
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#8B9C32] mb-3 pb-1.5 border-b border-[#8B9C32]/20">
                        Industry Segments
                    </p>
                    <ul className="flex flex-col gap-0.5">
                        {WHO_WE_SERVE_ITEMS.map((item, i) => (
                            <motion.li
                                key={item.label}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <a
                                    href="#"
                                    className={`flex items-center gap-2 text-[13px] leading-snug py-1.5 transition-all duration-150 group ${item.active
                                        ? "font-semibold text-[#365693]"
                                        : "text-gray-600 hover:text-[#365693]"
                                        }`}
                                >
                                    <span
                                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-150 ${item.active
                                            ? "bg-[#365693]"
                                            : "bg-gray-300 group-hover:bg-[#8B9C32]"
                                            }`}
                                    />
                                    {item.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Right: descriptive callout */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.22 }}
                    className="flex-1 flex flex-col justify-center max-w-sm"
                >
                    <div className="rounded-xl bg-gradient-to-br from-[#f0f4fb] to-[#f7f9ee] p-6 border border-[#e2e8d8]">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#8B9C32] mb-2">
                            Precious Metals & Luxury Assets
                        </p>
                        <p className="text-[13.5px] text-[#365693] font-semibold leading-snug mb-3">
                            Exclusive advisory for every entity in the value chain
                        </p>
                        <p className="text-[12px] text-gray-500 leading-relaxed mb-4">
                            From refiners to retailers, our specialized expertise covers compliance, risk,
                            governance, and financial strategy for the full ecosystem.
                        </p>
                        <a
                            href="/who-we-serve"
                            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#365693] hover:text-[#8B9C32] transition-colors"
                        >
                            Explore all segments
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </motion.div> */}
            </div>

            <div className="border-t border-gray-100 px-8 py-3 flex items-center justify-between bg-gray-50/60">
                <p className="text-[11px] text-gray-400 tracking-wide">
                    Serving the global precious metals and luxury goods ecosystem
                </p>
                <a
                    href="/who-we-serve"
                    className="text-[12px] font-semibold text-[#365693] hover:text-[#8B9C32] transition-colors flex items-center gap-1"
                >
                    View all segments
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMega, setActiveMega] = useState<"solutions" | "who-we-serve" | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveMega(null);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    const openMega = useCallback((key: "solutions" | "who-we-serve") => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setActiveMega(key);
    }, []);

    const scheduleClose = useCallback(() => {
        closeTimer.current = setTimeout(() => setActiveMega(null), 130);
    }, []);

    const cancelClose = useCallback(() => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
    }, []);

    return (
        <>
            {/* Dim backdrop */}
            <AnimatePresence>
                {activeMega && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/25 z-40"
                        style={{ top: "70px" }}
                        onClick={() => setActiveMega(null)}
                    />
                )}
            </AnimatePresence>

            <header
                className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled || activeMega ? "shadow-md" : "shadow-sm"
                    }`}
            >
                {/* Outer nav — full width for mega positioning */}
                <div className="relative">
                    <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 lg:h-[70px]">

                            {/* ── Logo ── */}
                            <a href="/" className="flex items-center gap-3 shrink-0">
                                <img src="/images/home/logo.svg" alt="IEG Icon" className="h-8 w-auto" />
                                <img
                                    src="/images/home/logo-text.svg"
                                    alt="Insight Edge Global"
                                    className="h-3 w-auto hidden sm:block"
                                />
                            </a>

                            {/* ── Desktop Nav ── */}
                            <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
                                {NAV_LINKS.map(({ label, href, hasMega }) => {
                                    const isActive = hasMega ? activeMega === hasMega : false;
                                    return (
                                        <li key={label}>
                                            <a
                                                href={hasMega ? undefined : href}
                                                onMouseEnter={() =>
                                                    hasMega ? openMega(hasMega) : scheduleClose()
                                                }
                                                onMouseLeave={scheduleClose}
                                                onClick={() =>
                                                    hasMega && setActiveMega(isActive ? null : hasMega)
                                                }
                                                className={`relative flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-200 rounded-sm cursor-pointer select-none
                          ${isActive
                                                        ? "text-[#365693]"
                                                        : "text-[#4A5565] hover:text-[#365693]"
                                                    }`}
                                            >
                                                {label}
                                                {hasMega && (
                                                    <motion.svg
                                                        animate={{ rotate: isActive ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        width="11"
                                                        height="11"
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        className="opacity-50 mt-0.5"
                                                    >
                                                        <path
                                                            d="M2 4l4 4 4-4"
                                                            stroke="currentColor"
                                                            strokeWidth="1.7"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </motion.svg>
                                                )}
                                                {isActive && (
                                                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#365693] rounded-full" />
                                                )}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* ── Desktop Right ── */}
                            <div className="hidden lg:flex items-center gap-3">
                                {/* <button
                                    aria-label="Search"
                                    className="p-2 text-[#3a3a3a] hover:text-[#1b3a6b] transition-colors"
                                >
                                    <SearchIcon />
                                </button> */}
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B9C32] hover:bg-[#ABBD4F] text-white text-[13px] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap shadow-sm"
                                >
                                    Connect with an Expert
                                </a>
                            </div>

                            {/* ── Mobile Right ── */}
                            <div className="flex lg:hidden items-center gap-2">
                                <button
                                    aria-label="Search"
                                    className="p-2 text-[#3a3a3a] hover:text-[#1b3a6b] transition-colors"
                                >
                                    <SearchIcon />
                                </button>
                                <button
                                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                                    onClick={() => setMenuOpen((p) => !p)}
                                    className="p-2 text-[#3a3a3a] hover:text-[#1b3a6b] transition-colors"
                                >
                                    {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
                                </button>
                            </div>
                        </div>
                    </nav>

                    {/* ── Mega menus — full width relative to header ── */}
                    <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                        <AnimatePresence>
                            {activeMega === "solutions" && <SolutionsMegaMenu />}
                            {activeMega === "who-we-serve" && <WhoWeServeMegaMenu />}
                        </AnimatePresence>
                    </div>
                </div>

                {/* ── Mobile Dropdown ── */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="bg-white border-t border-gray-100 px-4 pt-3 pb-5 shadow-lg">
                                <ul className="flex flex-col gap-1 mb-4">
                                    {NAV_LINKS.map(({ label, href }) => (
                                        <li key={label}>
                                            <a
                                                href={href}
                                                onClick={() => setMenuOpen(false)}
                                                className="block px-3 py-2.5 rounded-md text-[14px] font-medium text-[#3a3a3a] hover:text-[#1b3a6b] hover:bg-[#f0f4fb] transition-colors duration-200"
                                            >
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="/contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-[#8B9C32] hover:bg-[#ABBD4F] text-white text-[14px] font-semibold tracking-wide transition-colors duration-200 shadow-sm"
                                >
                                    Connect with an Expert
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function SearchIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    );
}

function HamburgerIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}