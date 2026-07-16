import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
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
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = await getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white/95 sm:text-4xl">
          {dict.about.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          {dict.about.intro}
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white/90">
          {dict.about.missionTitle}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/70">
          {dict.about.mission}
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white/90">
          {dict.about.featuresTitle}
        </h2>
        <ul className="mt-3 space-y-2 text-white/70">
          {dict.about.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
