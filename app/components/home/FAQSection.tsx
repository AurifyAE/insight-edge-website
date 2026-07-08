"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
    {
        question: "How does UAE Corporate Tax apply to precious metals businesses?",
        answer:
            "Corporate Tax applies to eligible businesses, with industry-specific considerations for bullion trading, refining, jewellery manufacturing, and inventory valuation.",
    },
    {
        question: "Can Insight Edge Global help with Corporate Tax compliance?",
        answer:
            "Yes. We provide Corporate Tax registration, advisory, return preparation, filing, and ongoing compliance support.",
    },
    {
        question: "Is e-invoicing mandatory in the UAE?",
        answer:
            "Yes. The UAE is introducing a mandatory PEPPOL-based e-invoicing framework. We help businesses prepare for compliance.",
    },
    {
        question: "What e-invoicing services do you offer?",
        answer:
            "We provide readiness assessments, ERP advisory, process mapping, implementation support, and compliance guidance.",
    },
    {
        question: "Why is IFRS important for precious metals businesses?",
        answer:
            "IFRS ensures accurate financial reporting, improves transparency, and supports regulatory compliance.",
    },
    {
        question: "Do you provide regulatory and compliance advisory?",
        answer:
            "Yes. We help businesses manage tax, financial reporting, governance, AML/CFT, and regulatory compliance requirements.",
    },
    {
        question: "Can you support businesses during FTA audits?",
        answer:
            "Yes. We assist with documentation, compliance reviews, audit preparation, and responding to FTA requirements.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left: heading */}
                <div>
                    <h2 className="text-[#1E2E4B] font-bold leading-tight tracking-tight text-[32px] sm:text-[40px] lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-[#454748] text-sm sm:text-base leading-relaxed max-w-sm">
                        Got a question? We&apos;ve got the answer. Check out our frequently
                        asked questions below.
                    </p>
                </div>

                {/* Right: accordion */}
                <div>
                    {FAQS.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={faq.question}
                                className="border-b border-gray-200 first:pt-0"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-[#1E2E4B] font-semibold text-base sm:text-base leading-snug">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#1E2E4B] flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {isOpen && (
                                    <p className="text-[#6b6f73] text-sm leading-relaxed pb-5 -mt-2">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
