import { Github, Linkedin, Mail } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  const dict = await getDictionary(localeParam);
  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = await getDictionary(locale);

  const channels = [
    {
      label: dict.contact.emailLabel,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      Icon: Mail,
    },
    {
      label: dict.contact.githubLabel,
      value: "GitHub",
      href: siteConfig.githubUrl,
      Icon: Github,
    },
    {
      label: dict.contact.linkedinLabel,
      value: "LinkedIn",
      href: siteConfig.linkedinUrl,
      Icon: Linkedin,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white/95 sm:text-4xl">
          {dict.contact.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          {dict.contact.intro}
        </p>

        <div className="mt-8 space-y-3">
          {channels.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-white/55">{label}</span>
                <span className="block truncate text-base font-medium text-white/90">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/55">{dict.contact.formNote}</p>
      </div>
    </div>
  );
}
