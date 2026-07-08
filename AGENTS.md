# AGENTS.md

## Commands
- `npm run dev` — Vite dev server (HMR)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run lint` — Oxlint (the only verification gate)

There is **no test suite and no `typecheck` script**. Run `npm run lint` before considering work done; it is the sole automated check.

## Architecture
- Entry: `index.html` → `src/main.jsx` → `src/App.jsx`. `App.jsx` is effectively the whole app (one large component); the rest of `src/` is data or the background effect.
- **All site content lives in `src/data.js`** as the single exported `ROADMAP_DATA` object. Add/edit domains, subdomains, roadmaps, projects, resources, and careers there — components only render it. A domain uses either `subdomains` directly or a deeper `categories` → `subdomains` nesting; `App.jsx`'s `activeDomainSubs` handles both.
- **Routing is path-based** via `react-router-dom` `BrowserRouter` (not the hash routing of the old app). URLs are `/<domainId>` and `/<domainId>/<subId>`. The three views — orbit (root), domain glass-modal, full-screen kanban — are *derived from the URL path segments* in `AppContent`, not stored in a separate state variable. Keep it that way: navigation = `navigate(...)`, and view state recomputes from `location.pathname`. This is what makes deep links and the browser Back button work.
- `src/GridScan.tsx` is a self-contained three.js/WebGL shader background (inline GLSL in the file). It has optional `face-api.js` webcam face-tracking, **disabled by default** (`enableWebcam={false}` in `App.jsx`); face models load from a jsdelivr CDN by default. It is the only TypeScript file in the repo.

## Toolchain quirks
- **Linter is Oxlint** (`.oxlintrc.json`), not ESLint. `react/rules-of-hooks` is `error`; `react/only-export-components` is `warn` with `allowConstantExport`.
- **No `tsconfig` and no type-checking step**, despite `GridScan.tsx`. Vite/esbuild strips types at build time; `npm run build` does not type-check. Do not run `tsc` or invent a `typecheck` script.
- **Plain CSS only** (`src/styles/global.css`, `src/GridScan.css`) — no Tailwind, CSS Modules, or preprocessor. Design tokens are CSS custom properties in `:root` (e.g. `--pioneers-royal: #0D52BF`, `--font-body`, `--radius`). Reuse tokens; don't hardcode equivalents.
- Bleeding-edge deps: React 19, Vite 8, react-router-dom 7. Verify patterns against these versions, not older guides.

## Docs to trust vs. ignore
- `README.md` is the default Vite template boilerplate — not project-specific; ignore it for context.
- `detailed.md` describes the **previous** vanilla-JS app (hash routing, `script.js`, `style.css`, dark theme) that no longer exists. It is kept only as a content/schema reference. When it conflicts with `src/`, **trust the code**.
- `design.md` is the authoritative design system and is enforced for UI/CSS work. Its anti-patterns are hard rules, not suggestions — notably: no `Inter` font, no pure black `#000000`, no emojis in the UI, no neon/outer-glow shadows, no 3-column equal grids for domain lists, no centered hero (use asymmetric/split layouts), pill-shaped buttons (`border-radius: 9999px`), and animate only `transform`/`opacity`. Read it before touching styles.
