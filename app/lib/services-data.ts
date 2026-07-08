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
    image?: string;
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
        highlights: [
            "Independent & Trusted Assurance — audit is a strategic tool that strengthens governance, builds stakeholder confidence, and supports informed decision-making across precious metals, bullion, jewellery, and luxury watch businesses",
            "Globally Recognised Methodology — every engagement is performed in line with internationally recognised auditing standards and industry best practices, meeting the expectations of regulators, financial institutions, and international stakeholders",
            "Industry-Focused Expertise — deep, sector-specific experience in gold, bullion, jewellery, and luxury watch trading allows us to identify operational, stock, and compliance risks that general-practice firms often overlook",
            "Beyond Compliance — our approach examines the controls, systems, and stock-handling practices behind the numbers, backing every audit opinion with practical, actionable recommendations",
        ],
        faqs: [
            {
                question: "What's the difference between internal and external audit?",
                answer: "External audit is an independent, statutory examination of your financial statements resulting in an opinion used by shareholders, regulators, and banks. Internal audit is an ongoing, management-focused review of controls and risk areas, designed to improve operations rather than produce a public opinion. IEG provides both, structured to complement each other without compromising independence.",
            },
            {
                question: "Do all UAE companies need audited financial statements?",
                answer: "Requirements vary by jurisdiction and licence type, but most UAE companies must prepare — and in many cases file — audited financial statements, particularly for Corporate Tax filing, free zone licence renewal, bank facility requirements, and investor due diligence. IEG confirms your specific obligation based on entity type and licensing authority.",
            },
            {
                question: "How long does a statutory audit typically take?",
                answer: "For a single-branch precious metals or jewellery business, a statutory audit typically takes 3–5 weeks from receipt of complete records to signed financials, depending on stock reconciliation complexity. Multi-branch groups with consolidation requirements may take longer.",
            },
            {
                question: "What makes IEG's audit approach different for gold and jewellery businesses?",
                answer: "We understand stock valuation by purity and weight, hallmarking, making-charge structures, and the cash-intensive nature of retail bullion and jewellery sales — risk areas that general audit firms are not equipped to test properly.",
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
        highlights: [
            "Forensic Investigation Expertise — IEG conducts forensic investigations into suspected fraud, stock shortfalls, and unrecorded transactions, a particularly high-stakes area for multi-branch gold, bullion, and jewellery businesses where physical stock and cash sales create unique exposure",
            "Independent, Evidence-Based Approach — investigations are built on documentary evidence, stock reconciliation analysis, and transaction tracing, designed to withstand scrutiny from shareholders, boards, or, where necessary, legal proceedings",
            "Beyond Standard Audit Scope — special audits go deeper than statutory audit materiality-based testing, covering suspected management override, related-party dealings, branch-level stock discrepancies, and cash sale irregularities",
            "Enterprise Risk Consulting — beyond reactive investigation, we help businesses build proactive risk management frameworks including internal control reviews, fraud risk assessments, and branch-level monitoring structures",
            "Confidential & Discreet — every engagement is handled with strict confidentiality and independence from day-to-day operational relationships",
        ],
        faqs: [
            {
                question: "What triggers the need for a forensic investigation rather than a normal audit?",
                answer: "Common triggers include unexplained physical stock shortfalls, suspected unrecorded cash sales, shareholder disputes over financial performance, or a majority shareholder's concerns about a minority shareholder-manager's conduct. A statutory audit is not designed to investigate suspected fraud — a special/forensic engagement is scoped specifically for that purpose.",
            },
            {
                question: "How does IEG investigate suspected gold stock shortfalls?",
                answer: "We reconcile physical stock counts against book records at branch level, trace stock movements and purity/weight variances over the review period, and cross-check sales and purchase documentation against recorded cash and bank flows to identify where and how discrepancies arose.",
            },
            {
                question: "Can findings from a forensic investigation be used in legal or shareholder proceedings?",
                answer: "Our investigations are conducted on an evidence-based, documented basis so findings can support shareholder discussions, board decisions, or legal proceedings if the client chooses to pursue them — though the specific evidentiary standard required depends on the forum and should be discussed with legal counsel alongside our findings.",
            },
            {
                question: "What's the difference between a special audit and risk consulting?",
                answer: "A special audit is typically reactive — investigating a specific suspected issue after the fact. Risk consulting is proactive — building internal controls, fraud risk assessments, and monitoring frameworks designed to reduce the likelihood of similar issues arising across your branches going forward.",
            },
            {
                question: "How long does a forensic investigation typically take?",
                answer: "Timeframes depend on the number of branches, volume of transactions under review, and cooperation from operational staff, but multi-branch stock and cash investigations for jewellery businesses typically run from several weeks to a few months. We agree scope and an estimated timeline before starting.",
            },
        ],
    },
    {
        number: "03",
        id: "compliance-and-responsible",
        image: "/images/services/complaince-and-responsible.jpg",
        title: "Compliance & Responsible Business",
        shortIntro:
            "Embedding a culture of compliance and responsible conduct - protecting your business, your reputation, and your licence to operate.",
        intro:
            "The precious metals sector operates under some of the most stringent AML/CFT, responsible sourcing, and regulatory requirements in the UAE. We help businesses embed a genuine culture of compliance and responsible conduct - across AML frameworks, regulatory licensing, responsible sourcing, ethical governance, and supply chain due diligence - ensuring you are protected, trusted, and licence-ready.",
        subServices: [
            {
                title: "AML / CFT Compliance",
                icon: "ShieldAlert",
                description:
                    "Anti-Money Laundering & Counter-Financing of Terrorism frameworks for UAE's highest-risk DNFBP sector.",
                checklist: [
                    {
                        items: [
                            "AML policy, procedure & controls documentation",
                            "KYC, KYT & Enhanced Due Diligence (EDD)",
                            "Sanctions screening & TBML controls",
                            "STR / SAR preparation & goAML submissions",
                            "Staff AML training & awareness programmes",
                            "Gap assessments & remediation plans",
                        ],
                    },
                ],
            },
            {
                title: "Regulatory Compliance",
                icon: "Scale",
                description:
                    "End-to-end compliance management across all applicable UAE and international regulatory standards.",
                checklist: [
                    {
                        items: [
                            "DMCC Good Delivery Rules compliance",
                            "UAE Central Bank & FTA regulatory alignment",
                            "FATF & OECD Due Diligence Framework",
                            "LBMA Responsible Gold / Silver / PGM guidance",
                            "ESR (Economic Substance Regulations)",
                            "Compliance health checks & readiness reviews",
                        ],
                    },
                ],
            },
            {
                title: "Regulatory Licensing",
                icon: "FileSignature",
                description:
                    "Full lifecycle support for regulatory licensing from initial applications through renewals and ongoing obligations.",
                checklist: [
                    {
                        items: [
                            "Precious metals dealer licence applications",
                            "DNFBP registration with UAE Ministry of Economy",
                            "Free zone licence structuring & advisory",
                            "Licence condition monitoring & management",
                            "Renewal documentation & submission support",
                            "Liaison with regulatory authorities",
                        ],
                    },
                ],
            },
            {
                title: "AML Inspection Support",
                icon: "ClipboardCheck",
                description:
                    "Specialist preparation and hands-on support throughout UAE regulatory AML/CFT inspection visits.",
                checklist: [
                    {
                        items: [
                            "Pre-inspection readiness & gap analysis",
                            "Compliance file compilation & management",
                            "Mock inspection walkthroughs & briefings",
                            "On-site support during regulatory visits",
                            "Response to regulatory findings & queries",
                            "Post-inspection remediation & monitoring",
                        ],
                    },
                ],
            },
            {
                title: "Responsible Sourcing",
                icon: "Leaf",
                description:
                    "Ensuring your precious metals supply chain meets the highest international standards for ethical and conflict-free sourcing.",
                checklist: [
                    {
                        items: [
                            "OECD Due Diligence Guidance implementation",
                            "DMCC & LBMA responsible sourcing compliance",
                            "Conflict mineral risk identification & assessment",
                            "Supply chain mapping & counterparty review",
                            "Annual responsible sourcing compliance reporting",
                            "Supplier onboarding & due diligence frameworks",
                        ],
                    },
                ],
            },
            {
                title: "Ethical Business Conduct",
                icon: "BadgeCheck",
                description:
                    "Building and embedding ethical business practices and governance frameworks that earn the trust of regulators, banks, and counterparties.",
                checklist: [
                    {
                        items: [
                            "Code of conduct & ethics policy development",
                            "Anti-bribery & anti-corruption (ABAC) frameworks",
                            "Whistleblowing policy & reporting channel design",
                            "Board-level governance & ethics advisory",
                            "Conflict of interest management frameworks",
                            "Ethics training & awareness programmes",
                        ],
                    },
                ],
            },
            {
                title: "Supply Chain Due Diligence",
                icon: "Search",
                description:
                    "Rigorous due diligence across the full precious metals supply chain - protecting your business from illicit flows and reputational risk.",
                checklist: [
                    {
                        items: [
                            "End-to-end supply chain risk mapping",
                            "Counterparty & supplier KYC/KYB assessments",
                            "Red flag identification & escalation procedures",
                            "Trade-Based Money Laundering (TBML) controls",
                            "Ongoing monitoring of supplier risk profiles",
                            "Due diligence documentation & audit trails",
                        ],
                    },
                ],
            },
        ],
        features: [
            { title: "AML/CFT Frameworks", description: "Built for UAE's DNFBP sector obligations" },
            { title: "Responsible Sourcing", description: "OECD, DMCC & LBMA-aligned programmes" },
            { title: "Regulatory Licensing", description: "Full lifecycle support from application to renewal" },
            { title: "Ethical Governance", description: "Code of conduct, ABAC & whistleblowing frameworks" },
        ],
        extraSections: [
            {
                heading: "Why Compliance & Responsible Business Matters",
                body: [
                    "The UAE precious metals sector is classified as a Designated Non-Financial Business and Profession (DNFBP) - one of the highest-risk categories under UAE AML/CFT regulations. Businesses face increasing scrutiny from the Ministry of Economy, the UAE Financial Intelligence Unit, and international banking counterparties.",
                    "Beyond regulatory obligation, genuine compliance and responsible conduct protect your banking relationships, preserve your licence to operate, and build the institutional trust that underpins long-term business growth. We help you move from compliance as a checkbox to compliance as a competitive advantage.",
                ],
            },
        ],
        highlights: [
            "Deep expertise in UAE AML/CFT frameworks for DNFBP precious metals businesses",
            "End-to-end support from policy design to regulatory inspection defence",
            "OECD, LBMA, and DMCC responsible sourcing frameworks implemented",
            "Ethical governance frameworks trusted by regulators, banks, and counterparties",
            "Practical, operational compliance - not just documentation",
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
            "Specialist UAE Corporate Tax Guidance — helping precious metals, bullion, jewellery, and luxury watch businesses navigate Corporate Tax with confidence, from initial registration and taxable income assessment to QFZP eligibility and ongoing filing compliance",
            "Strategic, Not Just Compliance-Driven — our advisory covers structuring decisions, group relief and restructuring relief eligibility, related-party transaction implications, and how Corporate Tax interacts with your VAT and Transfer Pricing position",
            "QFZP Eligibility & Free Zone Structuring — we assess and help maintain Qualifying Free Zone Person status for Shams, DMCC, and other free zone clients, including substance requirements and qualifying income tests, so you don't inadvertently lose your 0% rate",
            "Sector-Specific Application — Corporate Tax treatment of gold trading margins, making charges, and multi-branch group structures requires specialist interpretation applied with direct reference to how precious metals businesses actually operate",
            "Ongoing Compliance & Health Checks — we manage Corporate Tax return filing, provisional assessments, and periodic health checks to catch exposures before they become FTA queries or penalties",
        ],
        faqs: [
            {
                question: "What is the UAE Corporate Tax rate and who does it apply to?",
                answer: "Corporate Tax is levied at 9% on taxable income above AED 375,000 for most UAE businesses, with income up to that threshold taxed at 0%. Qualifying Free Zone Persons meeting specific conditions can benefit from a 0% rate on qualifying income instead. IEG assesses which regime applies to your business.",
            },
            {
                question: "What is a Qualifying Free Zone Person (QFZP) and how do we maintain that status?",
                answer: "A QFZP is a free zone entity that meets adequate substance requirements, earns qualifying income, and complies with transfer pricing and other conditions, allowing 0% tax on qualifying income. Status can be lost if conditions aren't maintained year-round — IEG monitors this continuously rather than only at filing time.",
            },
            {
                question: "Does Corporate Tax apply to gold trading margins and making charges differently?",
                answer: "Taxable income is generally based on accounting profit adjusted per Corporate Tax law, so trading margins and making-charge income both fall within taxable income unless a specific exemption or QFZP qualifying income treatment applies. IEG reviews your revenue streams individually to confirm treatment.",
            },
            {
                question: "What happens if my business misses a Corporate Tax filing deadline?",
                answer: "Late registration and late filing both carry fixed administrative penalties, with additional penalties accruing for late payment of tax due. IEG manages client filing calendars specifically to prevent this, and can assist with voluntary disclosures if an error is later identified.",
            },
            {
                question: "Do I need a Transfer Pricing study for related-party transactions?",
                answer: "If you transact with related parties or connected persons — common in family-run precious metals groups — UAE Corporate Tax law requires arm's-length pricing, with disclosure and, in some cases, full documentation requirements. IEG determines whether a simplified disclosure or full study applies to you.",
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
            "Ahead of the UAE's Mandatory E-Invoicing Rollout — grounded in Ministerial Decisions 243 and 244 of 2025 and Cabinet Decision 106 of 2025, IEG helps precious metals, bullion, and jewellery businesses prepare well ahead of their compliance deadline",
            "PINT-AE Compliant Readiness — we assess your current invoicing and ERP systems against the PINT-AE specification, identify data and format gaps, and guide you through service provider selection and integration",
            "Full Compliance Roadmap — our engagement covers gap analysis, SOP development, staff training, and a phased implementation plan so the transition doesn't disrupt daily trading, billing, or stock movement documentation",
            "Sector-Aware Implementation — gold and jewellery invoicing often involves purity, weight, and making-charge line items that don't map neatly onto generic templates; we ensure your structured e-invoices correctly capture these industry-specific details",
            "End-to-End Support — from initial readiness assessment through go-live and post-implementation review, IEG stays engaged throughout your e-invoicing transition, not just at the point of system rollout",
        ],
        faqs: [
            {
                question: "What is UAE e-invoicing and is it mandatory?",
                answer: "UAE e-invoicing is a structured electronic invoicing system built on the Peppol network (5-corner model), introduced under Ministerial Decisions 243/244 of 2025 and Cabinet Decision 106/2025. It is being phased in as mandatory for B2B and B2G transactions, with businesses required to issue and receive invoices through accredited service providers rather than free-form PDF or paper invoices.",
            },
            {
                question: "What is PINT-AE and why does it matter for our invoices?",
                answer: "PINT-AE is the UAE-specific Peppol invoicing data specification that defines the structured fields every e-invoice must contain. Your ERP or invoicing system needs to generate data matching this specification, which is why a gap analysis against your current system is the essential first step.",
            },
            {
                question: "How does e-invoicing affect gold and jewellery-specific invoice details like making charges and purity?",
                answer: "Structured e-invoicing requires clearly defined line items, and generic templates often don't separate metal value, making charges, and purity/weight details the way jewellery invoicing requires. IEG's implementation ensures these sector-specific details are correctly structured within the PINT-AE format rather than lost in a generic conversion.",
            },
            {
                question: "What's involved in becoming e-invoicing ready?",
                answer: "Typically: a gap analysis of your current invoicing system and data fields, selection of an accredited service provider, system or ERP configuration, staff training on the new process, and a parallel-run period before full go-live. IEG supports each stage.",
            },
            {
                question: "What's the risk of not being ready by the compliance deadline?",
                answer: "Businesses that aren't integrated with an accredited service provider by their applicable deadline risk being unable to issue compliant invoices for in-scope transactions, which can affect the ability to invoice B2B/B2G customers and may carry penalties once enforcement begins. Early readiness avoids a rushed, higher-risk implementation closer to the deadline.",
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
            "Chartered Accountants & Precious Metals Specialists — a team of qualified Chartered Accountants combining core accounting expertise with deep sector-specific knowledge of gold, bullion, and jewellery trading including stock valuation, hallmarking, and making-charge structures unique to the industry",
            "End-to-End Accounting Solutions — from day-to-day bookkeeping and financial reporting to management information systems, we support the full accounting function so you can focus on trading and growing your business",
            "Management Information Systems (MIS) Reporting — beyond statutory books, we build recurring MIS reports covering sales analysis, branch performance, stock movement, and profitability dashboards that give owners real-time visibility into how the business is actually performing",
            "Customised for the Precious Metals Industry — no generic templates; we design accounting processes, chart of accounts, and reporting structures tailored to gold, bullion, jewellery, and luxury watch businesses accounting for physical stock movements, purity variances, and multi-branch operations",
            "Multi-Branch & Group Reporting — experience consolidating financials and MIS data across multiple UAE branches and related entities, with clean intercompany reconciliations and IFRS-compliant reporting",
        ],
        extraSections: [
            {
                heading: "Outsourced Accounting - The Insight Edge Approach",
                body: "Unlike traditional accounting firms, we adopt an insider's perspective. Our professionals immerse themselves in your business operations to understand trading cycles, refinery processes, and metal movement, ensuring that every accounting record reflects true business reality. Our process begins with a comprehensive business assessment, leading to innovative and customized accounting strategies that enhance operational efficiency and profitability.",
            },
        ],
        faqs: [
            {
                question: "What's the difference between statutory accounting and MIS reporting?",
                answer: "Statutory accounting produces the formal financial statements required for audit, tax filing, and regulatory purposes. MIS (Management Information System) reporting is internal, operational reporting — branch-level sales, stock movement, profitability by product line — designed to help owners and managers make faster, better-informed day-to-day decisions.",
            },
            {
                question: "Can IEG consolidate accounts and MIS data across multiple branches?",
                answer: "Yes. We regularly prepare consolidated financials and branch-level MIS dashboards for multi-branch precious metals groups, including intercompany reconciliations, so ownership gets both a statutory group view and an operational branch-by-branch view.",
            },
            {
                question: "How does IEG handle physical gold stock accounting differently from a general accountant?",
                answer: "We account for stock by weight and purity, track making-charge and value-addition components separately from metal value, and reconcile physical stock counts against book records at branch level — addressing risk areas that generic accounting approaches often miss.",
            },
            {
                question: "What accounting software does IEG work with?",
                answer: "We work with major UAE-market platforms (including Tally, Zoho Books, QuickBooks, and Xero) and can design a chart of accounts and MIS reporting structure within your existing system rather than requiring a system change.",
            },
            {
                question: "How often are MIS reports typically delivered?",
                answer: "Most clients receive monthly MIS packs, though branch performance or stock movement summaries can be provided weekly for businesses that want tighter operational visibility. Reporting frequency is agreed based on your management needs.",
            },
        ],
    },
    {
        number: "07",
        id: "business-advisory",
        image: "/images/services/Business-strategy-advisory.jpg",
        title: "Business Strategy Advisory",
        shortIntro:
            "Strategic guidance and specialist advisory services that drive growth, operational excellence, and regulatory confidence across the precious metals industry.",
        intro:
            "Businesses in the precious metals sector face increasingly complex strategic, operational, and regulatory challenges. Whether you need to strengthen your sourcing and procurement frameworks, build internal capability through specialist training, or navigate the requirements of UAE regulatory bodies, our Business Strategy Advisory practice delivers practical, expert-led solutions aligned with the realities of the precious metals industry.",
        subServices: [
            {
                title: "Sourcing & Procurement Services",
                icon: "ShoppingCart",
                description:
                    "End-to-end sourcing and procurement advisory for precious metals businesses ensuring competitive, compliant, and risk-managed acquisition of gold, silver, and other precious commodities.",
                checklist: [
                    {
                        items: [
                            "Supplier identification, qualification & onboarding frameworks",
                            "Procurement policy design & tender process support",
                            "Gold and silver supplier due diligence & KYB assessments",
                            "Price benchmarking against LBMA and market reference rates",
                            "Contract negotiation support and commercial terms advisory",
                            "Responsible sourcing verification and documentation",
                            "Procurement risk assessment and mitigation strategies",
                            "ERP and procure-to-pay process design & optimization",
                        ],
                    },
                ],
            },
            {
                title: "Corporate Training Services",
                icon: "GraduationCap",
                description:
                    "Specialist training programmes designed to build financial, compliance, and operational capability within precious metals businesses - from frontline staff to board level.",
                checklist: [
                    {
                        items: [
                            "AML/CFT awareness & DNFBP obligation training",
                            "UAE Corporate Tax and VAT compliance training",
                            "IFRS accounting standards training for finance teams",
                            "Precious metals industry induction and operations training",
                            "Internal audit and risk management capability building",
                            "Responsible sourcing and OECD due diligence training",
                            "Cybersecurity and data integrity awareness programmes",
                            "Board-level governance & regulatory updates workshops",
                        ],
                    },
                ],
            },
            {
                title: "SCA Compliance Advisory",
                icon: "Landmark",
                description:
                    "Specialist advisory for entities regulated by the Securities and Commodities Authority (SCA) navigating licensing, reporting, and compliance obligations in the UAE's commodity and capital markets framework.",
                checklist: [
                    {
                        items: [
                            "SCA regulatory framework assessment and gap analysis",
                            "SCA licensing applications, renewals & condition management",
                            "Commodity trading compliance advisory for gold & precious metals",
                            "Market conduct and disclosure obligations advisory",
                            "SCA reporting requirements design & implementation support",
                            "Compliance monitoring and internal controls for SCA entities",
                            "Liaison and correspondence with SCA regulatory bodies",
                            "Training on SCA rules and regulatory expectations",
                        ],
                    },
                ],
            },
        ],
        features: [
            { title: "Sourcing & Procurement", description: "LBMA-benchmarked, risk-managed acquisition frameworks" },
            { title: "Corporate Training", description: "From AML/CFT to IFRS and board-level governance" },
            { title: "SCA Advisory", description: "Licensing, reporting & compliance for regulated entities" },
            { title: "Strategic Growth", description: "Operational excellence & regulatory confidence" },
        ],
        extraSections: [
            {
                heading: "Why Business Strategy Advisory Matters",
                body: [
                    "In the precious metals industry, operational excellence and regulatory compliance are inseparable from commercial success. Sourcing the wrong supplier, failing an SCA inspection, or operating with undertrained staff can expose your business to financial, regulatory, and reputational harm.",
                    "Our Business Strategy Advisory practice bridges the gap between strategic ambition and operational reality - delivering specialist advisory, training, and regulatory support that strengthens every layer of your business.",
                ],
            },
        ],
        highlights: [
            "Procurement frameworks benchmarked to LBMA and responsible sourcing standards",
            "Training programmes from operational staff through to board level",
            "Specialist SCA compliance and licensing support for regulated entities",
            "Practical, industry-specific advisory grounded in UAE regulatory realities",
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
        highlights: [
            "Comprehensive UAE Tax Expertise — end-to-end tax advisory and compliance covering VAT, Customs, Transfer Pricing, and related indirect tax obligations, helping precious metals and jewellery businesses stay compliant while identifying opportunities for tax efficiency",
            "VAT Specialisation for Precious Metals — VAT treatment of investment-grade metals, jewellery, and making charges involves specific rules including zero-rating conditions and reverse-charge mechanisms for registered dealers that require specialist interpretation, not generic VAT advice",
            "Risk-Based Tax Management — our proactive approach identifies potential tax exposures before they become significant issues through regular compliance reviews and tax health assessments that strengthen internal controls and reduce financial risk",
            "Customs & Cross-Border Advisory — for businesses importing or exporting bullion and jewellery, we advise on customs duty treatment, documentation requirements, and cross-border compliance specific to precious metals movement",
            "Delivering Value Beyond Compliance — we combine technical expertise, industry knowledge, and strategic insight to help organisations manage tax obligations efficiently while creating long-term value",
        ],
        faqs: [
            {
                question: "How does VAT apply to gold, bullion, and jewellery sales in the UAE?",
                answer: "Investment-grade precious metals (gold, silver, and platinum of 99% purity or higher, in tradeable form) generally qualify for VAT zero-rating under specific conditions, while jewellery and making charges are typically subject to standard-rated VAT, with a reverse-charge mechanism available for registered dealer-to-dealer transactions. Correct classification is assessed on a transaction-by-transaction basis.",
            },
            {
                question: "What VAT registration threshold applies to my business?",
                answer: "Mandatory VAT registration applies once taxable supplies and imports exceed AED 375,000 in the preceding 12 months (or are expected to in the next 30 days); voluntary registration is available above AED 187,500. IEG assesses your position and manages registration and ongoing filing.",
            },
            {
                question: "Are there customs duty considerations for importing gold or jewellery into the UAE?",
                answer: "Yes — customs treatment depends on the form and purity of the metal, its declared value, and the applicable free zone or mainland import route. IEG advises on correct customs classification and documentation to avoid delays or disputes at the point of import.",
            },
            {
                question: "What are the penalties for late VAT filing or payment in the UAE?",
                answer: "Penalties include fixed fines for late registration and late filing, plus escalating penalties for late payment of tax due. IEG manages client filing calendars specifically to avoid these exposures and can assist with voluntary disclosures where errors are identified.",
            },
            {
                question: "How often should our VAT position be reviewed?",
                answer: "We recommend at least an annual VAT health check, with more frequent reviews for businesses with high transaction volumes or frequent cross-border dealings, given how easily VAT treatment errors on gold versus jewellery transactions can compound over time.",
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
            "Emerging Regulatory Expertise — as gold-backed tokens, digital bullion platforms, and asset tokenization gain traction in the UAE, IEG helps precious metals businesses understand the regulatory, accounting, and tax implications of entering this space, an area few traditional audit and advisory firms cover",
            "Bridging Traditional Bullion and Digital Assets — we bring together core precious metals expertise with an understanding of how physical gold backing, custody arrangements, and digital token issuance need to align so that a tokenized gold offering remains defensible from an audit, tax, and compliance standpoint",
            "Accounting & Financial Reporting for Digital Assets — we advise on how to account for and report digital asset holdings, gold-backed token issuance, and related transactions under applicable UAE frameworks, an area where standard guidance is still developing and specialist judgement is required",
            "Compliance & AML Considerations — digital asset and tokenization activities carry their own AML/CFT and virtual asset regulatory considerations; we help clients assess these alongside their existing precious metals AML/CFT framework rather than treating them as a separate silo",
            "Advisory for a Fast-Evolving Space — given how quickly this regulatory area is developing, we position ourselves as an ongoing advisory partner helping clients stay current as UAE virtual asset and digital commodity regulation matures",
        ],
        faqs: [
            {
                question: "What does \"gold tokenization\" actually mean?",
                answer: "Gold tokenization refers to issuing a digital token that represents ownership of, or a claim on, physical gold held in custody — allowing gold to be traded, transferred, or fractionally owned digitally while (in a properly structured offering) remaining backed by real bullion held by a custodian.",
            },
            {
                question: "Is tokenizing gold or digital asset activity regulated in the UAE?",
                answer: "Yes — virtual asset activities in the UAE fall under regulatory frameworks that vary by jurisdiction (for example, VARA in Dubai, or other applicable federal and free zone regulators), and the specific licensing and compliance requirements depend on the nature of the token and the activity being carried out. IEG helps clients understand which regime applies to their specific offering before proceeding.",
            },
            {
                question: "How should a business account for gold-backed tokens or digital asset holdings?",
                answer: "Accounting treatment depends on the substance of the arrangement — whether the token represents a financial instrument, an inventory-like commodity claim, or something else — and specialist judgement is often required given that standard-setters are still developing specific guidance in this area. IEG advises on appropriate treatment based on your specific structure.",
            },
            {
                question: "Do our existing AML/CFT obligations extend to digital asset or tokenization activities?",
                answer: "In many cases, yes — and there may be additional virtual-asset-specific AML/CFT requirements layered on top of your existing DPMS obligations. IEG reviews your tokenization model against both frameworks to identify the full compliance picture rather than assuming your existing precious metals AML programme automatically covers digital asset activity.",
            },
            {
                question: "Is this an area only for large bullion players, or can smaller jewellers explore digital assets too?",
                answer: "Interest in this space is growing across business sizes, often starting with smaller pilot initiatives (e.g., a limited tokenized product line) rather than a full-scale platform launch. IEG can advise at whatever stage — from early feasibility and regulatory scoping through to full implementation support.",
            },
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
