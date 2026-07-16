"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

const navItems = [
  { key: "home" as const, path: "" },
  { key: "about" as const, path: "/about" },
  { key: "contact" as const, path: "/contact" },
];

export default function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const pathname = usePathname();

  const otherLocale: Locale = locale === "fa" ? "en" : "fa";
  const otherLabel = otherLocale === "fa" ? "فارسی" : "English";

  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06070c]/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="text-lg font-semibold tracking-tight text-white/95 transition hover:text-white"
        >
          Pixora
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 sm:gap-2"
        >
          {navItems.map(({ key, path }) => {
            const href = `/${locale}${path}`;
            const isActive =
              path === ""
                ? pathname === `/${locale}` || pathname === `/${locale}/`
                : pathname.startsWith(href);

            return (
              <Link
                key={key}
                href={href}
                className={`rounded-full px-3 py-1.5 text-sm transition sm:px-4 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/65 hover:bg-white/5 hover:text-white/90"
                }`}
              >
                {dict.nav[key]}
              </Link>
            );
          })}

          <Link
            href={switchPath}
            aria-label={`${dict.nav.language}: ${otherLabel}`}
            className="ms-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10 sm:ms-2 sm:px-4"
          >
            {otherLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
