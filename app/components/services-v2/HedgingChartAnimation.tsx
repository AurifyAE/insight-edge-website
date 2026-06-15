"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINE_PATH =
    "M0,140 L40,150 L80,110 L120,130 L160,80 L200,100 L240,60 L280,90 L320,40 L360,65 L400,30";

export default function HedgingChartAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const ctx = gsap.context(() => {
            if (reduceMotion) {
                gsap.set(".hedge-band, .hedge-line, .hedge-point, .hedge-axis", { opacity: 1 });
                return;
            }

            gsap.set(".hedge-band, .hedge-axis", { opacity: 0 });
            gsap.set(".hedge-line", { opacity: 0 });
            gsap.set(".hedge-point", { opacity: 0, scale: 0 });

            const line = document.querySelector<SVGPathElement>(".hedge-line");
            const length = line?.getTotalLength() ?? 0;
            gsap.set(".hedge-line", { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            });

            tl.to(".hedge-axis", { opacity: 1, duration: 0.5, ease: "power2.out" })
                .to(".hedge-band", { opacity: 0.5, duration: 0.6, ease: "power2.out" }, "-=0.2")
                .to(".hedge-line", { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, "-=0.3")
                .to(
                    ".hedge-point",
                    { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)", stagger: 0.06 },
                    "-=0.6"
                );

            // subtle continuous drift on the price band
            gsap.to(".hedge-band", {
                y: 6,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const points = [
        { x: 0, y: 140 },
        { x: 80, y: 110 },
        { x: 160, y: 80 },
        { x: 240, y: 60 },
        { x: 320, y: 40 },
        { x: 400, y: 30 },
    ];

    return (
        <div
            ref={containerRef}
            className="relative mx-auto flex h-[260px] w-full max-w-[480px] items-center justify-center sm:h-[300px]"
        >
            <svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden="true">
                {/* axis */}
                <g className="hedge-axis">
                    <line x1="0" y1="180" x2="400" y2="180" stroke="#283F67" strokeOpacity="0.15" strokeWidth="1" />
                    <line x1="0" y1="0" x2="0" y2="180" stroke="#283F67" strokeOpacity="0.15" strokeWidth="1" />
                </g>

                {/* hedge price band */}
                <rect className="hedge-band" x="0" y="50" width="400" height="60" fill="#283F67" fillOpacity="0.06" />

                {/* price line */}
                <path
                    className="hedge-line"
                    d={LINE_PATH}
                    fill="none"
                    stroke="#283F67"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* data points */}
                {points.map((p, i) => (
                    <circle key={i} className="hedge-point" cx={p.x} cy={p.y} r="4" fill="#F8F9FA" stroke="#283F67" strokeWidth="2" />
                ))}
            </svg>
        </div>
    );
}
