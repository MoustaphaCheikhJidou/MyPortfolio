"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Mail, Download, ChevronDown } from "lucide-react";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import RoleRotator from "@/components/ui/RoleRotator";
import TechCloud from "@/components/ui/TechCloud";
import CVModal from "@/components/ui/CVModal";
import { KaggleIcon, GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile, heroRoles, techCategories } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";
import { useLanguage } from "@/lib/i18n";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const cloudItems = techCategories.flatMap((c) => c.items);
const seen = new Set<string>();
const uniqueCloudItems = cloudItems
  .filter((i) => {
    if (seen.has(i.label)) return false;
    seen.add(i.label);
    return true;
  })
  // Keep the orbit readable — the full list lives in the Tech Stack section below.
  .slice(0, 14);

export default function Hero() {
  const { t, tr } = useLanguage();
  const roles = heroRoles.map(tr);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6"
      >
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <motion.h1
              variants={item}
              className="text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-6xl"
            >
              {t.hero.greeting} <span className="gradient-text">{profile.firstName}</span>{" "}
              <span aria-hidden="true">👋</span>
            </motion.h1>

            <motion.div variants={item} className="relative mt-3 inline-block">
              <p className="text-xl font-semibold text-primary-light sm:text-2xl">
                {tr(profile.shortTitle)}
              </p>
              <svg
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="mt-1 h-2.5 w-full text-primary-light/50"
              >
                <path
                  d="M0 8 Q 12.5 0, 25 8 T 50 8 T 75 8 T 100 8 T 125 8 T 150 8 T 175 8 T 200 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto h-40 w-40 shrink-0 sm:h-48 sm:w-48"
          >
            <div
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-light/40 to-cyan/30 blur-2xl"
              aria-hidden="true"
            />
            <div className="glass-card relative h-full w-full overflow-hidden rounded-full ring-1 ring-border-active">
              <Image
                src={withBasePath(profile.heroImages[1])}
                alt={profile.name}
                fill
                priority
                sizes="200px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="glass-card mt-10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-lg sm:text-xl">
            <span className="rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-light">
              {t.hero.aboutBadge}
            </span>
            <span className="text-text">
              {t.hero.iAm} <RoleRotator roles={roles} />
            </span>
          </div>
          <p className="mt-5 max-w-3xl text-text-muted">{tr(profile.title)}</p>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-light"
          >
            <Rocket size={16} aria-hidden="true" /> {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-border-active hover:text-cyan-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          >
            <Mail size={16} aria-hidden="true" /> {t.hero.getInTouch}
          </a>
          <button
            type="button"
            onClick={() => setCvModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-text-muted transition-colors hover:text-text"
          >
            <Download size={16} aria-hidden="true" /> {t.hero.downloadCV}
          </button>

          <div className="ml-auto flex items-center gap-3">
            <a
              href={profile.socials.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaggle profile"
              className="rounded-full border border-border p-2.5 text-text-muted transition-colors hover:border-border-active hover:text-cyan-light"
            >
              <KaggleIcon size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-border p-2.5 text-text-muted transition-colors hover:border-border-active hover:text-cyan-light"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-border p-2.5 text-text-muted transition-colors hover:border-border-active hover:text-cyan-light"
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-14">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-primary-light">{t.hero.techStackHeading}</h2>
            <a
              href="#tech-stack"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan-light transition-colors hover:text-cyan"
            >
              {t.hero.seeFullStack} <ChevronDown size={14} aria-hidden="true" />
            </a>
          </div>
          <TechCloud items={uniqueCloudItems} />
        </motion.div>
      </motion.div>

      <CVModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </section>
  );
}
