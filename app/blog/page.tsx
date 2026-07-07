"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function BlogIndexPage() {
  const { locale, tr } = useLanguage();

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-cyan-light"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        {locale === "fr" ? "Retour à l'accueil" : "Back home"}
      </Link>

      <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-light">
          Blog
        </span>
        <h1 className="mt-2 text-3xl font-semibold text-text sm:text-4xl">
          {locale === "fr" ? "Articles" : "Articles"}
        </h1>
        <p className="mt-3 max-w-xl text-text-muted">
          {locale === "fr"
            ? "Notes et retours d'expérience sur mes projets en data engineering, IA et statistiques."
            : "Notes and write-ups from my work in data engineering, AI and statistics."}
        </p>
      </motion.div>

      <div className="space-y-5">
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="glass-card group block rounded-xl p-6 transition-colors hover:border-border-active"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-text-dim">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} aria-hidden="true" /> {post.readTime}
                </span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-text transition-colors group-hover:text-cyan-light">
                {tr(post.title)}
              </h2>
              <p className="mt-2 text-sm text-text-muted">{tr(post.excerpt)}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
