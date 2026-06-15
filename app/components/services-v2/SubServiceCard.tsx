"use client";

import { useRef } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SubService } from "@/app/lib/services-data";
import ChipGroup from "./ChipGroup";
import ChecklistGrid from "./ChecklistGrid";

export default function SubServiceCard({ item }: { item: SubService }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const Icon = (Icons[item.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkle;

    return (
        <div
            ref={cardRef}
            className="service-card group relative overflow-hidden rounded-sm border border-[#1E2E4B]/[0.06] bg-white p-6 shadow-[0_15px_40px_-20px_rgba(30,46,75,0.12)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_rgba(30,46,75,0.18)]"
        >
            <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#C6DB5A] to-[#576500] transition-transform duration-300 group-hover:scale-x-100" />

            <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-gradient-to-br from-[#d5ea67]/40 to-[#283F67]/10 transition-colors duration-300 group-hover:from-[#d5ea67]/60 group-hover:to-[#283F67]/15">
                <Icon className="h-5 w-5 text-[#1E2E4B]" strokeWidth={1.5} />
            </div>

            <h3 className="mt-4 font-(family-name:--font-heading) text-[18px] font-semibold leading-snug text-[#191C1D]">
                {item.title}
            </h3>

            {item.subtitle && (
                <p className="mt-1 text-[12.5px] italic text-[#576500]">{item.subtitle}</p>
            )}

            {item.description && (
                <p className="mt-3 text-[13.5px] leading-relaxed text-[#44474D]">{item.description}</p>
            )}

            {item.chips && <ChipGroup chips={item.chips} />}
            {item.checklist && <ChecklistGrid groups={item.checklist} />}
        </div>
    );
}
