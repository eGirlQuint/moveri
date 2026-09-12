# Moveri — production site

A Next.js (App Router) rebuild of the Figma export in `../figma_sketch`.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- lucide-react for icons
- No other runtime dependencies

Every page is a client component (the NL/EN language toggle is client-side
state in `localStorage`, so all page content needs to react to it), but each
route still gets its own server-rendered `metadata` export for a proper
`<title>`/description/canonical/OG tags per page — see `src/app/*/page.tsx`.

## Commands

```bash
npm install
npm run dev            # local dev server (http://localhost:3000)
npm run build           # production build
npm start                # run the production build (what nginx proxies to)
npm run typecheck       # tsc --noEmit
npm run optimize-images # re-run the image pipeline (see below)
```

## Structure

```
src/app/                    — routes (App Router): page.tsx + metadata per route
src/app/api/contact/route.ts — contact form backend (Discord webhook + rate limit)
src/app/not-found.tsx        — the 404 page
src/app/sitemap.ts, robots.ts — generated sitemap.xml / robots.txt
src/app/globals.css           — Tailwind + theme tokens + self-hosted font
src/views/                    — the actual page content (client components)
src/components/                — Header, Footer, shared UI
src/i18n/                       — NL/EN copy + LangProvider (React context)
src/lib/routes.ts               — route-id -> URL path map
src/lib/rate-limit.ts           — in-memory per-IP limiter used by the API route
public/images/                  — optimized WebP (checked in)
public/fonts/                   — self-hosted Nunito (variable, woff2)
scripts/optimize-images.mjs     — source photos -> optimized WebP
nginx/moveri.conf               — reverse-proxy config (nginx -> next start)
systemd/moveri.service          — keeps `next start` running persistently
```

Navigation is plain `<a href>` (no client router beyond what Next.js's own
App Router provides). Routes use a trailing slash (`/diensten/`, matching the
sitemap and existing links) — `next.config.ts` sets `trailingSlash: true`,
and Next automatically redirects the bare form.

## Contact form → Discord

`src/app/api/contact/route.ts` validates the submission, rate-limits by IP
(3 requests/minute, in `src/lib/rate-limit.ts` — in-memory, fine for a single
Node process, resets on restart), and forwards it to a Discord webhook as an
embed. The webhook URL is a server-only secret (`DISCORD_WEBHOOK_URL`) —
it's never sent to the browser.

**Setup:** in Discord, go to your server → channel settings → Integrations →
Webhooks → New Webhook, copy the URL. Locally, copy `.env.local.example` to
`.env.local` and paste it in. In production, set it as a real environment
variable on the server (see the systemd unit below) — never commit it.

## Before this goes live

- **Discord webhook**: set `DISCORD_WEBHOOK_URL` (see above) — without it the
  form fails closed with a 500 rather than silently dropping messages.
- **Domain**: `moveri.eu` is used as a placeholder in `layout.tsx`'s
  `metadataBase`, `sitemap.ts`, and `robots.ts` (guessed from the
  `irene@moveri.eu` contact address). Update those if the real domain differs.
- **`/actueel/`** is a "coming soon" placeholder and is marked `noindex` so
  Google doesn't index a thin page. Remove that from its `metadata` export
  once there's real content there.

## Deploying (self-hosted nginx + Cloudflare, Next.js in standard server mode)

Unlike a static export, this needs a persistent Node process — `next start`
— because the API route and rate limiting require a real server, not just
static files.

```bash
npm run build
rsync -avz --delete --exclude node_modules --exclude '.env*' ./ user@server:/var/www/moveri/current/
ssh user@server 'cd /var/www/moveri/current && npm install --omit=dev'
```

On the server:

1. Create `/var/www/moveri/shared/.env.production.local` with
   `DISCORD_WEBHOOK_URL=...` (real value), `chmod 600` it, owned by the
   `www-data` user (or whichever user runs the service).
2. Copy `systemd/moveri.service` to `/etc/systemd/system/moveri.service`,
   then `systemctl daemon-reload && systemctl enable --now moveri`.
3. Copy `nginx/moveri.conf` to `/etc/nginx/sites-available/`, symlink into
   `sites-enabled/`, `nginx -t && systemctl reload nginx`. It reverse-proxies
   to the Node process on `127.0.0.1:3000` and forwards the real visitor IP
   (via Cloudflare's `CF-Connecting-IP` → nginx `real_ip` → `X-Real-IP`) so
   the contact-form rate limiter sees actual visitor IPs, not Cloudflare's.
4. Set Cloudflare's SSL/TLS mode to **Full (strict)** with a free Cloudflare
   Origin CA certificate installed on the server — the config file has notes
   on this at the top.
5. To deploy an update: repeat the `rsync`/`npm install` step, then
   `systemctl restart moveri` (note: this clears the in-memory rate-limit
   counters, which is fine).

## Updating photos

Drop a new source photo in `../figma_sketch/src/imports` (or point
`MOVERI_SOURCE_DIR` at wherever it lives), add an entry to
`scripts/optimize-images.mjs`, then `npm run optimize-images`. It resizes
to the size actually needed on the page and re-encodes to WebP (lossy for
photos, lossless for the logo/partner marks) into `public/images/`.
