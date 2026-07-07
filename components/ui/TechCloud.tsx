"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { withBasePath } from "@/lib/base-path";
import type { TechItem } from "@/lib/data";

const ORBIT_DURATION = 40;

export default function TechCloud({ items }: { items: TechItem[] }) {
  const reduceMotion = useReducedMotion();
  const total = items.length;

  return (
    <div className="glass-card relative flex h-[340px] w-full items-center justify-center overflow-hidden rounded-2xl sm:h-[420px]">
      <motion.div
        className="relative h-[280px] w-[280px] sm:h-[360px] sm:w-[360px]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => {
          const angle = (2 * Math.PI * i) / total;
          const radius = 50; // percent of container half-size
          const x = (50 + radius * Math.cos(angle)).toFixed(2);
          const y = (50 + radius * Math.sin(angle)).toFixed(2);

          return (
            <motion.div
              key={item.label}
              className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-12 sm:w-12"
              style={{ top: `${y}%`, left: `${x}%` }}
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
              title={item.label}
            >
              {item.logo ? (
                <span className="flex h-full w-full items-center justify-center rounded-full bg-white/90 p-1.5 shadow-md">
                  <Image
                    src={withBasePath(item.logo)}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </span>
              ) : (
                <span className="flex h-full w-full items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary-light">
                  {item.monogram}
                </span>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <div
        className="pointer-events-none absolute flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-light/30 to-cyan/20 blur-xl sm:h-20 sm:w-20"
        aria-hidden="true"
      />
    </div>
  );
}
