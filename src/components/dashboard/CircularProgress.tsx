"use client";

import { motion } from "framer-motion";

export default function CircularProgress({
  progress,
  label,
  sublabel,
}: {
  progress: number; // 0-100
  label: string;
  sublabel: string;
}) {
  const size = 132;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex h-[132px] w-[132px] items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-cream-deep)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute flex flex-col items-center text-center">
        <span className="font-serif text-lg text-charcoal">{label}</span>
        <span className="text-[11px] text-charcoal-soft">{sublabel}</span>
      </div>
    </div>
  );
}
