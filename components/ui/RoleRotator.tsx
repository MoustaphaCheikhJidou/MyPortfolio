"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, [roles.length, reduceMotion]);

  return (
    <span className="relative inline-block min-w-[9ch] text-left align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
          className="inline-block font-semibold text-primary-light"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
