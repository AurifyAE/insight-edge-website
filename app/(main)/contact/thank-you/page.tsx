import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Thank You",
    description: "Your enquiry has been received by the Insight Edge Global team.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ContactThankYouPage() {
    return (
        <section className="relative isolate min-h-[calc(100dvh-6.5rem)] overflow-hidden bg-[#1E2E4B] px-5 pb-20 pt-36 sm:px-8 sm:pt-40 lg:pb-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(171,189,79,0.14),transparent_30%)]" />

            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                <div className="max-w-2xl">
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C6DB5A] text-[#1E2E4B] shadow-[0_18px_50px_rgba(13,25,45,0.3)]">
                        <Check aria-hidden="true" size={28} strokeWidth={2.4} />
                    </div>

                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C6DB5A]">
                        Enquiry received
                    </p>
                    <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                        Thank you for reaching out.
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                        Your enquiry has been received. Our team will be in touch shortly to understand your requirements and explore how we can assist you.
                    </p>

                    <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-[#C6DB5A] px-6 py-3.5 text-sm font-bold text-[#1E2E4B] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#D8ED6A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6DB5A] active:translate-y-0"
                        >
                            Back to home
                            <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
                        </Link>
                        <Link
                            href="/services"
                            className="text-sm font-semibold text-white underline decoration-white/30 underline-offset-8 transition-colors duration-300 hover:text-[#C6DB5A] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6DB5A]"
                        >
                            Explore our solutions
                        </Link>
                    </div>
                </div>

                <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-[#263A5D] p-8 shadow-[0_28px_90px_rgba(8,18,34,0.26)] sm:min-h-[410px] sm:p-10">
                    <Image
                        src="/images/home/world-map.svg"
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 420px"
                        className="object-contain p-6 opacity-[0.12]"
                    />

                    <div className="relative flex h-full min-h-[276px] flex-col justify-between sm:min-h-[330px]">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/home/logo-white.svg"
                                alt="Insight Edge Global"
                                width={88}
                                height={34}
                                className="h-9 w-auto"
                            />
                            <span className="h-8 w-px bg-white/20" aria-hidden="true" />
                            <Image
                                src="/images/home/logo-text-white.svg"
                                alt=""
                                width={150}
                                height={14}
                                className="h-2.5 w-auto"
                            />
                        </div>

                        <div>
                            <div className="mb-5 h-1 w-14 rounded-full bg-[#C6DB5A]" aria-hidden="true" />
                            <p className="max-w-xs text-2xl font-semibold leading-snug text-white">
                                Thoughtful advice starts with understanding your business.
                            </p>
                            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
                                A member of our advisory team will contact you using the details provided.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
