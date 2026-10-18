# Pixora official website

Static, bilingual, and dependency-free production site.

- Chinese canonical URLs: `https://pixora.zpad.app/`, `/privacy.html`, `/support.html`, `/subscriptions.html`, `/terms.html`, `/contact.html`
- English canonical URLs: `https://pixora.zpad.app/en/`, `/en/privacy.html`, `/en/support.html`, `/subscriptions.html`, `/en/terms.html`, `/en/contact.html`
- Canonical remote force-update config after deployment: `https://pixora.zpad.app/config/app-update.json`

## Deployment

1. GitHub Pages source is [`neo-idea/pixora-official`](https://github.com/neo-idea/pixora-official); push the contents of this directory to `main`.
2. `pixora.zpad.app` is attached as a Cloudflare Workers Custom Domain and transparently proxies those GitHub Pages responses:

```bash
bunx wrangler deploy --config wrangler.toml
```

Cloudflare creates and renews the custom-domain DNS record and certificate through this Worker deployment.
