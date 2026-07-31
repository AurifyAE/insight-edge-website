// Lightweight overview-card / nav data for the 9 services, kept separate from
// services-data.ts (which carries every service's full intro/FAQs/checklists,
// ~700KB of text). Client components that only render cards or nav links
// should import from here instead of services-data.ts — importing the full
// array into a "use client" component ships all of it to the browser even
// when only a title and short blurb are rendered.
//
// Keep in sync with the number/id/title/shortIntro/image fields in
// services-data.ts if those change.

export interface ServiceSummary {
    id: string;
    number: string;
    title: string;
    shortIntro: string;
    image: string;
    icon: string;
}

export const servicesSummary: ServiceSummary[] = [
    {
        id: "audit-assurance",
        number: "01",
        title: "Audit & Assurance Services",
        shortIntro:
            "Specialized audit and assurance for the UAE precious metals industry - statutory audits, reviews, and agreed-upon procedures tailored to gold, silver, and other metal transactions.",
        image: "/images/services/audit-and-assurance.jpg",
        icon: "FileCheck2",
    },
    {
        id: "special-audits-risk",
        number: "02",
        title: "Special Audits & Risk Consulting",
        shortIntro:
            "Internal audit, forensic investigation, SOPs, and AML/CFT compliance designed to safeguard assets and drive operational excellence across the precious metals value chain.",
        image: "/images/services/audit-and-assurance-2.jpg",
        icon: "ClipboardCheck",
    },
    {
        id: "compliance-and-responsible",
        number: "03",
        title: "Compliance & Responsible Business",
        shortIntro:
            "Embedding a culture of compliance and responsible conduct - protecting your business, your reputation, and your licence to operate.",
        image: "/images/services/complaince-and-responsible.jpg",
        icon: "ShieldAlert",
    },
    {
        id: "corporate-tax",
        number: "04",
        title: "Corporate Tax Services",
        shortIntro:
            "Industry-specific Corporate Tax advisory and compliance for bullion traders, refineries, manufacturers, wholesalers, and retailers across the UAE.",
        image: "/images/services/Business-strategy-advisory.jpg",
        icon: "FileSignature",
    },
    {
        id: "e-invoicing",
        number: "05",
        title: "E-Invoicing Services",
        shortIntro:
            "Readiness assessment, ERP evaluation, and implementation support for the UAE's mandatory Peppol-based e-invoicing framework, tailored to bullion, refining, and jewellery operations.",
        image: "/images/services/E-invoicing.jpg",
        icon: "ClipboardCheck",
    },
    {
        id: "accounting-mis",
        number: "06",
        title: "Accounting & MIS Services",
        shortIntro:
            "Precise, technology-driven accounting and MIS support for trading, refining, logistics, and storage entities - from bookkeeping and reconciliation to ERP design and IFRS compliance.",
        image: "/images/services/executives-preparing-meeting.jpg",
        icon: "BookOpenCheck",
    },
    {
        id: "business-advisory",
        number: "07",
        title: "Business Strategy Advisory",
        shortIntro:
            "Strategic guidance and specialist advisory services that drive growth, operational excellence, and regulatory confidence across the precious metals industry.",
        image: "/images/services/Business-strategy-advisory.jpg",
        icon: "ShoppingCart",
    },
    {
        id: "taxation",
        number: "08",
        title: "Taxation Services",
        shortIntro:
            "Corporate tax, VAT, BEPS, transfer pricing, PE risk, and tax dispute support - keeping trading houses, refineries, and logistics providers compliant and tax-efficient.",
        image:
            "/images/services/justice-law-concept-gavel-sounding-block-hand-s-male-judge-courtroom-working-with-document-law-books-report-case-table-modern-office.jpg",
        icon: "FileText",
    },
    {
        id: "digital-assets",
        number: "09",
        title: "Digital Assets, Bullion Tokenization & Technology Governance",
        shortIntro:
            "Secure, compliant innovation for bullion tokenization, blockchain custody, AI governance, and cybersecurity - bridging physical bullion with digital infrastructure.",
        image: "/images/services/digitalization-and-tokenisation.jpg",
        icon: "Gem",
    },
];
