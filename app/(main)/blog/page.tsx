import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/app/lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insights & Articles | Insight Edge Global",
    description:
        "Expert insights, regulatory updates, and industry commentary for the UAE precious metals, gold, bullion, and jewellery sector.",
};

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-8px_rgba(30,46,75,0.10)] transition-shadow duration-300 hover:shadow-[0_12px_40px_-10px_rgba(30,46,75,0.18)]"
        >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1E2E4B]/5">
                <Image
                    src={`${post.image}.jpg`}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1E2E4B]/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-[#C6DB5A] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1E2E4B]">
                    {post.category}
                </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-3 text-[12px] text-[#44474D]/60">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                </div>
                <h2 className="font-(family-name:--font-heading) text-[17px] font-semibold leading-snug text-[#1E2E4B] transition-colors duration-200 group-hover:text-[#576500] sm:text-[19px]">
                    {post.title}
                </h2>
                <p className="line-clamp-3 text-[13.5px] leading-relaxed text-[#44474D]">
                    {post.excerpt}
                </p>
                <span className="mt-auto pt-2 text-sm font-semibold text-[#576500] transition-colors duration-200 group-hover:text-[#1E2E4B]">
                    Read article →
                </span>
            </div>
        </Link>
    );
}

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            {/* Hero banner */}
            <div className="relative overflow-hidden px-8 pt-56 pb-16 sm:px-10 lg:px-16">
                <Image
                    src="/images/services/audit-and-assurance.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-[#1E2E4B]/80" />
                <div className="relative z-10 max-w-7xl mx-auto">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#C6DB5A]">
                        Insight Edge Global
                    </p>
                    <h1 className="font-(family-name:--font-heading) text-[32px] font-bold leading-tight text-white sm:text-[44px]">
                        Insights & Articles
                    </h1>
                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
                        Regulatory updates, industry commentary, and expert guidance for the UAE precious metals, gold, bullion, and jewellery sector.
                    </p>
                </div>
            </div>

            {/* Posts grid */}
            <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 lg:px-16">
                {blogPosts.length === 0 ? (
                    <p className="text-center text-[#44474D]">No articles yet. Check back soon.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
