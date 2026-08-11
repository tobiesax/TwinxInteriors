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
      { id: "pf-fw-1", label: "Marble-inset panel wall with fluted trim, living room", src: "/uploads/pf-fw-marble-fluted-panel-sofa.jpg" },
      { id: "pf-fw-3", label: "Panelled wall, unfurnished room", src: "/uploads/IMG_3321.jpg" },
      { id: "pf-fw-4", label: "Pleated panel bedroom feature wall, black trim", src: "/uploads/IMG_4752.jpg" },
      { id: "pf-fw-5", label: "Textured stone-look accent wall", src: "/uploads/IMG_7096.jpg" },
      { id: "pf-fw-6", label: "Bedroom panel wall, LED accent lighting", src: "/uploads/IMG_7561.jpg" },
      { id: "pf-fw-7", label: "Panel moulding wall with leaf-print wallpaper, reception", src: "/uploads/pf-fw-clinic-panel-wallpaper.jpg" },
      { id: "pf-fw-8", label: "Office corridor, panel moulding wainscoting", src: "/uploads/pf-fw-office-corridor-wainscot.jpg" },
      { id: "pf-fw-9", label: "Grid panel wall with mirror, dining room", src: "/uploads/pf-fw-grid-panel-mirror-dining.jpg" },
    ],
  },
  {
    key: "closets",
    heading: "Wardrobes & Walk-in Closets",
    items: [
      { id: "pf-cl-1", label: "Walk-in closet, gold-trim wardrobes", src: "/uploads/IMG_3465.jpg" },
      { id: "pf-cl-2", label: "Walk-in closet, shoe shelving & vanity nook", src: "/uploads/pf-closet-shoe-shelving-vanity-nook.jpg" },
      { id: "pf-cl-3", label: "Walk-in closet, white gloss wardrobes and island", src: "/uploads/pf-closet-island-white-gloss.jpg" },
      { id: "pf-cl-4", label: "Walk-in closet, walnut vanity and round mirror", src: "/uploads/pf-closet-walnut-vanity-mirror.jpg" },
    ],
  },
  {
    key: "media-walls",
    heading: "TV & Media Walls",
    items: [
      { id: "pf-mw-2", label: "TV wall unit, white gloss finish", src: "/uploads/IMG_8955.jpg" },
      { id: "pf-mw-3", label: "TV media wall, slat panel and tall storage", src: "/uploads/pf-tv-unit-1.jpg" },
      { id: "pf-mw-4", label: "TV media wall, fluted slat panelling", src: "/uploads/pf-tv-unit-2.jpg" },
      { id: "pf-mw-5", label: "TV media wall, wood slat panelling", src: "/uploads/pf-tv-unit-3.jpg" },
      { id: "pf-mw-6", label: "TV media wall, backlit marble panel", src: "/uploads/pf-tv-unit-4.jpg" },
      { id: "pf-mw-7", label: "TV media wall, fluted panel with wet bar nook", src: "/uploads/pf-tv-unit-5.jpg" },
      { id: "pf-mw-8", label: "Wood-panelled TV wall, slat divider and fireplace nook", src: "/uploads/pf-tv-unit-6.jpg" },
      { id: "pf-mw-9", label: "Marble TV wall with backlit glass display shelving", src: "/uploads/pf-tv-unit-8.jpg" },
    ],
  },
  {
    key: "hallways",
    heading: "Hallways & Staircases",
    items: [
      { id: "pf-hw-1", label: "Staircase wall panelling, fluted pilasters and glass rail", src: "/uploads/pf-hw-staircase-panel-glass-rail.jpg" },
      { id: "pf-hw-2", label: "Hallway panelling, glass stair rail", src: "/uploads/pf-hw-panel-glass-rail-wood-floor.jpg" },
      { id: "pf-hw-3", label: "Hallway, arched mirror inset with fluted panel surround", src: "/uploads/pf-hw-arched-mirror-fluted-panel.jpg" },
      { id: "pf-hw-4", label: "Hallway panelling, door surround", src: "/uploads/IMG_6921.jpg" },
      { id: "pf-hw-5", label: "Staircase panelling, LED-lit steps and black handrail", src: "/uploads/pf-hw-staircase-panel-led-handrail.jpg" },
      { id: "pf-hw-6", label: "Panelled hallway, mirrored console and runner", src: "/uploads/pf-hallway-console-runner.jpg" },
      { id: "pf-hw-7", label: "Double-height geometric panel wall, stairwell", src: "/uploads/pf-hw-double-height-geo-panel-stairwell.jpg" },
      { id: "pf-hw-8", label: "White panel moulding staircase wall, LED strip lighting", src: "/uploads/pf-hw-white-panel-led-strip-staircase.jpg" },
    ],
  },
];
