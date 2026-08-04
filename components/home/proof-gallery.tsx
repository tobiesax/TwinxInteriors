"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { proofItems } from "@/lib/home-content";
import { Lightbox } from "@/components/lightbox";

export function ProofGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? proofItems[activeIndex] : null;

  return (
    <section className="relative bg-white px-12 pt-20">
      <div className="mx-auto mb-8 flex max-w-[1400px] flex-wrap items-baseline justify-between gap-6">
        <div>
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">The Proof</div>
          <h2 className="m-0 mb-4 font-jost text-[clamp(30px,4vw,46px)] font-light leading-[1.1] text-ink">
            Every finish we work with.
          </h2>
          <p className="m-0 mb-3 max-w-[560px] text-base leading-[1.7] text-muted">
            From wall moulding and feature walls to bespoke cabinetry, this is a sample of the work Twinx has
            completed across Pretoria and Durban.
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
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-1.5 sm:grid-cols-3">
        {proofItems.map((item, i) => (
          <div
            key={item.id}
            onClick={() => setActiveIndex(i)}
            className="group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            <div className="relative h-[170px] overflow-hidden rounded-[3px] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

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
