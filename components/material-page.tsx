"use client";

import Image from "next/image";
import { useState } from "react";
import type { MaterialData } from "@/lib/materials";
import { FlowButton } from "@/components/flow-button";
import { SolidButton } from "@/components/solid-button";
import { Lightbox } from "@/components/lightbox";

type LightboxSource = "gallery" | "design" | "swatch" | null;

export function MaterialPageTemplate({ data }: { data: MaterialData }) {
  const [lightboxSource, setLightboxSource] = useState<LightboxSource>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const activeList =
    lightboxSource === "design"
      ? data.designCards ?? []
      : lightboxSource === "swatch"
        ? data.swatches ?? []
        : lightboxSource === "gallery"
          ? data.gallery
          : [];

  const lightboxItem =
    lightboxSource === "design"
      ? data.designCards?.[lightboxIndex]
      : lightboxSource === "swatch"
        ? data.swatches?.[lightboxIndex]
        : lightboxSource === "gallery"
          ? data.gallery[lightboxIndex]
          : undefined;

  const lightboxLabel = lightboxItem
    ? lightboxSource === "design"
      ? (lightboxItem as { title: string }).title
      : lightboxSource === "swatch"
        ? (() => {
            const sw = lightboxItem as { code: string; name: string };
            return sw.code + (sw.name ? " — " + sw.name : "");
          })()
        : (lightboxItem as { label: string }).label
    : "";

  const lightboxDetail = lightboxItem
    ? lightboxSource === "design"
      ? (lightboxItem as { desc: string }).desc
      : lightboxSource === "swatch"
        ? undefined
        : (lightboxItem as { detail?: string }).detail
    : undefined;

  const n = data.carouselImages?.length ?? 0;

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[56vh] items-end px-5 sm:px-8 lg:px-12 pb-[72px]">
        <div className="absolute inset-0 z-0">
          <Image src={data.heroSrc} alt={data.title} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.55)_100%)]" />
        </div>
        <div className="relative z-[2] mx-auto w-full max-w-[1400px]">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="h-px w-7 bg-brand" />
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
              {data.category}
            </span>
          </div>
          <h1 className="m-0 mb-6 font-jost text-[clamp(38px,5.5vw,64px)] font-light uppercase leading-[1.08] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
            {data.title}
          </h1>
          {data.heroCta && (
            <div className="flex flex-wrap gap-3.5">
              <SolidButton href="/contact" size="md">
                Get a Project Quote
              </SolidButton>
              <FlowButton href="https://wa.me/27120040919" variant="outline-dark" size="md" external>
                Chat on WhatsApp
              </FlowButton>
            </div>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-10 px-5 sm:px-8 lg:px-12 pt-16">
        <p className="m-0 max-w-[640px] text-[17px] leading-[1.8] text-muted">{data.description}</p>
        {data.statLine && (
          <span className="h-fit whitespace-nowrap rounded-full border border-black/10 px-3.5 py-1.5 text-xs font-semibold text-ink">
            {data.statLine}
          </span>
        )}
      </section>

      {/* Gallery */}
      {data.gallery.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-14">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.gallery.map((item, i) => (
              <div
                key={item.id}
                onClick={() => {
                  setLightboxSource("gallery");
                  setLightboxIndex(i);
                }}
                className="group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div className="relative h-[280px] overflow-hidden rounded-[3px] shadow-none transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-3 text-[13px] text-muted transition-colors duration-300 group-hover:text-ink">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {lightboxItem && (
        <Lightbox
          item={{ id: lightboxItem.id, label: lightboxLabel, src: lightboxItem.src, detail: lightboxDetail }}
          onClose={() => setLightboxSource(null)}
          heightClass="h-[70vh]"
          onPrev={
            activeList.length > 1
              ? () => setLightboxIndex((i) => (i - 1 + activeList.length) % activeList.length)
              : undefined
          }
          onNext={
            activeList.length > 1
              ? () => setLightboxIndex((i) => (i + 1) % activeList.length)
              : undefined
          }
        />
      )}

      {/* Mid CTA */}
      {data.midCtaHeading && (
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-16">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[3px] bg-cream p-6 sm:p-10">
            <h3 className="m-0 font-poppins text-xl font-bold text-ink">{data.midCtaHeading}</h3>
            <div className="flex flex-wrap gap-3.5">
              <SolidButton href="/contact" size="md">
                Get a Project Quote
              </SolidButton>
              <FlowButton href="https://wa.me/27120040919" variant="outline-light" size="md" external>
                Chat on WhatsApp
              </FlowButton>
            </div>
          </div>
        </section>
      )}

      {/* Swatches */}
      {data.swatches && data.swatches.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pt-24">
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">Material Swatches</div>
          <h2 className="mb-10 font-jost text-[clamp(26px,3.5vw,38px)] font-light">2025 sample sheet</h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {data.swatches.map((sw, i) => (
              <div
                key={sw.id}
                onClick={() => {
                  setLightboxSource("swatch");
                  setLightboxIndex(i);
                }}
                className="cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden rounded-[3px] transition-transform duration-300 hover:scale-105">
                  <Image src={sw.src} alt={`${sw.code} — ${sw.name}`} fill className="object-cover" sizes="25vw" />
                </div>
                <div className="mt-2.5 flex justify-between">
                  <span className="text-[13px] font-semibold text-ink">{sw.code}</span>
                  <span className="text-[13px] text-muted">{sw.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Intro sections */}
      {data.introSections?.map((xs, i) => (
        <section key={i} className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-20">
          <div className="grid grid-cols-1 items-start gap-16 border-t border-black/[0.08] pt-14 lg:grid-cols-2">
            <div>
              <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">{xs.eyebrow}</div>
              <h2 className="mb-6 font-jost text-[clamp(24px,3vw,32px)] font-light leading-[1.2] text-ink">
                {xs.heading}
              </h2>
              {xs.imageSrc && (
                <div className="relative h-80 overflow-hidden rounded-[3px]">
                  <Image src={xs.imageSrc} alt={xs.heading} fill className="object-cover" sizes="50vw" />
                </div>
              )}
            </div>
            <div
              className="flex flex-col gap-5 text-base leading-[1.7] text-muted"
              style={{ marginTop: xs.imageSrc ? "108px" : "0" }}
            >
              {xs.paragraphs.map((p, pi) => (
                <p key={pi} className="m-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Design cards */}
      {data.designCards && data.designCards.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-20 pt-24">
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">
            {data.designCardsEyebrow ?? "Design Styles"}
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {data.designCards.map((card, i) => (
              <div
                key={card.id}
                onClick={() => {
                  setLightboxSource("design");
                  setLightboxIndex(i);
                }}
                className="group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div className="relative mb-5 h-[220px] overflow-hidden rounded-[3px] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.14)]">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="m-0 mb-2.5 font-poppins text-[17px] font-bold uppercase text-ink">{card.title}</h3>
                <p className="m-0 text-[14.5px] leading-[1.7] text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extra sections */}
      {data.extraSections?.map((xs, i) => (
        <section key={i} className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-20">
          {xs.imageSrc ? (
            <div className="grid grid-cols-1 items-center gap-16 border-t border-black/[0.08] pt-14 lg:grid-cols-2">
              <div className="relative h-[400px] overflow-hidden rounded-[3px]">
                <Image src={xs.imageSrc} alt={xs.heading} fill className="object-cover" sizes="50vw" />
              </div>
              <div>
                <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">{xs.eyebrow}</div>
                <h2 className="mb-6 font-jost text-[clamp(24px,3vw,32px)] font-light leading-[1.2] text-ink">
                  {xs.heading}
                </h2>
                <div className="flex flex-col gap-5 text-base leading-[1.7] text-muted">
                  {xs.paragraphs.map((p, pi) => (
                    <p key={pi} className="m-0">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-center gap-16 border-t border-black/[0.08] pt-14 lg:grid-cols-2">
              <div>
                <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">{xs.eyebrow}</div>
                <h2 className="m-0 font-jost text-[clamp(24px,3vw,32px)] font-light leading-[1.2] text-ink">
                  {xs.heading}
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-base leading-[1.7] text-muted">
                {xs.paragraphs.map((p, pi) => (
                  <p key={pi} className="m-0">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Carousel */}
      {n > 0 && data.carouselImages && (
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-20">
          <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">
            {data.carouselEyebrow ?? "Finish Reference"}
          </div>
          <div className="relative overflow-hidden rounded-[3px]">
            <div
              className="flex transition-transform duration-[400ms] ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {data.carouselImages.map((img) => (
                <div key={img.id} className="relative h-[520px] w-full flex-none">
                  <Image src={img.src} alt={img.label} fill className="object-cover" sizes="100vw" />
                </div>
              ))}
            </div>
            <button
              onClick={() => setCarouselIndex((i) => (i - 1 + n) % n)}
              aria-label="Previous"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-none bg-white/85 text-xl text-ink shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-colors duration-200 hover:bg-brand hover:text-white"
            >
              ‹
            </button>
            <button
              onClick={() => setCarouselIndex((i) => (i + 1) % n)}
              aria-label="Next"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-none bg-white/85 text-xl text-ink shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-colors duration-200 hover:bg-brand hover:text-white"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {data.carouselImages.map((img, i) => (
                <span
                  key={img.id}
                  onClick={() => setCarouselIndex(i)}
                  className="h-2 w-2 cursor-pointer rounded-full"
                  style={{ background: i === carouselIndex ? "#E2372B" : "rgba(0,0,0,0.2)" }}
                />
              ))}
            </div>
          </div>
          <div className="mt-3 text-[13px] text-muted">{data.carouselImages[carouselIndex]?.label}</div>
        </section>
      )}

      {/* Catalogue download */}
      {data.catalogueHref && (
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-24">
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-black/[0.08] pt-10">
            <div>
              <div className="mb-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">Full Reference</div>
              <h3 className="m-0 font-poppins text-[22px] font-bold text-ink">
                {data.catalogueHeading ?? "Browse the complete supplier finish catalogue"}
              </h3>
            </div>
            <a
              href={data.catalogueHref}
              download
              className="whitespace-nowrap rounded-[3px] border border-black/15 px-7 py-3.5 text-[15px] font-bold text-ink no-underline transition-colors duration-200 hover:border-brand hover:text-brand"
            >
              {data.catalogueLinkLabel ?? "Download Catalogue (PDF) →"}
            </a>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="w-full bg-cream px-5 sm:px-8 lg:px-12 py-16 text-center lg:py-32">
        <h2 className="m-0 mb-8 font-jost text-[clamp(28px,4vw,42px)] font-light text-ink">
          Ready to talk through {data.title.toLowerCase()}?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <SolidButton href="/contact" size="lg">
            Get a Project Quote
          </SolidButton>
          <FlowButton href="https://wa.me/27120040919" variant="outline-light" size="lg" external>
            Chat on WhatsApp
          </FlowButton>
        </div>
      </section>
    </div>
  );
}
