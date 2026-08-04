export type ProofItem = { id: string; label: string; src: string; detail: string };

export const proofItems: ProofItem[] = [
  { id: "pf-wfm-2", label: "Single profile box moulding", src: "/uploads/catalogue-wallframe-2.jpg", detail: "A single-lined box profile run floor-to-ceiling, closely matched to the wall colour so it reads as considered architecture rather than an applied decoration." },
  { id: "pf-wfm-4", label: "Feature wall with sculptural console", src: "/uploads/catalogue-wallframe-4.jpg", detail: "A plain wall turned into the room's focal point — the moulding frames the console and art beneath it without competing for attention." },
  { id: "pf-aw-2", label: "Slat panel accent wall, seating nook", src: "/uploads/catalogue-accentwall-2.jpg", detail: "Vertical slat panelling behind a pair of armchairs — a graphic, tactile texture that gives a quiet corner presence." },
  { id: "pf-aw-5", label: "Wood & stone mixed accent wall", src: "/uploads/catalogue-accentwall-5.jpg", detail: "Fluted wood panelling paired with a raw stone-textured insert, mixing warm and tactile materials on the same wall." },
  { id: "pf-wp-2", label: "Wallpaper reference", src: "/uploads/catalogue-wallpaper-2.jpg", detail: "One of the wallpaper finishes from our sample range — full books are available to browse in-studio or at your consultation." },
  { id: "pf-wp-5", label: "Wallpaper reference", src: "/uploads/catalogue-wallpaper-5.jpg", detail: "A textured wallpaper finish, part of our imported range — see and feel it in person before you commit to a room." },
  { id: "pf-pu-2", label: "PU stone cladding, media wall", src: "/uploads/catalogue-pustone-2.jpg", detail: "PU stone cladding on a media wall — the look of real stone, lightweight enough to install without structural work." },
  { id: "pf-pu-5", label: "PU stone panel, living room", src: "/uploads/catalogue-pustone-5.jpg", detail: "Full-wall PU stone cladding in a living space, bringing texture and depth without the weight of natural stone." },
  { id: "pf-pvc-1", label: "PVC panel reference", src: "/uploads/catalogue-pvc-1.jpg", detail: "Fluted PVC wall panelling — a wood-look finish that's moisture-resistant and simple to maintain." },
  { id: "pf-pvc-3", label: "PVC panel reference", src: "/uploads/catalogue-pvc-3.jpg", detail: "Another finish from our fluted PVC panel range, priced per panel with sizing worked out to your exact wall." },
  { id: "pf-gen-1", label: "Black wainscoting, herringbone floor", src: "/uploads/catalogue-general-1.jpg", detail: "Black wainscoting panelling against a herringbone floor — a classic profile taken in a bold, modern direction." },
  { id: "pf-gen-2", label: "Fluted cabinetry panel with sphere accent", src: "/uploads/catalogue-general-2.jpg", detail: "Fluted cabinetry panelling finished with a sculptural sphere accent — custom joinery detail from a recent project." },
];

export type ProcessStep = { n: string; title: string; desc: string };

export const processSteps: ProcessStep[] = [
  { n: "01", title: "Consultation", desc: "We visit the space (or start over a call), talk through what you want the wall or room to do, and take measurements." },
  { n: "02", title: "Design & Quote", desc: "We put together a design direction and a clear quote — materials, finish, and timeline, no surprises later." },
  { n: "03", title: "Sign-off", desc: "You approve the design and quote, we schedule the install date and confirm materials." },
  { n: "04", title: "Installation", desc: "Our team installs on-site, working cleanly and to the agreed timeline." },
  { n: "05", title: "Final Walkthrough", desc: "We walk the finished space with you, and hand over care instructions for the new finish." },
];

export type Testimonial = { id: string; quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  { id: "t1", quote: "Twinx turned a plain living room wall into the first thing every guest comments on. The finish is flawless.", name: "Naledi M.", role: "Homeowner, Pretoria" },
  { id: "t2", quote: "Professional from the first site visit to the final walkthrough. They kept to the timeline and the quote.", name: "Sipho D.", role: "Homeowner, Durban" },
  { id: "t3", quote: "We used Twinx for our office fit-out — the wall panelling completely changed how the space feels for clients.", name: "Amanda K.", role: "Office Manager, Pretoria" },
  { id: "t4", quote: "The PU stone cladding in our media wall looks exactly like natural stone. No one believes it isn't.", name: "Johan V.", role: "Homeowner, Centurion" },
  { id: "t5", quote: "Excellent communication throughout and the cabinetry work is beautifully finished. Would use them again.", name: "Thandi N.", role: "Homeowner, Durban" },
];

export type ClientLogo = { id: string; src: string; alt: string };

export const clientLogos: ClientLogo[] = [
  { id: "client-logo-glencore", src: "/uploads/glencor.png", alt: "Glencore" },
  { id: "client-logo-discovery", src: "/uploads/discovery.jpg", alt: "Discovery" },
  { id: "client-logo-spar", src: "/uploads/spar-1.jpg", alt: "SPAR" },
  { id: "client-logo-newscafe", src: "/uploads/newscafe.png", alt: "News Cafe" },
  { id: "client-logo-gibb", src: "/uploads/GIBB.jpg", alt: "GIBB" },
];

export type MaterialCard = { href: string; label: string; src: string };

export const exploreMaterialCards: MaterialCard[] = [
  { href: "/materials/wall-frame-moulding", label: "Wall Frame Moulding", src: "/uploads/catalogue-wallframe-5.jpg" },
  { href: "/materials/accent-wall", label: "Accent Wall", src: "/uploads/catalogue-accentwall-3.jpg" },
  { href: "/materials/pvc-panels", label: "PVC Panels", src: "/uploads/catalogue-pvc-2.jpg" },
  { href: "/materials/wallpaper", label: "Wallpaper", src: "/uploads/catalogue-wallpaper-3.jpg" },
  { href: "/materials/kitchen-unit", label: "Kitchen Unit & Cabinetry", src: "/uploads/catalogue-general-3.jpg" },
  { href: "/materials/pu-stone", label: "PU Stone", src: "/uploads/catalogue-pustone-6.jpg" },
];

export type Reel = { id: string; src: string; caption?: string };

export const reels: Reel[] = [
  { id: "reel-1", src: "/uploads/reel-1.mp4" },
  { id: "reel-2", src: "/uploads/reel-2.mp4" },
  { id: "reel-3", src: "/uploads/reel-3-dstv.mp4", caption: "DStv Home Channel" },
];
