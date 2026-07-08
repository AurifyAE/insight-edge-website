"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircleMore, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const CONTACTS: {
    label: string;
    href: string;
    external?: boolean;
    icon?: LucideIcon;
    iconSrc?: string;
}[] = [
    { label: "Call us", href: "tel:+971503708785", icon: Phone },
    { label: "Email us", href: "mailto:info@insightedge.global", icon: Mail },
    { label: "WhatsApp", href: "https://wa.me/971503708785", iconSrc: "/profile/icons/whatsapp.svg", external: true },
];

const ITEM_SIZE = 40;
const GAP = 10;
const TRIGGER_SIZE = 48;

export default function QuickContactBar() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="fixed right-4 top-1/2 z-50 -translate-y-1/2"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* Sub icons — absolutely positioned above trigger, no layout shift */}
            <AnimatePresence>
                {open && CONTACTS.map(({ label, href, icon: Icon, iconSrc, external }, i) => {
                    const offset = (CONTACTS.length - i) * (ITEM_SIZE + GAP) + GAP;
                    return (
                        <motion.a
                            key={label}
                            href={href}
                            aria-label={label}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 12, scale: 0.7 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.7 }}
                            transition={{ duration: 0.25, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="group absolute flex items-center justify-center rounded-full bg-[#1E2E4B] text-white shadow-[0_8px_20px_-6px_rgba(30,46,75,0.45)] transition-colors duration-200 hover:bg-[#C6DB5A] hover:text-[#1E2E4B]"
                            style={{
                                width: ITEM_SIZE,
                                height: ITEM_SIZE,
                                bottom: `calc(${TRIGGER_SIZE}px + ${offset - ITEM_SIZE - GAP}px)`,
                                right: 0,
                            }}
                        >
                            {Icon ? (
                                <Icon className="h-4 w-4" strokeWidth={1.75} />
                            ) : (
                                <img src={iconSrc} alt="" className="h-4 w-4" />
                            )}
                            {/* Tooltip */}
                            <span className="pointer-events-none absolute right-12 whitespace-nowrap rounded-md bg-[#1E2E4B] px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                                {label}
                            </span>
                        </motion.a>
                    );
                })}
            </AnimatePresence>

            {/* Trigger button — always fixed position, never moves */}
            <motion.button
                aria-label="Contact options"
                onClick={() => setOpen((p) => !p)}
                animate={{ backgroundColor: open ? "#C6DB5A" : "#1E2E4B" }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center justify-center rounded-full shadow-[0_6px_20px_0px_rgba(30,46,75,0.65)]"
                style={{ width: TRIGGER_SIZE, height: TRIGGER_SIZE }}
            >
                <MessageCircleMore
                    className="h-5 w-5 transition-colors duration-200"
                    strokeWidth={1.75}
                    style={{ color: open ? "#1E2E4B" : "#ffffff" }}
                />
            </motion.button>
        </div>
    );
}
