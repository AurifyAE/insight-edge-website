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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    );
}

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

function InfoCard({
    icon,
    title,
    value,
    subValue
}: {
    icon: React.ReactNode,
    title: string,
    value: string,
    subValue?: string
}) {
    return (
        <div className="flex items-start gap-4 p-5 bg-[#F8FAFC] border-l-4 border-l-[#ABBD4F] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="text-[#365693] mt-1 shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="text-[14px] font-bold text-[#365693] mb-1">{title}</h4>
                <p className="text-[14px] text-gray-700 font-medium">{value}</p>
                {subValue && <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">{subValue}</p>}
            </div>
        </div>
    );
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
    return (
        <label className="block text-[13px] font-bold text-[#365693] mb-1.5 uppercase tracking-wide">
            {children} {required && <span className="text-red-500">*</span>}
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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputCls = "w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-[#365693] focus:ring-2 focus:ring-[#365693]/10 transition-all bg-white";

    return (
        <div className="min-h-screen bg-white">

            {/* ── HERO BANNER ─────────────────────────────── */}
            <div
                className="bg-[#365693] px-8 pt-32 pb-16"
            >
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-[#ABBD4F] text-sm md:text-base font-medium max-w-lg leading-relaxed">
                        Let's discuss how we can support your precious metals business with expert financial and compliance advisory
                    </p>
                </div>
            </div>

            {/* ── BODY ────────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* ════════════════════════════════════
                    LEFT COLUMN
                ════════════════════════════════════ */}
                <div className="flex flex-col gap-10">

                    <div>
                        <h2 className="text-2xl font-bold text-[#365693] mb-8">Contact Information</h2>

                        <div className="flex flex-col gap-4">
                            <InfoCard
                                icon={<IconEmail />}
                                title="Email"
                                value="info@insightedge.global"
                            />
                            <InfoCard
                                icon={<IconPhone />}
                                title="Phone"
                                value="+971 50 370 8785"
                            />
                            <InfoCard
                                icon={<IconWeb />}
                                title="Website"
                                value="www.insightedge.global"
                            />
                            <InfoCard
                                icon={<IconLocation />}
                                title="Location"
                                value="United Arab Emirates"
                                subValue="Office number A17-18, Metha plaza building 12B Oud Metha Rd. Oud Metha. Dubai UAE."
                            />
                        </div>
                    </div>

                    {/* Brand card */}
                    <div className="bg-[#365693] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            {/* Logo */}
                            <div className="flex flex-col items-start gap-2 mb-6">
                                <Image
                                    src="/images/home/logo-white.svg"
                                    alt="IEG Logo"
                                    width={100}
                                    height={35}
                                    className="h-10 w-auto object-contain"
                                />
                                <Image
                                    src="/images/home/logo-text-white.svg"
                                    alt="Insight Edge Global"
                                    width={140}
                                    height={12}
                                    className="h-2 w-auto object-contain"
                                />
                            </div>

                            <p className="text-[12px] font-bold text-[#ABBD4F] uppercase tracking-[0.2em] mb-3">
                                Insight Edge Global
                            </p>
                            <h3 className="text-[22px] font-bold leading-tight mb-4">
                                Safeguarding Value Through Financial Expertise
                            </h3>
                            <p className="text-[14px] text-white/80 leading-relaxed mb-6">
                                UAE-registered & approved audit firm, 100% dedicated to the precious metals sector with 360° end-to-end financial & compliance coverage.
                            </p>
                            <ul className="flex flex-col gap-3">
                                {[
                                    "Exclusive focus on precious metals industry",
                                    "DMCC, LBMA & OECD standards expertise",
                                    "AML/CFT specialists for DNFBP entities"
                                ].map((pt, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[14px] text-white/90">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ABBD4F] mt-2 shrink-0" />
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Subtle decorative glow */}
                        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    </div>
                </div>

                {/* ════════════════════════════════════
                    RIGHT COLUMN — FORM
                ════════════════════════════════════ */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-[#365693] mb-8">Send Us a Message</h2>

                    {submitted ? (
                        <div className="flex flex-col items-center justify-center gap-6 py-20 border border-gray-100 rounded-3xl bg-[#F8FAFC] text-center shadow-sm">
                            <div className="w-20 h-20 rounded-full bg-[#ABBD4F] flex items-center justify-center shadow-lg shadow-[#ABBD4F]/20">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                                    stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#365693] mb-2">Message Sent!</h3>
                                <p className="text-gray-600">We'll respond to your inquiry within 24 hours.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label required>Full Name</Label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className={inputCls}
                                    />
                                </div>
                                <div>
                                    <Label required>Email Address</Label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                        className={inputCls}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label>Phone Number</Label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+971 XX XXX XXXX"
                                        className={inputCls}
                                    />
                                </div>
                                <div>
                                    <Label>Company Name</Label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder="Your company"
                                        className={inputCls}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label>Service of Interest</Label>
                                <input
                                    type="text"
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    placeholder="e.g. AML Compliance, Audit"
                                    className={inputCls}
                                />
                            </div>

                            <div>
                                <Label required>Message</Label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements..."
                                    required
                                    rows={5}
                                    className={`${inputCls} resize-none`}
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#365693] hover:bg-[#2a4172] text-white text-[16px] font-bold tracking-wide transition-all duration-300 shadow-lg shadow-[#365693]/20 active:scale-[0.98]"
                                >
                                    Send Message
                                    <IconSend />
                                </button>
                                <p className="text-center text-[12px] text-gray-400 mt-4 italic">
                                    * Required fields. We'll respond to your inquiry within 24 hours.
                                </p>
                            </div>

                        </form>
                    )}
                </div>
            </div>

            {/* Bottom CTA Strip */}
            <div className="bg-[#ABBD4F] py-12 px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-[#365693] text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">Prefer to call directly?</h2>
                        <p className="text-lg opacity-80">Our team is ready to discuss your precious metals business needs</p>
                    </div>
                    <a
                        href="tel:+971503708785"
                        className="text-2xl md:text-3xl font-black text-[#365693] hover:scale-105 transition-transform duration-200"
                    >
                        +971 50 370 8785
                    </a>
                </div>
            </div>
        </div>
    );
}
