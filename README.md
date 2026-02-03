# School / University Website (Static)

Static Next.js website (no backend). Pages use local content from `apps/web/src/content/site-data.ts`.

## Prereqs
- Node.js 20+

## Quick start (local dev)

```powershell
cd D:\school
Copy-Item apps\web\.env.local.example apps\web\.env.local
\scripts\dev.ps1
```

Web: `http://localhost:3000`

## Build a static export

```powershell
npm --prefix apps\web install
npm --prefix apps\web run build
```

Static output is generated in `apps/web/out/`.

## Deploy
- **Vercel (recommended)**
	- Import the GitHub repo in Vercel.
	- Set **Root Directory** to `apps/web`.
	- Build Command: `npm run build`
	- Output Directory: `out`
	- (Optional) Env var: `NEXT_PUBLIC_SITE_URL` = your Vercel URL (e.g. `https://school-website.vercel.app`)

- **GitHub Pages / Netlify / Cloudflare Pages**: upload the contents of `apps/web/out/`.
- If deploying under a sub-path (e.g. GitHub Pages project site), tell me the repo name and I’ll set `basePath`/asset paths correctly.
