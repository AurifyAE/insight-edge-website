"use client";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="w-full bg-[#ABBD4F] py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-[#365693] mb-4">
                    Ready to Safeguard Your Value?
                </h2>

                {/* Subtext */}
                <p className="text-sm md:text-base text-white/90 mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can support your precious metals business with
                    expert financial and compliance advisory
                </p>

                {/* Button */}
                <button className="inline-flex items-center gap-2 bg-[#283F67] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#283F67]/80 transition">
                    Contact Us Today
                    <ArrowRight size={16} />
                </button>
            </div>
        </section>
    );
}