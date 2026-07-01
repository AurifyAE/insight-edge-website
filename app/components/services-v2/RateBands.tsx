import type { RateBand } from "@/app/lib/services-data";

export default function RateBands({ bands }: { bands: RateBand[] }) {
    return (
        <div className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bands.map((band) => (
                <div
                    key={band.label}
                    className="relative overflow-hidden rounded-sm border border-[#1E2E4B]/[0.06] bg-white p-6 shadow-[0_15px_40px_-20px_rgba(30,46,75,0.12)]"
                >
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#C6DB5A] to-[#576500]" />
                    <p className="font-(family-name:--font-heading) text-[34px] font-bold leading-none text-[#1E2E4B] sm:text-[40px]">
                        {band.rate}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#44474D]">{band.label}</p>
                </div>
            ))}
        </div>
    );
}
