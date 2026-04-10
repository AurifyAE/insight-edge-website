"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
function IconEmail() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 7l10 7 10-7" />
        </svg>
    );
}
function IconPhone() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
    );
}
function IconWeb() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>
    );
}
function IconLocation() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}
function IconSend() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    );
}

/* ─────────────────────────────────────────────
   CONTACT INFO CARD
───────────────────────────────────────────── */
function InfoCard({
    icon,
    title,
    line1,
    line2,
}: {
    icon: React.ReactNode;
    title: string;
    line1: string;
    line2?: string;
}) {
    return (
        <div className="flex items-start gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white">
            <span className="mt-0.5 text-[#4a6baa]">{icon}</span>
            <div>
                <p className="text-[12.5px] font-semibold text-[#365693] leading-tight mb-0.5">{title}</p>
                <p className="text-[12px] text-gray-600 leading-snug">{line1}</p>
                {line2 && <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5">{line2}</p>}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   INPUT / TEXTAREA STYLES
───────────────────────────────────────────── */
const inputBase =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-[12.5px] text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:border-[#365693] focus:ring-1 focus:ring-[#365693]/20 transition-colors duration-150";

/* ─────────────────────────────────────────────
   LABEL
───────────────────────────────────────────── */
function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
    return (
        <label className="block text-[12px] font-medium text-gray-800 mb-1">
            {children}
            {required && <span className="text-gray-800 ml-0.5"> *</span>}
        </label>
    );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ContactPage() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="min-h-screen bg-[#f2f4f7]">

            {/* ── HERO BANNER ─────────────────────────────── */}
            <div
                style={{
                    background: "linear-gradient(135deg, #2e4a82 0%, #3a5a9b 60%, #2e5a8e 100%)",
                }}
                className="px-8 pt-30 pb-12"
            >
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-[32px] font-bold text-white leading-tight mb-2">
                        Get In Touch
                    </h1>
                    <p className="text-[#a4bde0] text-[13.5px] leading-relaxed max-w-[320px]">
                        Let's discuss how we can support your precious metals business with expert financial and compliance advisory
                    </p>
                </div>
            </div>

            {/* ── BODY ────────────────────────────────────── */}
            <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">

                {/* ════════════════════════════════════
            LEFT COLUMN
        ════════════════════════════════════ */}
                <div className="flex flex-col gap-5">

                    {/* Section heading */}
                    <h2 className="text-[16px] font-bold text-[#365693]">Contact Information</h2>

                    {/* Info cards */}
                    <div className="flex flex-col gap-2.5">
                        <InfoCard icon={<IconEmail />} title="Email" line1="info@insightedge.global" />
                        <InfoCard icon={<IconPhone />} title="Phone" line1="+971 50 370 8785" />
                        <InfoCard icon={<IconWeb />} title="Website" line1="www.insightedge.global" />
                        <InfoCard
                            icon={<IconLocation />}
                            title="Location"
                            line1="United Arab Emirates"
                            line2="Serving precious metals businesses across UAE mainland and free zones"
                        />
                    </div>

                    {/* IEG brand card */}
                    <div
                        className="rounded-xl px-5 py-5 mt-1"
                        style={{ background: "linear-gradient(150deg, #2e4a82 0%, #253e70 100%)" }}
                    >
                        {/* Badge */}
                        <Link href="/" className="flex flex-col items-start gap-2 cursor-pointer mb-4">
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
                        <h3 className="text-[14.5px] font-bold text-white leading-snug mb-3">
                            Safeguarding Value Through Financial Expertise
                        </h3>
                        <p className="text-[11.5px] text-[#a4bde0] leading-relaxed mb-4">
                            UAE-registered &amp; approved audit firm, 100% dedicated to the precious metals sector with 360° end-to-end financial &amp; compliance coverage.
                        </p>
                        <ul className="flex flex-col gap-1.5">
                            {[
                                "Exclusive focus on precious metals industry",
                                "DMCC, LBMA & OECD standards expertise",
                                "AML/CFT specialists for DNFBP entities",
                            ].map((pt) => (
                                <li key={pt} className="flex items-start gap-2 text-[11.5px] text-[#c2d5ef]">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8fa832] shrink-0" />
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ════════════════════════════════════
            RIGHT COLUMN — FORM
        ════════════════════════════════════ */}
                <div className="flex flex-col gap-4">

                    <h2 className="text-[16px] font-bold text-[#365693]">Send Us a Message</h2>

                    {submitted ? (
                        <div className="flex flex-col items-center justify-center gap-3 py-20 border border-gray-200 rounded-xl bg-white text-center">
                            <div className="w-12 h-12 rounded-full bg-[#365693]/10 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="#365693" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <p className="text-[15px] font-bold text-[#365693]">Message Sent!</p>
                            <p className="text-[12.5px] text-gray-500">We'll respond to your inquiry within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">

                            {/* Full Name */}
                            <div>
                                <Label required>Full Name</Label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className={inputBase}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <Label required>Email Address</Label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className={inputBase}
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <Label>Phone Number</Label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+971 XX XXX XXXX"
                                    className={inputBase}
                                />
                            </div>

                            {/* Company */}
                            <div>
                                <Label>Company Name</Label>
                                <input
                                    type="text"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder="Your company"
                                    className={inputBase}
                                />
                            </div>

                            {/* Service of Interest */}
                            <div>
                                <Label>Service of Interest</Label>
                                <input
                                    type="text"
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    placeholder=""
                                    className={inputBase}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <Label required>Message</Label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements..."
                                    required
                                    rows={5}
                                    className={`${inputBase} resize-none`}
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex flex-col items-stretch gap-2 mt-1">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-md text-white text-[13.5px] font-semibold tracking-wide transition-opacity duration-150 hover:opacity-90"
                                    style={{ background: "linear-gradient(90deg, #2e4a82 0%, #3a5a9b 100%)" }}
                                >
                                    Send Message
                                    <IconSend />
                                </button>
                                <p className="text-center text-[11px] text-gray-500 mt-0.5">
                                    * Required fields. We'll respond to your inquiry within 24 hours.
                                </p>
                            </div>

                        </form>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 bg-[#ABBD4F] py-8">
                <h2 className="text-xl font-bold text-[#365693]">Prefer to call directly?</h2>
                <p className="text-2xl font-bold text-[#365693]">+971 50 370 8785</p>
                <p className="text-sm text-white">Our team is ready to discuss your precious metals business needs</p>
            </div>
        </div>
    );
}