"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
    {
        question: "How can I search for properties on your website?",
        answer:
            "Simply use our search bar to filter properties by location, price range, property type, and other criteria.",
    },
    {
        question: "What fees are associated with using your services?",
        answer:
            "Our fee structure depends on the scope of services engaged. Get in touch with our team for a tailored quote.",
    },
    {
        question: "How can I verify the authenticity of property listings?",
        answer:
            "All listings are verified through our due diligence process before being published on the platform.",
    },
    {
        question: "What is your process for international property transactions?",
        answer:
            "We coordinate with cross-border partners and legal advisors to ensure a smooth, compliant transaction process.",
    },
    {
        question: "How can I schedule a property viewing?",
        answer:
            "Contact our team directly through the website or call us to arrange a viewing at a time that suits you.",
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
                        Frequently Ask a Question
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
