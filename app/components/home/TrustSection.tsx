"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TrustItem {
    icon: string;
    alt: string;
    stat: string;
    description: string;
}

const trustItems: TrustItem[] = [
    {
        icon: "/icons/home/certified.svg",
        alt: "Certified",
        stat: "Certified",
        description: "UAE Registered &\nApproved Audit Firm",
    },
    {
        icon: "/icons/home/precious-metals.svg",
        alt: "Precious Metals",
        stat: "100%",
        description: "Dedicated to Precious\nMetals Sector",
    },
    {
        icon: "/icons/home/compliance-coverage.svg",
        alt: "Compliance Coverage",
        stat: "360°",
        description: "End-to-End Financial &\nCompliance Coverage",
    },
];

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.4,
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // custom spring-like easing
        },
    }),
};

const dividerVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: (i: number) => ({
        scaleY: 1,
        opacity: 1,
        transition: {
            delay: i * 0.3 + 0.3,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const TrustSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, {
        once: true,       // animate only the first time
        margin: "-150px",  // trigger slightly before fully in view
    });

    return (
        <section className="relative w-full overflow-hidden bg-[#eef2f8] py-10 md:py-20 lg:py-30">

            {/* Left BG layer */}
            <div
                className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-auto w-[20%] select-none hidden lg:block"
                aria-hidden="true"
            >
                <img
                    src="/images/home/bg-layer.svg"
                    alt=""
                    className="h-full w-full object-cover object-right"
                    style={{ transform: "scaleX(-1)" }}
                />
            </div>

            {/* Right BG layer */}
            <div
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-auto w-[20%] select-none hidden lg:block"
                aria-hidden="true"
            >
                <img
                    src="/images/home/bg-layer.svg"
                    alt=""
                    className="h-full w-full object-cover object-left"
                />
            </div>


            {/* Cards row */}
            <div
                ref={sectionRef}
                className="relative z-10 mx-auto flex flex-col lg:flex-row max-w-4xl items-center lg:items-stretch justify-center px-6 gap-8 lg:gap-0"
            >

                {trustItems.map((item, index) => (
                    <React.Fragment key={item.stat}>
                        <motion.div
                            className="flex flex-1"
                            custom={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={cardVariants}
                        >
                            <TrustCard item={item} />
                        </motion.div>

                        {/* Vertical divider */}
                        {index < trustItems.length - 1 && (
                            <motion.div
                                className="mx-8 hidden w-px self-stretch bg-gradient-to-b from-transparent via-[#c5d4b0] to-transparent sm:block origin-top"
                                custom={index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={dividerVariants}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

interface TrustCardProps {
    item: TrustItem;
}

const TrustCard: React.FC<TrustCardProps> = ({ item }) => {
    return (
        <div className="group flex flex-1 flex-col items-center gap-4 text-center">

            {/* Outer soft halo + white circle */}
            <div className="relative flex h-60 w-60 sm:h-72 sm:w-72 items-center justify-center">
                {/* Halo rings */}
                <div className="absolute inset-[-8px] rounded-full bg-white/50" />
                <div className="absolute inset-[-4px] rounded-full bg-white/70" />

                {/* Main icon circle */}
                <div className="relative flex flex-col h-60 w-60 sm:h-72 sm:w-72 items-center justify-center rounded-full bg-[#283F67] shadow-[0_6px_32px_0_rgba(90,130,50,0.12)] transition-shadow duration-300 group-hover:shadow-[0_10px_40px_0_rgba(90,130,50,0.22)] gap-2">

                    <img
                        src={item.icon}
                        alt={item.alt}
                        className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="font-bold text-[#C6DB5A] text-[1.4rem] leading-snug tracking-tight">
                        {item.stat}
                    </span>
                    <p className="whitespace-pre-line text-[0.82rem] leading-[1.7] text-white">
                        {item.description}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default TrustSection;