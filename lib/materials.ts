export type GalleryItem = { id: string; label: string; src: string; detail?: string };
export type StyleCard = { id: string; title: string; desc: string; src: string };
export type TextSection = {
  eyebrow: string;
  heading: string;
  imageId?: string;
  imageSrc?: string;
  paragraphs: string[];
};
export type Swatch = { id: string; code: string; name: string; src: string };
export type CarouselImage = { id: string; label: string; src: string };

export type MaterialData = {
  slug: string;
  navLabel: string;
  navBlurb: string;
  title: string;
  category: string;
  heroSrc: string;
  description: string;
  heroCta?: boolean;
  statLine?: string;
  midCtaHeading?: string;
  gallery: GalleryItem[];
  designCards?: StyleCard[];
  designCardsEyebrow?: string;
  introSections?: TextSection[];
  extraSections?: TextSection[];
  swatches?: Swatch[];
  carouselImages?: CarouselImage[];
  carouselEyebrow?: string;
  catalogueHref?: string;
  catalogueHeading?: string;
  catalogueLinkLabel?: string;
};

export const materials: MaterialData[] = [
  {
    slug: "wall-frame-moulding",
    navLabel: "Wall Frame Moulding",
    navBlurb: "Slat & panel feature walls",
    title: "Wall Frame Moulding",
    category: "Wall Decor",
    heroSrc: "/uploads/catalogue-wallframe-1.jpg",
    description:
      "That plain wall behind your sofa, your bed, your TV — it's one wall frame moulding installation away from being the room's focal point.",
    heroCta: true,
    statLine: "Reference gallery",
    midCtaHeading: "Ready to give your wall this treatment?",
    gallery: [
      { id: "wfm-1", label: "Panel moulding, living room wall", src: "/uploads/catalogue-wallframe-5.jpg" },
      { id: "wfm-2", label: "Single profile box moulding", src: "/uploads/catalogue-general-1.jpg" },
      { id: "wfm-3", label: "Double profile box moulding", src: "/uploads/catalogue-wallframe-3.jpg" },
      { id: "wfm-4", label: "Feature wall with sculptural console", src: "/uploads/catalogue-wallframe-4.jpg" },
      { id: "wfm-5", label: "Ornate cornice moulding detail", src: "/uploads/catalogue-wallframe-1.jpg" },
      { id: "wfm-6", label: "Panel moulding wall, orange sofa", src: "/uploads/catalogue-wallframe-6.jpg" },
    ],
    designCardsEyebrow: "Design Styles",
    designCards: [
      {
        id: "wfm-style-single",
        title: "Single Profile Design",
        desc: "A single-lined box, which can be divided into two boxes per column or stretched as one long box from top to bottom. Ask us which suits your wall.",
        src: "/uploads/catalogue-general-1.jpg",
      },
      {
        id: "wfm-style-double",
        title: "Double Profile Design",
        desc: "A box within a bigger box — the outer box can carry a thicker profile than the inner one, or vice versa, in one long or two-box layout. Ask us which suits your wall.",
        src: "/uploads/catalogue-wallframe-3.jpg",
      },
      {
        id: "wfm-style-half",
        title: "Half Wall Design",
        desc: "For clients who don't want the strip across the whole wall — the strips sit at the bottom, leaving the top for paint or wallpaper. Ask us which suits your wall.",
        src: "/uploads/catalogue-wallframe-5.jpg",
      },
    ],
    extraSections: [
      {
        eyebrow: "About Our Wall Frames",
        heading: "Elevate your space, without sacrificing your art",
        imageId: "wfm-about-1",
        imageSrc: "/uploads/catalogue-wallframe-6.jpg",
        paragraphs: [
          "Enhance the elegance of your walls effortlessly with our exquisite wall moulding frames, crafted from simple strips of wood trims. Embrace the sophisticated new look without sacrificing the ability to showcase your artwork — our wall frames seamlessly complement your paintings or pictures.",
          "We use top-notch wooden frames for every moulding installation, ensuring unparalleled reliability and strength. Our commitment to uncompromising quality is unwavering, and we offer our exceptional service at highly affordable rates.",
          "Don't hesitate any longer — reach out to us today for a quote, and together we can embark on the transformative journey of elevating your living space to new heights.",
        ],
      },
      {
        eyebrow: "Feature Project",
        heading: "The brief: a plain wall, made the focal point",
        imageId: "wfm-feature-1",
        imageSrc: "/uploads/catalogue-wallframe-4.jpg",
        paragraphs: [
          "The brief called for something classic and elegant — a wall that framed the room's furniture without competing with it.",
          "We ran the moulding floor-to-ceiling in a soft neutral tone, closely matched to the surrounding walls, so it reads as considered architecture rather than an applied decoration.",
          "A double box profile carried around the full-height mirror panel gives the space quiet presence — refined, not loud.",
        ],
      },
    ],
    catalogueHref: "/uploads/frame-catalog.pdf",
    catalogueHeading: "Like to download the Wall Frame Moulding catalog?",
    catalogueLinkLabel: "Click Here →",
  },
  {
    slug: "accent-wall",
    navLabel: "Accent Wall Panels",
    navBlurb: "Geometric & textured feature panels",
    title: "Accent Wall",
    category: "Wall Decor",
    heroSrc: "/uploads/catalogue-accentwall-1.jpg",
    description:
      "The wall behind your sofa, your bed, your TV doesn't have to stay plain. Dowel patterns, geometric 3D panels, diamond lattice, diagonal sticks: a statement accent wall turns it into the room's focal point.",
    heroCta: true,
    statLine: "Reference gallery",
    midCtaHeading: "Ready to give your wall this treatment?",
    gallery: [
      { id: "aw-1", label: "Panel wainscoting, curtained window", src: "/uploads/catalogue-accentwall-1.jpg", detail: "Panel moulding wainscoting alongside a draped window, giving the wall texture and shadow depth." },
      { id: "aw-2", label: "Slat panel accent wall, seating nook", src: "/uploads/catalogue-accentwall-2.jpg", detail: "Vertical slat panelling behind a pair of armchairs, a graphic, tactile pattern for a living space." },
      { id: "aw-3", label: "Fluted panel with sphere accent", src: "/uploads/catalogue-accentwall-3.jpg", detail: "Fluted vertical panels flanking a plain moulded centre panel, with a sculptural sphere at the base." },
      { id: "aw-4", label: "Boxed panel wall, patterned rug", src: "/uploads/catalogue-accentwall-4.jpg", detail: "Three tall boxed panel mouldings set into a charcoal wall, framed by an arched window and patterned rug." },
      { id: "aw-5", label: "Wood & stone mixed accent wall", src: "/uploads/catalogue-accentwall-5.jpg", detail: "Fluted wood panelling paired with a raw stone-textured insert, mixing warm and tactile materials on one wall." },
      { id: "aw-6", label: "Dark slat panel media wall", src: "/uploads/catalogue-accentwall-6.jpg", detail: "Floor-to-ceiling slat panelling in a dark tone, framing a floating media console and TV." },
    ],
    designCardsEyebrow: "Pattern Options",
    designCards: [
      { id: "aw-style-dowel", title: "Dowel Pattern", desc: "Vertical dowel rods in a repeating rhythm, a graphic, tactile texture for a living or dining wall.", src: "/uploads/catalogue-accentwall-2.jpg" },
      { id: "aw-style-3d", title: "Geometric 3D Panel", desc: "Faceted 3D panelling that catches light differently at every angle, ideal for stairwells and hallways.", src: "/uploads/catalogue-accentwall-3.jpg" },
      { id: "aw-style-lattice", title: "Fluted Slat Panel", desc: "A vertical fluted or slat pattern, often paired with a mirror or art piece, for a refined textured backdrop.", src: "/uploads/catalogue-accentwall-6.jpg" },
    ],
    introSections: [
      {
        eyebrow: "About Our Accent Walls",
        heading: "One wall, made the whole room's talking point",
        imageId: "aw-about-1",
        imageSrc: "/uploads/catalogue-accentwall-4.jpg",
        paragraphs: [
          "The accent wall is back, not just indoors, but outdoors too, shaped into an endless range of forms and colours that give a flat wall real dimension and depth.",
          "It's found favour again with households and businesses alike, as an easy way to bring an extra layer of style and personality into a space.",
          "The real draw is versatility: an accent wall can be shaped almost any way you can imagine, which is exactly why it's become the first choice for homeowners and businesses wanting something that feels considered, not off-the-shelf.",
        ],
      },
    ],
    extraSections: [
      {
        eyebrow: "Feature Project",
        heading: "Go bold with accent walls",
        imageId: "aw-feature-1",
        imageSrc: "/uploads/catalogue-accentwall-7.jpg",
        paragraphs: [
          "A project for a client in Limpopo, a plain media wall lifted with nothing more than golden strips for a little detail and elegance.",
          "The result is a feature wall with real presence, without ever feeling over-designed.",
        ],
      },
    ],
  },
  {
    slug: "pvc-panels",
    navLabel: "PVC Panels",
    navBlurb: "Fluted wood-finish wall panelling",
    title: "Fluted PVC Wall Panels",
    category: "Wall Decor",
    heroSrc: "/uploads/catalogue-pvc-2.jpg",
    description:
      "Panels with linear, fluted designs made of engineered composites with a natural wood finish — a great way to emphasise and bring focus onto a wall in an interior space. Durable and low-maintenance, with a full supplier finish catalogue so you can see every colour applied at scale.",
    statLine: "Reference gallery",
    gallery: [
      { id: "pvc-install-1", label: "Fluted wood-finish panel wall, lounge", src: "/uploads/catalogue-pvc-2.jpg" },
      { id: "pvc-install-2", label: "Fluted panel with pendant lighting", src: "/uploads/catalogue-pvc-1.jpg" },
      { id: "pvc-install-3", label: "Fluted panel, side-table vignette", src: "/uploads/catalogue-pvc-3.jpg" },
      { id: "pvc-install-4", label: "Fluted panel with warm-lit shelf", src: "/uploads/catalogue-pvc-4.jpg" },
    ],
    extraSections: [
      {
        eyebrow: "Hand Crafted, Elegant & Unique",
        heading: "Fluted panelling that fits any space, any style",
        paragraphs: [
          "Our PVC fluted panels are panels with linear designs made of engineered composites with a natural wood finish. This gives them the appearance and texture of natural wood while also being water resistant, termite and mould repellent. Low maintenance, eco-friendly and durable, they're a fit for residential and commercial panelling and feature walls.",
          "Each panel comes in a 17cm × 2.9m size, in a variety of colours, and can also be painted to any colour.",
          "A simple fluted wall panel can be used to add focus to a bedroom or to create an interesting living room wall design in a home, or to attract visitors to a reception in a hotel or office space.",
          "Fluted panels are an eco-friendly alternative to traditional wood panels in interior design. They fit well into a minimalist, contemporary or Scandinavian design style, and can be used in all spaces — a modern home office, a contemporary kitchen, a modern restaurant, or a Scandinavian boutique hotel. The panels provide designers and homeowners with an elegant looking space that comes together easily.",
        ],
      },
      {
        eyebrow: "Panel Pricing",
        heading: "R450 per panel",
        paragraphs: [
          "Each PVC fluted panel sells for R450 per panel.",
          "To work out how many panels you'll need, divide the width of your wall (in cm) by 16. For example, for a 3m-wide wall: 300 ÷ 16 — that gives you the number of panels needed to cover the area.",
        ],
      },
    ],
    carouselEyebrow: "Finish Reference",
    carouselImages: [
      { id: "pvc-ref-3", label: "Finish reference — charcoal slat, living room", src: "/uploads/pvc-catalog-p3.png" },
      { id: "pvc-ref-4", label: "Finish reference — grey slat, media wall", src: "/uploads/pvc-catalog-p4.png" },
      { id: "pvc-ref-5", label: "Finish reference — black slat, bedroom", src: "/uploads/pvc-catalog-p5.png" },
      { id: "pvc-ref-6", label: "Finish reference — oak slat, entry door", src: "/uploads/pvc-catalog-p6.png" },
      { id: "pvc-ref-7", label: "Finish reference — grey slat, TV feature wall", src: "/uploads/pvc-catalog-p7.png" },
      { id: "pvc-ref-9", label: "Finish reference — grey slat, hallway", src: "/uploads/pvc-catalog-p9.png" },
    ],
    swatches: [
      { id: "sw-wt164", code: "WT164", name: "Black Marble, Gold Strips", src: "/uploads/pvc-catalog-p8.png" },
      { id: "sw-oak", code: "", name: "Oak", src: "/uploads/pvc-oak.jpeg" },
      { id: "sw-walnut-black", code: "", name: "Walnut & Black", src: "/uploads/pvc-walnut-black.jpeg" },
      { id: "sw-oak-black", code: "", name: "Oak & Black", src: "/uploads/pvc-oak-black.jpeg" },
      { id: "sw-kiaat-black", code: "", name: "Kiaat & Black", src: "/uploads/pvc-kiaat-black.jpeg" },
      { id: "sw-grey-black", code: "", name: "Grey & Black", src: "/uploads/pvc-grey-black.jpeg" },
    ],
    catalogueHref: "/uploads/PVC-PANELS-CATALOG-1.pdf",
    catalogueHeading: "Browse the complete supplier finish catalogue",
  },
  {
    slug: "wallpaper",
    navLabel: "Wallpaper",
    navBlurb: "Statement & textured finishes",
    title: "Wallpaper",
    category: "Wall Decor",
    heroSrc: "/uploads/catalogue-wallpaper-9.jpg",
    description:
      "Feature wallpaper for residential and commercial spaces. Botanical prints, textured finishes, and full-wall installations, in over a hundred designs across texture and shade.",
    statLine: "Reference gallery",
    midCtaHeading: "Ready to give your wall this treatment?",
    gallery: [
      { id: "wp-1", label: "Art deco fan-print wallpaper, hallway", src: "/uploads/catalogue-wallpaper-1.jpg" },
      { id: "wp-2", label: "Textured neutral wallpaper, living room", src: "/uploads/catalogue-wallpaper-2.jpg" },
      { id: "wp-3", label: "Deep teal geometric wallpaper", src: "/uploads/catalogue-wallpaper-3.jpg" },
      { id: "wp-4", label: "Woven-texture green wallpaper", src: "/uploads/catalogue-wallpaper-4.jpg" },
      { id: "wp-5", label: "Crackle-pattern metallic wallpaper", src: "/uploads/catalogue-wallpaper-5.jpg" },
      { id: "wp-6", label: "Honeycomb-pattern wallpaper, sideboard", src: "/uploads/catalogue-wallpaper-6.jpg" },
      { id: "wp-7", label: "Fan-print wallpaper, gold on olive", src: "/uploads/catalogue-wallpaper-7.jpg" },
      { id: "wp-8", label: "Damask-pattern wallpaper, gold on cream", src: "/uploads/catalogue-wallpaper-8.jpg" },
      { id: "wp-9", label: "Damask-pattern wallpaper, bedroom", src: "/uploads/catalogue-wallpaper-9.jpg" },
    ],
    introSections: [
      {
        eyebrow: "Suede Wallpaper",
        heading: "Create tranquility",
        imageId: "wp-intro-1",
        imageSrc: "/uploads/catalogue-wallpaper-2.jpg",
        paragraphs: [
          "Suede wallpaper is a luxurious choice for interior decor. Its velvety texture adds depth and elegance, creating a sensory experience unmatched by traditional wallpapers.",
          "With a subtle, sophisticated palette and versatile design options, it seamlessly complements various styles, and its durability and acoustic benefits make it a standout choice for anyone seeking both aesthetics and function in their living spaces.",
        ],
      },
    ],
    extraSections: [
      {
        eyebrow: "Book a Consultation",
        heading: "One of our reps brings the sample books to you",
        imageId: "wp-consult-1",
        imageSrc: "/uploads/catalogue-wallpaper-1.jpg",
        paragraphs: [
          "We keep full wallpaper sample books — see and feel every design before you decide. Browse the complete range at either studio, or ask us to bring the sample books to your consultation and select from actual samples in your own space and light.",
          "Consultation fee: R400 within Gauteng.",
          "Contact Kenny on 012 004 0919 or 084 672 7415 (call or WhatsApp) to book.",
        ],
      },
      {
        eyebrow: "Why Wallpaper?",
        heading: "Made to last, built to impress",
        imageId: "wp-why-1",
        imageSrc: "/uploads/catalogue-wallpaper-9.jpg",
        paragraphs: [
          "Versatility — patterns, colours, and textures for nearly any interior style.",
          "Visual impact — a bold pattern turns a plain wall into a focal point.",
          "Durability — resists fading and stains, even in high-traffic rooms.",
          "Camouflage — hides small cracks and blemishes for a polished finish.",
        ],
      },
    ],
    swatches: [
      { id: "wp-sw-1", code: "09C9702", name: "", src: "/uploads/09C9702.jpeg" },
      { id: "wp-sw-2", code: "11C1001", name: "", src: "/uploads/11C1001.jpeg" },
      { id: "wp-sw-3", code: "16C1101", name: "", src: "/uploads/16C1101.jpeg" },
      { id: "wp-sw-4", code: "16C7001", name: "", src: "/uploads/16C7001.jpeg" },
      { id: "wp-sw-5", code: "09C9901", name: "", src: "/uploads/09C9901.jpeg" },
      { id: "wp-sw-6", code: "16C9005", name: "", src: "/uploads/16C9005.jpeg" },
      { id: "wp-sw-7", code: "09C9701", name: "", src: "/uploads/09C9701.jpeg" },
      { id: "wp-sw-8", code: "15C9002", name: "", src: "/uploads/15C9002.jpeg" },
      { id: "wp-sw-9", code: "16C8002", name: "", src: "/uploads/16C8002.jpeg" },
      { id: "wp-sw-10", code: "16C7003", name: "", src: "/uploads/16C7003.jpeg" },
      { id: "wp-sw-11", code: "16C9006", name: "", src: "/uploads/16C9006.jpeg" },
      { id: "wp-sw-12", code: "09C9703", name: "", src: "/uploads/09C9703.jpeg" },
      { id: "wp-sw-13", code: "15C9003", name: "", src: "/uploads/15C9003.jpeg" },
      { id: "wp-sw-14", code: "16C7005", name: "", src: "/uploads/16C7005.jpeg" },
      { id: "wp-sw-15", code: "16C3004", name: "", src: "/uploads/16C3004.jpeg" },
      { id: "wp-sw-16", code: "16C8001", name: "", src: "/uploads/16C8001.jpeg" },
    ],
  },
  {
    slug: "kitchen-unit",
    navLabel: "Kitchen Unit & Cabinetry",
    navBlurb: "Custom-built kitchen joinery",
    title: "Kitchen Unit & Cabinetry",
    category: "Design & Redesign",
    heroSrc: "/uploads/beautiful-kitchen-interior-design.jpg",
    description:
      "Custom kitchen units and cabinetry, built to fit the room rather than the other way round.",
    heroCta: true,
    statLine: "Custom-built, made to fit",
    gallery: [
      { id: "ku-1", label: "Kitchen island, gloss white cabinetry", src: "/uploads/beautiful-kitchen-interior-design.jpg" },
      { id: "ku-2", label: "Matte grey cabinetry with open shelving", src: "/uploads/minimalist-kitchen-interior-design-2.jpg" },
      { id: "ku-3", label: "Fluted cabinetry panel with sphere accent", src: "/uploads/catalogue-general-2.jpg" },
    ],
    extraSections: [
      {
        eyebrow: "About Our Kitchens",
        heading: "Built around how you actually use the room",
        imageId: "ku-about-kitchen",
        imageSrc: "/uploads/beautiful-kitchen-interior-design.jpg",
        paragraphs: [
          "Every kitchen unit we build starts with the room, not a catalogue — layout, storage, and finish are worked out around how the space is used day to day.",
          "We use durable, top-quality boards and hardware throughout, finished in gloss, matte, or handle-less profiles, with integrated lighting and appliance housing built in from the start rather than added after.",
          "From a single run of units to a full kitchen redesign, the goal is the same: cabinetry that fits the room exactly, and holds up to daily use.",
        ],
      },
      {
        eyebrow: "About Our Cabinetry",
        heading: "Wardrobes and built-ins, tailored to the space",
        imageId: "ku-about-cabinetry",
        imageSrc: "/uploads/minimalist-kitchen-interior-design-2.jpg",
        paragraphs: [
          "Beyond the kitchen, we build wardrobes and custom cabinetry for bedrooms, hallways, and living spaces — fitted to the exact dimensions of the room rather than adapted from standard sizes.",
          "Open shelving, mirrored fronts, soft-close drawers, and integrated lighting are worked into the design where they add function, not just for show.",
          "The result is storage that reads as part of the room's architecture, not furniture dropped into it.",
        ],
      },
    ],
  },
  {
    slug: "pu-stone",
    navLabel: "PU Stone",
    navBlurb: "Lightweight decorative stone cladding",
    title: "PU Stone",
    category: "Wall Decor",
    heroSrc: "/uploads/catalogue-pustone-3.jpg",
    description:
      "Made from a special casting process that mimics the appearance and texture of real stone, PU stone cladding brings a stone-wall look to any space with none of the weight.",
    heroCta: true,
    statLine: "Lightweight, load-free stone look",
    gallery: [],
    extraSections: [
      {
        eyebrow: "Polyurethane (PU) Stone",
        heading: "The look of real stone, without the drawbacks",
        imageId: "pu-about-look",
        imageSrc: "/uploads/pu-about-look.jpeg",
        paragraphs: [
          "PU stone, also known as polyurethane stone, is an innovative building material sweeping the world of architecture and design. It's made through a special casting process that enables it to mimic the appearance and texture of real stone, while offering several unique advantages over the traditional material.",
          "One of the main advantages of PU stone is its lightweight construction. Unlike traditional stone, which is bulky and difficult to handle, PU stone is light and easy to install — making it a popular choice for both indoor and outdoor projects, with no heavy machinery or specialist installers required.",
        ],
      },
      {
        eyebrow: "Advantages of PU Stone",
        heading: "Why clients choose it over natural stone",
        imageId: "pu-about-advantages",
        imageSrc: "/uploads/catalogue-pustone-2.jpg",
        paragraphs: [
          "High durability — a highly durable material, resistant to wear and tear, guaranteed to stay beautiful for years to come.",
          "Versatility — can be designed to mimic the look of natural stone, marble, granite, or even wood.",
          "High cost performance — much cheaper than natural stone, and requires less maintenance.",
          "Lightweight — far lighter than natural stone, making it easier to install and move.",
          "Eco-friendly — made of recycled materials, and requires less energy to manufacture than natural stone.",
        ],
      },
      {
        eyebrow: "Twinx PU Stone",
        heading: "PU stone media wall, wood slat paneling",
        imageId: "pu-about-color",
        imageSrc: "/uploads/catalogue-pustone-5.jpg",
        paragraphs: [
          "PU stone can also be combined with wood slat paneling for a warmer, layered media wall — the stone reads as the feature, the slats frame the TV.",
          "Our standard finish is black, but PU stone can be painted into any colour to match the rest of the room.",
        ],
      },
      {
        eyebrow: "In Application",
        heading: "PU stone panels between wood cladding, living room",
        imageId: "pu-4",
        imageSrc: "/uploads/catalogue-pustone-6.jpg",
        paragraphs: [
          "PU stone panels set between warm wood cladding — a common combination that balances the cool stone texture with a softer material.",
        ],
      },
      {
        eyebrow: "In Application",
        heading: "PU stone headboard wall, bedroom (dark finish)",
        imageId: "pu-5",
        imageSrc: "/uploads/catalogue-pustone-4.jpg",
        paragraphs: [
          "A textured PU stone headboard wall, finished with pendant lighting either side of the bed.",
        ],
      },
      {
        eyebrow: "In Application",
        heading: "PU stone headboard wall, bedroom (light finish)",
        imageId: "pu-8",
        imageSrc: "/uploads/catalogue-pustone-7.jpg",
        paragraphs: [
          "A dark PU stone feature wall running behind the headboard and nightstand — a calm, tactile backdrop that pairs well with warm lighting.",
        ],
      },
    ],
  },
];

export function getMaterial(slug: string): MaterialData | undefined {
  return materials.find((m) => m.slug === slug);
}
