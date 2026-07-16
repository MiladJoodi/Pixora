import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import { siteConfig } from "@/lib/site";

type SiteFooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function SiteFooter({ locale, dict }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-black/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-white/55">
          © {year} {siteConfig.name}. {dict.footer.rights}
        </p>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-white/40 sm:inline">
            {dict.footer.builtWith}
          </span>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={dict.social.github}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={dict.social.linkedin}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href={`/${locale}/contact`}
            className="text-sm text-white/65 transition hover:text-white/90"
          >
            {dict.nav.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
