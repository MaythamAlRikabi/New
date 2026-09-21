"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { productCategories, products, type ProductCategory } from "@/lib/data";
import ProductCard from "./ProductCard";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const ALL = "All" as const;

export default function Marketplace() {
  const [filter, setFilter] = useState<ProductCategory | typeof ALL>(ALL);

  const filtered = useMemo(
    () =>
      filter === ALL
        ? products
        : products.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="marketplace" className="bg-cream-deep/60 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer()}
          className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              The Boutique
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl"
            >
              Curated for the earliest years
            </motion.h2>
          </div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-2"
          >
            {[ALL, ...productCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  filter === cat
                    ? "border-gold bg-gold text-cream"
                    : "border-charcoal/15 bg-cream text-charcoal-soft hover:border-gold/50 hover:text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          key={filter}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
