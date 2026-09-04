import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/app/lib/blog-data";

export default function BlogSection() {
    const posts = blogPosts.slice(0, 3);

    return (
        <section className="w-full bg-[#F8F9FA] py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="text-[30px] font-bold leading-tight tracking-tight text-[#1E2E4B] sm:text-[38px]">
                            Latest insights
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#454748] sm:text-base">
                            Practical guidance on tax, compliance, and the regulations shaping the precious metals industry.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#576500] transition-colors duration-200 hover:text-[#1E2E4B]"
                    >
                        View all articles
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                {posts.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group relative isolate flex h-56 overflow-hidden rounded-2xl border border-[#1E2E4B]/10 bg-[#1E2E4B] transition-shadow duration-300 hover:shadow-[0_14px_32px_-16px_rgba(30,46,75,0.35)] sm:h-64"
                            >
                                <Image
                                    src={`${post.image}.jpg`}
                                    alt=""
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="-z-10 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#1E2E4B] via-[#1E2E4B]/70 to-[#1E2E4B]/5" />

                                <div className="mt-auto flex w-full flex-col gap-2 p-4 sm:p-5">
                                    <div className="flex items-center gap-3 text-xs text-white/70">
                                        <span>{post.category}</span>
                                        <span aria-hidden="true">·</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="line-clamp-2 font-(family-name:--font-heading) text-lg font-semibold leading-snug text-white sm:text-xl">
                                        {post.title}
                                    </h3>
                                    <span className="pt-0.5 text-sm font-semibold text-[#C6DB5A]">
                                        Read article <span aria-hidden="true">→</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
