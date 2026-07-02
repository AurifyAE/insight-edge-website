// ─── Types ────────────────────────────────────────────────────────────────────

export interface ChecklistGroup {
    heading?: string;
    items: string[];
}

export interface SubService {
    title: string;
    subtitle?: string;
    icon: string; // lucide icon name
    description?: string;
    checklist?: ChecklistGroup[];
    chips?: string[];
}

export interface ServiceFeature {
    title: string;
    description: string;
}

export interface ExtraSection {
    heading: string;
    body: string | string[];
}

export interface RateBand {
    rate: string;
    label: string;
}

export interface Faq {
    question: string;
    answer: string;
}

export interface Milestone {
    date: string;
    description: string;
}

export interface ServiceSectionData {
    number: string;
    id: string;
    title: string;
    shortIntro: string;
    intro: string;
    image: string;
    subServices: SubService[];
    features?: ServiceFeature[];
    extraSections?: ExtraSection[];
    highlights?: string[];
    rateBands?: RateBand[];
    faqs?: Faq[];
    timeline?: Milestone[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const servicesData: ServiceSectionData[] = [
    {
        number: "01",
        id: "audit-assurance",
        image: "/images/services/audit-and-assurance.jpg",
        title: "Audit & Assurance Services",
        shortIntro:
            "Specialized audit and assurance for the UAE precious metals industry - statutory audits, reviews, and agreed-upon procedures tailored to gold, silver, and other metal transactions.",
        intro:
            "As one of the registered and approved audit firms in the UAE, we provide specialized audit and assurance services exclusively to businesses in the precious metals industry - across the mainland and free trade zones. Until a few years ago, statutory audits in the UAE were often viewed as procedural - primarily for license renewal or bank compliance. With the implementation of Value Added Tax (VAT) and Corporate Tax, the regulatory landscape has evolved significantly. Under Article 20 of Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses, taxable income must be determined based on adequate, standalone financial statements prepared in accordance with recognized accounting standards in the UAE. We partner closely with clients in the precious metals sector to determine the appropriate level of assurance - statutory audit, review, agreed-upon procedures, or specialized financial analysis related to gold, silver, or other precious metal transactions - tailored to your operational and compliance needs.",
        subServices: [
            {
                title: "Statutory / External Audit",
                icon: "FileCheck2",
                description:
                    "An audit represents the highest level of assurance an accounting and audit firm can provide. Our procedures go beyond verifying figures - we analyze what the data reveals, ensuring financial statements accurately reflect profitability, financial position, and cash flows in accordance with accepted accounting standards.",
            },
            {
                title: "Specialized Industry Audit Teams",
                icon: "Users",
                description:
                    "Each business in the precious metals value chain - refining, trading, logistics, storage - faces unique challenges. We assemble specialized teams to determine the right level of service: statutory audit, limited review, special-purpose audit, financial analysis, or forecast reporting.",
            },
            {
                title: "Stronger Internal Controls",
                icon: "ShieldCheck",
                description:
                    "We evaluate your internal control environment - financial systems, operational processes, and reporting structures - identifying weaknesses and implementing improvements that minimize risk and protect against irregularities.",
            },
            {
                title: "Regulatory Compliance",
                icon: "Scale",
                description:
                    "Regular auditing ensures compliance with UAE laws, FTA regulations, and international standards including IFRS, OECD guidelines, and DMCC's Good Delivery Rules - enhancing investor confidence and protecting against penalties.",
            },
            {
                title: "Fraud-Proofing & Traceability",
                icon: "Fingerprint",
                description:
                    "Our rigorous procedures ensure every transaction - from sourcing to sale - is accurately documented and traceable, protecting your business from financial loss and strengthening credibility across the global supply chain.",
            },
            {
                title: "Analysis & Precision Budget Planning",
                icon: "LineChart",
                description:
                    "By analyzing financial statements and cash flow patterns, we identify inefficiencies and deliver the financial intelligence that supports accurate budgeting, cost control, and resource allocation.",
            },
        ],
        features: [
            { title: "A clearer view", description: "of business finances and cash flows" },
            { title: "Expert guidance", description: "for planning, forecasting & budgeting" },
            { title: "MIS reporting", description: "preparation and analysis" },
            { title: "System enhancement", description: "accounting systems & internal controls" },
        ],
        extraSections: [
            {
                heading: "What Is Auditing?",
                body: [
                    "Auditing involves an independent examination of an entity's financial records, including accounts, books, supporting documents, and statutory registers, to determine its true financial position.",
                    "In the precious metals industry, this process extends to verifying trade records, refinery reports, stock movements, and compliance with responsible sourcing standards.",
                    "The primary objective is to ensure that financial statements present a true and fair view of the company's financial health. Auditors at Insight Edge Global LLC adhere strictly to international auditing standards, UAE laws, and industry-specific compliance frameworks. Upon completion, we provide a detailed report outlining our procedures, findings, and professional opinion - delivering assurance to shareholders, investors, and regulators alike.",
                ],
            },
            {
                heading: "Why Auditing Matters",
                body: [
                    "Auditing is the independent examination of a company's financial statements to assess their accuracy and reliability. In the precious metals industry, this process is especially critical - ensuring transparency in sourcing, trading, and financial reporting. Auditing not only prevents errors and fraud but also builds stakeholder confidence and ensures compliance with UAE regulatory frameworks.",
                    "With the implementation of the UAE Commercial Companies Law and the Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses, maintaining audited financial statements has become mandatory for most businesses. For companies operating in or affiliated with free zones such as DMCC, DAFZA, or Sharjah Airport Free Zone, regular statutory audits are now an essential element of compliance and corporate governance.",
                ],
            },
        ],
    },
    {
        number: "02",
        id: "special-audits-risk",
        image: "/images/services/audit-and-assurance-2.jpg",
        title: "Special Audits & Risk Consulting",
        shortIntro:
            "Internal audit, forensic investigation, SOPs, and AML/CFT compliance designed to safeguard assets and drive operational excellence across the precious metals value chain.",
        intro:
            "Our Special Audits and Risk Consulting services safeguard the assets of organizations operating within the precious metals industry and drive operational excellence - combining deep industry insight with technical expertise across trading, refining, and logistics.",
        subServices: [
            {
                title: "Internal Audit Services",
                icon: "ClipboardCheck",
                description:
                    "Comprehensive, strategic and consultative internal audits tailored to the precious metals sector - whether operating in the mainland, DMCC, or other UAE free zones.",
                checklist: [
                    {
                        heading: "Key Areas Covered",
                        items: [
                            "Financial Analysis & cash flow review",
                            "Regulatory Compliance (UAE, DMCC, FTA)",
                            "Operational Efficiency optimization",
                            "Risk Management frameworks",
                            "Corporate Governance evaluation",
                        ],
                    },
                    {
                        heading: "Benefits",
                        items: [
                            "Compliance Assurance - preventing penalties and reputational harm",
                            "Clear Benchmarks - KPIs aligned to strategic and regulatory goals",
                            "Expert Insight - specialized precious metals domain expertise",
                            "Independent Evaluation - unbiased review of internal processes",
                            "Ongoing Monitoring - periodic audits for proactive corrections",
                            "Staff Accountability - transparency in high-value transactions",
                            "Better Role Clarity - structured workflows & responsibilities",
                            "Resource Optimization - minimize wastage, optimize cash & inventory",
                        ],
                    },
                ],
            },
            {
                title: "Investigation & Forensic Audit",
                icon: "Search",
                description:
                    "In-depth investigation and forensic audit services to detect and address financial irregularities and potential fraud - tracing fund flows and uncovering discrepancies in trade, refining, or warehouse records.",
                chips: [
                    "Fraud investigations & asset misappropriation",
                    "Suspicious transaction audits (AML/CFT)",
                    "Financial statement manipulation reviews",
                    "Regulatory inquiry & litigation support",
                ],
            },
            {
                title: "Standard Operating Procedures (SOPs)",
                icon: "ListTree",
                description:
                    "We design and document customized SOPs for operational, financial, commercial, and administrative functions - performing full process mapping from procurement and refining to trading and logistics, aligned with DMCC, OECD Responsible Sourcing, and UAE Ministry of Economy requirements.",
            },
            {
                title: "AML / CFT Regulatory Compliance",
                icon: "ShieldAlert",
                description:
                    "We assist clients in developing, implementing, and maintaining comprehensive AML/CFT policies, procedures, and controls - aligned with the UAE Executive Office for AML/CFT, Central Bank of the UAE, and FATF.",
                chips: [
                    "AML/CFT policy & procedural drafting",
                    "Risk-based AML assessments",
                    "Sanctions & TBML controls",
                    "OECD Responsible Sourcing compliance",
                    "LBMA Responsible Gold/Silver/PGM advisory",
                    "DMCC, Central Bank & Free Zone compliance",
                    "Compliance audits & remediation",
                    "Staff training programs",
                    "Corporate governance & board advisory",
                ],
            },
        ],
        extraSections: [
            {
                heading: "AML/CFT Regulatory Standards Alignment",
                body: "We align all AML/CFT compliance solutions with the standards set by the UAE Executive Office for AML/CFT, the Central Bank of the UAE, and the Financial Action Task Force (FATF) - giving precious metals businesses a defensible, internationally recognized compliance posture.",
            },
        ],
    },
    {
        number: "03",
        id: "cfo-services",
        image: "/images/services/special-CFO-services.jpg",
        title: "CFO Services",
        shortIntro:
            "Outsourced and part-time CFO expertise for precious metal trading, refining, logistics, and storage businesses - at a fraction of the cost of a full-time hire.",
        intro:
            "Growing businesses in the precious metals sector often reach a stage where the financial complexities of operations require strategic CFO oversight - yet a full-time hire may not be cost-effective. Our outsourced and part-time CFO services deliver full-time CFO expertise at a fraction of the cost.",
        subServices: [
            {
                title: "Financial Strategy & Transformation",
                icon: "TrendingUp",
                description:
                    "We identify gaps in your financial structure and develop a clear roadmap for improvement - from trade finance to metal inventory valuation - ensuring your finance function evolves with operational goals and regulatory obligations.",
            },
            {
                title: "Treasury & Working Capital Optimization",
                icon: "Wallet",
                description:
                    "Efficient treasury and cash flow models to maintain liquidity, manage trade receivables, and optimize capital utilization - ensuring stability in a price-sensitive, margin-driven industry.",
            },
            {
                title: "Debt, Credit & Financing Advisory",
                icon: "Landmark",
                description:
                    "Our specialists evaluate financing options, structure credit facilities, and advise on trade finance solutions aligned with the capital needs of your precious metals operations.",
            },
            {
                title: "Integrated Performance Management",
                icon: "Gauge",
                description:
                    "We establish strong financial governance frameworks and performance metrics, aligning operational results with your strategic objectives for consistent growth and compliance.",
            },
            {
                title: "M&A Support",
                icon: "Handshake",
                description:
                    "Whether expanding into refining, forming a joint venture, or acquiring a trading entity, we provide expert financial due diligence and integration support for smooth, profitable transitions.",
            },
        ],
        features: [
            { title: "Cash flow analysis", description: "specific to precious metals operations" },
            { title: "Investment decisions", description: "strategic planning & forecasting" },
            { title: "Contract review", description: "trading agreements & supplier terms" },
            { title: "Bank liaison", description: "advisors, insurers & regulators" },
        ],
        extraSections: [
            {
                heading: "CFO Services Consultation",
                body: "Our CFO services are powered by deep industry expertise, financial acumen, and a thorough understanding of UAE regulatory frameworks - including DMCC, FTA, and AML/CFT compliance. Our CFO professionals stay ahead of evolving financial and tax trends, enabling us to deliver tailored, practical solutions to your most pressing challenges - whether you're scaling operations, restructuring, or seeking to enhance financial performance. We work alongside you as a strategic financial partner, ensuring your business operates with efficiency, foresight, and full compliance in one of the UAE's most dynamic and highly regulated industries.",
            },
        ],
    },
    {
        number: "04",
        id: "corporate-tax",
        image: "/images/services/Business-strategy-advisory.jpg",
        title: "Corporate Tax Services",
        shortIntro:
            "Industry-specific Corporate Tax advisory and compliance for bullion traders, refineries, manufacturers, wholesalers, and retailers across the UAE.",
        intro:
            "The UAE Corporate Tax regime has transformed the compliance landscape for precious metals businesses. From bullion traders and gold dealers to refineries, jewellery manufacturers, wholesalers, and retailers, businesses must navigate complex tax obligations while maintaining operational efficiency. At Insight Edge Global, we specialize exclusively in the Precious Metals & Jewellery Industry, helping businesses manage Corporate Tax obligations, optimize tax positions, strengthen documentation, and remain fully compliant with Federal Tax Authority (FTA) requirements.",
        rateBands: [
            { rate: "0%", label: "Taxable Income up to AED 375,000" },
            { rate: "9%", label: "Taxable Income exceeding AED 375,000" },
        ],
        subServices: [
            {
                title: "Corporate Tax Registration",
                icon: "FileSignature",
                description:
                    "End-to-end Corporate Tax registration and TRN acquisition with the Federal Tax Authority.",
            },
            {
                title: "Corporate Tax Health Check",
                icon: "Stethoscope",
                description:
                    "Comprehensive review of your current tax position, accounting practices, inventory valuation methods, and compliance readiness.",
            },
            {
                title: "Corporate Tax Return Preparation & Filing",
                icon: "FileText",
                description:
                    "Accurate preparation and submission of Corporate Tax returns, ensuring compliance with UAE regulations and industry-specific requirements.",
            },
            {
                title: "Precious Metals Tax Impact Assessment",
                icon: "Gem",
                description:
                    "Evaluate how Corporate Tax affects bullion trading, refining, manufacturing, wholesale, and retail operations.",
            },
            {
                title: "Free Zone Corporate Tax Advisory",
                icon: "Landmark",
                description:
                    "Assessment of Qualifying Free Zone Person eligibility and maintenance of compliance requirements.",
            },
            {
                title: "Transfer Pricing & Related Party Transactions",
                icon: "ArrowLeftRight",
                description:
                    "Preparation of transfer pricing documentation and review of intercompany transactions to meet arm's length requirements.",
            },
            {
                title: "Tax Accounting & Deferred Tax Advisory",
                icon: "Calculator",
                description:
                    "Support for IFRS-compliant tax accounting, deferred tax calculations, and financial statement disclosures.",
            },
            {
                title: "Tax Audit & FTA Support",
                icon: "Gavel",
                description:
                    "Representation and assistance during FTA reviews, audits, investigations, and voluntary disclosure processes.",
            },
            {
                title: "Tax Risk Management",
                icon: "ShieldAlert",
                description:
                    "Identification and mitigation of compliance risks before they become costly regulatory issues.",
            },
        ],
        features: [
            { title: "Industry Expertise", description: "Bullion trading, refining, manufacturing & supply chains" },
            { title: "Regulatory Knowledge", description: "Corporate Tax regulations, FTA guidance & Cabinet Decisions" },
            { title: "Data-Driven Analysis", description: "Inventory, trading margins & transaction flows" },
            { title: "Audit-Ready Documentation", description: "Working papers built to withstand regulatory scrutiny" },
        ],
        extraSections: [
            {
                heading: "Why Corporate Tax Matters for Precious Metals Businesses",
                body: [
                    "The precious metals industry faces unique tax and reporting challenges: high-volume trading transactions, precious metal inventory valuation complexities, hedging and price fluctuation impacts, related-party and international transactions, refining and manufacturing cost allocations, import, export, and re-export structures, Free Zone tax considerations, and transfer pricing documentation requirements.",
                    "Proper tax planning and compliance are essential to avoid penalties, protect margins, and support sustainable growth.",
                ],
            },
            {
                heading: "Why Corporate Tax Compliance Is Critical",
                body: [
                    "Avoid Penalties - failure to register, file, or maintain proper records can result in significant penalties and compliance risks.",
                    "Protect Profitability - proper tax planning helps preserve margins in an industry heavily impacted by commodity price fluctuations.",
                    "Reduce Audit Risk - strong documentation and compliant reporting reduce exposure to regulatory disputes and tax adjustments.",
                    "Improve Governance - establishing robust tax controls strengthens overall financial management and stakeholder confidence.",
                    "Support Business Expansion - a strong compliance framework enables smoother growth, financing, and international business operations.",
                ],
            },
        ],
        highlights: [
            "Built for the Precious Metals Industry - unlike general consulting firms, we focus on the unique financial, regulatory, and operational challenges of the precious metals and jewellery sector",
            "Industry-Focused Specialists - our team understands bullion trading, refining operations, manufacturing processes, inventory controls, and industry reporting requirements",
            "End-to-End Compliance Support - from tax registration and impact assessments to filing, audits, and ongoing advisory",
            "Integrated Advisory Approach - Corporate Tax, VAT, IFRS, Internal Audit, ERP Advisory, E-Invoicing, and Compliance Services under one roof",
            "Trusted Industry Partner - helping precious metals businesses navigate evolving regulations with confidence and clarity",
        ],
        faqs: [
            {
                question: "Does Corporate Tax apply to bullion and gold trading businesses?",
                answer:
                    "Yes. Corporate Tax applies to taxable income generated by bullion trading, jewellery businesses, refineries, manufacturers, wholesalers, and retailers operating in the UAE.",
            },
            {
                question: "How does Corporate Tax affect precious metals inventory?",
                answer:
                    "Inventory valuation methods, stock movements, unrealized gains, and cost allocation practices can significantly impact taxable income calculations.",
            },
            {
                question: "Can Free Zone precious metals businesses benefit from 0% Corporate Tax?",
                answer:
                    "Potentially, provided they meet the requirements applicable to Qualifying Free Zone Persons and maintain compliance with relevant regulations.",
            },
            {
                question: "Are transfer pricing rules applicable to precious metals businesses?",
                answer:
                    "Yes. Businesses with related-party transactions must comply with UAE transfer pricing requirements and maintain appropriate documentation.",
            },
            {
                question: "What records should precious metals businesses maintain?",
                answer:
                    "Businesses should maintain complete accounting records, inventory reports, transaction documentation, sourcing records, contracts, and supporting tax documentation.",
            },
        ],
    },
    {
        number: "05",
        id: "e-invoicing",
        image: "/images/services/E-invoicing.jpg",
        title: "E-Invoicing Services",
        shortIntro:
            "Readiness assessment, ERP evaluation, and implementation support for the UAE's mandatory Peppol-based e-invoicing framework, tailored to bullion, refining, and jewellery operations.",
        intro:
            "The UAE is introducing a mandatory e-invoicing framework that will fundamentally change how precious metals businesses issue, exchange, and report invoices. For bullion traders, gold dealers, refineries, jewellery manufacturers, wholesalers, and retailers, e-invoicing is more than a technology upgrade - it is a compliance requirement that impacts taxation, inventory controls, transaction transparency, and financial reporting. Insight Edge Global helps precious metals businesses assess readiness, upgrade systems, implement compliant processes, and prepare for the UAE's e-invoicing mandate.",
        subServices: [
            {
                title: "E-Invoicing Readiness Assessment",
                icon: "ClipboardCheck",
                description:
                    "Comprehensive review of your ERP, accounting systems, invoicing processes, master data, and compliance readiness.",
            },
            {
                title: "ERP & Accounting System Evaluation",
                icon: "Cpu",
                description:
                    "Assessment of whether your current ERP can support UAE e-invoicing requirements, structured invoice formats, and integration requirements.",
            },
            {
                title: "Invoice Process Mapping",
                icon: "ListTree",
                description:
                    "Review and redesign of invoice workflows across trading, refining, manufacturing, wholesale, and retail operations.",
            },
            {
                title: "Master Data Cleansing",
                icon: "FolderTree",
                description: "Validation and standardization of customer, supplier, and product master data.",
                checklist: [
                    {
                        items: [
                            "Customer master data",
                            "Supplier records",
                            "TRN information",
                            "Product and inventory classifications",
                            "VAT categories",
                        ],
                    },
                ],
            },
            {
                title: "E-Invoicing Compliance Framework",
                icon: "ShieldCheck",
                description:
                    "Development of internal controls, approval workflows, and governance structures to support ongoing compliance.",
            },
            {
                title: "System Integration Advisory",
                icon: "ArrowLeftRight",
                description:
                    "Support for integration between ERP systems, invoicing platforms, and accredited service providers.",
            },
            {
                title: "E-Invoicing Implementation Support",
                icon: "Rocket",
                description:
                    "End-to-end guidance during implementation, testing, deployment, and post-go-live stabilization.",
            },
            {
                title: "Compliance Monitoring",
                icon: "Gauge",
                description: "Ongoing support to ensure invoice accuracy, data quality, and regulatory compliance.",
            },
            {
                title: "E-Invoicing Challenges for Precious Metal Refineries",
                icon: "Flame",
                description:
                    "Provisional invoices, toll refining, export compliance, and price fluctuations create unique invoicing demands for refineries.",
                checklist: [
                    {
                        items: [
                            "Managing invoices based on metal purity, assay results, and fine weight",
                            "Handling provisional invoices, credit notes, and final settlement adjustments",
                            "Supporting toll refining where only refining services are invoiced",
                            "Managing export compliance, VAT, and customs documentation",
                            "Accounting for precious metal price fluctuations during invoicing",
                        ],
                    },
                ],
            },
            {
                title: "E-Invoicing Challenges for Bullion Trading",
                icon: "TrendingUp",
                description:
                    "Real-time pricing and high-value transactions require precise capture of spot value, premiums, and contract terms.",
                checklist: [
                    {
                        items: [
                            "Real-time pricing linked to gold and silver market rates",
                            "Capturing spot value, premiums, insurance, logistics, and brokerage charges",
                            "Ensuring compliance for high-value bullion transactions",
                            "Managing varying VAT treatments, reverse charge, and export rules",
                            "Supporting forward contracts and different contract, invoice, and delivery dates",
                        ],
                    },
                ],
            },
            {
                title: "E-Invoicing Challenges for Jewellery & Precious Metal Manufacturing",
                icon: "Hammer",
                description:
                    "Job work, batch tracking, and multi-component pricing add complexity to manufacturing invoices.",
                checklist: [
                    {
                        items: [
                            "Separating raw material, making charges, gemstones, and wastage in invoices",
                            "Managing job work where customer-owned metal is used",
                            "Tracking production losses, metal reconciliation, and inventory",
                            "Integrating ERP with batch, lot, and purity tracking",
                            "Handling multiple tax categories within a single invoice",
                        ],
                    },
                ],
            },
            {
                title: "E-Invoicing Challenges for Jewellery Retailers & Wholesalers",
                icon: "Store",
                description:
                    "Multi-branch synchronization and varied transaction types make retail and wholesale invoicing especially complex.",
                checklist: [
                    {
                        items: [
                            "Managing complex invoices with gold, diamonds, gemstones, making charges, and discounts",
                            "Supporting jewellery exchange, buyback, and trade-in transactions",
                            "Synchronizing invoices across multiple branches and showrooms",
                            "Handling repair orders, custom jewellery, and advance payments efficiently",
                        ],
                    },
                ],
            },
        ],
        features: [
            { title: "Transaction Transparency", description: "Full visibility across trading, refining, manufacturing & retail" },
            { title: "Reduced Compliance Risk", description: "Minimized errors in VAT reporting & documentation" },
            { title: "Audit Readiness", description: "Structured, traceable, and easily retrievable invoice records" },
            { title: "Stronger Financial Controls", description: "Improved governance across inventory, sales & finance" },
        ],
        timeline: [
            { date: "1 July 2026", description: "Voluntary pilot and testing phase begins." },
            {
                date: "30 October 2026",
                description: "Businesses with annual revenue exceeding AED 50 million must appoint an Accredited Service Provider (ASP).",
            },
            {
                date: "1 January 2027",
                description: "Mandatory e-invoicing go-live for businesses with annual revenue exceeding AED 50 million.",
            },
            {
                date: "31 March 2027",
                description: "Businesses with annual revenue below AED 50 million must appoint an Accredited Service Provider (ASP).",
            },
            {
                date: "1 July 2027",
                description: "Mandatory e-invoicing go-live for businesses with annual revenue below AED 50 million.",
            },
        ],
        extraSections: [
            {
                heading: "Why Precious Metals Businesses Should Prepare Now",
                body: [
                    "E-invoicing readiness is not simply a software upgrade. Precious metals businesses must ensure ERP and accounting system compatibility, product master data standardization, VAT classification accuracy, precious metal inventory integration, customer and supplier TRN validation, import and export transaction mapping, and structured invoice generation under PINT AE standards.",
                    "Delaying preparation can result in costly system changes, implementation bottlenecks, compliance risks, and operational disruption.",
                ],
            },
        ],
        highlights: [
            "Built for the Precious Metals Industry - we understand the operational realities of bullion trading, refining, jewellery manufacturing, wholesale distribution, and retail operations",
            "Financial & Technology Expertise - accounting, taxation, compliance, ERP, and industry expertise under one roof",
            "End-to-End Support - from readiness assessments to implementation and ongoing compliance management",
            "Regulatory-Focused Approach - helping businesses align with evolving UAE tax and digital compliance requirements",
            "Industry-Specific Solutions - tailored frameworks designed around the unique requirements of precious metals businesses",
        ],
        faqs: [
            {
                question: "What is changing under UAE E-Invoicing?",
                answer:
                    "Businesses will gradually move from traditional invoices and PDFs to structured electronic invoices exchanged through approved digital channels.",
            },
            {
                question: "Will precious metals businesses be affected?",
                answer:
                    "Yes. Bullion traders, refineries, manufacturers, wholesalers, and retailers should assess their readiness and system capabilities.",
            },
            {
                question: "Do existing ERP systems need upgrades?",
                answer:
                    "Many businesses will require system enhancements, integrations, or process redesigns to meet e-invoicing requirements.",
            },
            {
                question: "How does e-invoicing impact VAT compliance?",
                answer:
                    "Invoice data becomes more standardized and digitally traceable, increasing the importance of accurate VAT treatment and reporting.",
            },
            {
                question: "When should businesses start preparing?",
                answer:
                    "Immediately. Early assessment and planning reduce implementation risks and compliance challenges.",
            },
        ],
    },
    {
        number: "06",
        id: "accounting-mis",
        image: "/images/services/executives-preparing-meeting.jpg",
        title: "Accounting & MIS Services",
        shortIntro:
            "Precise, technology-driven accounting and MIS support for trading, refining, logistics, and storage entities - from bookkeeping and reconciliation to ERP design and IFRS compliance.",
        intro:
            "Maintaining accurate, compliant books of accounts is a legal and operational necessity in the UAE. We specialize in Accounting and MIS (Management Information System) services exclusively for entities engaged in trading, refining, logistics, and storage - combining accounting expertise with technology for startups, SMEs, and established trading houses.",
        subServices: [
            {
                title: "Accounting, Financial Close & Reporting",
                icon: "BookOpenCheck",
                description:
                    "Our books are prepared in accordance with IFRS, FTA regulations, and Corporate Tax Law - delivering actionable intelligence into what has happened, what is happening, and what's likely to happen.",
                checklist: [
                    {
                        items: [
                            "Accurate and timely accounting deliverables",
                            "Customized accounting & MIS reporting",
                            "End-to-end accounting setup & software implementation",
                            "Bullion transaction reconciliation",
                            "IFRS-aligned financial statement preparation",
                            "Periodic MIS reports & financial dashboards",
                        ],
                    },
                ],
            },
            {
                title: "ERP / Accounting Software Implementation",
                icon: "Cpu",
                description:
                    "Deploying ERP systems for the precious metals industry requires deep understanding of commodity valuation, trade tracking, and compliance integration. Our consultants ensure seamless setup and maximum ROI.",
                chips: [
                    "End-to-end ERP consulting & implementation",
                    "Customized accounting & metal tracking systems",
                    "VAT, Corporate Tax & AML/CFT integration",
                ],
            },
            {
                title: "Chart of Accounts & Financial Structuring",
                icon: "FolderTree",
                description:
                    "We design COA structures specifically tailored for precious metals businesses - capturing bullion movement, refining costs, hedging positions, and metal inventory valuation for accurate reporting and decision-making.",
            },
            {
                title: "Product Costing & Pricing",
                icon: "Coins",
                description:
                    "Pricing in the precious metals industry is highly sensitive and margin-dependent. We help design robust costing models that reflect true production and trading costs while remaining competitive.",
            },
            {
                title: "Inventory Verification Services",
                icon: "PackageSearch",
                description:
                    "Physical verification, valuation assessments, and internal control reviews confirming the existence, ownership, and realizable value of gold, silver, and other precious metal inventories.",
                checklist: [
                    {
                        items: [
                            "Physical inspection & stock reconciliation",
                            "Identification of damaged or slow-moving items",
                            "Validation of internal control systems",
                            "Variance reporting & recommendations",
                        ],
                    },
                ],
            },
            {
                title: "Payroll Management Services",
                icon: "Receipt",
                description:
                    "Comprehensive, secure, and compliant payroll solutions for precious metal businesses operating across the UAE and GCC.",
                chips: [
                    "End-to-end payroll processing",
                    "MIS & payroll reporting",
                    "WPS compliance & bank transfer letters",
                    "EOSB calculation",
                    "Leave & attendance management",
                    "UAE labor law compliance",
                ],
            },
            {
                title: "IFRS Implementation Support",
                icon: "BadgeCheck",
                description:
                    "Per Federal Decree-Law No. (32) of 2021 on Commercial Companies, entities must apply IFRS when preparing accounts and determining dividends. We assist with frameworks reflecting bullion inventory recognition, fair value measurement, and revenue recognition.",
                chips: [
                    "Gap assessment & IFRS readiness analysis",
                    "Accounting system alignment with IFRS",
                    "Technical support for new standards",
                    "IFRS-compliant financial statements",
                    "Coordination with external auditors",
                ],
            },
        ],
        highlights: [
            "Accurate & Timely Deliverables - precision and punctuality in financial reporting",
            "Tailored Industry Solutions - customized frameworks for the precious metals trade",
            "End-to-End Accounting Setup - ERP design, implementation, and process optimization",
        ],
        extraSections: [
            {
                heading: "Outsourced Accounting - The Insight Edge Approach",
                body: "Unlike traditional accounting firms, we adopt an insider's perspective. Our professionals immerse themselves in your business operations to understand trading cycles, refinery processes, and metal movement, ensuring that every accounting record reflects true business reality. Our process begins with a comprehensive business assessment, leading to innovative and customized accounting strategies that enhance operational efficiency and profitability.",
            },
        ],
    },
    {
        number: "07",
        id: "financial-advisory",
        image: "/images/services/financial-advisory.jpg",
        title: "Financial Advisory Services",
        shortIntro:
            "End-to-end corporate finance, valuation, feasibility, and treasury/hedging advisory for navigating price volatility and regulatory complexity in the precious metals trade.",
        intro:
            "In today's dynamic regulatory and market environment, businesses in the precious metals sector face increasingly complex financial and operational challenges. Navigating volatility in global metal prices, managing liquidity, ensuring compliance with UAE regulations, and optimizing business performance require expert financial guidance and a structured advisory framework. Our advisory team offers complete, end-to-end solutions across corporate finance, business feasibility, due diligence, and valuation services - enabling clients to make well-informed strategic decisions, identify growth opportunities, mitigate financial risks, and enhance operational efficiency.",
        subServices: [
            {
                title: "Financial Due Diligence & Business Valuation",
                icon: "SearchCheck",
                description:
                    "A clear and accurate assessment of your business's economic value - considering asset and inventory valuations (bullion, jewelry, refinery stock), liabilities, revenue streams, and regulatory/compliance risks. Essential for M&A, business sale, equity transfer, insurance valuation, succession planning, and shareholder disputes.",
            },
            {
                title: "Feasibility Studies & Business Planning",
                icon: "Compass",
                description:
                    "Comprehensive analysis covering financial, operational, and regulatory perspectives for launching a refinery, setting up a trading company, or expanding into a new GCC market - including market trends, capital requirements, ROI, and supply chain viability.",
                chips: [
                    "Market trends & demand projections",
                    "Capital requirements & ROI analysis",
                    "Operational viability & supply chain",
                    "Regulatory & tax obligations",
                    "Investment proposals & bank loan documentation",
                ],
            },
            {
                title: "Treasury, Hedging & Market Risk Advisory",
                icon: "ShieldHalf",
                description:
                    "Gold, silver, and PGM prices are influenced by macroeconomic conditions, geopolitics, and currency movements. We design structured hedging strategies aligned with physical exposure, commercial objectives, and risk appetite - with full IFRS hedge accounting alignment.",
                checklist: [
                    {
                        heading: "Advisory Coverage",
                        items: [
                            "Commodity price risk management",
                            "Hedging strategy design & governance",
                            "Foreign exchange (FX) risk management",
                            "Liquidity & working capital management",
                            "Treasury policy & control frameworks",
                            "Market risk measurement & reporting",
                        ],
                    },
                    {
                        heading: "Why It's Critical - Inadequate Practices Expose You To",
                        items: [
                            "Significant earnings volatility",
                            "Margin erosion from adverse price movements",
                            "Liquidity shortfalls & margin call pressures",
                            "Breaches of banking covenants & credit limits",
                            "Increased scrutiny from auditors, lenders & regulators",
                        ],
                    },
                ],
            },
        ],
        features: [
            { title: "Hedging Instruments", description: "Forwards, Futures & Options" },
            { title: "Pricing Methods", description: "LBMA feeds, Market Premiums" },
            { title: "Risk Reporting", description: "Stress Testing & Scenario Analysis" },
            { title: "M&A Support", description: "Due Diligence & Integration" },
        ],
        extraSections: [
            {
                heading: "Accounting & Regulatory Alignment",
                body: "We work closely with finance and accounting teams to ensure that treasury and hedging activities are aligned with IFRS hedge accounting requirements and regulatory expectations. This includes documentation support, hedge effectiveness testing, and alignment between economic hedging and accounting outcomes.",
            },
        ],
    },
    {
        number: "08",
        id: "taxation",
        image: "/images/services/justice-law-concept-gavel-sounding-block-hand-s-male-judge-courtroom-working-with-document-law-books-report-case-table-modern-office.jpg",
        title: "Taxation Services",
        shortIntro:
            "Corporate tax, VAT, BEPS, transfer pricing, PE risk, and tax dispute support - keeping trading houses, refineries, and logistics providers compliant and tax-efficient.",
        intro:
            "Navigating the UAE taxation landscape can be complex - especially where trading, refining, and import/export activities face detailed regulatory oversight. Our comprehensive taxation services help businesses remain fully compliant while optimizing tax efficiency, aligned with UAE federal laws and international best practices.",
        subServices: [
            {
                title: "Corporate Tax Advisory",
                subtitle: "Strategic structuring. Accurate filings. Risk-controlled compliance.",
                icon: "FileText",
                description:
                    "Corporate tax under Federal Decree-Law No. 47 of 2022 mandates accurate, audited financial statements and specific filing standards. We address industry-specific considerations such as valuation adjustments, refining costs, hedging transactions, and inventory accounting.",
                checklist: [
                    {
                        items: [
                            "Understanding tax obligations under UAE corporate tax",
                            "Structuring operations to minimize tax exposure",
                            "Preparing & filing tax returns accurately and on time",
                            "Transfer pricing & related party disclosure compliance",
                            "Supporting FTA audits & queries",
                        ],
                    },
                ],
            },
            {
                title: "VAT Compliance & Advisory",
                subtitle: "Structure smart. File right. Stay compliant.",
                icon: "Receipt",
                description:
                    "VAT compliance is a critical component of doing business in the UAE, particularly for precious metal traders, refiners, and wholesalers operating under the special reverse charge mechanism.",
                chips: [
                    "VAT registration & deregistration",
                    "Review & verification of VAT returns",
                    "Designated Zones regime advisory",
                    "Input/output tax credit assessment",
                    "VAT-compliant accounting systems",
                    "Staff training & periodic health checks",
                ],
            },
            {
                title: "BEPS & International Tax Compliance",
                subtitle: "Align globally. Reduce cross-border exposure.",
                icon: "Globe2",
                description:
                    "The UAE has joined the OECD's Inclusive Framework on BEPS, affecting cross-border precious metal transactions, multinational trading entities, and investment-linked operations within the GCC.",
                chips: [
                    "BEPS impact evaluation",
                    "Country-by-Country Reporting (CbCR) & ESR compliance",
                    "Double taxation treaty analysis",
                    "OECD-aligned international structuring",
                ],
            },
            {
                title: "Transfer Pricing Advisory",
                subtitle: "Defend margins. Align globally. Stay audit-ready.",
                icon: "ArrowLeftRight",
                description:
                    "Proper Transfer Pricing compliance has become essential for refineries, traders, logistics providers, and integrated precious metal groups - ensuring intercompany transactions reflect Arm's Length conditions, similar to those between independent parties.",
                checklist: [
                    {
                        heading: "Our Approach",
                        items: [
                            "Identify related parties & review transactions",
                            "Select the appropriate OECD pricing method (CUP, Cost Plus, TNMM, Resale Price, Profit Split)",
                            "Benchmarking using LBMA feeds & market premiums",
                            "Master File, Local File & disclosure preparation",
                            "CbCR for groups with AED 3.15bn+ revenue",
                        ],
                    },
                    {
                        heading: "Audit & Risk Support",
                        items: [
                            "Readiness reviews & risk assessments",
                            "Intercompany agreement drafting",
                            "Defense documentation & benchmarking updates",
                            "Liaison with tax authorities during audits",
                        ],
                    },
                ],
            },
            {
                title: "Permanent Establishment (PE) Risk Assessments",
                subtitle: "Map exposure. Defend positions. Avoid double taxation.",
                icon: "MapPinned",
                description:
                    "Cross-border trading, agency arrangements, refining, storage, and logistics frequently create unintended PE exposure. Even limited activities - sales agents, sourcing offices, vaulting arrangements - may trigger PE under local tax laws or treaties.",
                chips: [
                    "Operational footprint mapping",
                    "Contract & agency relationship review",
                    "Decision-making & risk ownership assessment",
                    "Physical presence evaluation (vaults, refineries, warehouses)",
                    "Double tax treaty & OECD BEPS application",
                ],
            },
            {
                title: "Tax Risk Management & Dispute Support",
                subtitle: "Mitigate disputes. Protect enterprise value.",
                icon: "Gavel",
                description:
                    "Tax disputes in the precious metals sector often involve VAT treatment, transfer pricing, PE exposure, and customs issues. We support structured tax governance and proactive risk management.",
                chips: [
                    "Tax risk identification & materiality assessments",
                    "Tax governance frameworks & controls",
                    "Technical positions & documentation",
                    "Audit, enquiry & investigation support",
                    "Dispute resolution & negotiation strategy",
                ],
            },
        ],
        extraSections: [
            {
                heading: "Why PE Risk Matters",
                body: "Unmanaged permanent establishment exposure can result in unexpected corporate tax liabilities, retroactive tax assessments and penalties, double taxation risks, and regulatory or reputational challenges. For precious metals businesses, even limited activities such as sales agents, sourcing offices, vaulting arrangements, or logistics coordination may trigger PE under local tax laws or tax treaties - making fact-based, defensible PE analysis essential.",
            },
            {
                heading: "Tax Risk Management & Dispute Support",
                body: "Precious metals businesses operate in a high-risk tax environment due to price volatility, complex supply chains, cross-border transactions, and evolving tax regulations. Tax authorities increasingly expect organizations to demonstrate structured tax governance and proactive risk management. Without a structured approach, tax risks can escalate into disputes and litigation, disrupt operations and banking relationships, and impact investor confidence and enterprise value.",
            },
        ],
    },
    {
        number: "09",
        id: "digital-assets",
        image: "/images/services/digitalization-and-tokenisation.jpg",
        title: "Digital Assets, Bullion Tokenization & Technology Governance",
        shortIntro:
            "Secure, compliant innovation for bullion tokenization, blockchain custody, AI governance, and cybersecurity - bridging physical bullion with digital infrastructure.",
        intro:
            "Digital innovation - including bullion tokenization and AI-driven platforms - is transforming the precious metals market. But innovation without governance exposes organizations to regulatory, legal, and reputational risk. We help clients innovate securely and compliantly, bridging physical bullion, legal ownership, technology architecture, and governance across bullion tokenization advisory, blockchain custody & governance frameworks, AI governance & technology risk management, and cybersecurity & data integrity assessments.",
        subServices: [
            {
                title: "Bullion Tokenization Advisory",
                icon: "Gem",
                description:
                    "Bullion tokenization is transforming how precious metals are owned, traded, financed, and settled - but introduces significant regulatory, legal, custody, and operational risks if not structured correctly. We advise on the end-to-end design and implementation of bullion-backed token models that are commercially viable, regulator-ready, and institutionally acceptable. Unlike technology vendors or pure blockchain advisors, we start with regulatory, accounting, and ownership structure - not technology - aligning token models with LBMA custody principles and inventory integrity, designing governance frameworks acceptable to banks, auditors, and regulators, and ensuring reconciliation between physical bullion, vault records, and digital tokens.",
                checklist: [
                    {
                        heading: "We Ensure",
                        items: [
                            "Institutionally credible token structures",
                            "Reduced regulatory and reputational risk",
                            "Scalable, compliant digital bullion ecosystems",
                        ],
                    },
                ],
            },
            {
                title: "Blockchain Custody & Governance Frameworks",
                icon: "Vault",
                description:
                    "In bullion-backed digital models, custody is not merely a technical issue - it is a legal, operational, and governance function. Regulators and counterparties expect clear evidence that digital representations of bullion are fully backed, properly segregated, and independently verifiable. We design blockchain custody and governance frameworks that integrate physical vaulting, legal ownership, internal controls, and digital infrastructure - mapping physical bullion custody to legal title and token issuance rights, establishing segregation, reconciliation, and independent verification controls, and designing governance models defining the roles of issuers, custodians, technology providers, and auditors.",
                checklist: [
                    {
                        heading: "We Ensure",
                        items: [
                            "Clear ownership and entitlement structures",
                            "Strong audit and regulatory defensibility",
                            "Enhanced trust across digital and physical markets",
                        ],
                    },
                ],
            },
            {
                title: "AI Governance & Technology Risk Management",
                icon: "BrainCircuit",
                description:
                    "Artificial intelligence and advanced analytics are increasingly used in pricing, risk management, compliance monitoring, and operations within the precious metals industry - but AI introduces model risk, data integrity risk, regulatory exposure, and ethical concerns. We assist organizations in implementing AI governance and technology risk frameworks that enable innovation while maintaining control, accountability, and regulatory compliance. Unlike generic AI consultants, we treat AI as a risk and governance issue, designing frameworks covering accountability, validation, and oversight, aligned with compliance, AML, and risk management expectations, and integrated into existing governance and internal control structures.",
                checklist: [
                    {
                        heading: "We Ensure",
                        items: [
                            "Responsible, regulator-ready AI adoption",
                            "Reduced model and operational risk",
                            "Confidence for regulators, auditors, and boards",
                        ],
                    },
                ],
            },
            {
                title: "Cybersecurity & Data Integrity Assessments",
                icon: "Lock",
                description:
                    "Precious metals businesses handle highly sensitive data - pricing models, inventory records, transaction details, and client information. Cybersecurity failures or data integrity breaches can undermine operational continuity and market confidence. We provide cybersecurity and data integrity assessments tailored to the specific risks of precious metals operations, including trading platforms, vault systems, and digital asset infrastructure. Unlike technical cybersecurity firms, we focus on business, regulatory, and governance impact - assessing controls around inventory data, pricing feeds, and reconciliation processes, and integrating cyber risk into broader enterprise risk management. For bullion-backed digital models, data integrity is inseparable from asset integrity.",
                checklist: [
                    {
                        heading: "We Ensure",
                        items: [
                            "Stronger protection of critical data and systems",
                            "Improved audit and regulatory confidence",
                            "Reduced risk of operational and reputational disruption",
                        ],
                    },
                ],
            },
        ],
        highlights: [
            "Exclusive focus on the precious metals industry",
            "Strong understanding of UAE Good Delivery Rules and industry pricing mechanisms",
            "Practical, institutionally credible frameworks for bullion-backed digital assets",
        ],
    },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────

export const whyChooseUs: string[] = [
    "Exclusive focus on the precious metals industry",
    "Expertise in Transfer Pricing for refineries, traders, and bullion logistics networks",
    "Strong understanding of UAE Good Delivery Rules and industry pricing mechanisms",
    "Compliance solutions aligned with UAE Corporate Tax Law and OECD guidelines",
    "Practical, commercially aligned frameworks across audit, tax, and advisory",
    "Institutionally credible approach to digital assets and bullion tokenization",
];

export const heroContent = {
    eyebrow: "Insight Edge Global LLC",
    title: "Our Services",
    statement:
        "Exclusive audit, tax, and advisory expertise for the UAE precious metals industry - from refining and trading to bullion tokenization.",
};
