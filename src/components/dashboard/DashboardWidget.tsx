"use client";

import { motion } from "framer-motion";
import { Baby } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import CircularProgress from "./CircularProgress";
import QuickLogActions from "./QuickLogActions";
import ExpertTipAccordion from "./ExpertTipAccordion";

export default function DashboardWidget() {
  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
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
          Smart tools
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="mt-3 text-balance font-serif text-3xl text-charcoal sm:text-4xl lg:text-5xl"
        >
          Your dashboard, at a glance
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="grid gap-6 lg:grid-cols-3"
      >
        {/* Child profile widget */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-4 rounded-[28px] border border-charcoal/8 bg-cream p-8 text-center shadow-sm shadow-charcoal/5"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose/60 to-gold/30 text-charcoal ring-4 ring-rose/30">
            <Baby size={26} strokeWidth={1.4} />
          </div>
          <div>
            <p className="font-serif text-lg text-charcoal">Little Wren</p>
            <p className="text-xs text-charcoal-soft">8 months old</p>
          </div>
          <CircularProgress
            progress={72}
            label="Month 8"
            sublabel="Leap 5"
          />
          <p className="text-xs leading-relaxed text-charcoal-soft">
            On track for gross motor &amp; language milestones this month.
          </p>
        </motion.div>

        {/* Quick log */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col justify-between gap-6 rounded-[28px] border border-charcoal/8 bg-cream p-8 shadow-sm shadow-charcoal/5"
        >
          <div>
            <h3 className="font-serif text-lg text-charcoal">
              Quick log
            </h3>
            <p className="mt-1 text-xs text-charcoal-soft">
              Tap to record — synced instantly to today&apos;s timeline.
            </p>
          </div>
          <QuickLogActions />
        </motion.div>

        {/* Expert tip */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col rounded-[28px] border border-charcoal/8 bg-cream p-8 shadow-sm shadow-charcoal/5"
        >
          <h3 className="font-serif text-lg text-charcoal">
            Expert tip of the day
          </h3>
          <p className="mt-1 mb-2 text-xs text-charcoal-soft">
            Curated by our pediatric advisory board.
          </p>
          <ExpertTipAccordion />
        </motion.div>
      </motion.div>
    </section>
  );
}
