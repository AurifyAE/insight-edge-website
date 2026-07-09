"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/**
 * Wraps page content in an enter transition that replays on every route change.
 * Keyed by pathname so the element remounts on navigation (no AnimatePresence
 * needed, which App Router unmounts too eagerly for reliable exit animations).
 */
export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // The home page's Hero runs its own entrance animations over a heavy,
    // filter-laden subtree. A transform on the whole page compounds with it and
    // causes a first-frame compositing jerk, so home fades instead of slides.
    const isHome = pathname === "/";

    return (
        <motion.div
            key={pathname}
            className="overflow-x-clip"
            initial={isHome ? { opacity: 0 } : { opacity: 0, x: 80 }}
            animate={isHome ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{
                duration: isHome ? 0.6 : 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
