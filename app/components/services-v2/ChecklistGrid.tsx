import { Check } from "lucide-react";
import type { ChecklistGroup } from "@/app/lib/services-data";

export default function ChecklistGrid({ groups }: { groups: ChecklistGroup[] }) {
    return (
        <div className="mt-4 grid grid-cols-1 gap-6">
            {groups.map((group, i) => (
                <div key={i}>
                    {group.heading && (
                        <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#576500]">
                            {group.heading}
                        </h4>
                    )}
                    <ul className="space-y-2">
                        {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#44474D]">
                                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#576500]" strokeWidth={2} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
