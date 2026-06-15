@AGENTS.md

# Project: Insight Edge Global

Marketing/corporate website for Insight Edge Global LLC — an audit, assurance,
tax, and advisory firm based in the UAE specializing in the precious metals
industry (gold/bullion refiners, traders, jewellers).

## Stack

- Next.js 16.2.2 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- framer-motion + gsap for animation
- lucide-react for icons
- Path alias `@/*` maps to project root

## Structure

- `app/(main)/` — route group for main site pages: home (`page.tsx`), `about-us`,
  `contact`, `services`
- `app/profiles/ashique/` — standalone profile page with its own layout
- `app/components/layout/` — `Navbar.tsx`, `Footer.tsx`
- `app/components/home/` — homepage sections (Hero, About, Affiliate, CTA,
  Testimonials, Trust, ServiceSection)
- `app/components/about/` — About Us page sections
- `app/components/contact/` — `ContactForm.tsx`
- `app/components/services/` — older services UI (`ServicesAccordion.tsx`)
- `app/components/services-v2/` — newer services UI in progress (hero, side nav,
  checklist grid, chips, tokenization animation, "why choose" band, etc.)
- `app/lib/services-data.ts` — central data source for services content
  (`servicesData: ServiceSectionData[]`, with `SubService`, `ChecklistGroup`,
  `ServiceFeature` types)
- `seo.config.ts` — `defaultMetadata`, per-page `pageSEO` map, and
  `generateMetadata(pageKey)` helper used by page files for SEO/OG/Twitter tags
- `app/sitemap.ts`, `app/robots.ts` — SEO sitemap/robots config

## Notes

- `services-v2` appears to be an in-progress redesign of the services page —
  check whether `services/page.tsx` should be migrated to use it before adding
  new content to the old `services` components.
- When adding a new page, register it in `seo.config.ts` (`pageSEO`) and use
  `generateMetadata("key")` for its metadata export.
- This Next.js version may have breaking API/convention changes vs. training
  data — see `AGENTS.md` reminder to check `node_modules/next/dist/docs/`.
