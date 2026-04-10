"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#1e2e4b] text-white py-12 lg:py-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* ── Main Footer Header ── */}
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
                                "Digital Assets & Tokenization"
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

                        {/* Download Brochure Button */}
                        <div className="mt-4">
                            <a
                                href="/pdfs/IE-Brochure-2026.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-3 px-6 py-2.5 border border-white rounded-full text-[14px] font-medium hover:bg-white hover:text-[#1e2e4b] transition-all duration-300 group"
                            >
                                <DownloadIcon />
                                <span>Download Brochure</span>
                            </a>
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
