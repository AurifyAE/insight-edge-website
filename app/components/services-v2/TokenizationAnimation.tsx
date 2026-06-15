"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOKEN_COUNT = 8;

export default function TokenizationAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const ctx = gsap.context(() => {
            if (reduceMotion) {
                gsap.set(".tok-bar, .tok-token, .tok-ring", { opacity: 1 });
                gsap.set(".tok-token", { scale: 1 });
                return;
            }

            gsap.set(".tok-token", { scale: 0, opacity: 0 });
            gsap.set(".tok-ring", { opacity: 0, scale: 0.8 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });

            tl.from(".tok-bar", {
                opacity: 0,
                scale: 0.85,
                duration: 0.8,
                ease: "power3.out",
            })
                .to(".tok-bar", {
                    opacity: 0.15,
                    duration: 0.6,
                    ease: "power2.inOut",
                })
                .to(
                    ".tok-ring",
                    { opacity: 1, scale: 1, duration: 1, ease: "power2.out", stagger: 0.15 },
                    "-=0.4"
                )
                .to(
                    ".tok-token",
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "back.out(1.7)",
                        stagger: 0.08,
                    },
                    "-=0.8"
                );

            // continuous orbit
            gsap.to(".tok-orbit-group", {
                rotate: 360,
                duration: 40,
                repeat: -1,
                ease: "none",
                transformOrigin: "50% 50%",
            });

            gsap.utils.toArray<SVGGElement>(".tok-token").forEach((token, i) => {
                gsap.to(token, {
                    rotate: -360,
                    duration: 40,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "50% 50%",
                    delay: i * 0.01,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const tokens = Array.from({ length: TOKEN_COUNT });

    return (
        <div ref={containerRef} className="relative mx-auto flex h-[360px] w-full max-w-[420px] items-center justify-center sm:h-[440px]">
            <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
                {/* orbit rings */}
                <circle className="tok-ring" cx="200" cy="200" r="100" fill="none" stroke="#283F67" strokeOpacity="0.15" strokeWidth="1" />
                <circle className="tok-ring" cx="200" cy="200" r="150" fill="none" stroke="#283F67" strokeOpacity="0.08" strokeWidth="1" />

                {/* central gold bar (wireframe) */}
                <g className="tok-bar" transform="translate(155 175)">
                    <rect x="0" y="0" width="90" height="50" rx="4" fill="none" stroke="#283F67" strokeWidth="1.5" />
                    <rect x="8" y="8" width="74" height="34" rx="2" fill="none" stroke="#283F67" strokeOpacity="0.5" strokeWidth="1" />
                </g>

                {/* orbiting tokens */}
                <g className="tok-orbit-group" transform-origin="200 200">
                    {tokens.map((_, i) => {
                        const angle = (i / TOKEN_COUNT) * Math.PI * 2;
                        const radius = 125;
                        const cx = 200 + Math.cos(angle) * radius;
                        const cy = 200 + Math.sin(angle) * radius;
                        return (
                            <g className="tok-token" key={i} transform={`translate(${cx} ${cy})`} style={{ transformOrigin: `${cx}px ${cy}px` }}>
                                <circle r="14" fill="none" stroke="#283F67" strokeWidth="1.5" />
                                <text
                                    x="0"
                                    y="4"
                                    textAnchor="middle"
                                    fontSize="11"
                                    fill="#283F67"
                                    fontFamily="var(--font-heading)"
                                    fontWeight="700"
                                >
                                    Au
                                </text>
                            </g>
                        );
                    })}
                </g>
            </svg>
        </div>
    );
}
