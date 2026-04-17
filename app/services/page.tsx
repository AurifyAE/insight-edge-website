import Link from "next/link";
import { generateMetadata } from "@/seo.config";
import ServicesAccordion from "@/app/components/services/ServicesAccordion";

export const metadata = generateMetadata("services");

function IconSend() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    );
}

// ─── Page (Server Component) ──────────────────────────────────────────────────

export default function ServicePage() {
    return (
        <section>
            {/* ── HERO BANNER ─────────────────────────────── */}
            <div
                style={{
                    background: "linear-gradient(135deg, #2e4a82 0%, #3a5a9b 60%, #2e5a8e 100%)",
                }}
                className="px-8 pt-30 pb-12"
            >
                <div className="max-w-[900px] mx-auto">
                    <h1 className="text-[32px] font-bold text-white leading-tight mb-2">
                        Our Services
                    </h1>
                    <p className="text-[#a4bde0] text-[13.5px] leading-relaxed max-w-[320px]">
                        Comprehensive financial and compliance solutions tailored exclusively for the precious metals industry
                    </p>
                </div>
            </div>

            {/* ── ACCORDION (Client Component) ────────────── */}
            <ServicesAccordion />

            {/* ── CTA STRIP ───────────────────────────────── */}
            <div className="flex flex-col items-center justify-center gap-4 bg-[#ABBD4F] text-center px-4 py-8">
                <h2 className="text-3xl font-bold text-[#365693]">Need a Customized Solution?</h2>
                <p className="text-sm text-white">Every precious metals business is unique. Let's discuss your specific needs.</p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#365693] text-white rounded-lg hover:bg-[#2e4a82] transition-colors"
                >
                    Contact Our Team
                    <IconSend />
                </Link>
            </div>
        </section>
    );
}