"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n } from "../providers/i18nProvider";

const expo = [0.16, 1, 0.3, 1] as const;

// ~10 lines × leading-relaxed (1.625) × 1rem
const COLLAPSED_HEIGHT = "16.25em";

interface Props {
  title: string;
  children: React.ReactNode;
}

function Chevron({ up }: { up: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path
        d={up ? "M2 9.5L7 4.5L12 9.5" : "M2 4.5L7 9.5L12 4.5"}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ToggleButton({ up, label, onClick }: { up: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#1A1916]/70 hover:text-[#1A1916] transition-colors duration-300 cursor-pointer"
    >
      <Chevron up={up} />
      <span>{label}</span>
    </button>
  );
}

export default function CollectionDescription({ title, children }: Props) {
  const [expanded, setExpanded] = useState(false);
  const { locale } = useI18n();
  const titleRef = useRef<HTMLHeadingElement>(null);

  const readMoreLabel = locale === "en" ? "Read more" : "Leer más";
  const collapseLabel = locale === "en" ? "Show less" : "Leer menos";

  function collapseAndScroll() {
    setExpanded(false);
    setTimeout(() => {
      titleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <div className="mb-20 md:mb-32">
      <h2
        ref={titleRef}
        className="text-[clamp(2.5rem,7vw,6rem)] font-bold tracking-tight uppercase text-[#1A1916] leading-[0.9] mb-6 md:mb-8"
      >
        {title}
      </h2>

      {/* Top "leer menos" — collapses only, no scroll */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mb-3"
          >
            <ToggleButton up label={collapseLabel} onClick={() => setExpanded(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text — gradient lives INSIDE so it doesn't cover the button below */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : COLLAPSED_HEIGHT }}
        transition={{ duration: 0.55, ease: expo }}
        className="overflow-hidden relative"
      >
        {children}

        <AnimatePresence>
          {!expanded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#F6F2EC] to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Bottom buttons */}
      <div className="mt-3">
        {!expanded ? (
          <ToggleButton up={false} label={readMoreLabel} onClick={() => setExpanded(true)} />
        ) : (
          /* Bottom "leer menos" — collapses AND scrolls to title */
          <ToggleButton up label={collapseLabel} onClick={collapseAndScroll} />
        )}
      </div>
    </div>
  );
}
