"use client";

import Image from "next/image";

const affiliates = [
    {
        name: "AAA",
        src: "/images/home/affiliates/aaa.png",
    },
    {
        name: "ACCA",
        src: "/images/home/affiliates/acca.png",
    },
    {
        name: "Department of Economic Development",
        src: "/images/home/affiliates/ded.png",
    },
    {
        name: "CMA",
        src: "/images/home/affiliates/cma.png",
    },
    {
        name: "ICAI",
        src: "/images/home/affiliates/icai.jpeg",
    },
];

export default function AffiliateSection() {
    return (
        <section className="w-full bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-12">
                    Affiliations
                </h2>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
                    {affiliates.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-full h-20"
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={140}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}