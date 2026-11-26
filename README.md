# kjosavik.dev

Personal homepage and CV. A static site built with HTML, CSS, and vanilla JavaScript.

- [Homepage copy](docs/homepage-content-draft.md)
- [Layout and design workflow](docs/design-brief.md)
- [site/](site/): public site files and Cloudflare Pages output directory.
- The previous homepage is preserved at the `legacy-v1` Git tag, not in the current working tree.

Preview the site locally from the repo root:

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory site
```

Open `http://127.0.0.1:8000` in the VS Code browser. The page uses linked organization names while logo permissions are pending. JavaScript enables optional Tengwar lettering, the draggable testimonial loop, and the gnome achievement toast. The quote strip still supports native scrolling without JavaScript.

Cloudflare Pages is the planned host: no build step, output directory `site`. Test a preview deployment before connecting `kjosavik.dev`. Do not publish the repository root or change unrelated DNS records.
