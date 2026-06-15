"use client";

import { useState } from "react";
import Link from "next/link";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { servicesData } from "@/app/lib/services-data";

export default function ServicesPageNav({ activeId }: { activeId: string }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {/* Desktop sticky side nav */}
            <div className={`sticky top-32 hidden h-fit shrink-0 self-start lg:block ${isOpen ? "w-56" : "w-9"}`}>
                {isOpen ? (
                    <nav aria-label="Service pages">
                        <div className="mb-2 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="Hide service navigation"
                                aria-expanded={true}
                                title="Hide service navigation"
                                className="flex items-center justify-center rounded-sm p-1 text-[#75777E] transition-colors hover:text-[#1E2E4B]"
                            >
                                <PanelLeftClose className="h-4 w-4" />
                            </button>
                        </div>
                        <ul className="space-y-1 border-l border-[#1E2E4B]/10 pl-5">
                            {servicesData.map((service) => {
                                const isActive = activeId === service.id;
                                return (
                                    <li key={service.id}>
                                        <Link
                                            href={`/services/${service.id}`}
                                            className={`group flex items-baseline gap-2.5 py-2 text-[13px] leading-snug transition-colors ${
                                                isActive ? "text-[#1E2E4B] font-semibold" : "text-[#75777E] hover:text-[#1E2E4B]"
                                            }`}
                                        >
                                            <span
                                                className={`font-(family-name:--font-heading) text-[11px] transition-colors ${
                                                    isActive ? "text-[#576500]" : "text-[#75777E]/60 group-hover:text-[#576500]/70"
                                                }`}
                                            >
                                                {service.number}
                                            </span>
                                            <span>{service.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                ) : (
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        aria-label="Show service navigation"
                        aria-expanded={false}
                        title="Show service navigation"
                        className="flex items-center justify-center rounded-sm border border-[#1E2E4B]/10 p-1.5 text-[#75777E] transition-colors hover:text-[#1E2E4B]"
                    >
                        <PanelLeftOpen className="h-4 w-4" />
                    </button>
                )}
            </div>

            {/* Mobile horizontal pill bar */}
            <nav
                aria-label="Service pages"
                className="sticky top-16 z-30 -mx-6 mb-4 overflow-x-auto border-b border-[#1E2E4B]/6 bg-[#F8F9FA]/90 px-6 py-3 backdrop-blur-lg lg:hidden"
            >
                <ul className="flex w-max gap-2">
                    {servicesData.map((service) => {
                        const isActive = activeId === service.id;
                        return (
                            <li key={service.id}>
                                <Link
                                    href={`/services/${service.id}`}
                                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-sm border px-3.5 py-1.5 text-[12px] transition-colors ${
                                        isActive
                                            ? "border-[#576500]/30 bg-[#d5ea67]/30 text-[#1E2E4B]"
                                            : "border-[#1E2E4B]/10 text-[#44474D]"
                                    }`}
                                >
                                    <span className="font-(family-name:--font-heading) text-[10px] text-[#576500]">
                                        {service.number}
                                    </span>
                                    {service.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
