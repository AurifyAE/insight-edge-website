"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

// ── Config ────────────────────────────────────────────────────────────────────

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzpw8gL4fJ-Pwjgs8KTGrjWBnFVgSO10adjBYpN_Q6McxkhemuROfzIwGW-4bYsrw/exec";

// ── Data ──────────────────────────────────────────────────────────────────────
const SOLUTIONS_VISUAL_COLUMNS = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

const OUR_SOLUTIONS_COLUMNS = [
    {
        heading: "Audit & Assurance",
        items: [
            "Statutory / External Audit",
            "Internal Audit Services",
            "Forensic Audit",
            "Inventory Verification",
            "Supply Chain Audit",
            "UAE Ministry of Economy Review",
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

    },
    {
        heading: "Financial Advisory Services",
        items: [
            "Financial Due Diligence & Business Valuation",
            "Feasibility Studies & Business Planning",
            "Treasury, Hedging & Market Risk Advisory",
        ],
    },
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
        heading: "Business Strategy Advisory",
        items: [
            "Sourcing & Procurement Services",
            "Corporate Training Services",
            "SCA Compliance Advisory",
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
    {
        heading: "Outsourced CFO Services",
        items: [
            "Financial Strategy & Transformation",
            "Treasury & Working Capital Optimization",
            "Debt, Credit & Financing Advisory",
            "Integrated Performance Management",
            "M&A and Business Expansion Support",
        ],
    }
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
            <div className="h-0.5 w-full bg-gradient-to-r from-[#365693] via-[#8B9C32] to-[#365693] opacity-30" />
            <div className="px-8 py-8 grid grid-cols-3 gap-x-10">
                {SOLUTIONS_VISUAL_COLUMNS.map((colIndices, ci) => {
                    // running counter for stagger delay across sections in this column
                    let runningIndex = ci * 20;
                    return (
                        <div key={ci} className="flex flex-col gap-7">
                            {colIndices.map((dataIdx) => {
                                const col = OUR_SOLUTIONS_COLUMNS[dataIdx];
                                const section = (
                                    <Section
                                        key={dataIdx}
                                        heading={col.heading}
                                        items={col.items}
                                        startIndex={runningIndex}
                                    />
                                );
                                runningIndex += col.items.length;
                                return section;
                            })}
                        </div>
                    );
                })}
            </div>
            <div className="border-t border-gray-100 px-8 py-3 flex items-center justify-between bg-gray-50/60">
                <p className="text-[11px] text-gray-400 tracking-wide">
                    Comprehensive advisory across every touchpoint of your business
                </p>
                <a href="/services" className="text-[12px] font-semibold text-[#365693] hover:text-[#8B9C32] transition-colors flex items-center gap-1">
                    View all solutions
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
}

function Section({ heading, items, startIndex }: { heading: string; items: string[]; startIndex: number }) {
    return (
        <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#365693] mb-2.5 pb-1.5 border-b border-[#8B9C32]/20">
                {heading}
            </p>
            <ul className="flex flex-col gap-0.5">
                {items.map((item, ii) => (
                    <motion.li key={item} custom={startIndex + ii} variants={itemVariants} initial="hidden" animate="visible">
                        <a href="#" className="flex items-center gap-1.5 text-[12px] text-gray-600 hover:text-[#365693] transition-all duration-150 leading-snug py-0.5 group">
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
                <div className="flex-1 max-w-xs">
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#365693] mb-3 pb-1.5 border-b border-[#8B9C32]/20">
                        Industry Segments
                    </p>
                    <ul className="flex flex-col gap-0.5">
                        {WHO_WE_SERVE_ITEMS.map((item, i) => (
                            <motion.li key={item.label} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                                <a
                                    href="#"
                                    className={`flex items-center gap-2 text-[13px] leading-snug py-1.5 transition-all duration-150 group ${item.active ? "font-semibold text-[#365693]" : "text-gray-600 hover:text-[#365693]"
                                        }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-150 ${item.active ? "bg-[#365693]" : "bg-gray-300 group-hover:bg-[#8B9C32]"
                                        }`} />
                                    {item.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-100 px-8 py-3 flex items-center justify-between bg-gray-50/60">
                <p className="text-[11px] text-gray-400 tracking-wide">
                    Serving the global precious metals and luxury goods ecosystem
                </p>
                <a href="/who-we-serve" className="text-[12px] font-semibold text-[#365693] hover:text-[#8B9C32] transition-colors flex items-center gap-1">
                    View all segments
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
}

// ── Types ─────────────────────────────────────────────────────────────────────

type BrochureState = "idle" | "loading" | "success" | "error";

// ── Shared Brochure Dropdown Content ─────────────────────────────────────────
// Reused in both desktop and mobile — receives state as props

interface BrochureDropdownContentProps {
    brochureEmail: string;
    setBrochureEmail: (v: string) => void;
    brochureError: boolean;
    setBrochureError: (v: boolean) => void;
    brochureState: BrochureState;
    handleBrochureSubmit: () => void;
    /** "right-0" for desktop, "left-0 right-0 mx-auto" for mobile */
    positionClass?: string;
}

function BrochureDropdownContent({
    brochureEmail,
    setBrochureEmail,
    brochureError,
    setBrochureError,
    brochureState,
    handleBrochureSubmit,
    positionClass = "right-0",
}: BrochureDropdownContentProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute top-full mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-5 z-50 ${positionClass}`}
            style={{ boxShadow: "0 16px 48px 0 rgba(30,50,90,0.13)" }}
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#f0f4fb] flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#365693" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                    </svg>
                </div>
                <div>
                    <p className="text-[13px] font-semibold text-[#1e3a6b]">Get the Brochure</p>
                    <p className="text-[11px] text-gray-400">IE Brochure 2026 · PDF</p>
                </div>
            </div>

            {/* Success */}
            {brochureState === "success" && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-2 py-3 text-center"
                >
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <p className="text-[13px] font-semibold text-[#1e3a6b]">Opening your brochure…</p>
                    <p className="text-[11px] text-gray-400">Your email has been recorded.</p>
                </motion.div>
            )}

            {/* Error */}
            {brochureState === "error" && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-2 py-3 text-center"
                >
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                    </div>
                    <p className="text-[13px] font-semibold text-[#1e3a6b]">Something went wrong</p>
                    <p className="text-[11px] text-gray-400">Opening the brochure anyway…</p>
                </motion.div>
            )}

            {/* Idle / Loading */}
            {(brochureState === "idle" || brochureState === "loading") && (
                <>
                    <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
                        Enter your email to access the full brochure instantly.
                    </p>
                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            value={brochureEmail}
                            disabled={brochureState === "loading"}
                            onChange={(e) => { setBrochureEmail(e.target.value); setBrochureError(false); }}
                            onKeyDown={(e) => e.key === "Enter" && handleBrochureSubmit()}
                            className={`w-full border rounded-lg px-3 py-2 text-[13px] text-gray-800 outline-none transition-all disabled:opacity-60 ${brochureError
                                ? "border-red-400 focus:ring-1 focus:ring-red-300"
                                : "border-gray-200 focus:border-[#365693] focus:ring-1 focus:ring-[#365693]/20"
                                }`}
                        />
                        {brochureError && (
                            <p className="text-[11px] text-red-500">Please enter a valid email address.</p>
                        )}
                        <button
                            onClick={handleBrochureSubmit}
                            disabled={brochureState === "loading"}
                            className="w-full py-2 rounded-full bg-[#8B9C32] hover:bg-[#ABBD4F] text-white text-[13px] font-semibold transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {brochureState === "loading" ? (
                                <>
                                    <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                                    </svg>
                                    Saving…
                                </>
                            ) : (
                                "Download Now"
                            )}
                        </button>
                    </div>
                </>
            )}
        </motion.div>
    );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMega, setActiveMega] = useState<"solutions" | "who-we-serve" | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // ── Brochure: separate open state for desktop vs mobile ──
    const [desktopBrochureOpen, setDesktopBrochureOpen] = useState(false);
    const [mobileBrochureOpen, setMobileBrochureOpen] = useState(false);

    // ── Brochure: shared email/error/state ──
    const [brochureEmail, setBrochureEmail] = useState("");
    const [brochureError, setBrochureError] = useState(false);
    const [brochureState, setBrochureState] = useState<BrochureState>("idle");

    // ── Separate refs for desktop and mobile ──
    const desktopBrochureRef = useRef<HTMLDivElement>(null);
    const mobileBrochureRef = useRef<HTMLDivElement>(null);

    // ── Single submit handler shared by both ──
    const handleBrochureSubmit = useCallback(async () => {
        if (!brochureEmail || !/\S+@\S+\.\S+/.test(brochureEmail)) {
            setBrochureError(true);
            return;
        }

        setBrochureError(false);
        setBrochureState("loading");

        try {
            await fetch(APPS_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: brochureEmail,
                    source: "navbar-brochure",
                    submittedAt: new Date().toISOString(),
                    page: typeof window !== "undefined" ? window.location.pathname : "/",
                }),
            });
            setBrochureState("success");
            setTimeout(() => {
                setDesktopBrochureOpen(false);
                setMobileBrochureOpen(false);
                setBrochureState("idle");
                setBrochureEmail("");
                window.open("/pdfs/IE-Brochure-2026.pdf", "_blank");
            }, 1200);
        } catch {
            setBrochureState("error");
            setTimeout(() => {
                setDesktopBrochureOpen(false);
                setMobileBrochureOpen(false);
                setBrochureState("idle");
                window.open("/pdfs/IE-Brochure-2026.pdf", "_blank");
            }, 1500);
        }
    }, [brochureEmail]);

    // ── Outside click: handles both refs ──
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (desktopBrochureRef.current && !desktopBrochureRef.current.contains(e.target as Node)) {
                setDesktopBrochureOpen(false);
            }
            if (mobileBrochureRef.current && !mobileBrochureRef.current.contains(e.target as Node)) {
                setMobileBrochureOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveMega(null);
                setDesktopBrochureOpen(false);
                setMobileBrochureOpen(false);
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    // Close desktop brochure when mobile opens and vice versa
    const toggleDesktopBrochure = () => {
        setMobileBrochureOpen(false);
        setDesktopBrochureOpen((p) => !p);
    };
    const toggleMobileBrochure = () => {
        setDesktopBrochureOpen(false);
        setMobileBrochureOpen((p) => !p);
    };

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

    // Shared brochure props
    const brochureProps = {
        brochureEmail,
        setBrochureEmail,
        brochureError,
        setBrochureError,
        brochureState,
        handleBrochureSubmit,
    };

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

            <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled || activeMega ? "shadow-md" : "shadow-sm"}`}>
                <div className="relative">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 lg:h-[70px]">

                            {/* ── Logo ── */}
                            <a href="/" className="flex items-center gap-3 shrink-0">
                                <img src="/images/home/logo.svg" alt="IEG Icon" className="h-8 w-auto" />
                                <img src="/images/home/logo-text.svg" alt="Insight Edge Global" className="h-3 w-auto" />
                            </a>

                            {/* ── Desktop Nav ── */}
                            <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
                                {NAV_LINKS.map(({ label, href, hasMega }) => {
                                    const isPathActive = pathname === href;
                                    const isMegaActive = hasMega ? activeMega === hasMega : false;
                                    const isActive = isPathActive || isMegaActive;
                                    return (
                                        <li key={label}>
                                            <Link
                                                href={href}
                                                onMouseEnter={() => hasMega ? openMega(hasMega) : scheduleClose()}
                                                onMouseLeave={scheduleClose}
                                                onClick={() => hasMega && setActiveMega(isMegaActive ? null : hasMega)}
                                                className={`relative flex items-center gap-1 px-3 py-2 text-[13.5px] tracking-wide transition-colors duration-200 rounded-sm cursor-pointer select-none ${isActive ? "text-[#365693] font-bold" : "text-[#4A5565] font-medium hover:text-[#365693]"
                                                    }`}
                                            >
                                                {label}
                                                {hasMega && (
                                                    <motion.svg
                                                        animate={{ rotate: isMegaActive ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        width="11" height="11" viewBox="0 0 12 12" fill="none"
                                                        className="opacity-50 mt-0.5"
                                                    >
                                                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                                    </motion.svg>
                                                )}
                                                {isActive && (
                                                    <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#365693] rounded-full" />
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* ── Desktop Right ── */}
                            <div className="hidden lg:flex items-center gap-3">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B9C32] hover:bg-[#ABBD4F] text-white text-[13px] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap shadow-sm"
                                >
                                    Connect with an Expert
                                </a>

                                {/* Desktop brochure */}
                                <div className="relative" ref={desktopBrochureRef}>
                                    <button
                                        onClick={toggleDesktopBrochure}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full hover:bg-[#ABBD4F] hover:text-white border border-[#ABBD4F] text-[#283F67] text-[13px] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap shadow-sm"
                                    >
                                        <DownloadIcon />
                                        Download Brochure
                                    </button>
                                    <AnimatePresence>
                                        {desktopBrochureOpen && (
                                            <BrochureDropdownContent {...brochureProps} positionClass="right-0" />
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* ── Mobile Right ── */}
                            <div className="flex lg:hidden items-center gap-2">
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

                    {/* ── Mega menus ── */}
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
                                    {NAV_LINKS.map((link) => (
                                        <MobileNavItem
                                            key={link.label}
                                            link={link}
                                            pathname={pathname}
                                            onCloseMenu={() => setMenuOpen(false)}
                                        />
                                    ))}
                                </ul>


                                <a
                                    href="/contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-[#8B9C32] hover:bg-[#ABBD4F] text-white text-[14px] font-semibold tracking-wide transition-colors duration-200 shadow-sm mb-2"
                                >
                                    Connect with an Expert
                                </a>

                                {/* Mobile brochure — opens upward to avoid overflow */}
                                <div className="relative" ref={mobileBrochureRef}>
                                    <button
                                        onClick={toggleMobileBrochure}
                                        className="flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full hover:bg-[#ABBD4F] hover:text-white border border-[#ABBD4F] text-[#283F67] text-[14px] font-semibold tracking-wide transition-colors duration-200 shadow-sm"
                                    >
                                        <DownloadIcon />
                                        Download Brochure
                                    </button>

                                    <AnimatePresence>
                                        {mobileBrochureOpen && (
                                            // Opens upward on mobile (bottom-full) to stay inside viewport
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                                className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-xl shadow-2xl border border-gray-100 p-5 z-50"
                                                style={{ boxShadow: "0 -8px 32px 0 rgba(30,50,90,0.13)" }}
                                            >
                                                {/* Header */}
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-8 h-8 rounded-lg bg-[#f0f4fb] flex items-center justify-center shrink-0">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#365693" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                            <polyline points="14 2 14 8 20 8" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-[13px] font-semibold text-[#1e3a6b]">Get the Brochure</p>
                                                        <p className="text-[11px] text-gray-400">IE Brochure 2026 · PDF</p>
                                                    </div>
                                                </div>

                                                {/* Success */}
                                                {brochureState === "success" && (
                                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-2 py-3 text-center">
                                                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <polyline points="20 6 9 17 4 12" />
                                                            </svg>
                                                        </div>
                                                        <p className="text-[13px] font-semibold text-[#1e3a6b]">Opening your brochure…</p>
                                                        <p className="text-[11px] text-gray-400">Your email has been recorded.</p>
                                                    </motion.div>
                                                )}

                                                {/* Error */}
                                                {brochureState === "error" && (
                                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-2 py-3 text-center">
                                                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <circle cx="12" cy="12" r="10" />
                                                                <line x1="12" y1="8" x2="12" y2="12" />
                                                                <line x1="12" y1="16" x2="12.01" y2="16" />
                                                            </svg>
                                                        </div>
                                                        <p className="text-[13px] font-semibold text-[#1e3a6b]">Something went wrong</p>
                                                        <p className="text-[11px] text-gray-400">Opening the brochure anyway…</p>
                                                    </motion.div>
                                                )}

                                                {/* Idle / Loading */}
                                                {(brochureState === "idle" || brochureState === "loading") && (
                                                    <>
                                                        <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
                                                            Enter your email to access the full brochure instantly.
                                                        </p>
                                                        <div className="flex flex-col gap-2">
                                                            <input
                                                                type="email"
                                                                placeholder="your@email.com"
                                                                value={brochureEmail}
                                                                disabled={brochureState === "loading"}
                                                                onChange={(e) => { setBrochureEmail(e.target.value); setBrochureError(false); }}
                                                                onKeyDown={(e) => e.key === "Enter" && handleBrochureSubmit()}
                                                                className={`w-full border rounded-lg px-3 py-2 text-[13px] text-gray-800 outline-none transition-all disabled:opacity-60 ${brochureError
                                                                    ? "border-red-400 focus:ring-1 focus:ring-red-300"
                                                                    : "border-gray-200 focus:border-[#365693] focus:ring-1 focus:ring-[#365693]/20"
                                                                    }`}
                                                            />
                                                            {brochureError && (
                                                                <p className="text-[11px] text-red-500">Please enter a valid email address.</p>
                                                            )}
                                                            <button
                                                                onClick={handleBrochureSubmit}
                                                                disabled={brochureState === "loading"}
                                                                className="w-full py-2 rounded-full bg-[#8B9C32] hover:bg-[#ABBD4F] text-white text-[13px] font-semibold transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                                            >
                                                                {brochureState === "loading" ? (
                                                                    <>
                                                                        <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                                                                        </svg>
                                                                        Saving…
                                                                    </>
                                                                ) : (
                                                                    "Download Now"
                                                                )}
                                                            </button>
                                                        </div>
                                                    </>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function DownloadIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

function HamburgerIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

// ── Mobile Menu Components ───────────────────────────────────────────────────

function MobileNavItem({
    link,
    pathname,
    onCloseMenu,
}: {
    link: typeof NAV_LINKS[number];
    pathname: string;
    onCloseMenu: () => void;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = pathname === link.href;

    if (!link.hasMega) {
        return (
            <li>
                <Link
                    href={link.href}
                    onClick={onCloseMenu}
                    className={`block px-3 py-2.5 rounded-md text-[14px] transition-colors duration-200 ${isActive
                        ? "font-bold text-[#365693] bg-[#f0f4fb]"
                        : "font-medium text-[#3a3a3a] hover:text-[#1b3a6b] hover:bg-[#f0f4fb]"
                        }`}
                >
                    {link.label}
                </Link>
            </li>
        );
    }

    return (
        <li>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-[14px] transition-colors duration-200 ${isOpen || isActive
                    ? "font-bold text-[#365693] bg-[#f0f4fb]"
                    : "font-medium text-[#3a3a3a] hover:text-[#1b3a6b] hover:bg-[#f0f4fb]"
                    }`}
            >
                {link.label}
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className="opacity-50"
                >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-[#365693]/10 ml-3 mt-1">
                            {link.hasMega === "solutions" && (
                                OUR_SOLUTIONS_COLUMNS.map((col, ci) => (
                                    <MobileNestedDropdown
                                        key={ci}
                                        label={col.heading}
                                        items={col.items}
                                        onCloseMenu={onCloseMenu}
                                    />
                                ))
                            )}
                            {link.hasMega === "who-we-serve" && (
                                <MobileNestedDropdown
                                    label="Industry Segments"
                                    items={WHO_WE_SERVE_ITEMS.map(item => item.label)}
                                    onCloseMenu={onCloseMenu}
                                />
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
}

function MobileNestedDropdown({
    label,
    items,
    subSections,
    onCloseMenu,
}: {
    label: string;
    items?: string[];
    subSections?: { heading: string; items: string[] }[];
    onCloseMenu: () => void;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between py-2 text-[13px] font-semibold transition-colors ${isOpen ? "text-[#365693]" : "text-gray-700 hover:text-[#365693]"
                    }`}
            >
                {label}
                <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="10" height="10" viewBox="0 0 12 12" fill="none"
                    className="opacity-40"
                >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-1.5 pl-3 py-1 border-l border-gray-100 ml-1">
                            {items?.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); onCloseMenu(); }}
                                    className="text-[12.5px] text-gray-500 hover:text-[#365693] py-1 transition-colors flex items-center gap-2"
                                >
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    {item}
                                </a>
                            ))}
                            {subSections?.map((sub, si) => (
                                <MobileNestedDropdown
                                    key={si}
                                    label={sub.heading}
                                    items={sub.items}
                                    onCloseMenu={onCloseMenu}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
