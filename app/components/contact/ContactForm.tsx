"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
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
   SUB-COMPONENTS
───────────────────────────────────────────── */
function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
    return (
        <label className="block text-[13px] font-bold text-[#365693] mb-1.5 uppercase tracking-wide">
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );
}

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
export default function ContactForm() {
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
    );
}
