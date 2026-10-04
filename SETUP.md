# Setup

```bash
npx shadcn@latest init            # if the project isn't shadcn-ready (Next.js + Tailwind + TypeScript)
npm i motion lenis lucide-react
```

1. Paste your `coverflow-carousel.tsx` verbatim into `components/ui/`. shadcn's
   `@/components/ui` alias is where generated and third-party UI primitives live,
   and the component imports `cn` from `@/lib/utils` (created by `shadcn init`).
2. Copy `components/*.tsx` and `app/layout.tsx`, `app/page.tsx` from this folder.
3. In `globals.css`, set the shadcn tokens (light theme) so the page has its look:

```css
:root {
  --background: #e9ecf5;
  --foreground: #14172b;
  --muted: #dde1ef;
  --muted-foreground: #4b5075;
  --primary: #3b4bff;
  --primary-foreground: #ffffff;
  --ring: #3b4bff;
}
@theme inline { --font-sans: var(--font-sans); }
```
(Tailwind v3: add `fontFamily: { sans: ["var(--font-sans)"] }` in `tailwind.config`.)
The carousel's `animate-in fade-in` caption classes need `tw-animate-css` (v4) or `tailwindcss-animate` (v3), both installed by `shadcn init`.
