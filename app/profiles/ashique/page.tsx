"use client";

import Image from "next/image";

// ---------------------------------------------------------------------------
// Icon / image paths — adjust these to match your actual public or asset paths
// ---------------------------------------------------------------------------
const icons = {
    call: "/profile/icons/phone.svg",
    email: "/profile/icons/mail.svg",
    whatsapp: "/profile/icons/whatsapp.svg",
    linkedin: "/profile/icons/linkedin.svg",
    facebook: "/profile/icons/facebook.svg",
    instagram: "/profile/icons/instagram.svg",
    save: "/profile/icons/save.svg",
    share: "/profile/icons/share.svg",
    website: "/profile/icons/website.svg",
    location: "/profile/icons/location.svg",
};

const logo = "/profile/icons/insight-edge-logo.svg";
const ashiquePhoto = "/profile/images/ashique.png";

// ---------------------------------------------------------------------------
// ActionBtn sub-component
// ---------------------------------------------------------------------------
interface ActionBtnProps {
    icon: string;
    label: string;
    onClick: () => void;
}

function ActionBtn({ icon, label, onClick }: ActionBtnProps) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center gap-2 group cursor-pointer bg-transparent border-none"
        >
            <div className="w-12 h-12 rounded-full border-y-2 border-white/10 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white/20 transition-all duration-200 group-hover:scale-105 group-active:scale-95">
                <Image src={icon} alt={label} width={20} height={20} />
            </div>
            <span className="text-xs text-slate-300 font-light tracking-wide">{label}</span>
        </button>
    );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default function AshiquePage() {
    const handleIconTap = () => {
        if (typeof navigator !== "undefined" && navigator.vibrate) {
            navigator.vibrate(30);
        }
    };

    const handleLinkedInClick = () => {
        handleIconTap();
        window.open(
            "https://www.linkedin.com/in/ca-muhammed-ashique-235647149/",
            "_blank"
        );
    };

    const handleWhatsappClick = () => {
        handleIconTap();
        window.open("https://wa.me/971553646286", "_blank");
    };

    const handleFacebookClick = () => {
        handleIconTap();
        window.open("https://www.facebook.com/", "_blank");
    };

    const handleInstagramClick = () => {
        handleIconTap();
        window.open("https://www.instagram.com/ashiq_abubaker", "_blank");
    };

    const handleWebClick = () => {
        handleIconTap();
        window.open("https://www.insightedge.global/", "_blank");
    };

    const handleShareClick = async () => {
        handleIconTap();
        const shareUrl = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({ title: "Ashique - InsightEdge", url: shareUrl });
                return;
            } catch {
                // fall through
            }
        }

        if (navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(shareUrl);
                alert("Link copied to clipboard");
                return;
            } catch {
                // fall through
            }
        }

        window.open(shareUrl, "_blank");
    };

    const handleSaveClick = () => {
        handleIconTap();
        const vcardData = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            "FN:CA Muhammed Ashique",
            "ORG:InsightEdge",
            "TITLE:Director - Audit & Assurance",
            "TEL;TYPE=CELL:+971553646286",
            "EMAIL;TYPE=INTERNET:ashique@insightedge.global",
            "END:VCARD",
        ].join("\n");

        const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "CA_Muhammed_Ashique.vcf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handlePhoneClick = () => {
        handleIconTap();
        const link = document.createElement("a");
        link.href = "tel:+971553646286";
        link.click();
    };

    const handleMailClick = () => {
        handleIconTap();
        window.location.href = "mailto:ashique@insightedge.global";
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div
                className="w-96 rounded-3xl overflow-hidden shadow-2xl shadow-black/60 pt-6"
                style={{
                    background:
                        "linear-gradient(180deg, #f8f9fa 0%, #f8f9fa 42%, #283F67 42%, #283F67 100%)",
                }}
            >
                {/* ------------------------------------------------------------------ */}
                {/* Top white section                                                   */}
                {/* ------------------------------------------------------------------ */}
                <div className="bg-[#f8f9fa] pt-4 pb-0 px-6 flex flex-col items-center relative gap-4">
                    <div className="flex flex-col items-center gap-6">
                        {/* Logo */}
                    <div className="mb-5">
                        <Image src={logo} alt="InsightEdge logo" width={96} height={96} />
                    </div>

                    {/* Profile photo */}
                    <div className="relative">
                        <div className="w-40 h-36 relative z-30">
                            <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 rounded-tr-4xl rounded-bl-4xl ring-4 ring-white shadow-2xl flex items-end justify-center">
                                <Image
                                    src={ashiquePhoto}
                                    alt="CA Muhammed Ashique"
                                    width={120}
                                    height={100}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* Name & title */}
                    <div className="text-center z-30 relative">
                        <h1 className="text-lg font-bold text-[#1D3E71] tracking-tight">
                            CA Muhammed Ashique
                        </h1>
                        <p className="text-xs text-[#283F67] mt-0.5 font-medium tracking-wide">
                            Director - Audit & Assurance
                        </p>
                    </div>

                    {/* Curved bottom decoration */}
                    <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 w-[150%] h-[80%] rounded-b-full overflow-hidden z-20">
                        <div className="w-full h-full bg-gradient-to-r from-slate-50 to-slate-100" />
                    </div>
                </div>

                {/* ------------------------------------------------------------------ */}
                {/* Dark section — action grid                                          */}
                {/* ------------------------------------------------------------------ */}
                <div
                    className="px-8 py-10 pt-20"
                    style={{
                        background: "linear-gradient(180deg, #1e3a5f 0%, #0f2540 100%)",
                    }}
                >
                    <div className="grid grid-cols-3 gap-y-5 gap-x-2 mb-6 mt-2">
                        <ActionBtn icon={icons.call} onClick={handlePhoneClick} label="Call" />
                        <ActionBtn icon={icons.email} onClick={handleMailClick} label="Email" />
                        <ActionBtn icon={icons.whatsapp} onClick={handleWhatsappClick} label="Whatsapp" />
                        <ActionBtn icon={icons.linkedin} onClick={handleLinkedInClick} label="LinkedIn" />
                        <ActionBtn icon={icons.facebook} onClick={handleFacebookClick} label="Facebook" />
                        <ActionBtn icon={icons.instagram} onClick={handleInstagramClick} label="Instagram" />
                        <ActionBtn icon={icons.save} onClick={handleSaveClick} label="Save Contact" />
                        <ActionBtn icon={icons.share} onClick={handleShareClick} label="Share" />
                        <ActionBtn icon={icons.website} onClick={handleWebClick} label="Website" />
                    </div>
                </div>

                {/* ------------------------------------------------------------------ */}
                {/* Address footer                                                      */}
                {/* ------------------------------------------------------------------ */}
                <div className="bg-[#D9D9D9] border-t border-[#D9D9D9] px-8 py-4">
                    <div className="flex items-start gap-4 text-slate-400">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border-y-2 border-white/10 bg-white backdrop-blur-sm flex items-center justify-center">
                                <Image
                                    src={icons.location}
                                    alt="Location"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <span className="text-xs text-slate-300 font-light tracking-wide">
                                Location
                            </span>
                        </div>
                        <p className="text-xs leading-relaxed text-[#283F67]">
                            Office No: A17-18,
                            <br />
                            Metha Plaza Building, Oud Metha,
                            <br />
                            Dubai, UAE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
