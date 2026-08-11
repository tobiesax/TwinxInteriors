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
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 pb-10 pt-16 sm:pt-20 lg:pt-24">
        <div className="mb-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] lg:gap-8 lg:mb-16">
          <div className="max-w-[420px] sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/uploads/twinx-logo-white.png"
                alt="Twinx Interiors"
                height={38}
                width={160}
                className="block h-[38px] w-auto"
              />
            </Link>
            <p className="m-0 mb-5 text-[13px] uppercase leading-[1.7] text-[#B5B0AA]">
              Don&apos;t move&hellip; Twinx it.
            </p>
            <div className="flex items-center gap-3.5">
              <a
                href="https://www.instagram.com/twinxinteriors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twinx Interiors on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#B5B0AA] transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                  <circle cx="12" cy="12" r="4.3" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@twinxinteriors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twinx Interiors on TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#B5B0AA] transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82c-.87-.96-1.35-2.2-1.35-3.5h-3.07v13.6a2.9 2.9 0 1 1-2.05-2.77v-3.13a6 6 0 1 0 5.12 5.93V9.4a6.7 6.7 0 0 0 3.9 1.25V7.6a3.9 3.9 0 0 1-2.55-1.78Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.08em] text-offwhite">Company</div>
            <div className="flex flex-col gap-3.5">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>

          <div>
            <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.08em] text-offwhite">Our Services</div>
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
            <div className="flex flex-col gap-1">
              <FooterLink href="tel:0120040919">012 004 0919</FooterLink>
              <FooterLink href="mailto:info@twinxinteriors.co.za">info@twinxinteriors.co.za</FooterLink>
            </div>
          </div>

          <div>
            <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.08em] text-offwhite">Durban</div>
            <p className="mb-2 text-sm leading-[1.7] text-[#B5B0AA]">
              22 Smiso Nkwanyana Rd,
              <br />
              Morningside
            </p>
            <div className="flex flex-col gap-1">
              <FooterLink href="tel:0310020454">031 002 0454</FooterLink>
              <FooterLink href="mailto:durbanadmin@twinxinteriors.co.za">durbanadmin@twinxinteriors.co.za</FooterLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <span className="text-[13px] text-[#7A7570]">© 2026 Twinx Interiors. All rights reserved.</span>
          <span className="text-[13px] text-[#7A7570]">South Africa</span>
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
