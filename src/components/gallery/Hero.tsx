import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import { siteConfig } from "@/lib/site";

type HeroProps = {
  dict: Dictionary;
};

const socials = [
  {
    key: "github" as const,
    href: siteConfig.githubUrl,
    Icon: Github,
  },
  {
    key: "linkedin" as const,
    href: siteConfig.linkedinUrl,
    Icon: Linkedin,
  },
  {
    key: "email" as const,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
  },
];

export default function Hero({ dict }: HeroProps) {
  return (
    <section aria-label={dict.gallery.ariaLabel}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-violet-500/10 to-cyan-500/10 blur-2xl" />
        <div className="relative p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-8">
            <div className="relative shrink-0">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/15 bg-white/5 p-1 sm:h-24 sm:w-24">
                <Image
                  src="/pics/avatar.jpg"
                  alt={dict.hero.title}
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                {dict.hero.badge}
              </div>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {dict.hero.title}
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                {dict.hero.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {socials.map(({ key, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    aria-label={dict.social[key]}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70"
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
