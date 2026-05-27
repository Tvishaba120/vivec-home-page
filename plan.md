# VIVEC Website Build Plan

A complete pixel-matched, fully responsive single-page site for VIVEC built on the existing TanStack Start + Tailwind v4 stack.

## Assets & setup
- Copy uploaded logo to `src/assets/vivec-logo.png` and import it in the header.
- Add brand colors as semantic tokens in `src/styles.css` (oklch equivalents of the spec hexes):
  `--brand-green #2EAA3E`, `--brand-orange #F5A623`, `--brand-blue #3B82F6`, `--brand-gold #F5C518`, `--brand-navy #1B2A4A`, plus text tokens. Register them in `@theme inline` so utilities like `bg-brand-green`, `text-brand-orange` work.
- Update root `head()` meta: title "VIVEC — Vivekanand Institute of Vocational and Entrepreneurial Competence", matching description, og tags.

## Routing
Single landing page on `/` (existing `src/routes/index.tsx`) — replace the placeholder. All 13 sections live in one route, composed from per-section components under `src/components/vivec/`.

## Component breakdown (`src/components/vivec/`)
1. `TopBar.tsx` — black bar, social icons (lucide), right-side links + language dropdown.
2. `Header.tsx` — two rows: logo + contact info + Student Login / DONATE buttons; green nav row with mobile hamburger (Sheet from shadcn).
3. `Hero.tsx` — full-width slider (3 slides, auto-rotate, dots), dark left overlay, copy + KNOW MORE button. Unsplash background.
4. `HeroCtaCards.tsx` — 3 colored cards (orange / blue / gold) with lucide icons and arrow buttons.
5. `AboutVivec.tsx` — two-column image + copy.
6. `WhyChooseUs.tsx` — green section with 4 stat columns separated by vertical dividers.
7. `StudyCourses.tsx` — 4 course cards with bg image, dark gradient, green "X YEAR COURSE" badge.
8. `HowToStudy.tsx` — 3 image cards (Apply / Visit / Contact).
9. `FeaturesGrid.tsx` — 6-cell grid (2×3) with colored icon boxes and divider lines.
10. `Testimonials.tsx` — single-card carousel, auto-rotate every 5s, prev/next arrows, large orange quote mark.
11. `AlumniBar.tsx` — section heading + dark navy marquee bar with company names (CSS keyframes marquee).
12. `SuccessStories.tsx` — masonry photo grid (CSS grid with varied col/row spans).
13. `Footer.tsx` — 4-column link footer + logo block + copyright.
14. `FooterBottom.tsx` — dark navy band: social circles, subscribe form, Instagram 2×2 thumbs.

Mount all components in order inside `Index()` in `src/routes/index.tsx`.

## Behavior
- Hero & testimonial carousels: local `useState` + `useEffect` interval; arrows for testimonials.
- Marquee: pure CSS `@keyframes` translating -50% on a duplicated track.
- Mobile nav: shadcn `Sheet` triggered by hamburger; nav links stack vertically.
- Smooth scroll: `html { scroll-behavior: smooth }` in `styles.css`.

## Responsive
- Mobile (<640): all multi-column grids collapse to 1 col, hero text scales down, stat columns become 2×2, footer columns stack.
- Tablet (≥768): 2-col grids for CTA cards / features / footer.
- Desktop (≥1024): full layouts per spec.
- Section vertical padding: `py-20` (80px) consistent across content sections.

## Images
- Hero: `https://images.unsplash.com/photo-1523050854058-8df90110c9f1`
- Course/about/how-to-study/success-stories: relevant unsplash IDs (Indian classroom, students, campus) referenced directly via URL since these are external photos.

## Technical notes
- Icons: `lucide-react` (Facebook, Instagram, Youtube, Linkedin, Twitter, Search, User, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, Quote, Download, Award, GraduationCap, BookOpen, Users, Clock, MapPin, Smartphone, RefreshCw, Hand, Mail, Phone, Send).
- All components are presentational; no backend, no server functions.
- No new packages needed (lucide-react, shadcn Sheet/Button already present).
- All colors via tokens — no raw hex in JSX.

Deliverable: a polished, fully responsive VIVEC homepage matching the 13-section spec exactly.
