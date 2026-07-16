import GalleryClient from "@/components/gallery/GalleryClient";
import Hero from "@/components/gallery/Hero";
import { galleryItems } from "@/lib/galleryItems";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dict = await getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <Hero dict={dict} />
      <div className="mt-10 sm:mt-12">
        <GalleryClient locale={locale} dict={dict} items={galleryItems} />
      </div>
    </div>
  );
}
