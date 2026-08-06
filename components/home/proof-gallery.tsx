"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { proofItems } from "@/lib/home-content";
import { Lightbox } from "@/components/lightbox";

const VISIBLE_COUNT = 6;

export function ProofGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const activeItem = activeIndex !== null ? proofItems[activeIndex] : null;
  const visibleItems = showAll ? proofItems : proofItems.slice(0, VISIBLE_COUNT);
  const hasMore = proofItems.length > VISIBLE_COUNT;

  return (
    <section className="relative bg-white px-5 sm:px-8 lg:px-12 pt-20">
      <div className="mx-auto mb-8 flex max-w-[1400px] flex-wrap items-baseline justify-between gap-6">
        <div>
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">The Gallery</div>
          <h2 className="m-0 mb-4 font-jost text-[clamp(30px,4vw,46px)] font-light leading-[1.1] text-ink">
            A closer look at every finish.
          </h2>
          <p className="m-0 mb-3 max-w-[560px] text-base leading-[1.7] text-muted">
            Wall moulding, feature walls, bespoke cabinetry and more — browse the range of finishes and styles we
            bring to spaces across South Africa.
          </p>
          <p className="m-0 max-w-[560px] text-base leading-[1.7] text-muted">
            Click any photo for a closer look, or browse the full portfolio for more.
          </p>
        </div>
        <Link
          href="/portfolio"
          className="whitespace-nowrap border-b border-brand pb-1 text-sm font-semibold text-ink no-underline"
        >
          See full portfolio →
        </Link>
      </div>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-1.5">
        {visibleItems.map((item, i) => (
          <div
            key={item.id}
            onClick={() => setActiveIndex(i)}
            className="group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            <div className="relative h-[220px] overflow-hidden rounded-[3px] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)] sm:h-[170px]">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mx-auto max-w-[1400px] py-8 text-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="border-b border-brand pb-1 text-sm font-semibold text-ink"
          >
            {showAll ? "Show fewer photos" : "Click here to view more"}
          </button>
        </div>
      )}

      {activeItem && (
        <Lightbox
          item={activeItem}
          onClose={() => setActiveIndex(null)}
          heightClass="h-[78vh]"
        />
      )}
    </section>
  );
}
