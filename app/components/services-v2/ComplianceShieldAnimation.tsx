"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ORBIT_COUNT = 6;

export default function ComplianceShieldAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const ctx = gsap.context(() => {
            if (reduceMotion) {
                gsap.set(".shield-ring, .shield-icon, .shield-mark", { opacity: 1 });
                gsap.set(".shield-icon", { scale: 1 });
                return;
            }

            gsap.set(".shield-icon", { scale: 0, opacity: 0 });
            gsap.set(".shield-ring, .shield-mark", { opacity: 0, scale: 0.85 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });

            tl.to(".shield-mark", { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" })
                .to(
                    ".shield-ring",
                    { opacity: 1, scale: 1, duration: 1, ease: "power2.out", stagger: 0.15 },
                    "-=0.4"
                )
                .to(
                    ".shield-icon",
                    { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.08 },
                    "-=0.8"
                );

            // continuous orbit
            gsap.to(".shield-orbit-group", {
                rotate: 360,
                duration: 50,
                repeat: -1,
                ease: "none",
                transformOrigin: "50% 50%",
            });

            gsap.utils.toArray<SVGGElement>(".shield-icon").forEach((icon, i) => {
                gsap.to(icon, {
                    rotate: -360,
                    duration: 50,
                    repeat: -1,
                    ease: "none",
                    transformOrigin: "50% 50%",
                    delay: i * 0.01,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const icons = Array.from({ length: ORBIT_COUNT });

    return (
        <div
            ref={containerRef}
            className="relative mx-auto flex h-[360px] w-full max-w-[420px] items-center justify-center sm:h-[440px]"
        >
            <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
                {/* orbit rings */}
                <circle className="shield-ring" cx="200" cy="200" r="100" fill="none" stroke="#283F67" strokeOpacity="0.15" strokeWidth="1" />
                <circle className="shield-ring" cx="200" cy="200" r="150" fill="none" stroke="#283F67" strokeOpacity="0.08" strokeWidth="1" />

                {/* central shield (wireframe) */}
                <g className="shield-mark" transform="translate(170 150)">
                    <path
                        d="M30 0 L60 12 L60 38 C60 60 45 75 30 82 C15 75 0 60 0 38 L0 12 Z"
                        fill="none"
                        stroke="#283F67"
                        strokeWidth="1.5"
                    />
                    <path d="M16 40 L26 50 L46 26" fill="none" stroke="#283F67" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* orbiting compliance markers */}
                <g className="shield-orbit-group" transform-origin="200 200">
                    {icons.map((_, i) => {
                        const angle = (i / ORBIT_COUNT) * Math.PI * 2;
                        const radius = 125;
                        const cx = 200 + Math.cos(angle) * radius;
                        const cy = 200 + Math.sin(angle) * radius;
                        return (
                            <g className="shield-icon" key={i} transform={`translate(${cx} ${cy})`} style={{ transformOrigin: `${cx}px ${cy}px` }}>
                                <circle r="13" fill="none" stroke="#283F67" strokeWidth="1.5" />
                                <path d="M-5 0 L-1.5 3.5 L5 -4" fill="none" stroke="#283F67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        );
                    })}
                </g>
            </svg>
        </div>
    );
}
