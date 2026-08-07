"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
        <label className="block text-sm font-bold text-[#1E2E4B] mb-1.5 uppercase tracking-wide">
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );
}

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
export default function ContactForm() {
    const router = useRouter();
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => null);
                throw new Error(data?.error || "Something went wrong. Please try again.");
            }

            router.push("/contact/thank-you");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const inputCls = "w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] text-gray-800 focus:outline-none focus:border-[#1E2E4B] focus:ring-2 focus:ring-[#1E2E4B]/10 transition-all bg-white";

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#1E2E4B] mb-8">Send Us a Message</h2>

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
                    {error && (
                        <p className="text-center text-sm text-red-600 mb-4">{error}</p>
                    )}
                    <button
                        type="submit"
                        disabled={submitting}
                        className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#1E2E4B] hover:bg-[#283F67] text-white text-base font-bold tracking-wide transition-all duration-300 shadow-lg shadow-[#1E2E4B]/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                    >
                        {submitting ? "Sending..." : "Send Message"}
                        {!submitting && <IconSend />}
                    </button>
                    <p className="text-center text-[12px] text-gray-400 mt-4 italic">
                        * Required fields. We&apos;ll respond to your inquiry within 24 hours.
                    </p>
                </div>
            </form>
        </div>
    );
}
