import Image from "next/image";
import Link from "next/link";

export function NewArrivalBanner() {
  return (
    <section className="relative px-5 sm:px-8 lg:px-12 pt-8">
      <Link
        href="/materials/pvc-panels"
        className="group relative mx-auto block h-[320px] max-w-[1400px] overflow-hidden rounded-[3px] text-white no-underline sm:h-[380px] lg:h-[440px]"
      >
        <Image
          src="/uploads/cnc-fluted-panel-new-arrival.png"
          alt="Grooved PVC Panels"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.05)_75%)]" />
        <div className="relative z-[1] flex h-full flex-col justify-center px-6 sm:px-10 lg:px-14">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
              New Arrival
            </span>
          </div>
          <h2 className="m-0 mb-4 max-w-[560px] font-jost text-[clamp(30px,4.5vw,52px)] font-light uppercase leading-[1.08] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
            Grooved PVC Panels
          </h2>
          <p className="m-0 mb-7 max-w-[460px] text-[15px] leading-[1.7] text-white/90">
            600mm × 2400mm grooved PVC panels in a bold, geometric asymmetric design. Available in black and brown.
          </p>
          <span className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-[3px] bg-white px-6 py-3 text-sm font-bold text-ink transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
            Explore the Range →
          </span>
        </div>
      </Link>
    </section>
  );
}
