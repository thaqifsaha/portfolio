# Deploying to Vercel

## 1. Import the repo

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with your GitHub account.
2. Select `thaqifsaha/portfolio` from the repo list and click **Import**.
3. Vercel auto-detects Next.js — leave the defaults as-is:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (default)
   - Output Directory: (default)
   - Install Command: `npm install` (default)
4. No environment variables are required for the first deploy — skip that section and click **Deploy**.
5. Wait for the build to finish. Vercel gives you a live URL like `https://portfolio-xxxx.vercel.app`.

## 2. Set your real base URL

The site currently uses a placeholder base URL for SEO metadata, Open Graph tags and structured data:

```ts
// src/resources/once-ui.config.ts
const baseURL: string = "https://thaqif-saharuddin.vercel.app";
```

After your first deploy, update this to whatever domain Vercel actually gave you (or your custom domain, if you attach one later under **Project Settings → Domains**), then commit and push — Vercel redeploys automatically on every push to `main`.

```bash
git add src/resources/once-ui.config.ts
git commit -m "Set real base URL after first deploy"
git push
```

## 3. Optional: password-protected routes

`protectedRoutes` in `once-ui.config.ts` is currently empty, so nothing is gated. If you ever want to password-protect a page again, add it there and set `PAGE_ACCESS_PASSWORD` as an environment variable in **Project Settings → Environment Variables** on Vercel (see `.env.example` for the variable name).

## 4. Re-enabling Blog or Gallery later

Both are off via `routes` in `once-ui.config.ts` (`"/blog": false`, `"/gallery": false`). To bring either back:

- **Blog**: add `.mdx` files to `src/app/blog/posts/` (the folder currently only has a `.gitkeep` placeholder), then flip `"/blog"` to `true`.
- **Gallery**: add your photos to `public/images/gallery/`, list them in `gallery.images` in `src/resources/content.tsx`, then flip `"/gallery"` to `true`.
