"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Milk, Baby, Check } from "lucide-react";

const ACTIONS = [
  { id: "sleep", label: "Sleep", icon: Moon },
  { id: "feeding", label: "Feeding", icon: Milk },
  { id: "diaper", label: "Diaper", icon: Baby },
] as const;

export default function QuickLogActions() {
  const [logged, setLogged] = useState<Record<string, boolean>>({});

  const logAction = (id: string) => {
    setLogged((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLogged((prev) => ({ ...prev, [id]: false }));
    }, 1400);
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {ACTIONS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => logAction(id)}
          className="relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl border border-charcoal/8 bg-cream py-4 transition-colors hover:border-gold/40 hover:bg-cream-deep/40"
        >
          <AnimatePresence mode="wait" initial={false}>
            {logged[id] ? (
              <motion.span
                key="check"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-cream"
              >
                <Check size={16} />
              </motion.span>
            ) : (
              <motion.span
                key="icon"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-rose/25 text-rose-deep"
              >
                <Icon size={16} />
              </motion.span>
            )}
          </AnimatePresence>
          <span className="text-xs font-medium text-charcoal-soft">
            {logged[id] ? "Logged" : label}
          </span>
        </button>
      ))}
    </div>
  );
}
