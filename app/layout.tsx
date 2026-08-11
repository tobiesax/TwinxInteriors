import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://twinx-interiors.vercel.app";
const ogImage = "/uploads/catalogue-wallframe-4.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Twinx Interiors — Wall Moulding, Accent Walls & Cabinetry in Pretoria & Durban",
    template: "%s | Twinx Interiors — Pretoria & Durban",
  },
  description:
    "Wall moulding, accent walls, PVC panelling, wallpaper, custom kitchen cabinetry and PU stone cladding, installed across Pretoria and Durban. Get a quote from Twinx Interiors.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "wall moulding Pretoria",
    "accent wall installation Durban",
    "PVC wall panels South Africa",
    "wallpaper installation Pretoria",
    "kitchen cabinetry Pretoria",
    "PU stone cladding South Africa",
    "interior wall decor South Africa",
  ],
  openGraph: {
    type: "website",
    siteName: "Twinx Interiors",
    title: "Twinx Interiors — Wall Moulding, Accent Walls & Cabinetry in Pretoria & Durban",
    description:
      "Wall moulding, accent walls, PVC panelling, wallpaper, custom kitchen cabinetry and PU stone cladding, installed across Pretoria and Durban.",
    images: [{ url: ogImage, width: 1200, height: 900 }],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twinx Interiors — Wall Moulding, Accent Walls & Cabinetry in Pretoria & Durban",
    description:
      "Wall moulding, accent walls, PVC panelling, wallpaper, custom kitchen cabinetry and PU stone cladding, installed across Pretoria and Durban.",
    images: [ogImage],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#pretoria`,
    name: "Twinx Interiors — Pretoria",
    image: `${siteUrl}${ogImage}`,
    url: siteUrl,
    telephone: "+27120040919",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Menlyn Square Office Park, 134 Aramist Ave",
      addressLocality: "Pretoria",
      addressCountry: "ZA",
    },
    areaServed: ["Pretoria", "Gauteng"],
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#durban`,
    name: "Twinx Interiors — Durban",
    image: `${siteUrl}${ogImage}`,
    url: siteUrl,
    telephone: "+27310020454",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "22 Smiso Nkwanyana Rd, Morningside",
      addressLocality: "Durban",
      addressCountry: "ZA",
    },
    areaServed: ["Durban", "KwaZulu-Natal"],
    sameAs: [],
  },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins text-ink overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
