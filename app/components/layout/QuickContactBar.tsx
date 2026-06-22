"use client";

import { Phone, Mail, type LucideIcon } from "lucide-react";

const CONTACTS: {
    label: string;
    href: string;
    external?: boolean;
    icon?: LucideIcon;
    iconSrc?: string;
}[] = [
    {
        label: "Call us",
        href: "tel:+971503708785",
        icon: Phone,
    },
    {
        label: "Email us",
        href: "mailto:info@insightedge.global",
        icon: Mail,
    },
    {
        label: "WhatsApp us",
        href: "https://wa.me/971503708785",
        iconSrc: "/profile/icons/whatsapp.svg",
        external: true,
    },
];

export default function QuickContactBar() {
    return (
        <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-3">
            {CONTACTS.map(({ label, href, icon: Icon, iconSrc, external }) => (
                <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#1E2E4B] text-white shadow-[0_8px_24px_-8px_rgba(30,46,75,0.5)] transition-colors duration-200 hover:bg-[#C6DB5A] hover:text-[#1E2E4B]"
                >
                    {Icon ? (
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                    ) : (
                        <img src={iconSrc} alt="" className="h-5 w-5" />
                    )}
                </a>
            ))}
        </div>
    );
}
