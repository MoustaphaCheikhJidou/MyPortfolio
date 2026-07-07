"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techCategories } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function TechStack() {
  const { t, tr } = useLanguage();

  return (
    <section id="tech-stack" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-light">
            {t.techStack.tag}
          </span>
          <h2 className="mt-2 text-3xl font-semibold text-text sm:text-4xl">{t.techStack.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">{t.techStack.subtitle}</p>
        </motion.div>

        <div className="space-y-14">
          {techCategories.map((category, ci) => (
            <motion.div
              key={category.title.en}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: (ci % 3) * 0.08 }}
            >
              <h3 className="text-xl font-semibold text-primary-light">{tr(category.title)}</h3>
              <p className="mt-1 text-sm text-text-muted">{tr(category.description)}</p>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.items.map((tech) => (
                  <div
                    key={tech.label}
                    className="glass-card flex flex-col items-center gap-3 rounded-xl p-5 text-center transition-colors hover:border-border-active"
                  >
                    <div className="flex h-12 w-12 items-center justify-center">
                      {tech.logo ? (
                        <span className="flex h-full w-full items-center justify-center rounded-lg bg-white/90 p-2 shadow-sm">
                          <Image
                            src={withBasePath(tech.logo)}
                            alt=""
                            width={40}
                            height={40}
                            className="h-full w-full object-contain"
                          />
                        </span>
                      ) : (
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary-light">
                          {tech.monogram}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-text">{tech.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
