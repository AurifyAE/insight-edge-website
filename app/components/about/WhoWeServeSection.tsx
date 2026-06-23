"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
    Coins,
    Banknote,
    Store,
    Factory,
    Watch,
    Globe2,
    Home,
    ShoppingCart,
    type LucideIcon,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

interface ServiceCard {
    id: number;
    label: string;
    icon: LucideIcon;
}

const services: ServiceCard[] = [
    { id: 1, label: "Gold & Silver Refiners", icon: Coins },
    { id: 2, label: "Bullion Trading Companies", icon: Banknote },
    { id: 3, label: "Jewellery Wholesalers & Retailers", icon: Store },
    { id: 4, label: "Jewellery Manufacturers", icon: Factory },
    { id: 5, label: "Luxury Watch Dealers", icon: Watch },
    { id: 6, label: "International Precious Metal Traders", icon: Globe2 },
    { id: 7, label: "Family-Owned Trading Houses", icon: Home },
    { id: 8, label: "Online Luxury Asset Marketplaces", icon: ShoppingCart },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.06,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

// ── Main Component ────────────────────────────────────────────────────────────

const WhoWeServeSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="w-full bg-white py-24 px-4">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-[#365693] mb-3 tracking-tight">
                    Who We Serve
                </h2>
                <p className="text-[#4A5565] text-sm md:text-base leading-relaxed">
                    Exclusive advisory services for every entity in the precious metals and luxury
                    <br className="hidden sm:block" /> assets value chain
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
                {services.map((service, i) => {
                    const Icon = service.icon;
                    const bgImage = i % 2 === 0 ? "bg-img-1.jpeg" : "bg-img-2.jpeg";

                    return (
                        <motion.button
                            key={service.id}
                            type="button"
                            custom={i}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={fadeUp}
                            className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl cursor-pointer select-none shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C6DB5A]/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6DB5A]"
                            style={{ minHeight: "220px" }}
                        >
                            {/* Background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                                style={{ backgroundImage: `url(/images/home/${bgImage})` }}
                            />
                            {/* Navy overlay for readability */}
                            <div className="absolute inset-0 bg-[#1E2E4B]/75 transition-colors duration-200 group-hover:bg-[#1E2E4B]/85" />

                            {/* Icon */}
                            <div className="relative z-10 flex items-center justify-center rounded-xl p-2 transition-transform duration-200 group-hover:scale-110">
                                <Icon className="h-9 w-9 text-[#C6DB5A]" strokeWidth={1.5} />
                            </div>

                            {/* Label */}
                            <p className="relative z-10 text-center text-sm md:text-base font-semibold leading-snug text-white px-5">
                                {service.label}
                            </p>
                        </motion.button>
                    );
                })}
            </div>
        </section>
    );
};

export default WhoWeServeSection;
