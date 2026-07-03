"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Laptop,
  Database,
  Bot,
  Code2,
  Server,
  Globe,
  Users,
  Landmark,
  MapPin,
  School,
  Building2,
  Calendar,
  Languages,
  Trophy,
  ExternalLink,
  Award,
} from "lucide-react";
import {
  about,
  education,
  experience,
  skills,
  languages as langs,
  associative,
  achievements,
  certifications,
  interests,
} from "@/lib/data";

const skillIcons: Record<string, React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>> = {
  "chart-bar": BarChart3,
  "laptop-code": Laptop,
  database: Database,
  robot: Bot,
  code: Code2,
  server: Server,
  globe: Globe,
  users: Users,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className="mb-10 text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-light">
        {tag}
      </span>
      <h2 className="mt-2 text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="Who I Am" title="About Me" />

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[160px_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="glass-card mx-auto flex h-40 w-40 items-center justify-center rounded-full text-3xl font-bold text-cyan-light"
          >
            MJ
          </motion.div>

          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-text-muted"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-24">
          <SectionHeader tag="Academic Path" title="Education" />
          <div className="space-y-4">
            {education.map((e, i) => (
              <motion.div
                key={e.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: (i % 4) * 0.08 }}
                className="glass-card flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="shrink-0 rounded-md bg-primary/15 px-3 py-1 text-xs font-semibold text-primary-light">
                  {e.year}
                </span>
                <div>
                  <h3 className="font-semibold text-text">{e.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-text-dim">
                    <Landmark size={14} aria-hidden="true" /> {e.institution}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-text-dim">
                    <MapPin size={14} aria-hidden="true" /> {e.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-24">
          <SectionHeader tag="Career" title="Professional Experiences" />
          <div className="space-y-6 border-l border-border pl-6">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: (i % 4) * 0.08 }}
                className="glass-card relative rounded-xl p-5"
              >
                <span
                  className="absolute -left-[27px] top-6 h-3 w-3 rounded-full bg-cyan"
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-text">{exp.title}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-text-dim">
                  <span className="flex items-center gap-1.5">
                    <Building2 size={13} aria-hidden="true" /> {exp.org}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} aria-hidden="true" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} aria-hidden="true" /> {exp.location}
                  </span>
                </div>
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-text-muted">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <SectionHeader tag="Expertise" title="Skills" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, i) => {
              const Icon = skillIcons[skill.icon] ?? Code2;
              return (
                <motion.div
                  key={skill.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ delay: (i % 4) * 0.08 }}
                  className="glass-card rounded-xl p-5 transition-colors hover:border-border-active"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-primary/15 p-2.5 text-primary-light">
                    <Icon size={20} aria-hidden />
                  </div>
                  <h3 className="font-semibold text-text">{skill.title}</h3>
                  <p className="mt-1.5 text-sm text-text-muted">{skill.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Languages & associative life */}
        <div className="mt-24">
          <SectionHeader tag="Beyond the Data" title="Languages & Associative Life" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-text">
                <Languages size={18} aria-hidden="true" /> Languages
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {langs.map((l) => (
                  <li key={l.name}>
                    <strong className="text-text">{l.name}:</strong> {l.level}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-text">
                <School size={18} aria-hidden="true" /> Associative Life
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {associative.map((a) => (
                  <li key={a.name}>
                    <strong className="text-text">{a.name}</strong>
                    {a.period ? `: ${a.period}` : ""}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-24">
          <SectionHeader tag="Fiertés" title="Achievements" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex gap-4 rounded-xl p-5"
              >
                <div className="h-fit shrink-0 rounded-lg bg-primary/15 p-2.5 text-primary-light">
                  <Trophy size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-text-muted">{a.description}</p>
                  {a.href && (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-light transition-colors hover:text-cyan"
                    >
                      <ExternalLink size={13} aria-hidden="true" /> Learn more
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <SectionHeader tag="Continuous Learning" title="Certifications" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: (i % 6) * 0.05 }}
                className="glass-card group flex items-start justify-between gap-3 rounded-xl p-4 transition-colors hover:border-border-active"
              >
                <div>
                  <h3 className="text-sm font-semibold text-text">{c.title}</h3>
                  <p className="mt-1 text-xs text-text-dim">
                    {c.issuer} · {c.date}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-text-dim transition-colors group-hover:text-cyan-light"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="mt-24">
          <SectionHeader tag="Beyond Work" title="Interests" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3"
          >
            {interests.map((interest) => (
              <span
                key={interest}
                className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-muted"
              >
                <Award size={14} aria-hidden="true" className="text-primary-light" />
                {interest}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
