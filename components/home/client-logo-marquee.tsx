import Image from "next/image";
import { clientLogos } from "@/lib/home-content";

export function ClientLogoMarquee() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.06] bg-near-black px-5 sm:px-8 lg:px-12 py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8 text-center text-[13px] font-bold uppercase tracking-[0.14em] text-white">
          Our Happy Clients
        </div>
      </div>
      <div className="flex w-max animate-[client-scroll_28s_linear_infinite] items-center gap-20 lg:hover:[animation-play-state:paused]">
        {[...clientLogos, ...clientLogos].map((logo, i) => (
          <div
            key={`${logo.id}-${i}`}
            className="flex h-20 w-[180px] flex-none items-center justify-center rounded-md bg-white p-4 shadow-[0_0_0_rgba(226,55,43,0)] transition-[transform,box-shadow] duration-300 ease-out lg:hover:-translate-y-1 lg:hover:scale-[1.1] lg:hover:shadow-[0_12px_28px_rgba(226,55,43,0.35)]"
          >
            <div className="relative h-full w-full">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="180px" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
