"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioCategory } from "@/lib/portfolio-content";
import { Lightbox } from "@/components/lightbox";

export function PortfolioGallery({ categories }: { categories: PortfolioCategory[] }) {
  const allItems = categories.flatMap((cat) => cat.items);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIndex = allItems.findIndex((it) => it.id === activeId);
  const activeItem = activeIndex >= 0 ? allItems[activeIndex] : null;

  return (
    <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-10">
      {categories.map((cat) => (
        <div key={cat.key} className="mb-20 last:mb-0">
          <div className="mb-10 flex items-center gap-2.5">
            <span className="h-px w-7 bg-brand" />
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand">Gallery</span>
          </div>
          <h2 className="m-0 mb-10 font-jost text-[clamp(30px,4vw,46px)] font-light uppercase leading-[1.1] text-ink">
            {cat.heading}
          </h2>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {cat.items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className="group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden rounded-[3px] shadow-none transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {activeItem && (
        <Lightbox
          item={activeItem}
          onClose={() => setActiveId(null)}
          heightClass="h-[60vh]"
          onPrev={() => setActiveId(allItems[(activeIndex - 1 + allItems.length) % allItems.length].id)}
          onNext={() => setActiveId(allItems[(activeIndex + 1) % allItems.length].id)}
        />
      )}
    </section>
  );
}
