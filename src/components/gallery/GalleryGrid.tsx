"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { GalleryItem } from "@/lib/galleryItems";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type GalleryGridProps = {
  dict: Dictionary;
  items: GalleryItem[];
  onSelect: (index: number) => void;
};

export default function GalleryGrid({
  dict,
  items,
  onSelect,
}: GalleryGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label={dict.gallery.ariaLabel} className="relative">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white/90 sm:text-xl">
            {dict.gallery.title}
          </h2>
          <p className="mt-1 text-sm text-white/60">{dict.gallery.subtitle}</p>
        </div>
        <div className="hidden text-xs text-white/50 sm:block">
          {items.length} {dict.gallery.imageCount}
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        style={{ columnGap: "1rem" }}
      >
        {items.map((item, index) => {
          const meta = dict.galleryItems[item.id];
          const title = meta?.title ?? item.id;
          const caption = meta?.caption ?? "";

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onSelect(index)}
              className="group mb-4 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-start transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70"
              initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: reduceMotion ? 0 : index * 0.03,
              }}
              whileHover={reduceMotion ? undefined : { y: -2 }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: `${item.thumbWidth} / ${item.thumbHeight}`,
                }}
              >
                <Image
                  src={item.thumbSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
                  <div className="flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-white/95">
                        {title}
                      </div>
                      <div className="mt-0.5 truncate text-xs text-white/70">
                        {caption}
                      </div>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 transition group-hover:bg-white/10">
                      +
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </section>
  );
}
