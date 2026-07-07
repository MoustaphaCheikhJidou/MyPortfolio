"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { useLanguage } from "@/lib/i18n";

export default function BlogPostView({ post }: { post: BlogPost }) {
  const { locale, tr } = useLanguage();

  return (
    <article className="mx-auto max-w-2xl px-6 pb-24 pt-32">
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-cyan-light"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        {locale === "fr" ? "Retour au blog" : "Back to blog"}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-wrap items-center gap-3 text-xs text-text-dim">
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} aria-hidden="true" /> {post.readTime}
          </span>
        </div>
        <h1 className="mt-2 text-3xl font-semibold text-text sm:text-4xl">{tr(post.title)}</h1>

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

        <div className="mt-8 space-y-5 text-text-muted">
          {post.content.map((paragraph, i) => (
            <p key={i}>{tr(paragraph)}</p>
          ))}
        </div>
      </motion.div>
    </article>
  );
}
