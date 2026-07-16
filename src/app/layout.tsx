import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { defaultLocale, getDirection, isLocale } from "@/lib/i18n/config";

const vazir = localFont({
  src: [
    { path: "../assets/fonts/Vazir.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/Vazir.woff", weight: "400", style: "normal" },
    { path: "../assets/fonts/Vazir.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-vazir",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

async function getLocaleFromHeaders() {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? defaultLocale;
  return isLocale(locale) ? locale : defaultLocale;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromHeaders();
  const dir = getDirection(locale);
  const fontClass =
    locale === "fa"
      ? `${vazir.variable} font-[family-name:var(--font-vazir)]`
      : `${inter.variable} font-[family-name:var(--font-inter)]`;

  return (
    <html lang={locale} dir={dir} className={`${vazir.variable} ${inter.variable} antialiased`}>
      <body className={`min-h-dvh ${fontClass}`}>{children}</body>
    </html>
  );
}
