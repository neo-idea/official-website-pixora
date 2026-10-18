# Pixora official website

Static, bilingual, and dependency-free production site.

- Chinese canonical URLs: `https://pixora.zpad.app/`, `/privacy.html`, `/support.html`, `/subscriptions.html`, `/terms.html`, `/contact.html`
- English canonical URLs: `https://pixora.zpad.app/en/`, `/en/privacy.html`, `/en/support.html`, `/subscriptions.html`, `/en/terms.html`, `/en/contact.html`
- Canonical remote force-update config after deployment: `https://pixora.zpad.app/config/app-update.json`
- Current live fallback: `https://raw.githubusercontent.com/pekaboo/pixora-support/refs/heads/main/app-update.json`

Deploy this directory to the `pixora.zpad.app` origin. Configure `/en/` and clean URLs at the host if desired, while preserving the canonical URLs above for App Store Connect.
