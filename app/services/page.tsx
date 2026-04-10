"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SubService {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface Service {
    id: number;
    title: string;
    subtitle: string;
    subServices?: SubService[];
}


function IconSend() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ICON_CLASS = "w-5 h-5 text-[#ABBD4F] flex-shrink-0 mt-0.5";

const services: Service[] = [
    {
        id: 1,
        title: "Audit & Assurance Services",
        subtitle:
            "The highest level of independent assurance — tailored exclusively for the precious metals sector",
        subServices: [
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "Statutory / External Audit",
                description:
                    "Independent examination of financial statements ensuring accuracy, regulatory compliance, and a true & fair view — meeting requirements under Federal Decree Law No. 47 of 2022 and UAE Commercial Companies Law.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "Internal Audit Services",
                description:
                    "Strategic and consultative internal audits covering financial analysis, operational efficiency, risk management, and corporate governance — tailored for DMCC, mainland, and free zone entities.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "Forensic & Investigation Audit",
                description:
                    "In-depth forensic investigations to detect financial irregularities, trace fund flows, and uncover discrepancies in trade, refinery, or warehouse records.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "Inventory Verification",
                description:
                    "Physical verification, valuation assessments, and internal control reviews confirming existence, ownership, and realisable value of gold, silver, and precious metal inventories.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "Supply Chain Audit",
                description:
                    "End-to-end supply chain audit services for precious metals businesses — verifying sourcing integrity, supplier compliance, and adherence to OECD, DMCC, and LBMA standards.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "UAE Ministry of Economy Review",
                description:
                    "Specialist support for Ministry of Economy compliance reviews and inspections — including DNFBP registration obligations, AML/CFT regulatory requirements.",
            },
        ],
    },
    {
        id: 2,
        title: "Special Audits & Risk Consulting",
        subtitle:
            "Protecting assets and driving operational excellence across the precious metals value chain",
        subServices: [
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "Standard Operating Procedures (SOPs)",
                description:
                    "End-to-end process mapping from procurement to trading, with tailored SOPs for operations, finance, and commercial functions, fully aligned with DMCC, OECD, and UAE Ministry of Economy standards for consistency and audit readiness.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "Internal Controls & Governance",
                description:
                    "A focused evaluation of financial systems and reporting structures, with identification and remediation of control weaknesses. It includes KPI benchmarking, performance monitoring, clear role definitions, structured workflows, and resource optimization to strengthen accountability across teams.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "Corporate Governance",
                description:
                    "A structured approach to board composition and governance framework design, including clear delegation of authority and decision-making protocols. It covers governance gap assessments, benchmarking, related party transaction controls, and transparent reporting to shareholders and regulators, aligned with UAE Commercial Companies Law requirements.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "Supply Chain Risk Management",
                description:
                    "Comprehensive supply chain risk management, including end-to-end risk mapping, supplier due diligence, responsible sourcing controls, and TBML vulnerability analysis. It also covers operational resilience, continuity planning, and risk reporting for management and regulators.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "M&A Risk Management",
                description:
                    "Comprehensive due diligence for acquisitions, covering financial and operational risks, target business assessments, integration planning, bullion and refinery valuation risks, post-merger monitoring, and regulatory compliance in transactions.",
            },
            {
                icon: <CheckCircle className={ICON_CLASS} />,
                title: "AI / Tech Governance & Risk",
                description:
                    "AI and technology risk management, including model risk assessment, trading platform and ERP oversight, cybersecurity integration, and data integrity controls. Frameworks ensure regulatory alignment and provide governance for AI, blockchain, tokenization, and digital assets.",
            },
        ]
    },
    {
        id: 3,
        title: "CFO Services",
        subtitle: "Expert-level financial leadership without the cost of a full-time hire",
    },
    {
        id: 4,
        title: "Accounting & MIS Services",
        subtitle:
            "Precise, reliable, technology-driven accounting support ensuring full compliance",
    },
    {
        id: 5,
        title: "Financial Advisory Services",
        subtitle:
            "Specialised advisory to identify growth opportunities and mitigate financial risks",
    },
    {
        id: 6,
        title: "Taxation Services",
        subtitle: "Comprehensive UAE tax compliance and strategic advisory for precious metals",
    },
    {
        id: 7,
        title: "Digital Assets & Tokenization",
        subtitle:
            "Helping precious metals businesses innovate securely with governance frameworks",
    },
];

// ─── Sub-service row ───────────────────────────────────────────────────────────

function SubServiceItem({ item }: { item: SubService }) {
    return (
        <div className="flex gap-3 py-3.5 border-l-2 border-l-[#ABBD4F] border-b border-b-gray-100 last:border-b-0 pl-4 rounded-lg mb-3">
            {item.icon}
            <div>
                <p className="text-sm font-medium text-[#365693] mb-1">{item.title}</p>
                <p className="text-xs leading-relaxed text-[#4A5565]">{item.description}</p>
            </div>
        </div>
    );
}

// ─── Accordion item ────────────────────────────────────────────────────────────

function AccordionItem({ service }: { service: Service }) {
    const [open, setOpen] = useState(service.id === 1);
    const isExpandable = Boolean(service.subServices?.length);

    const numberLabel = String(service.id).padStart(2, "0");

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-2.5">
            {/* Header */}
            <button
                onClick={() => isExpandable && setOpen((v) => !v)}
                className={`w-full flex items-center gap-3.5 px-4 py-4 text-left bg-white transition-colors ${open ? "bg-[#bac48c] " : ""} ${isExpandable ? "cursor-pointer hover:bg-gray-50" : "cursor-default"
                    }`}
                aria-expanded={open}
            >
                {/* Number badge */}
                {open && isExpandable ? (
                    <span className="w-9 h-9 rounded-full bg-[#365693] text-[#ABBD4F] text-xs font-medium flex items-center justify-center flex-shrink-0">
                        {numberLabel}
                    </span>
                ) : (
                    <span className="w-9 h-9 rounded-full border-2 border-[#ABBD4F] text-[#365693] text-xs font-medium flex items-center justify-center flex-shrink-0">
                        {numberLabel}
                    </span>
                )}

                {/* Text */}
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#365693]">{service.title}</p>
                    <p className="text-xs text-[#4A5565] mt-0.5 leading-snug">{service.subtitle}</p>
                </div>

                {/* Chevron */}
                {isExpandable && (
                    <ChevronDown
                        className={`w-4 h-4 text-[#ABBD4F] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""
                            }`}
                    />
                )}
            </button>

            {/* Body */}
            {isExpandable && open && (
                <div className="px-4 pb-4 bg-white">
                    {service.subServices!.map((sub) => (
                        <SubServiceItem key={sub.title} item={sub} />
                    ))}
                </div>
            )}
        </div>
    );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ServicePage() {
    return (
        <section className="">
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


            <div className="max-w-4xl mx-auto px-4 py-8">
                {services.map((service) => (
                    <AccordionItem key={service.id} service={service} />
                ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 bg-[#ABBD4F] py-8">
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