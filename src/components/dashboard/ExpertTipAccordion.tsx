"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { expertTips } from "@/lib/data";

export default function ExpertTipAccordion() {
  const [openId, setOpenId] = useState<string | null>(expertTips[0].id);

  return (
    <div className="divide-y divide-charcoal/8">
      {expertTips.map((tip) => {
        const isOpen = openId === tip.id;
        return (
          <div key={tip.id} className="py-3">
            <button
              onClick={() => setOpenId(isOpen ? null : tip.id)}
              className="flex w-full items-center justify-between gap-3 text-left"
            >
              <span className="text-sm font-medium text-charcoal">
                {tip.title}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="shrink-0 text-charcoal-soft"
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pt-2 text-sm leading-relaxed text-charcoal-soft">
                    {tip.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
