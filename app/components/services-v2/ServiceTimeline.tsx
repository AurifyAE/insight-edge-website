import type { Milestone } from "@/app/lib/services-data";

export default function ServiceTimeline({ milestones }: { milestones: Milestone[] }) {
    return (
        <div className="relative mt-12">
            <h3 className="font-(family-name:--font-heading) text-[20px] font-semibold text-[#1E2E4B] sm:text-[24px]">
                Key Dates You Need to Know
            </h3>
            <div className="mt-2 h-px w-12 bg-[#C6DB5A]" />

            <div className="relative mt-6 space-y-0">
                {milestones.map((milestone, i) => (
                    <div key={milestone.date} className="relative flex gap-5 pb-8 last:pb-0">
                        {i !== milestones.length - 1 && (
                            <span
                                className="absolute left-[7px] top-4 h-full w-px bg-[#1E2E4B]/10"
                                aria-hidden="true"
                            />
                        )}
                        <span className="relative z-10 mt-1.5 h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-[#576500] bg-[#C6DB5A]" />
                        <div>
                            <p className="font-(family-name:--font-heading) text-sm font-semibold text-[#1E2E4B] sm:text-base">
                                {milestone.date}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-[#44474D]">{milestone.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
