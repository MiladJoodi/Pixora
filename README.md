# Visualize

گالری تصاویر ریسپانسیو با Lightbox، پشتیبانی دو زبانه (فارسی/انگلیسی) و صفحات درباره ما و تماس با ما.

**GitHub Description (یک خط):**
> Modern bilingual (FA/EN) image gallery with lightbox, masonry layout, and accessible UI — built with Next.js.

## Tech Stack

- **Next.js 16** — App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — انیمیشن‌ها
- **Radix UI** — مودال Lightbox
- **Lucide React** — آیکون‌ها

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Routes

| مسیر | توضیح |
|------|--------|
| `/fa` | فارسی (پیش‌فرض) |
| `/en` | English |
| `/fa/about` · `/en/about` | درباره ما |
| `/fa/contact` · `/en/contact` | تماس با ما |

## Structure

```
src/
├── app/[locale]/     # صفحات
├── components/       # UI
├── lib/i18n/         # ترجمه‌ها
└── assets/fonts/     # Vazir
public/pics/          # تصاویر
```

## Links

- GitHub: [MiladJoodi/Visualize](https://github.com/MiladJoodi/Visualize)
- LinkedIn: [joodi](https://www.linkedin.com/in/joodi/)
