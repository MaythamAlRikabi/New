"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FloatingBlobs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y: yFast }}
        className="animate-blob-float absolute -left-24 top-10 h-96 w-96 rounded-full bg-rose/40 blur-3xl"
      />
      <motion.div
        style={{ y: ySlow }}
        className="animate-blob-float-slow absolute -right-16 top-32 h-[28rem] w-[28rem] rounded-full bg-gold/25 blur-3xl"
      />
      <motion.div
        style={{ y: yMid }}
        className="animate-blob-float absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cream-deep blur-3xl"
      />
      <motion.div
        style={{ y: yFast }}
        className="animate-blob-float-slow absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-rose/30 blur-2xl"
      />
    </div>
  );
}
