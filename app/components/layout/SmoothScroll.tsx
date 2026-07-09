"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide smooth scrolling via Lenis, driven by the GSAP ticker so that
 * existing ScrollTrigger animations (services-v2) stay in sync.
 */
export default function SmoothScroll() {
    useEffect(() => {
        // Respect users who prefer reduced motion.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        // Keep ScrollTrigger updated on every Lenis scroll frame.
        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time: number) => {
            // GSAP ticker time is in seconds; Lenis expects milliseconds.
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.off("scroll", ScrollTrigger.update);
            gsap.ticker.remove(raf);
            lenis.destroy();
        };
    }, []);

    return null;
}
