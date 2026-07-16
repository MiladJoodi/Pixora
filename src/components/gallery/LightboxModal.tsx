"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/galleryItems";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type LightboxModalProps = {
  locale: Locale;
  dict: Dictionary;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: GalleryItem[];
  index: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function LightboxModal({
  locale,
  dict,
  open,
  onOpenChange,
  items,
  index,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const item = items[index];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (open) {
      setIsLoading(true);
    }
  }, [open, index, item?.fullSrc]);

  if (!item) return null;

  const meta = dict.galleryItems[item.id];
  const title = meta?.title ?? item.id;
  const isRtl = locale === "fa";

  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md transition-opacity duration-300 data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />

        <Dialog.Content className="fixed top-8 left-1/2 z-50 flex h-[calc(100dvh-4rem)] w-[min(100%,56rem)] -translate-x-1/2 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#07070a]/70 opacity-0 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 data-[state=closed]:scale-[0.98] data-[state=open]:scale-100 data-[state=open]:opacity-100">
          <header className="flex items-start justify-between gap-4 p-4 sm:p-5">
            <Dialog.Title className="text-sm font-medium text-white/90">
              {title}
            </Dialog.Title>

            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70"
                aria-label={dict.lightbox.close}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </header>

          <div className="mx-4 mt-2 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/20 sm:mx-5">
            <div className="relative h-full w-full">
              {isLoading && (
                <div
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/30"
                  role="status"
                  aria-live="polite"
                  aria-label={dict.lightbox.loading}
                >
                  <Loader2
                    className="h-8 w-8 animate-spin text-pink-400/90"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-white/60">
                    {dict.lightbox.loading}
                  </span>
                </div>
              )}

              <Image
                key={item.fullSrc}
                src={item.fullSrc}
                alt={title}
                fill
                priority
                sizes="(max-width: 640px) 90vw, 56rem"
                className={`object-contain transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>

          <footer className="mt-4 flex items-center justify-between gap-3 p-4 sm:p-5">
            <button
              type="button"
              onClick={onPrev}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label={dict.lightbox.previousImage}
            >
              <PrevIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{dict.lightbox.previous}</span>
            </button>

            <div className="text-xs text-white/55">
              {index + 1} / {items.length}
            </div>

            <button
              type="button"
              onClick={onNext}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label={dict.lightbox.nextImage}
            >
              <span>{dict.lightbox.next}</span>
              <NextIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
