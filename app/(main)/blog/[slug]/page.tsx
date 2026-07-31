import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts, type BlogSection } from "@/app/lib/blog-data";
import { defaultMetadata } from "@/seo.config";
import { ArrowLeft } from "lucide-react";

const BASE_URL = "https://insightedge.global";

export function generateStaticParams() {
    return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return defaultMetadata;

    const url = `${BASE_URL}/blog/${post.slug}`;
    return {
        ...defaultMetadata,
        title: `${post.title} | Insight Edge Global`,
        description: post.excerpt,
        alternates: { canonical: url },
        openGraph: {
            ...defaultMetadata.openGraph,
            title: post.title,
            description: post.excerpt,
            url,
        },
        twitter: {
            ...defaultMetadata.twitter,
            title: post.title,
            description: post.excerpt,
        },
    };
}

function RenderSection({ section, index }: { section: BlogSection; index: number }) {
    switch (section.type) {
        case "heading":
            return (
                <h2 className="mt-10 font-(family-name:--font-heading) text-[22px] font-bold leading-snug text-[#1E2E4B] sm:text-[26px]">
                    {section.text}
                </h2>
            );

        case "subheading":
            return (
                <h3 className="mt-6 text-[16px] font-semibold text-[#1E2E4B] sm:text-[18px]">
                    {section.text}
                </h3>
            );

        case "paragraph":
            return (
                <p className="mt-5 text-[15px] leading-[1.85] text-[#44474D]">
                    {section.text}
                </p>
            );

        case "bullets":
            return (
                <ul className="mt-5 space-y-4">
                    {section.items?.map((item, i) => {
                        if (typeof item === "string") {
                            return (
                                <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#44474D]">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6DB5A]" />
                                    {item}
                                </li>
                            );
                        }
                        return (
                            <li key={i} className="mt-2">
                                <p className="font-semibold text-[#1E2E4B]">{item.heading}</p>
                                <ul className="mt-2 space-y-2 pl-4">
                                    {item.bullets.map((b, j) => (
                                        <li key={j} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#44474D]">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6DB5A]/70" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            );

        case "numbered":
            return (
                <ol className="mt-5 space-y-6">
                    {section.items?.map((item, i) => {
                        if (typeof item === "string") {
                            return (
                                <li key={i} className="flex items-start gap-4 text-[15px] leading-relaxed text-[#44474D]">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E2E4B] text-[11px] font-bold text-white">
                                        {i + 1}
                                    </span>
                                    {item}
                                </li>
                            );
                        }
                        return (
                            <li key={i} className="flex items-start gap-4">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E2E4B] text-[11px] font-bold text-white">
                                    {i + 1}
                                </span>
                                <div className="flex-1">
                                    <p className="font-semibold text-[#1E2E4B]">{item.heading}</p>
                                    <ul className="mt-2 space-y-2">
                                        {item.bullets.map((b, j) => (
                                            <li key={j} className="flex items-start gap-3 text-[15px] leading-relaxed text-[#44474D]">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6DB5A]/70" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            );

        default:
            return null;
    }
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            {/* Hero image */}
            <div className="relative h-[420px] w-full overflow-hidden sm:h-[560px] lg:h-[640px]">
                <Image
                    src={`${post.image}.jpg`}
                    alt={post.title}
                    fill
                    fetchPriority="high"
                    loading="eager"
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1E2E4B]/80 via-[#1E2E4B]/30 to-[#1E2E4B]/50" />

                {/* Category + meta overlay */}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 lg:px-16">
                    <div className="mx-auto max-w-[860px]">
                        <span className="mb-3 inline-block rounded-full bg-[#C6DB5A] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1E2E4B]">
                            {post.category}
                        </span>
                        <h1 className="font-(family-name:--font-heading) text-[22px] font-bold leading-tight text-white sm:text-[30px] lg:text-[36px]">
                            {post.title}
                        </h1>
                        <div className="mt-3 flex items-center gap-3 text-[13px] text-white/60">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article body */}
            <div className="mx-auto max-w-[860px] px-6 py-12 sm:px-10">
                {/* Back link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-[#44474D] transition-colors hover:text-[#576500]"
                >
                    <ArrowLeft className="h-4 w-4" />
                    All Articles
                </Link>

                {/* Divider */}
                <div className="my-8 h-px bg-[#1E2E4B]/10" />

                {/* Content */}
                <article>
                    {post.content.map((section, i) => (
                        <RenderSection key={i} section={section} index={i} />
                    ))}
                </article>

                {/* Disclaimer */}
                {post.disclaimer && (
                    <div className="mt-12 rounded-xl border border-[#1E2E4B]/10 bg-[#1E2E4B]/[0.03] p-5">
                        <p className="text-[12.5px] italic leading-relaxed text-[#44474D]/70">
                            <span className="font-semibold not-italic text-[#44474D]">Note: </span>
                            {post.disclaimer}
                        </p>
                    </div>
                )}

                {/* CTA */}
                <div className="mt-12 overflow-hidden rounded-2xl bg-[#1E2E4B] p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#C6DB5A]">
                        Need guidance?
                    </p>
                    <h3 className="mt-2 font-(family-name:--font-heading) text-[20px] font-bold text-white sm:text-[24px]">
                        Talk to an E-Invoicing Specialist
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                        IEG helps precious metals, bullion, and jewellery businesses prepare for the UAE's mandatory e-invoicing deadline.
                    </p>
                    <Link
                        href="/services/e-invoicing"
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#C6DB5A] px-6 py-2.5 text-sm font-semibold text-[#1E2E4B] transition-colors hover:bg-[#D8ED6A]"
                    >
                        Learn about our E-Invoicing Services →
                    </Link>
                </div>

                {/* Back link bottom */}
                <div className="mt-10 border-t border-[#1E2E4B]/10 pt-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#576500] transition-colors hover:text-[#1E2E4B]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to all articles
                    </Link>
                </div>
            </div>
        </div>
    );
}
