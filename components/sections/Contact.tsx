"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { KaggleIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass-card rounded-2xl p-10 text-center"
        >
          <div className="mx-auto mb-6 inline-flex rounded-full bg-primary/15 p-4 text-cyan-light">
            <Send size={28} aria-hidden="true" />
          </div>

          <h2 className="gradient-text text-3xl font-semibold sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 text-text-muted">{t.contact.subtitle}</p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex max-w-full items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-light"
          >
            <Mail size={16} aria-hidden="true" className="shrink-0" />
            <span className="break-all">{profile.email}</span>
          </a>

          <p className="mt-6 text-sm text-text-dim">{t.contact.orReach}</p>
          <p className="mt-1 font-medium text-text">{profile.phone}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={profile.socials.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaggle profile"
              className="rounded-full border border-border p-3 text-text-muted transition-colors hover:border-border-active hover:text-cyan-light"
            >
              <KaggleIcon size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-border p-3 text-text-muted transition-colors hover:border-border-active hover:text-cyan-light"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-border p-3 text-text-muted transition-colors hover:border-border-active hover:text-cyan-light"
            >
              <GithubIcon size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
