"use client";

/**
 * Ambient, slowly-drifting lime accent glow used as a shared background
 * accent across the light services pages. Purely decorative, very low
 * opacity to preserve the minimal/spacious aesthetic - sits behind
 * content with pointer-events disabled.
 */
export default function GoldGlow({ className = "" }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        >
            <div className="gold-glow gold-glow--one" />
            <div className="gold-glow gold-glow--two" />

            <style jsx>{`
                .gold-glow {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(180px);
                    opacity: 0.18;
                    background: radial-gradient(
                        circle at center,
                        #c6db5a 0%,
                        rgba(198, 219, 90, 0) 70%
                    );
                }

                .gold-glow--one {
                    width: 60vw;
                    height: 60vw;
                    top: -10%;
                    left: -10%;
                    animation: drift-one 60s ease-in-out infinite alternate;
                }

                .gold-glow--two {
                    width: 50vw;
                    height: 50vw;
                    bottom: -15%;
                    right: -10%;
                    opacity: 0.1;
                    background: radial-gradient(
                        circle at center,
                        #283f67 0%,
                        rgba(40, 63, 103, 0) 70%
                    );
                    animation: drift-two 75s ease-in-out infinite alternate;
                }

                @keyframes drift-one {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    100% {
                        transform: translate(8%, 6%) scale(1.1);
                    }
                }

                @keyframes drift-two {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    100% {
                        transform: translate(-6%, -8%) scale(1.05);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .gold-glow--one,
                    .gold-glow--two {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    );
}
