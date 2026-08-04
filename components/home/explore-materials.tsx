import Image from "next/image";
import Link from "next/link";
import { exploreMaterialCards } from "@/lib/home-content";
import { Reveal } from "@/components/reveal";

export function ExploreMaterials() {
  return (
    <section className="relative border-t border-black/[0.06] bg-white px-5 sm:px-8 lg:px-12 py-16 lg:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">Explore Materials</div>
        <h2 className="m-0 mb-14 max-w-[640px] font-jost text-[clamp(30px,4vw,46px)] font-light leading-[1.1] text-ink">
          Six finishes. Pick your starting point.
        </h2>
        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {exploreMaterialCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative block h-[260px] overflow-hidden rounded-[3px] text-white no-underline transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)]"
            >
              <Image
                src={card.src}
                alt={card.label}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
              <div className="pointer-events-none absolute bottom-5 left-[22px] font-poppins text-[19px] font-bold">
                {card.label}
              </div>
              <div className="pointer-events-none absolute right-5 top-[18px] flex h-[38px] w-[38px] rotate-[-45deg] items-center justify-center rounded-full bg-white/[0.18] text-[22px] font-bold text-brand backdrop-blur-[6px] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.12]">
                →
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
