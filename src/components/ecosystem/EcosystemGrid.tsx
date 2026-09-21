"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Activity, Leaf } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function EcosystemGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer()}
        className="mb-14 max-w-2xl"
      >
        <motion.span
          variants={fadeInUp}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          One ecosystem
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="mt-3 text-balance font-serif text-3xl text-charcoal sm:text-4xl lg:text-5xl"
        >
          Curated goods, met with real insight
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="grid gap-6 lg:grid-cols-5"
      >
        {/* Card A — larger */}
        <motion.a
          href="#marketplace"
          variants={fadeInUp}
          className="group relative col-span-1 flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] bg-gradient-to-br from-rose/50 via-cream-deep to-gold/30 lg:col-span-3"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-60 transition-transform duration-700 ease-out group-hover:scale-110">
            <Leaf size={140} strokeWidth={0.8} className="text-charcoal/15" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/5 to-transparent" />
          <div className="relative z-10 flex items-end justify-between gap-4 p-8">
            <div>
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-gold shadow-lg">
                <ShoppingBag size={18} />
              </span>
              <h3 className="font-serif text-2xl text-cream sm:text-3xl">
                The Boutique
              </h3>
              <p className="mt-2 max-w-sm text-sm text-cream/80">
                Pediatrician-approved skincare, nursery, and feeding
                essentials — organic, considered, made to last.
              </p>
            </div>
            <ArrowUpRight
              className="shrink-0 text-cream/70 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              size={24}
            />
          </div>
        </motion.a>

        {/* Card B */}
        <motion.a
          href="#dashboard"
          variants={fadeInUp}
          className="group relative col-span-1 flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] bg-charcoal lg:col-span-2"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(232,197,200,0.18),transparent_55%)]" />
          <div className="relative z-10 p-8">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold-soft shadow-lg">
              <Activity size={18} />
            </span>
            <h3 className="font-serif text-2xl text-cream sm:text-3xl">
              Milestone Intelligence
            </h3>
            <p className="mt-2 max-w-xs text-sm text-cream/70">
              Track growth curves, vaccination schedules, and every
              developmental leap — with notes an expert can act on.
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold-soft">
              Open dashboard
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </span>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
