"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import FloatingBlobs from "./FloatingBlobs";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <FloatingBlobs />

      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-6 flex items-center gap-2 rounded-full border border-gold/30 bg-cream/60 px-4 py-1.5 text-xs font-medium tracking-wide text-charcoal-soft backdrop-blur-sm"
        >
          <Sparkles size={13} className="text-gold" />
          Pediatrician-approved &middot; Since day one
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl md:text-6xl lg:text-7xl"
        >
          The Sanctuary for{" "}
          <span className="italic text-gold">Modern Motherhood</span> &amp;
          Child Growth
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-balance mt-6 max-w-xl text-base text-charcoal-soft sm:text-lg"
        >
          Curated, organic essentials for mother and child — paired with
          smart developmental tools trusted by pediatric experts. One
          sanctuary, every stage.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#marketplace"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-gold/25 transition-all hover:shadow-xl hover:shadow-gold/30"
          >
            Explore Curated Collection
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#dashboard"
            className="animate-pulse-soft inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-cream/50 px-8 py-3.5 text-sm font-semibold text-charcoal backdrop-blur-md transition-colors hover:bg-cream/80"
          >
            Start Growth Journey
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 flex items-center gap-8 text-xs text-charcoal-soft"
        >
          <span>12,000+ mothers</span>
          <span className="h-1 w-1 rounded-full bg-charcoal-soft/40" />
          <span>98% organic sourcing</span>
          <span className="h-1 w-1 rounded-full bg-charcoal-soft/40" />
          <span>Backed by pediatricians</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
