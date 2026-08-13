import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const portfolioCollection = (name: string, label: string, file: string) => ({
  name,
  label,
  path: "content/portfolio",
  format: "json" as const,
  match: { include: file },
  ui: {
    global: true,
    allowedActions: { create: false, delete: false },
  },
  fields: [
    { type: "string" as const, name: "heading", label: "Section Heading" },
    {
      type: "object" as const,
      name: "items",
      label: "Photos",
      list: true,
      ui: {
        itemProps: (item: { label?: string }) => ({ label: item?.label || "Photo" }),
      },
      fields: [
        { type: "string" as const, name: "label", label: "Caption" },
        { type: "image" as const, name: "src", label: "Photo" },
      ],
    },
  ],
});

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
  token: process.env.TINA_TOKEN ?? null,
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  schema: {
    collections: [
      portfolioCollection("portfolioFeatureWalls", "Portfolio — Feature Walls & Panelling", "feature-walls"),
      portfolioCollection("portfolioClosets", "Portfolio — Wardrobes & Walk-in Closets", "closets"),
      portfolioCollection("portfolioMediaWalls", "Portfolio — TV & Media Walls", "media-walls"),
      portfolioCollection("portfolioHallways", "Portfolio — Hallways & Staircases", "hallways"),
    ],
  },
});
