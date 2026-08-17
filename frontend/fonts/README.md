Self-hosting fonts for the MySQL Mastery frontend

Steps to include fonts in the build (self-hosted):

1. Download WOFF2 (recommended) or WOFF files for the families used:
   - Inter (UI)
   - Outfit (headings)
   - JetBrains Mono (code)

2. Place files in this folder, e.g. `Inter-Regular.woff2`, `Outfit-Bold.woff2`, `JetBrainsMono-Regular.woff2`.

3. Uncomment and update the `@font-face` rules in `frontend/css/fonts.css` so `src` paths match the filenames.

4. Ensure `fonts.css` is included before other CSS (add `<link rel="stylesheet" href="css/fonts.css">` into your HTML `<head>`).

Notes:
- Self-hosting improves privacy and allows offline deploys, but increases repo size. Prefer WOFF2.
- Netlify will serve files under `frontend/` automatically since `publish = "frontend"` in netlify.toml.
