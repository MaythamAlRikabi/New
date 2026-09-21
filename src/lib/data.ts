export type ProductCategory = "Skincare" | "Nursery" | "Feeding" | "Toys";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  gradient: string;
  badge?: "Organic Certified" | "Limited Edition" | "Best Seller";
};

export const productCategories: ProductCategory[] = [
  "Skincare",
  "Nursery",
  "Feeding",
  "Toys",
];

// Each product gets a warm, palette-true gradient in place of photography —
// swap for real product imagery when it's available.
export const products: Product[] = [
  {
    id: "p1",
    name: "Calendula Balm Duo",
    category: "Skincare",
    price: 42,
    gradient: "from-rose/70 via-rose/30 to-cream-deep",
    badge: "Organic Certified",
  },
  {
    id: "p2",
    name: "Oat Milk Baby Wash",
    category: "Skincare",
    price: 28,
    gradient: "from-gold/40 via-cream-deep to-rose/40",
    badge: "Best Seller",
  },
  {
    id: "p3",
    name: "Linen Bassinet Set",
    category: "Nursery",
    price: 168,
    gradient: "from-charcoal/15 via-cream-deep to-gold/30",
    badge: "Limited Edition",
  },
  {
    id: "p4",
    name: "Cloud Weight Swaddle",
    category: "Nursery",
    price: 54,
    gradient: "from-cream-deep via-rose/25 to-charcoal/10",
  },
  {
    id: "p5",
    name: "Ceramic Feeding Set",
    category: "Feeding",
    price: 36,
    gradient: "from-gold/50 via-cream-deep to-charcoal/10",
    badge: "Organic Certified",
  },
  {
    id: "p6",
    name: "Silicone Suction Bowl",
    category: "Feeding",
    price: 24,
    gradient: "from-rose/40 via-cream-deep to-gold/25",
  },
  {
    id: "p7",
    name: "Wooden Rainbow Stacker",
    category: "Toys",
    price: 32,
    gradient: "from-gold/45 via-rose/25 to-cream-deep",
    badge: "Best Seller",
  },
  {
    id: "p8",
    name: "Soft Linen Comforter",
    category: "Toys",
    price: 38,
    gradient: "from-charcoal/12 via-cream-deep to-rose/30",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The growth tracker caught a feeding pattern our pediatrician wanted to see — the boutique products are just as thoughtfully made.",
    name: "Dr. Amara Osei",
    role: "Pediatrician, MD",
    initials: "AO",
  },
  {
    id: "t2",
    quote:
      "It finally feels like one home for everything — what I buy for her and what I track for her.",
    name: "Camille Rousseau",
    role: "Mother of two",
    initials: "CR",
  },
  {
    id: "t3",
    quote:
      "Milestone Intelligence gave us language for what we were already noticing — reassuring, never alarming.",
    name: "Dr. Priya Chandran",
    role: "Developmental Specialist",
    initials: "PC",
  },
  {
    id: "t4",
    quote:
      "The calmest checkout experience I've had — and the calendula balm is now a nightly ritual.",
    name: "Hana Kobayashi",
    role: "First-time mother",
    initials: "HK",
  },
];

export const expertTips = [
  {
    id: "tip1",
    title: "Tummy time, in small doses",
    body: "At 8 months, 3–5 short sessions a day build the same core strength as one long one — and she'll fuss less.",
  },
  {
    id: "tip2",
    title: "Sleep regressions are a growth signal",
    body: "A sudden change in sleep often lines up with a developmental leap, not a problem to fix.",
  },
  {
    id: "tip3",
    title: "Introduce one texture at a time",
    body: "New foods land better one at a time over 3 days — easier to spot what she loves, or reacts to.",
  },
];
