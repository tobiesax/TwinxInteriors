import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — Get a Quote in Pretoria or Durban",
  description:
    "Request a quote for wall moulding, accent walls, PVC panelling, wallpaper, kitchen cabinetry or PU stone cladding. Twinx Interiors studios in Pretoria and Durban.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 sm:px-8 lg:px-12 pb-20 pt-24 lg:pt-[120px] lg:grid-cols-2">
      <div>
        <div className="mb-5 flex items-center gap-2.5">
          <span className="h-px w-7 bg-brand" />
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand">Request a Quote</span>
        </div>
        <h1 className="m-0 mb-6 font-jost text-[clamp(34px,4.5vw,52px)] font-light uppercase leading-[1.08] text-ink">
          Tell us about the space.
        </h1>
        <p className="m-0 mb-12 max-w-[460px] text-base leading-[1.7] text-muted">
          Shop fitting, wall decor, or a full redesign — send the brief and we&apos;ll come back with a quote and
          timeline.
        </p>

        <div className="mb-12 flex flex-col gap-8">
          <div>
            <div className="mb-2 text-sm font-bold text-ink">Pretoria</div>
            <div className="text-sm leading-[1.7] text-muted">
              Menlyn Square Office Park, 134 Aramist Ave
              <br />
              <a href="tel:0120040919" className="text-muted no-underline hover:text-ink">
                012 004 0919
              </a>
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm font-bold text-ink">Durban</div>
            <div className="text-sm leading-[1.7] text-muted">
              22 Smiso Nkwanyana Rd, Morningside
              <br />
              <a href="tel:0310020454" className="text-muted no-underline hover:text-ink">
                031 002 0454
              </a>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/27846727415"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-[3px] border border-black/[0.18] px-6 py-3.5 text-sm font-bold text-ink no-underline transition-colors duration-200 hover:border-brand hover:text-brand"
        >
          Prefer WhatsApp? Chat with us →
        </a>
      </div>

      <ContactForm />
    </section>
  );
}
