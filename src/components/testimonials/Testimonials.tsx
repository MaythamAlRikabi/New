"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import Avatar from "@/components/ui/Avatar";

function TestimonialCard({
  quote,
  name,
  role,
  initials,
}: (typeof testimonials)[number]) {
  return (
    <div className="mx-4 flex w-[340px] shrink-0 flex-col gap-4 rounded-[24px] border border-charcoal/8 bg-cream p-7 shadow-sm shadow-charcoal/5">
      <Quote className="text-gold/60" size={22} />
      <p className="text-sm leading-relaxed text-charcoal-soft">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3 pt-2">
        <Avatar initials={initials} size={40} />
        <div>
          <p className="text-sm font-medium text-charcoal">{name}</p>
          <p className="text-xs text-charcoal-soft">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="overflow-hidden bg-cream-deep/60 py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer()}
        className="mx-auto mb-14 max-w-2xl px-6 text-center lg:px-10"
      >
        <motion.span
          variants={fadeInUp}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          Trusted
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="mt-3 text-balance font-serif text-3xl text-charcoal sm:text-4xl lg:text-5xl"
        >
          Endorsed by mothers and pediatricians alike
        </motion.h2>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream-deep to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream-deep to-transparent" />

        <div className="animate-marquee flex w-max py-2 [animation-play-state:running] hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
