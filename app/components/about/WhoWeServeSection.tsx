"use client";
import React, { useState } from "react";

// ── SVG Icon Components (green-toned, matching the screenshot style) ──────────

const GoldSilverRefinersIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="28" width="36" height="10" rx="2" fill="#C6DB5A" opacity="0.85" />
        <rect x="14" y="20" width="24" height="10" rx="2" fill="#BBCF54" opacity="0.9" />
        <rect x="20" y="13" width="12" height="9" rx="2" fill="#A8C040" />
        <circle cx="26" cy="10" r="3" fill="#BBCF54" />
        <rect x="6" y="38" width="40" height="5" rx="1.5" fill="#C6DB5A" opacity="0.5" />
        <path d="M16 28 Q26 22 36 28" stroke="#A8C040" strokeWidth="1.2" fill="none" />
    </svg>
);

const BullionTradingIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="30" width="40" height="9" rx="2" fill="#C6DB5A" opacity="0.7" />
        <rect x="10" y="22" width="32" height="10" rx="2" fill="#BBCF54" opacity="0.9" />
        <rect x="14" y="15" width="24" height="9" rx="2" fill="#A8C040" />
        <rect x="18" y="9" width="16" height="8" rx="2" fill="#BBCF54" />
        <line x1="26" y1="9" x2="26" y2="39" stroke="#C6DB5A" strokeWidth="1" opacity="0.4" />
        <line x1="6" y1="39" x2="46" y2="39" stroke="#A8C040" strokeWidth="1.5" />
    </svg>
);

const JewelleryWholesalersIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shop/building */}
        <rect x="10" y="22" width="32" height="20" rx="2" fill="#e8f5e9" />
        <rect x="10" y="22" width="32" height="20" rx="2" stroke="#C6DB5A" strokeWidth="1.5" />
        {/* Awning */}
        <path d="M8 22 L26 14 L44 22 Z" fill="#C6DB5A" opacity="0.85" />
        {/* Window/display */}
        <rect x="16" y="29" width="8" height="8" rx="1" fill="#C6DB5A" opacity="0.6" />
        <rect x="28" y="29" width="8" height="8" rx="1" fill="#C6DB5A" opacity="0.6" />
        {/* Grid lines on window */}
        <line x1="20" y1="29" x2="20" y2="37" stroke="#A8C040" strokeWidth="0.8" />
        <line x1="16" y1="33" x2="24" y2="33" stroke="#A8C040" strokeWidth="0.8" />
        <line x1="32" y1="29" x2="32" y2="37" stroke="#A8C040" strokeWidth="0.8" />
        <line x1="28" y1="33" x2="36" y2="33" stroke="#A8C040" strokeWidth="0.8" />
        {/* Door */}
        <rect x="22" y="34" width="8" height="8" rx="1" fill="#A8C040" opacity="0.7" />
    </svg>
);

const JewelleryManufacturersIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Factory building */}
        <rect x="6" y="26" width="40" height="18" rx="1.5" fill="#e8f5e9" stroke="#C6DB5A" strokeWidth="1.5" />
        {/* Chimneys */}
        <rect x="12" y="16" width="6" height="12" rx="1" fill="#A8C040" opacity="0.8" />
        <rect x="22" y="19" width="6" height="9" rx="1" fill="#A8C040" opacity="0.8" />
        <rect x="34" y="14" width="6" height="14" rx="1" fill="#A8C040" opacity="0.9" />
        {/* Smoke */}
        <circle cx="15" cy="14" r="2" fill="#C6DB5A" opacity="0.5" />
        <circle cx="25" cy="17" r="2" fill="#C6DB5A" opacity="0.5" />
        <circle cx="37" cy="12" r="2" fill="#C6DB5A" opacity="0.5" />
        {/* Windows */}
        <rect x="10" y="31" width="6" height="6" rx="1" fill="#C6DB5A" opacity="0.6" />
        <rect x="22" y="31" width="6" height="6" rx="1" fill="#C6DB5A" opacity="0.6" />
        <rect x="34" y="31" width="6" height="6" rx="1" fill="#C6DB5A" opacity="0.6" />
    </svg>
);

const LuxuryWatchIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Watch case */}
        <circle cx="26" cy="26" r="14" fill="#e8f5e9" stroke="#C6DB5A" strokeWidth="2" />
        <circle cx="26" cy="26" r="11" fill="white" stroke="#C6DB5A" strokeWidth="1" />
        {/* Crown */}
        <rect x="38" y="23" width="4" height="6" rx="1" fill="#A8C040" />
        {/* Watch hands */}
        <line x1="26" y1="26" x2="26" y2="18" stroke="#A8C040" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="26" x2="32" y2="29" stroke="#A8C040" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="26" cy="26" r="1.5" fill="#A8C040" />
        {/* Hour markers */}
        <line x1="26" y1="16" x2="26" y2="17.5" stroke="#C6DB5A" strokeWidth="1.2" />
        <line x1="26" y1="34.5" x2="26" y2="36" stroke="#C6DB5A" strokeWidth="1.2" />
        <line x1="17" y1="26" x2="18.5" y2="26" stroke="#C6DB5A" strokeWidth="1.2" />
        <line x1="33.5" y1="26" x2="35" y2="26" stroke="#C6DB5A" strokeWidth="1.2" />
        {/* Strap */}
        <rect x="20" y="10" width="12" height="4" rx="1.5" fill="#A8C040" opacity="0.7" />
        <rect x="20" y="38" width="12" height="4" rx="1.5" fill="#A8C040" opacity="0.7" />
    </svg>
);

const InternationalTradersIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Globe */}
        <circle cx="26" cy="26" r="17" fill="#e8f5e9" stroke="#C6DB5A" strokeWidth="1.8" />
        {/* Latitude lines */}
        <ellipse cx="26" cy="26" rx="17" ry="8" fill="none" stroke="#C6DB5A" strokeWidth="1" opacity="0.7" />
        {/* Longitude lines */}
        <ellipse cx="26" cy="26" rx="8" ry="17" fill="none" stroke="#C6DB5A" strokeWidth="1" opacity="0.7" />
        {/* Vertical/horizontal cross lines */}
        <line x1="9" y1="26" x2="43" y2="26" stroke="#C6DB5A" strokeWidth="1" opacity="0.5" />
        <line x1="26" y1="9" x2="26" y2="43" stroke="#C6DB5A" strokeWidth="1" opacity="0.5" />
        {/* Continents (simplified blobs) */}
        <path d="M18 20 Q22 17 25 20 Q24 25 20 24 Z" fill="#A8C040" opacity="0.6" />
        <path d="M28 18 Q33 16 35 21 Q33 26 29 24 Z" fill="#A8C040" opacity="0.6" />
        <path d="M20 27 Q24 26 25 30 Q22 33 19 31 Z" fill="#A8C040" opacity="0.5" />
    </svg>
);

const FamilyOwnedIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House */}
        <path d="M8 28 L26 12 L44 28 Z" fill="#C6DB5A" opacity="0.85" />
        <rect x="12" y="27" width="28" height="18" rx="1.5" fill="#e8f5e9" stroke="#C6DB5A" strokeWidth="1.5" />
        {/* Door */}
        <rect x="21" y="34" width="10" height="11" rx="1.5" fill="#A8C040" opacity="0.8" />
        <circle cx="29" cy="40" r="1" fill="#C6DB5A" />
        {/* Windows */}
        <rect x="14" y="30" width="7" height="7" rx="1" fill="#C6DB5A" opacity="0.6" />
        <rect x="31" y="30" width="7" height="7" rx="1" fill="#C6DB5A" opacity="0.6" />
        {/* Window cross */}
        <line x1="17.5" y1="30" x2="17.5" y2="37" stroke="#A8C040" strokeWidth="0.8" />
        <line x1="14" y1="33.5" x2="21" y2="33.5" stroke="#A8C040" strokeWidth="0.8" />
        <line x1="34.5" y1="30" x2="34.5" y2="37" stroke="#A8C040" strokeWidth="0.8" />
        <line x1="31" y1="33.5" x2="38" y2="33.5" stroke="#A8C040" strokeWidth="0.8" />
    </svg>
);

const OnlineLuxuryIcon = () => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Laptop base */}
        <rect x="6" y="32" width="40" height="4" rx="1.5" fill="#C6DB5A" opacity="0.8" />
        {/* Laptop screen */}
        <rect x="10" y="14" width="32" height="20" rx="2" fill="#e8f5e9" stroke="#C6DB5A" strokeWidth="1.5" />
        {/* Screen content */}
        <rect x="13" y="17" width="26" height="14" rx="1" fill="white" />
        {/* Simulated content lines */}
        <rect x="15" y="19" width="14" height="2" rx="0.5" fill="#C6DB5A" opacity="0.8" />
        <rect x="15" y="23" width="22" height="1.5" rx="0.5" fill="#A8C040" opacity="0.4" />
        <rect x="15" y="26" width="18" height="1.5" rx="0.5" fill="#A8C040" opacity="0.4" />
        {/* Cart icon on screen */}
        <circle cx="32" cy="22" r="4" fill="#A8C040" opacity="0.15" />
        <path d="M29 20 L30 20 L31 24 L34 24" stroke="#A8C040" strokeWidth="1" fill="none" strokeLinecap="round" />
        <circle cx="31.5" cy="25.5" r="0.8" fill="#A8C040" />
        <circle cx="33.5" cy="25.5" r="0.8" fill="#A8C040" />
        {/* Hinge */}
        <rect x="22" y="33" width="8" height="2" rx="0.5" fill="#A8C040" opacity="0.6" />
    </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

interface ServiceCard {
    id: number;
    label: string;
    icon: React.FC;
}

const services: ServiceCard[] = [
    { id: 1, label: "Gold & Silver Refiners", icon: GoldSilverRefinersIcon },
    { id: 2, label: "Bullion Trading Companies", icon: BullionTradingIcon },
    { id: 3, label: "Jewellery Wholesalers & Retailers", icon: JewelleryWholesalersIcon },
    { id: 4, label: "Jewellery Manufacturers", icon: JewelleryManufacturersIcon },
    { id: 5, label: "Luxury Watch Dealers", icon: LuxuryWatchIcon },
    { id: 6, label: "International Precious Metal Traders", icon: InternationalTradersIcon },
    { id: 7, label: "Family-Owned Trading Houses", icon: FamilyOwnedIcon },
    { id: 8, label: "Online Luxury Asset Marketplaces", icon: OnlineLuxuryIcon },
];

// ── Main Component ────────────────────────────────────────────────────────────

const WhoWeServeSection: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="w-full bg-white py-16 px-4">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-[#365693] mb-3 tracking-tight">
                    Who We Serve
                </h2>
                <p className="text-[#4A5565] text-base leading-relaxed">
                    Exclusive advisory services for every entity in the precious metals and luxury
                    <br className="hidden sm:block" /> assets value chain
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
                {services.map((service) => {
                    const Icon = service.icon;
                    const isHovered = hoveredId === service.id;

                    return (
                        <div
                            key={service.id}
                            onMouseEnter={() => setHoveredId(service.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`
                flex flex-col items-center justify-center gap-3
                p-5 rounded-2xl cursor-pointer select-none
                border transition-all duration-200 ease-out
                ${isHovered
                                    ? "border-[#C6DB5A] shadow-lg shadow-[#C6DB5A] -translate-y-1"
                                    : "border-gray-100 shadow-sm bg-white hover:border-[#C6DB5A]"
                                }
              `}
                            style={{ minHeight: "130px" }}
                        >
                            {/* Icon */}
                            <div
                                className={`
                  flex items-center justify-center rounded-xl p-2
                  transition-transform duration-200
                  ${isHovered ? "scale-110" : "scale-100"}
                `}
                            >
                                <Icon />
                            </div>

                            {/* Label */}
                            <p
                                className={`
                  text-center text-xs font-semibold leading-snug
                  transition-colors duration-200
                  ${isHovered ? "text-[#365693]" : "text-[#365693]"}
                `}
                            >
                                {service.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WhoWeServeSection;