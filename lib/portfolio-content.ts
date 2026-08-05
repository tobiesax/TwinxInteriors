export type PortfolioItem = { id: string; label: string; src: string };

export type PortfolioCategory = {
  key: string;
  heading: string;
  items: PortfolioItem[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    key: "feature-walls",
    heading: "Feature Walls & Panelling",
    items: [
      { id: "pf-fw-1", label: "Panel wall with sculptural art, living room", src: "/uploads/IMG_1874.jpg" },
      { id: "pf-fw-2", label: "Marble & slat TV feature wall", src: "/uploads/IMG_2399.jpg" },
      { id: "pf-fw-3", label: "Panelled wall, unfurnished room", src: "/uploads/IMG_3321.jpg" },
      { id: "pf-fw-4", label: "Black & gold slat bedroom feature wall", src: "/uploads/IMG_4752.jpg" },
      { id: "pf-fw-5", label: "Textured stone-look accent wall", src: "/uploads/IMG_5651.jpg" },
      { id: "pf-fw-6", label: "Wave-pattern slat wall, bedroom", src: "/uploads/IMG_8594.jpg" },
    ],
  },
  {
    key: "closets",
    heading: "Wardrobes & Walk-in Closets",
    items: [
      { id: "pf-cl-1", label: "Walk-in closet, gold-trim wardrobes", src: "/uploads/IMG_3465.jpg" },
      { id: "pf-cl-2", label: "Walk-in closet, shoe shelving", src: "/uploads/IMG_7096.jpg" },
      { id: "pf-cl-3", label: "Walk-in closet, shoe & shelf storage", src: "/uploads/IMG_8955.jpg" },
    ],
  },
  {
    key: "media-walls",
    heading: "TV & Media Walls",
    items: [
      { id: "pf-mw-1", label: "Home bar cabinetry", src: "/uploads/IMG_0425.jpg" },
      { id: "pf-mw-2", label: "TV wall unit, white gloss finish", src: "/uploads/IMG_7561.jpg" },
    ],
  },
  {
    key: "hallways",
    heading: "Hallways & Staircases",
    items: [
      { id: "pf-hw-1", label: "Staircase wall panelling", src: "/uploads/IMG_0501.jpg" },
      { id: "pf-hw-2", label: "Hallway, arched mirror inset", src: "/uploads/IMG_3646.jpg" },
      { id: "pf-hw-3", label: "Hallway panelling, wood slat accents", src: "/uploads/IMG_5497.jpg" },
      { id: "pf-hw-4", label: "Hallway panelling, door surround", src: "/uploads/IMG_6921.jpg" },
    ],
  },
];
