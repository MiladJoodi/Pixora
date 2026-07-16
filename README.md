# Pixora

A modern, responsive image gallery with lightbox, bilingual support (Persian/English), and About & Contact pages.

## Tech Stack

- **Next.js 16** — App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — animations
- **Radix UI** — lightbox modal
- **Lucide React** — icons

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Routes

| Route | Description |
|-------|-------------|
| `/fa` | Persian (default) |
| `/en` | English |
| `/fa/about` · `/en/about` | About |
| `/fa/contact` · `/en/contact` | Contact |

## Structure

```
src/
├── app/[locale]/     # pages
├── components/       # UI
├── lib/i18n/         # translations
└── assets/fonts/     # Vazir
public/pics/          # images
```

## Links

- GitHub: [MiladJoodi/Pixora](https://github.com/MiladJoodi/Pixora)
- LinkedIn: [joodi](https://www.linkedin.com/in/joodi/)
