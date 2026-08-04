import Image from "next/image";
import Link from "next/link";
import { materials } from "@/lib/materials";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-[#B5B0AA] no-underline transition-colors duration-200 hover:text-offwhite">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-near-black font-poppins">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-10 pt-24">
        <div className="mb-16 flex flex-wrap justify-between gap-16">
          <div className="max-w-[420px] min-w-[280px] flex-1">
            <Image
              src="/uploads/twinx-logo-white.png"
              alt="Twinx Interiors"
              height={38}
              width={160}
              className="mb-6 block h-[38px] w-auto"
            />
            <p className="m-0 text-[13px] leading-[1.7] text-[#B5B0AA]">
              Don&apos;t move&hellip; twinx it.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.08em] text-offwhite">Company</div>
              <div className="flex flex-col gap-3.5">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/portfolio">Portfolio</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </div>
            </div>

            <div>
              <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.08em] text-offwhite">Materials</div>
              <div className="flex flex-col gap-3.5">
                {materials.map((m) => (
                  <FooterLink key={m.slug} href={`/materials/${m.slug}`}>
                    {m.navLabel}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.08em] text-offwhite">Pretoria</div>
              <p className="mb-2 text-sm leading-[1.7] text-[#B5B0AA]">
                Menlyn Square Office Park,
                <br />
                134 Aramist Ave
              </p>
              <FooterLink href="tel:0120040919">012 004 0919</FooterLink>
            </div>

            <div>
              <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.08em] text-offwhite">Durban</div>
              <p className="mb-2 text-sm leading-[1.7] text-[#B5B0AA]">
                22 Smiso Nkwanyana Rd,
                <br />
                Morningside
              </p>
              <FooterLink href="tel:0310020454">031 002 0454</FooterLink>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-8">
          <span className="text-[13px] text-[#7A7570]">© 2026 Twinx Interiors. All rights reserved.</span>
          <span className="text-[13px] text-[#7A7570]">Pretoria · Durban, South Africa</span>
        </div>
      </div>

      <div className="relative z-[1] overflow-hidden pb-2.5 leading-[0.72]">
        <span
          className="block whitespace-nowrap text-center font-poppins font-extrabold text-transparent"
          style={{
            fontSize: "clamp(90px, 18vw, 260px)",
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
            letterSpacing: "0.01em",
          }}
        >
          twinx.
        </span>
      </div>
    </footer>
  );
}
