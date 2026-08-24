export type ProofItem = { id: string; label: string; src: string; detail: string };

// One representative photo per service — no category repeated, none skipped.
export const proofItems: ProofItem[] = [
  { id: "pf-wfm-4", label: "Feature wall", src: "/uploads/catalogue-wallframe-4.jpg", detail: "A plain wall turned into the room's focal point — the moulding frames the space beneath it without competing for attention." },
  { id: "pf-aw-5", label: "Layered panel moulding wall", src: "/uploads/catalogue-accentwall-5.jpg", detail: "Multi-lined box moulding in a deep charcoal finish, arranged as three tall concentric frames for a bold, architectural accent wall." },
  { id: "pf-pvc-2", label: "Slatted panel wall, grey finish", src: "/uploads/catalogue-pvc-2.jpg", detail: "Vertical slat PVC wall panelling in a grey finish — water-resistant and low-maintenance, priced per panel." },
  { id: "pf-wp-2", label: "Textured neutral wallpaper", src: "/uploads/catalogue-wallpaper-2.jpg", detail: "A textured wallpaper finish from our imported range — see and feel it in person before you commit to a room." },
  { id: "pf-ku-2", label: "Matte grey cabinetry with open shelving", src: "/uploads/minimalist-kitchen-interior-design-2.jpg", detail: "Custom-built kitchen cabinetry finished in matte grey with open shelving — bespoke joinery designed around how the space is actually used." },
  { id: "pf-pu-5", label: "PU stone panel, bedroom", src: "/uploads/catalogue-pustone-5.jpg", detail: "Full-wall PU stone cladding in a bedroom, bringing texture and depth without the weight of natural stone." },
  { id: "pf-wic-1", label: "Walk-in closet, backlit shoe shelving", src: "/uploads/pf-wic-backlit-shelving.jpg", detail: "Floor-to-ceiling wardrobe doors in matte charcoal, paired with a backlit oak shelving tower built for shoe display and a full-length mirror door." },
  { id: "pf-bar-1", label: "Home bar cabinetry", src: "/uploads/pf-bar-fluted-panelling.jpg", detail: "Custom bar cabinetry with backlit fluted panelling — bespoke joinery built around glassware and display." },
  { id: "pf-gen-1", label: "TV unit, wood slat wall", src: "/uploads/pf-tv-unit-slat-2.jpg", detail: "A wall-mounted TV set into a backlit wood-slat feature wall, paired with an open black shelving unit for books and display pieces." },
];

export type ProcessStep = { n: string; title: string; desc: string };

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "On-Site Consultation",
    desc: "Our process begins with a comprehensive on-site consultation, where we meet with the client to gain a clear understanding of their vision, requirements, and project objectives. During this visit, we take accurate measurements, assess the space, and present relevant material and finish samples to help guide the design direction.",
  },
  {
    n: "02",
    title: "3D Design Rendering (Optional)",
    desc: "For clients who would like to visualize their project before installation, we offer professional 3D design renderings. This optional service is particularly recommended for projects such as kitchens, walk-in closets, and other bespoke interior installations, allowing clients to review and refine the design prior to execution.",
  },
  {
    n: "03",
    title: "Quotation",
    desc: "Once the project scope and design requirements have been finalized, we prepare and submit a detailed quotation outlining the agreed specifications, scope of work, and associated costs.",
  },
  {
    n: "04",
    title: "On-Site Installation",
    desc: "Upon approval of the quotation, our experienced installation team carries out the project with precision, professionalism, and meticulous attention to detail, ensuring the highest standards of workmanship throughout the installation process.",
  },
  {
    n: "05",
    title: "Quality Check and Snagging",
    desc: "Following completion of the installation, our team conducts a thorough quality inspection, identifying and resolving any outstanding snags to ensure every aspect of the project meets our stringent quality standards.",
  },
  {
    n: "06",
    title: "Sign-Off and Handover",
    desc: "Once every detail meets our standards and the client's expectations, the project is formally signed off and handed over, complete and ready to enjoy.",
  },
];

export type Testimonial = { id: string; quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  { id: "t1", quote: "We had fluted PVC wall panels installed. It looks amazing — gives our living room a clean, professional look. Installers were helpful and professional. Definitely recommend!", name: "Thalia Brussow", role: "Google review" },
  { id: "t2", quote: "I am giving Twinx Interiors a 5 star because they went way beyond their promise in the delivery of their service. Well done guys.", name: "Lerato Mashiane", role: "Google review" },
  { id: "t3", quote: "Excellent service and very professional team. Thank you again.", name: "Riaz Shivani", role: "Google review" },
  { id: "t4", quote: "So lit ☆", name: "Ronewa Rorisang", role: "Google review" },
];

export type ClientLogo = { id: string; src: string; alt: string };

export const clientLogos: ClientLogo[] = [
  { id: "client-logo-glencore", src: "/uploads/glencor.png", alt: "Glencore" },
  { id: "client-logo-discovery", src: "/uploads/discovery.jpg", alt: "Discovery" },
  { id: "client-logo-spar", src: "/uploads/spar-1.jpg", alt: "SPAR" },
  { id: "client-logo-newscafe", src: "/uploads/newscafe.png", alt: "News Cafe" },
  { id: "client-logo-gibb", src: "/uploads/GIBB.jpg", alt: "GIBB" },
];

export type MaterialCard = { href: string; label: string; src: string; isNew?: boolean; desc?: string };

export const exploreMaterialCards: MaterialCard[] = [
  { href: "/materials/wall-frame-moulding", label: "Wall Frame Moulding", src: "/uploads/catalogue-accentwall-3.jpg" },
  { href: "/materials/accent-wall", label: "Accent Wall", src: "/uploads/catalogue-wallframe-5.jpg" },
  { href: "/materials/pvc-panels", label: "PVC Panels", src: "/uploads/catalogue-pvc-2.jpg" },
  { href: "/materials/wallpaper", label: "Wallpaper", src: "/uploads/catalogue-wallpaper-3.jpg" },
  { href: "/materials/kitchen-unit", label: "Kitchen Unit & Cabinetry", src: "/uploads/beautiful-kitchen-interior-design.jpg" },
  { href: "/materials/pu-stone", label: "PU Stone", src: "/uploads/catalogue-pustone-4.jpg" },
];

export type Reel = { id: string; src: string; caption?: string };

export const reels: Reel[] = [
  { id: "reel-wardrobe-install", src: "/uploads/reel-wardrobe-install.mp4", caption: "Wardrobe Unit Installation" },
  { id: "reel-dont-move-1", src: "/uploads/reel-dont-move-1.mp4" },
  { id: "reel-dont-move-2", src: "/uploads/reel-dont-move-2.mp4" },
];
