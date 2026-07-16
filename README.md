# Pixora

A modern, responsive image gallery with lightbox, bilingual support (Persian/English), and About & Contact pages.

![Alt Text](https://raw.githubusercontent.com/MiladJoodi/Pixora/refs/heads/master/public/images/0111.png)
![Alt Text](https://raw.githubusercontent.com/MiladJoodi/Pixora/refs/heads/master/public/images/Screenshot%202026-07-16%20141228.png)
![Alt Text](https://raw.githubusercontent.com/MiladJoodi/Pixora/refs/heads/master/public/images/Screenshot%202026-07-16%20141326.png)
![Alt Text](https://raw.githubusercontent.com/MiladJoodi/Pixora/refs/heads/master/public/images/Screenshot%202026-07-16%20141258.png)


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
| `/en` | English (default, LTR) |
| `/fa` | Persian (RTL) |
| `/en/about` · `/fa/about` | About |
| `/en/contact` · `/fa/contact` | Contact |

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
