"use client";

import { useCallback, useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/galleryItems";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import LightboxModal from "@/components/gallery/LightboxModal";

type GalleryClientProps = {
  locale: Locale;
  dict: Dictionary;
  items: GalleryItem[];
};

export default function GalleryClient({
  locale,
  dict,
  items,
}: GalleryClientProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const isRtl = locale === "fa";

  const onSelect = useCallback((nextIndex: number) => {
    setIndex(nextIndex);
    setOpen(true);
  }, []);

  const onPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const onNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        isRtl ? onNext() : onPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        isRtl ? onPrev() : onNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, isRtl, onNext, onPrev]);

  return (
    <>
      <GalleryGrid dict={dict} items={items} onSelect={onSelect} />
      <LightboxModal
        locale={locale}
        dict={dict}
        open={open}
        onOpenChange={setOpen}
        items={items}
        index={index}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}
