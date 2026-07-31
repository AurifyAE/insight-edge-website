import type { NextConfig } from "next";

// Static (non-nonce) CSP: this site is fully statically generated, and
// nonce-based CSP would force dynamic rendering on every page (no ISR/CDN
// caching) just to drop 'unsafe-inline' from script-src/style-src. Not a
// good trade for a marketing site. This still meaningfully restricts
// default-src/object-src/base-uri/form-action/frame-ancestors and pins
// script/connect/img sources to the exact third parties actually in use
// (GTM, GA4, Meta Pixel, Google Apps Script form submission).
//
// 'unsafe-eval' is added only in dev: React's dev-mode debugging (stack
// reconstruction, Turbopack HMR) relies on eval(). Neither React nor
// Next.js use eval() in production.
const isDev = process.env.NODE_ENV === "development";
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://connect.facebook.net;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob: https://www.facebook.com https://www.googletagmanager.com;
    font-src 'self';
    connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://script.google.com;
    frame-src https://www.googletagmanager.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
    .replace(/\s{2,}/g, " ")
    .trim();

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                // Exclude _next/* (static assets, dev-mode infrastructure like
                // the Turbopack HMR/client-middleware manifest) — those don't
                // need page-level security headers, and applying
                // X-Content-Type-Options: nosniff to them tripped a MIME-type
                // mismatch on an internal dev-only file.
                source: "/((?!_next/).*)",
                headers: [
                    { key: "Content-Security-Policy", value: cspHeader },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload",
                    },
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
                ],
            },
        ];
    },
};

export default nextConfig;
