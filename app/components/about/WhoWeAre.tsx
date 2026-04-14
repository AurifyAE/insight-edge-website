// WhoWeAre.tsx
import { ShieldCheck, Target, Users } from "lucide-react";

const CORE_VALUES = [
    {
        icon: ShieldCheck,
        title: "Approachable",
        description: "We make complex processes transparent and accessible",
    },
    {
        icon: Target,
        title: "Passionate",
        description: "Dedicated exclusively to precious metals expertise",
    },
    {
        icon: Users,
        title: "Impactful",
        description:
            "Bringing clarity, accuracy, and confidence to every engagement",
    },
];

export default function WhoWeAre() {
    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left — text */}
                <div>
                    <h2 className="text-3xl font-bold text-[#1e3a6b] mb-6">
                        Who We Are
                    </h2>
                    <p className="text-[15px] text-gray-600 leading-relaxed mb-5">
                        Insight Edge Global LLC is a UAE-registered audit and advisory firm with exclusive focus on the precious metals industry from gold and silver trading to refining, logistics, and storage.
                    </p>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                        We deliver the depth and rigor of leading global advisory practices, combined with the agility and sector-focused expertise that only a specialist firm can offer.
                    </p>
                </div>

                {/* Right — core values card */}
                <div className="rounded-2xl bg-gradient-to-b from-[#365693] to-[#2A4575] p-8">
                    <h3 className="text-2xl font-semibold text-[#ABBD4F] mb-7">
                        Our Core Values
                    </h3>
                    <ul className="flex flex-col gap-6">
                        {CORE_VALUES.map(({ icon: Icon, title, description }) => (
                            <li key={title} className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-full border border-[#ABBD4F]/50 flex items-center justify-center mt-0.5">
                                    <Icon size={24} className="text-[#ABBD4F]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-[14px] font-semibold text-white mb-0.5">
                                        {title}
                                    </p>
                                    <p className="text-[13px] text-blue-200/70 leading-snug">
                                        {description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* ── Our Mission Card ── */}
            <div className="max-w-5xl mx-auto pt-20">
                <div
                    className="rounded-2xl border border-[#e2e8f0] bg-white px-8 py-7"
                    style={{ borderLeft: "4px solid #ABBD4F" }}
                >
                    <h3
                        className="font-semibold mb-3 text-2xl text-[#1e3a6e]"
                    >
                        Our Mission
                    </h3>
                    <p
                        className="text-[#364153] text-[15px] leading-relaxed max-w-[680px]"
                    >
                        To make complex financial and compliance processes transparent, efficient, and secure - helping precious metals businesses stay ahead in an ever-evolving, tightly regulated market. We bring clarity, accuracy, and confidence to every engagement.
                    </p>
                </div>
            </div>
        </section>
    );
}