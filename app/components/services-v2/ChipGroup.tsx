export default function ChipGroup({ chips }: { chips: string[] }) {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {chips.map((chip) => (
                <span
                    key={chip}
                    className="rounded-sm border border-[#283F67]/10 bg-[#283F67]/6 px-3.5 py-1.5 text-[12.5px] leading-snug text-[#1E2E4B] transition-colors hover:border-[#283F67]/25 hover:bg-[#283F67]/10"
                >
                    {chip}
                </span>
            ))}
        </div>
    );
}
