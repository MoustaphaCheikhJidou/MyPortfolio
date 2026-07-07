"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/base-path";
import { useLanguage } from "@/lib/i18n";
import {
  BarChart3,
  Code2,
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
  profile,
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
  const { t, tr } = useLanguage();

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag={t.about.tagWhoIAm} title={t.about.title} />

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[160px_1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="glass-card relative mx-auto h-40 w-40 overflow-hidden rounded-full"
          >
            <Image
              src={withBasePath(profile.heroImages[0])}
              alt={profile.name}
              fill
              sizes="160px"
              className="object-cover"
            />
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
                dangerouslySetInnerHTML={{ __html: tr(p) }}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-24">
          <SectionHeader tag={t.about.tagAcademic} title={t.about.education} />
          <div className="space-y-4">
            {education.map((e, i) => (
              <motion.div
                key={e.institution}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: (i % 4) * 0.08 }}
                className="glass-card flex flex-col gap-3 rounded-xl p-5 sm:flex-row sm:items-center sm:gap-6"
              >
                {e.logo && (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white/90 p-2 shadow-sm">
                    <Image
                      src={withBasePath(e.logo)}
                      alt=""
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <span className="shrink-0 rounded-md bg-primary/15 px-3 py-1 text-xs font-semibold text-primary-light">
                  {tr(e.year)}
                </span>
                <div>
                  <h3 className="font-semibold text-text">{tr(e.title)}</h3>
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
          <SectionHeader tag={t.about.tagCareer} title={t.about.experience} />
          <div className="space-y-6 border-l border-border pl-6">
            {experience.map((group, i) => (
              <motion.div
                key={group.org}
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
                <div className="flex items-start gap-4">
                  {group.logo && (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white/90 p-2 shadow-sm">
                      <Image
                        src={withBasePath(group.logo)}
                        alt=""
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="flex items-center gap-1.5 font-semibold text-text">
                      <Building2 size={14} aria-hidden="true" /> {group.org}
                    </h3>
                    <div
                      className={
                        group.roles.length > 1
                          ? "mt-3 space-y-5 border-l border-border pl-4"
                          : "mt-3"
                      }
                    >
                      {group.roles.map((role, ri) => (
                        <div key={ri} className="relative">
                          {group.roles.length > 1 && (
                            <span
                              className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-primary-light"
                              aria-hidden="true"
                            />
                          )}
                          <h4 className="text-sm font-semibold text-text">{tr(role.title)}</h4>
                          <div className="mt-1.5 flex flex-wrap gap-3 text-xs text-text-dim">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12} aria-hidden="true" /> {role.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={12} aria-hidden="true" /> {role.location}
                            </span>
                          </div>
                          <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-text-muted">
                            {role.bullets.map((b, bi) => (
                              <li key={bi}>{tr(b)}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <SectionHeader tag={t.about.tagExpertise} title={t.about.skills} />
          <div className="mx-auto grid max-w-md grid-cols-1 gap-5">
            {skills.map((skill, i) => {
              const Icon = skillIcons[skill.icon] ?? Code2;
              return (
                <motion.div
                  key={skill.icon}
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
                  <h3 className="font-semibold text-text">{tr(skill.title)}</h3>
                  <p className="mt-1.5 text-sm text-text-muted">{tr(skill.description)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Languages & associative life */}
        <div className="mt-24">
          <SectionHeader tag={t.about.tagBeyondData} title={t.about.languagesAndAssociative} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-text">
                <Languages size={18} aria-hidden="true" /> {t.about.languages}
              </h3>
              <div className="space-y-4">
                {langs.map((l) => (
                  <div key={l.name.en}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-text">{tr(l.name)}</span>
                      <span className="text-xs text-text-dim">{tr(l.level)}</span>
                    </div>
                    <div className="mt-2 flex gap-1.5" role="img" aria-label={`${tr(l.name)}: ${l.proficiency}/4`}>
                      {Array.from({ length: 4 }).map((_, seg) => (
                        <span
                          key={seg}
                          className={`h-1.5 flex-1 rounded-full ${
                            seg < l.proficiency ? "bg-gradient-to-r from-primary-light to-cyan" : "bg-surface-hover"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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
                <School size={18} aria-hidden="true" /> {t.about.associativeLife}
              </h3>
              <ul className="space-y-4 text-sm text-text-muted">
                {associative.map((group) => (
                  <li key={group.org.en} className="flex items-start gap-3">
                    {group.logo ? (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/90 p-1.5 shadow-sm">
                        <Image
                          src={withBasePath(group.logo)}
                          alt=""
                          width={36}
                          height={36}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light"
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex-1">
                      <strong className="text-text">{tr(group.org)}</strong>
                      <div
                        className={
                          group.roles.length > 1
                            ? "mt-1.5 space-y-1.5 border-l border-border pl-3"
                            : "mt-0.5"
                        }
                      >
                        {group.roles.map((role, ri) => (
                          <div key={ri} className="relative">
                            {group.roles.length > 1 && (
                              <span
                                className="absolute -left-[15px] top-1.5 h-1.5 w-1.5 rounded-full bg-primary-light"
                                aria-hidden="true"
                              />
                            )}
                            {tr(role.title)}
                            {role.period ? `: ${role.period}` : ""}
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-24">
          <SectionHeader tag={t.about.tagFiertes} title={t.about.achievements} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title.en}
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
                  <h3 className="font-semibold text-text">{tr(a.title)}</h3>
                  <p className="mt-1.5 text-sm text-text-muted">{tr(a.description)}</p>
                  {a.href && (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-light transition-colors hover:text-cyan"
                    >
                      <ExternalLink size={13} aria-hidden="true" /> {t.about.learnMore}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <SectionHeader tag={t.about.tagLearning} title={t.about.certifications} />
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
          <SectionHeader tag={t.about.tagBeyondWork} title={t.about.interests} />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3"
          >
            {interests.map((interest) => (
              <span
                key={interest.en}
                className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-muted"
              >
                <Award size={14} aria-hidden="true" className="text-primary-light" />
                {tr(interest)}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
