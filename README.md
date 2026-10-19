# Pixora official website

Static, bilingual, and dependency-free production site.

- Chinese canonical URLs: `https://pixora.zpad.app/`, `/privacy.html`, `/support.html`, `/subscriptions.html`, `/terms.html`, `/contact.html`
- English canonical URLs: `https://pixora.zpad.app/en/`, `/en/privacy.html`, `/en/support.html`, `/subscriptions.html`, `/en/terms.html`, `/en/contact.html`
- Canonical remote force-update config after deployment: `https://pixora.zpad.app/config/app-update.json`

## Deployment

1. GitHub Pages source is [`neo-idea/pixora-official`](https://github.com/neo-idea/pixora-official); push the contents of this directory to `main`.
2. In Cloudflare DNS for `zpad.app`, `pixora` is a DNS-only CNAME to `neo-idea.github.io`. Keep it DNS-only (grey cloud) so GitHub Pages can issue and renew the custom-domain HTTPS certificate.
3. GitHub Pages has `pixora.zpad.app` configured as its custom domain, and **Enforce HTTPS** is enabled.
4. The canonical remote force-update config is `https://pixora.zpad.app/config/app-update.json`.
