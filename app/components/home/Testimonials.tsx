"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    logo: string;
    feedback: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 0,
        name: "Muneeb Cholayil",
        role: "Director",
        company: "Aurify Technologies",
        logo: "images/home/testimonials/aurify-logo.svg",
        feedback:
            "Insight Edge brought clarity and confidence to our financial processes. Their auditing is precise, reliable, and insight-driven. We've seen a 40% reduction in reporting errors since onboarding.",
        rating: 5,
    },
    {
        id: 1,
        name: "Sarah Okonkwo",
        role: "CFO",
        company: "Meridian Capital",
        logo: "images/home/testimonials/aurify-logo.svg",
        feedback:
            "The level of detail and strategic thinking they brought to our audit was unlike anything we'd experienced before. Every recommendation was actionable and grounded in real data.",
        rating: 5,
    },
    {
        id: 2,
        name: "James Whitfield",
        role: "CEO",
        company: "Nexbridge Group",
        logo: "images/home/testimonials/aurify-logo.svg",
        feedback:
            "Working with this team transformed how we view financial oversight. Their proactive approach caught discrepancies we had overlooked for years. Truly exceptional partners.",
        rating: 5,
    },
    {
        id: 3,
        name: "Priya Menon",
        role: "Head of Finance",
        company: "Solaris Ventures",
        logo: "images/home/testimonials/aurify-logo.svg",
        feedback:
            "The onboarding was seamless and the insights were immediate. We now have full confidence in our quarterly reports, and our board has noticed the improvement in accuracy and presentation.",
        rating: 4,
    },
    {
        id: 4,
        name: "Tobias Müller",
        role: "Managing Partner",
        company: "Alpenhaus Advisory",
        logo: "images/home/testimonials/aurify-logo.svg",
        feedback:
            "Exceptional service from start to finish. The team is deeply knowledgeable about cross-border financial compliance, which was critical for our European expansion. Highly recommend.",
        rating: 5,
    },
];

const AUTOPLAY_MS = 3500;

function StarRating({ count, total = 5 }: { count: number; total?: number }) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: total }).map((_, i) => (
                <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                >
                    <path
                        d="M8 1.5L9.76 5.84L14.5 6.27L11.15 9.14L12.18 13.75L8 11.27L3.82 13.75L4.85 9.14L1.5 6.27L6.24 5.84L8 1.5Z"
                        fill={i < count ? "#E8A838" : "transparent"}
                        stroke={i < count ? "#E8A838" : "#CBD5E1"}
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                    />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const total = testimonials.length;
    const active = testimonials[activeIndex];

    // 3-slot window
    const prevT = activeIndex > 0 ? testimonials[activeIndex - 1] : null;
    const nextT = activeIndex < total - 1 ? testimonials[activeIndex + 1] : null;
    const slots = [prevT, active, nextT] as const;

    const startAutoplay = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex((p) => (p + 1) % total);
        }, AUTOPLAY_MS);
    }, [total]);

    const stopAutoplay = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);

    // Start / stop based on paused state
    useEffect(() => {
        if (!paused) startAutoplay();
        else stopAutoplay();
        return stopAutoplay;
    }, [paused, startAutoplay, stopAutoplay]);

    // Manual navigate — resets timer
    const navigate = useCallback(
        (idx: number) => {
            const clamped = Math.max(0, Math.min(total - 1, idx));
            setActiveIndex(clamped);
            if (!paused) startAutoplay(); // reset countdown
        },
        [total, paused, startAutoplay]
    );

    // Mouse-wheel on sidebar
    useEffect(() => {
        const el = sidebarRef.current;
        if (!el) return;
        let acc = 0;
        const THRESH = 60;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            acc += e.deltaY;
            if (Math.abs(acc) >= THRESH) {
                const dir = acc > 0 ? 1 : -1;
                acc = 0;
                setActiveIndex((prev) => Math.max(0, Math.min(total - 1, prev + dir)));
                if (!paused) startAutoplay();
            }
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, [total, paused, startAutoplay]);

    return (
        <section className="w-full bg-[#F7F9FC] py-16 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-5xl mx-auto mb-12 text-center">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#1B3A6B] mb-3">
                    Client Feedback
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3A6B] leading-tight">
                    Honest Feedback
                    <br />
                    From Valued People
                </h2>
            </div>

            {/* Main Panel */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row min-h-[340px] overflow-hidden relative">

                {/* ── Left: 3-slot logo column ── */}
                <div
                    ref={sidebarRef}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    className="sm:w-60 shrink-0 border-b sm:border-b-0 sm:border-r border-slate-100 flex sm:flex-col items-center justify-center gap-6 py-6 px-3 cursor-ns-resize select-none"
                    title="Scroll to navigate"
                >
                    {slots.map((t, slotIdx) => {
                        const isActive = slotIdx === 1;

                        if (!t) {
                            // spacer keeps active logo vertically centered
                            return <div key={`sp-${slotIdx}`} style={{ width: 44, height: 44 }} className="shrink-0" />;
                        }

                        return (
                            <button
                                key={t.id}
                                onClick={() => navigate(t.id)}
                                className="shrink-0 flex items-center justify-center focus:outline-none"
                                style={{
                                    transform: isActive ? "scale(1.5)" : "scale(1)",
                                    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                                }}
                                aria-label={`View ${t.company} testimonial`}
                            >
                                <div
                                    className="rounded-xl flex items-center justify-center font-semibold w-20 h-10"
                                    style={{
                                        background: isActive ? "#1B3A6B" : "#EEF2F7",
                                        color: isActive ? "#fff" : "#94A3B8",
                                        transition: "background 0.25s, color 0.25s",
                                    }}
                                >
                                    <Image src={t.logo} alt={t.company} width={44} height={44} />
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* ── Right: Testimonial Detail ── */}
                <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    <div>
                        <svg
                            className="opacity-10 mb-4"
                            style={{ color: "#1B3A6B" }}
                            width="40"
                            height="32"
                            viewBox="0 0 40 32"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 32V19.556C0 8.741 6.222 2.815 18.667 0L20 3.556C14.519 5.037 11.111 8.148 9.778 12.889H16V32H0ZM24 32V19.556C24 8.741 30.222 2.815 42.667 0L44 3.556C38.519 5.037 35.111 8.148 33.778 12.889H40V32H24Z" />
                        </svg>

                        <p
                            key={activeIndex}
                            className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium animate-fade-in"
                        >
                            {active.feedback}
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <p className="font-semibold text-[#1B3A6B] text-sm">{active.name}</p>
                            <p className="text-slate-500 text-sm mt-0.5">
                                {active.role}, {active.company}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <StarRating count={active.rating} />
                            <button
                                onClick={() => setPaused((p) => !p)}
                                className="text-xs text-slate-400 hover:text-[#1B3A6B] transition-colors
                           px-2 py-1 rounded-full border border-slate-200 hover:border-[#1B3A6B]"
                                aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
                            >
                                {paused ? "▶" : "⏸"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile dot nav */}
            <div className="flex justify-center gap-2 mt-6 sm:hidden">
                {testimonials.map((t, i) => (
                    <button
                        key={t.id}
                        onClick={() => navigate(i)}
                        className={`h-2 rounded-full transition-all duration-200 ${i === activeIndex ? "bg-[#1B3A6B] w-5" : "bg-slate-300 w-2"
                            }`}
                        aria-label={`View ${t.company} testimonial`}
                    />
                ))}
            </div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease both; }

        @keyframes progress-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
        </section>
    );
}