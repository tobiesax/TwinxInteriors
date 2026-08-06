import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { materials, getMaterial } from "@/lib/materials";
import { MaterialPageTemplate } from "@/components/material-page";

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/materials/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const data = getMaterial(slug);
  if (!data) return {};
  const title = `${data.title} — Pretoria & Durban`;
  return {
    title,
    description: data.description,
    openGraph: {
      title: `${title} | Twinx Interiors`,
      description: data.description,
      images: [{ url: data.heroSrc, width: 1200, height: 900 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Twinx Interiors`,
      description: data.description,
      images: [data.heroSrc],
    },
  };
}

export default async function MaterialPage(props: PageProps<"/materials/[slug]">) {
  const { slug } = await props.params;
  const data = getMaterial(slug);
  if (!data) notFound();

  return <MaterialPageTemplate data={data} />;
}
