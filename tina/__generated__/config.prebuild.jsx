// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var portfolioCollection = (name, label, file) => ({
  name,
  label,
  path: "content/portfolio",
  format: "json",
  match: { include: file },
  ui: {
    global: true,
    allowedActions: { create: false, delete: false }
  },
  fields: [
    { type: "string", name: "heading", label: "Section Heading" },
    {
      type: "object",
      name: "items",
      label: "Photos",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.label || "Photo" })
      },
      fields: [
        { type: "string", name: "label", label: "Caption" },
        { type: "image", name: "src", label: "Photo" }
      ]
    }
  ]
});
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
  token: process.env.TINA_TOKEN ?? null,
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  schema: {
    collections: [
      portfolioCollection("portfolioFeatureWalls", "Portfolio \u2014 Feature Walls & Panelling", "feature-walls"),
      portfolioCollection("portfolioClosets", "Portfolio \u2014 Wardrobes & Walk-in Closets", "closets"),
      portfolioCollection("portfolioMediaWalls", "Portfolio \u2014 TV & Media Walls", "media-walls"),
      portfolioCollection("portfolioHallways", "Portfolio \u2014 Hallways & Staircases", "hallways")
    ]
  }
});
export {
  config_default as default
};
