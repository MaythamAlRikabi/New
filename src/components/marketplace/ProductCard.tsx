"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Plus, Droplet, Moon, Milk, Blocks } from "lucide-react";
import type { Product, ProductCategory } from "@/lib/data";

const BADGE_STYLES: Record<NonNullable<Product["badge"]>, string> = {
  "Organic Certified": "bg-charcoal/85 text-cream",
  "Limited Edition": "bg-gold text-cream",
  "Best Seller": "bg-rose-deep text-cream",
};

const CATEGORY_ICON: Record<ProductCategory, typeof Droplet> = {
  Skincare: Droplet,
  Nursery: Moon,
  Feeding: Milk,
  Toys: Blocks,
};

export default function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [burst, setBurst] = useState(false);
  const [added, setAdded] = useState(false);
  const Icon = CATEGORY_ICON[product.category];

  const toggleWishlist = () => {
    setWishlisted((v) => !v);
    if (!wishlisted) {
      setBurst(true);
      setTimeout(() => setBurst(false), 500);
    }
  };

  const addToBag = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="group relative flex flex-col">
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${product.gradient}`}
      >
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
          <Icon
            size={56}
            strokeWidth={1.1}
            className="text-charcoal/25"
          />
        </div>

        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ${BADGE_STYLES[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist toggle */}
        <button
          onClick={toggleWishlist}
          aria-label="Toggle wishlist"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-charcoal shadow-sm backdrop-blur-sm transition-transform hover:scale-110"
        >
          <motion.span
            animate={wishlisted ? { scale: [1, 1.35, 1] } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Heart
              size={16}
              className={
                wishlisted ? "fill-rose-deep text-rose-deep" : "text-charcoal"
              }
            />
          </motion.span>

          <AnimatePresence>
            {burst &&
              [0, 60, 120, 180, 240, 300].map((angle) => (
                <motion.span
                  key={angle}
                  initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  animate={{
                    opacity: 0,
                    x: Math.cos((angle * Math.PI) / 180) * 22,
                    y: Math.sin((angle * Math.PI) / 180) * 22,
                    scale: 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute h-1.5 w-1.5 rounded-full bg-rose-deep"
                />
              ))}
          </AnimatePresence>
        </button>

        {/* Sliding "Add to Bag" action */}
        <div className="absolute inset-x-3 bottom-3 translate-y-14 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={addToBag}
            className="flex w-full items-center justify-center gap-1.5 rounded-full bg-charcoal py-2.5 text-xs font-semibold text-cream shadow-lg transition-colors hover:bg-charcoal/90"
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  Added to Bag
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-1.5"
                >
                  <Plus size={14} /> Add to Bag
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2 px-0.5">
        <div>
          <h3 className="text-sm font-medium text-charcoal">
            {product.name}
          </h3>
          <p className="text-xs text-charcoal-soft">{product.category}</p>
        </div>
        <span className="text-sm font-semibold text-charcoal">
          ${product.price}
        </span>
      </div>
    </div>
  );
}
