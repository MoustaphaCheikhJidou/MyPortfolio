"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ImageOff } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";

type Filter = "all" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-light">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-semibold text-text sm:text-4xl">Projects</h2>
          <p className="mx-auto mt-3 max-w-xl text-text-muted">
            A selection of data science, statistics and web development projects — each solving
            a real-world problem.
          </p>
        </motion.div>

        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              role="tab"
              aria-selected={filter === cat.value}
              onClick={() => setFilter(cat.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${
                filter === cat.value
                  ? "bg-gradient-to-r from-primary to-cyan text-white"
                  : "glass-card text-text-muted hover:text-text"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glass-card group flex flex-col overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[2/1] w-full overflow-hidden bg-bg-2">
                  {project.image ? (
                    <Image
                      src={withBasePath(project.image)}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center gap-2 text-text-dim">
                      <ImageOff size={20} aria-hidden="true" />
                      <span className="text-xs">Preview coming soon</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary-light">
                    {project.categoryLabel}
                  </span>
                  <h3 className="font-semibold text-text">{project.title}</h3>
                  <p className="flex-1 text-sm text-text-muted">{project.description}</p>
                  {project.comingSoon ? (
                    <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm text-text-dim">
                      <Clock size={14} aria-hidden="true" /> Coming Soon
                    </span>
                  ) : (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-cyan-light transition-colors hover:text-cyan"
                    >
                      <GithubIcon size={14} /> View Code
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
