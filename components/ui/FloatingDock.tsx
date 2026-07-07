"use client";

import { motion } from "framer-motion";
import { Home, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/icons";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/lib/i18n";
import { profile } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";

const itemClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface-hover hover:text-cyan-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan";

export default function FloatingDock() {
  const { t, locale, setLocale } = useLanguage();
  const whatsappHref = `https://wa.me/${profile.whatsapp}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Quick links"
        className="glass-card flex items-center gap-1 rounded-full px-2 py-2 shadow-lg backdrop-blur-md"
      >
        <a href="#top" aria-label={t.dock.home} title={t.dock.home} className={itemClass}>
          <Home size={18} aria-hidden="true" />
        </a>
        <a
          href={withBasePath("/blog")}
          aria-label={t.dock.blog}
          title={t.dock.blog}
          className={itemClass}
        >
          <BookOpen size={18} aria-hidden="true" />
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.dock.github}
          title={t.dock.github}
          className={itemClass}
        >
          <GithubIcon size={18} />
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.dock.linkedin}
          title={t.dock.linkedin}
          className={itemClass}
        >
          <LinkedinIcon size={18} />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.dock.whatsapp}
          title={t.dock.whatsapp}
          className={itemClass}
        >
          <WhatsappIcon size={18} />
        </a>

        <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />

        <ThemeToggle className={itemClass} />

        <button
          type="button"
          onClick={() => setLocale(locale === "en" ? "fr" : "en")}
          aria-label={t.dock.language}
          title={t.dock.language}
          className={`${itemClass} text-base`}
        >
          <span aria-hidden="true">{locale === "en" ? "🇬🇧" : "🇫🇷"}</span>
        </button>
      </nav>
    </motion.div>
  );
}
