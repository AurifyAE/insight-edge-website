"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/app/lib/services-data";

export default function ServiceFaqs({ faqs }: { faqs: Faq[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="relative mt-12">
            <h3 className="font-(family-name:--font-heading) text-[20px] font-semibold text-[#1E2E4B] sm:text-[24px]">
                Frequently Asked Questions
            </h3>
            <div className="mt-2 h-px w-12 bg-[#C6DB5A]" />

            <div className="mt-6 overflow-hidden rounded-sm border border-[#1E2E4B]/[0.06] bg-white shadow-[0_15px_40px_-20px_rgba(30,46,75,0.12)]">
                {faqs.map((faq, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div key={faq.question} className="border-b border-[#1E2E4B]/[0.06] last:border-b-0">
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="flex w-full items-start justify-between gap-4 px-6 py-4 text-left"
                                aria-expanded={isOpen}
                            >
                                <span className="text-[14.5px] font-semibold leading-snug text-[#1E2E4B] sm:text-[15px]">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`mt-0.5 h-4 w-4 flex-shrink-0 text-[#576500] transition-transform duration-200 ${
                                        isOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isOpen && (
                                <p className="-mt-1 px-6 pb-4 text-sm leading-relaxed text-[#44474D]">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
