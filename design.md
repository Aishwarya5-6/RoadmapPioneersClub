# Design System: Pioneers Roadmap Hub

## 1. Visual Theme & Atmosphere
A restrained, **"Art Gallery Airy"** interface that leans into a structured, blueprint-like aesthetic inspired by the club's grid-paper branding. The layout employs confident **Offset Asymmetric** (Variance 6) compositions, breaking away from standard centered columns. The atmosphere is highly professional, academic yet modern, propelled by **Fluid CSS** (Motion 6) spring-physics micro-interactions that make the interface feel alive and tactile, rather than static.

## 2. Color Palette & Roles
*Extracted directly from the provided `Design context` assets, calibrated for high-contrast accessibility and premium UI.*

- **Canvas Blueprint** (`#F8FAFC`) — Primary background surface. Suggests the subtle light-gray grid paper from the branding.
- **Pure Surface** (`#FFFFFF`) — Card and container fill for elevated elements.
- **Charcoal Ink** (`#0F172A`) — Primary text, Slate-900 depth. *Strictly no pure black (#000000).*
- **Muted Steel** (`#64748B`) — Secondary text, descriptions, and metadata.
- **Whisper Border** (`rgba(148, 163, 184, 0.25)`) — Card borders, 1px structural lines, and the subtle background grid overlay.
- **Pioneers Royal** (`#0D52BF`) — Single accent color for CTAs, active states, and focus rings. Sourced directly from the primary `PC logo.png`.
- **Sky Wash** (`#E0E7FF`) — A very faint, desaturated version of the accent used strictly for hover-state backgrounds or subtle highlighting.

## 3. Typography Rules
*Elevating the playful Canva fonts into a strict, highly professional tech-club aesthetic.*

- **Display:** `Outfit` (or `Cabinet Grotesk`) — Track-tight, controlled scale, weight-driven hierarchy. Used for large section headers.
- **Body:** `Inter` is BANNED. Use `Geist` or `Satoshi` — Relaxed leading, 65ch max-width, neutral secondary color (`Muted Steel`).
- **Mono:** `JetBrains Mono` — For code snippets, metadata tags, path counts, and high-density numbers.
- **Banned:** Generic system fonts, `Inter`, and standard serifs (`Times New Roman`, `Georgia`). Absolutely no overly decorative script fonts in the UI layer.

## 4. Component Stylings
- **Buttons:** Flat, no outer glow. Pill-shaped (`border-radius: 9999px`) to match the exact "changemakers" pill graphics from the slide designs. Tactile -1px translate on active state. `Pioneers Royal` fill for primary, ghost/outline for secondary.
- **Cards:** Generously rounded corners (`1.5rem`). Diffused whisper shadow tinting slightly towards the blue accent (`rgba(13, 82, 191, 0.04)`). High-density lists (like the detailed roadmaps) replace cards with clean `border-top` dividers and negative space to avoid "card fatigue."
- **Inputs:** Label above, error below. Focus ring in `Pioneers Royal`. No floating labels.
- **Loaders:** Skeletal shimmer matching exact layout dimensions. No generic circular spinners.
- **Hero Section:** **Inline Image Typography** — Embed small, rounded graphics (like a tiny version of the rocket or hand illustrations) directly between words in the main headline. This is the signature creative technique. No centered text; use asymmetric whitespace.

## 5. Layout Principles
- Grid-first responsive architecture using CSS Grid over Flexbox math. Never use `calc()` percentage hacks.
- The generic "3 equal cards horizontally" feature row is BANNED — use a 2-column Zig-Zag for domains, or an asymmetric bento-box grid.
- Strict single-column collapse below `768px` (Mobile-first).
- Contain layouts using max-width constraints (e.g., `1200px` centered).
- No overlapping elements — every element occupies its own clear spatial zone.

## 6. Motion & Interaction
- **Spring Physics default:** `stiffness: 100, damping: 20` — premium, weighty feel. No linear easing.
- **Staggered Orchestration:** Never mount the domain or roadmap lists instantly — use cascade delays (`0.05s` increments) for waterfall reveals.
- **Perpetual Micro-Interactions:** Subtle floating animations on hero graphics. Active tags have a faint, infinite shimmer state.
- **Performance:** Animate exclusively via `transform` and `opacity`.

## 7. Anti-Patterns (Banned)
- No emojis anywhere (replace the current `🚀`, `🤖` with sleek SVG icons).
- No `Inter` font.
- No pure black (`#000000`).
- No neon/outer glow shadows.
- No 3-column equal grids for the domain lists.
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash", "Next-Gen").
- No filler UI text: "Scroll to explore", "Swipe down", scroll arrows, bouncing chevrons.
- No centered Hero sections; force Split Screen or Left-Aligned structures.
