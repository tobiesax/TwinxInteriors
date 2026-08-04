"use client";

import Image from "next/image";
import { useState } from "react";
import { portfolioCategories } from "@/lib/portfolio-content";
import { Lightbox } from "@/components/lightbox";

const allItems = portfolioCategories.flatMap((cat) => cat.items);

export function PortfolioGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIndex = allItems.findIndex((it) => it.id === activeId);
  const activeItem = activeIndex >= 0 ? allItems[activeIndex] : null;

  return (
    <section className="mx-auto max-w-[1400px] px-12 pb-10">
      {portfolioCategories.map((cat) => (
        <div key={cat.key} className="mb-20 last:mb-0">
          <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.1em] text-muted-2">{cat.heading}</div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {cat.items.map((item) => (
              <div key={item.id} onClick={() => setActiveId(item.id)} className="group cursor-pointer">
                <div className="relative h-[280px] overflow-hidden rounded-[3px]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="mt-2.5 text-[13px] text-muted">{item.label}</div>
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
