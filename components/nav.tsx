"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { materials } from "@/lib/materials";

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`inline-block py-3 text-sm font-semibold tracking-[0.02em] uppercase no-underline transition-colors duration-200 ${
        active ? "text-ink" : "text-muted-2 hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const wrapRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const isPortfolio = pathname === "/portfolio";
  const isMaterials = pathname.startsWith("/materials");
  const isContact = pathname === "/contact";

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMaterialsOpen(false);
    setMobileOpen(false);
    setMobileMaterialsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (materialsOpen && wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setMaterialsOpen(false);
      }
    };
    document.addEventListener("click", onDocClick, true);
    return () => document.removeEventListener("click", onDocClick, true);
  }, [materialsOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-black/[0.08] font-poppins transition-[padding,background-color] duration-[250ms] ease-in-out ${
        scrolled ? "bg-white/[0.92] py-3 px-5 sm:px-8 lg:px-12 backdrop-blur-[10px]" : "bg-white py-4 px-5 sm:px-8 lg:px-12 lg:py-5"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="flex flex-none items-center no-underline">
          <Image src="/uploads/twinx-logo.png" alt="Twinx Interiors" height={30} width={120} priority className="block h-[26px] w-auto lg:h-[30px]" />
        </Link>

        <div className="hidden items-center gap-[30px] lg:flex">
          <NavLink href="/" active={isHome}>
            Home
          </NavLink>
          <NavLink href="/portfolio" active={isPortfolio}>
            Portfolio
          </NavLink>

          <div ref={wrapRef} className="relative">
            <span
              onClick={() => setMaterialsOpen((v) => !v)}
              className={`flex cursor-pointer items-center gap-1.5 py-2 text-sm font-semibold tracking-[0.02em] uppercase transition-colors duration-200 ${
                isMaterials ? "text-ink" : "text-muted-2 hover:text-ink"
              }`}
            >
              Our Services{" "}
              <span
                className="inline-block text-[11px] transition-transform duration-[250ms] ease-in-out"
                style={{ transform: materialsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▾
              </span>
            </span>

            {materialsOpen && (
              <div className="absolute left-[-160px] top-full grid w-[520px] grid-cols-2 gap-x-4 gap-y-1 rounded-[3px] border border-black/[0.08] bg-white p-5 shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
                {materials.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/materials/${m.slug}`}
                    className="flex flex-col gap-[3px] rounded-[3px] px-3.5 py-3 text-ink no-underline hover:bg-cream-2"
                  >
                    <span className="text-sm font-bold uppercase">{m.navLabel}</span>
                    <span className="text-xs text-muted-2">{m.navBlurb}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/contact" active={isContact}>
            Contact
          </NavLink>
        </div>

        <div className="hidden flex-none items-center gap-[18px] lg:flex">
          <Link
            href="/contact"
            className="rounded-[3px] bg-brand px-5 py-2.5 font-jost text-[13px] font-bold uppercase tracking-[0.02em] text-white no-underline transition-colors duration-200 hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex flex-none flex-col items-center justify-center gap-[5px] p-2 lg:hidden"
        >
          <span className={`block h-[2px] w-[22px] bg-ink transition-transform duration-200 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-[22px] bg-ink transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-[22px] bg-ink transition-transform duration-200 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-black/[0.06] bg-white lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-6 sm:px-8">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`py-3 text-base font-semibold uppercase no-underline ${isHome ? "text-ink" : "text-muted-2"}`}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setMobileOpen(false)}
              className={`py-3 text-base font-semibold uppercase no-underline ${isPortfolio ? "text-ink" : "text-muted-2"}`}
            >
              Portfolio
            </Link>

            <button
              onClick={() => setMobileMaterialsOpen((v) => !v)}
              className={`flex items-center justify-between py-3 text-base font-semibold uppercase ${isMaterials ? "text-ink" : "text-muted-2"}`}
            >
              Our Services
              <span
                className="text-xs transition-transform duration-200"
                style={{ transform: mobileMaterialsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▾
              </span>
            </button>
            {mobileMaterialsOpen && (
              <div className="mb-2 flex flex-col gap-1 border-l border-black/10 pl-4">
                {materials.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/materials/${m.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex flex-col gap-0.5 py-2.5 no-underline"
                  >
                    <span className="text-sm font-bold uppercase text-ink">{m.navLabel}</span>
                    <span className="text-xs text-muted-2">{m.navBlurb}</span>
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`py-3 text-base font-semibold uppercase no-underline ${isContact ? "text-ink" : "text-muted-2"}`}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-[3px] bg-brand px-5 py-3.5 text-center font-jost text-sm font-bold uppercase tracking-[0.02em] text-white no-underline"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
