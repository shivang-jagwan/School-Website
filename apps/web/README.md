# Web (Next.js)

Public, static university/school website.

## Run locally
1. Copy env:

```powershell
Copy-Item .env.local.example .env.local
```

2. Install + run:

```powershell
npm install
npm run dev
```

Web: `http://localhost:3000`

## Build a static export

```powershell
npm run build
```

The static site will be generated in `out/`.

## Environment variables
- `NEXT_PUBLIC_SITE_URL` (optional) – used for metadata

See the root docs in [README.md](../../README.md) for static deployment options.
