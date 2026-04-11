"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ── Config ────────────────────────────────────────────────────────────────────

const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzpw8gL4fJ-Pwjgs8KTGrjWBnFVgSO10adjBYpN_Q6McxkhemuROfzIwGW-4bYsrw/exec";

// ── Types ─────────────────────────────────────────────────────────────────────

type BrochureState = "idle" | "loading" | "success" | "error";

// ── Footer Component ──────────────────────────────────────────────────────────

export default function Footer() {
    const [brochureOpen, setBrochureOpen] = useState(false);
    const [brochureEmail, setBrochureEmail] = useState("");
    const [brochureError, setBrochureError] = useState(false);
    const [brochureState, setBrochureState] = useState<BrochureState>("idle");

    const brochureRef = useRef<HTMLDivElement>(null);

    // ── Outside click to close ──
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (brochureRef.current && !brochureRef.current.contains(e.target as Node)) {
                setBrochureOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ── Escape key to close ──
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setBrochureOpen(false);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    // ── Submit handler ──
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
                    source: "footer-brochure",
                    submittedAt: new Date().toISOString(),
                    page: typeof window !== "undefined" ? window.location.pathname : "/",
                }),
            });
            setBrochureState("success");
            setTimeout(() => {
                setBrochureOpen(false);
                setBrochureState("idle");
                setBrochureEmail("");
                window.open("/pdfs/IE-Brochure-2026.pdf", "_blank");
            }, 1200);
        } catch {
            setBrochureState("error");
            setTimeout(() => {
                setBrochureOpen(false);
                setBrochureState("idle");
                window.open("/pdfs/IE-Brochure-2026.pdf", "_blank");
            }, 1500);
        }
    }, [brochureEmail]);

    return (
        <footer className="bg-[#1e2e4b] text-white py-12 lg:py-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* ── Main Footer Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Logo & Tagline */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex flex-col items-start gap-2">
                            <Image
                                src="/images/home/logo-white.svg"
                                alt="IEG Logo"
                                width={120}
                                height={40}
                                className="h-13 w-auto object-contain"
                            />
                            <Image
                                src="/images/home/logo-text-white.svg"
                                alt="Insight Edge Global"
                                width={160}
                                height={15}
                                className="h-2 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-[14px] text-gray-300 leading-relaxed max-w-[240px]">
                            Safeguarding Value Through Financial Expertise
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 mt-2">
                            <span className="text-[14px] font-semibold text-white">Follow Us:</span>
                            <div className="flex items-center gap-3">
                                <a href="#" className="text-[#ABBD4F] hover:text-white transition-colors">
                                    <FacebookIcon />
                                </a>
                                <a href="#" className="text-[#ABBD4F] hover:text-white transition-colors">
                                    <InstagramIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h3>
                        <ul className="flex flex-col text-sm gap-3">
                            {["Home", "About", "Services", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-[14px] text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Services */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Our Services</h3>
                        <ul className="flex flex-col text-sm gap-3">
                            {[
                                "Audit & Assurance Services",
                                "Special Audits & Risk Consulting",
                                "CFO Services",
                                "Accounting & MIS Services",
                                "Financial Advisory Services",
                                "Taxation Services",
                                "Digital Assets & Tokenization",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/solutions"
                                        className="text-[14px] text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-3">
                                <EmailIcon />
                                <a href="mailto:info@insightedge.global" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                                    info@insightedge.global
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <PhoneIcon />
                                <a href="tel:+971503708785" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                                    +971 50 370 8785
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <GlobeIcon />
                                <a href="https://www.insightedge.global" className="text-[14px] text-gray-300 hover:text-white transition-colors">
                                    www.insightedge.global
                                </a>
                            </li>
                        </ul>

                        {/* ── Download Brochure with email gate ── */}
                        <div className="mt-4 relative" ref={brochureRef}>
                            <button
                                onClick={() => setBrochureOpen((p) => !p)}
                                className="inline-flex items-center gap-3 px-6 py-2.5 border border-white rounded-full text-[14px] font-medium hover:bg-white hover:text-[#1e2e4b] transition-all duration-300 group"
                            >
                                <DownloadIcon />
                                <span>Download Brochure</span>
                            </button>

                            {/* ── Brochure Dropdown (opens upward) ── */}
                            <AnimatePresence>
                                {brochureOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute bottom-full left-0 mb-3 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-5 z-50"
                                        style={{ boxShadow: "0 -8px 48px 0 rgba(10,20,50,0.22)" }}
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

                                        {/* Success state */}
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

                                        {/* Error state */}
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

                                        {/* Idle / Loading state */}
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
                                                        onChange={(e) => {
                                                            setBrochureEmail(e.target.value);
                                                            setBrochureError(false);
                                                        }}
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
                </div>

                {/* ── Sub Footer ── */}
                <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col items-center gap-4 text-center">
                    <p className="text-[13px] text-gray-400">
                        &copy; 2026 Insight Edge Global LLC. All rights reserved.
                    </p>
                    <p className="text-[12px] text-gray-500 font-medium">
                        Exclusive Financial & Compliance Advisory for the Precious Metals Industry
                    </p>
                </div>
            </div>
        </footer>
    );
}

/* ── Icon Components ── */

function FacebookIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ABBD4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ABBD4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    );
}

function GlobeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ABBD4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
    );
}