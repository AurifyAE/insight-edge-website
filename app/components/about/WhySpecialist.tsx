// WhySpecialist.tsx
import { Lock, FileText, Package, RefreshCw, TrendingDown } from "lucide-react";

const REASONS = [
    {
        icon: Lock,
        title: "High-value transactions",
        description: "with inherent AML/CFT vulnerabilities",
    },
    {
        icon: FileText,
        title: "Complex VAT & Corporate Tax rules",
        description: "specific to gold and luxury assets",
    },
    {
        icon: Package,
        title: "Inventory valuation challenges",
        description: "unique to bullion, scrap and jewellery",
    },
    {
        icon: RefreshCw,
        title: "Transfer Pricing requirements",
        description: "for related-party precious metal trading",
    },
    {
        icon: TrendingDown,
        title: "Global market volatility",
        description: "impacting pricing, hedging and profitability",
    },
];

export default function WhySpecialist() {
    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">

                <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a6b] text-center mb-10">
                    Why an Exclusive Precious Metals Specialist?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {REASONS.map(({ icon: Icon, title, description }, i) => {
                        const isLast = i === REASONS.length - 1;
                        const isOdd = REASONS.length % 2 !== 0;
                        return (
                            <div
                                key={title}
                                className={`flex items-start gap-4 border border-gray-200 rounded-xl px-5 py-4 hover:border-[#8B9C32]/50 border-l-4 border-l-[#ABBD4F] hover:shadow-sm transition-all duration-200 ${isLast && isOdd ? "sm:col-span-2 sm:max-w-[calc(50%-8px)]" : ""
                                    }`}
                            >
                                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#f0f4fb] flex items-center justify-center mt-0.5">
                                    <Icon size={18} className="text-[#ABBD4F]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-[14px] font-semibold text-[#365693] mb-0.5">
                                        {title}
                                    </p>
                                    <p className="text-[13px] text-g[#4A5565] leading-snug">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}