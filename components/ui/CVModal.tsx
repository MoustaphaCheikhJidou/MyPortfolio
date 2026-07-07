"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Download, FileText } from "lucide-react";
import { cvVersions } from "@/lib/data";
import { withBasePath } from "@/lib/base-path";
import { useLanguage } from "@/lib/i18n";

export default function CVModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, tr } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-bg/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            className="glass-card relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t.cvModal.close}
              className="absolute right-4 top-4 rounded-full p-2 text-text-muted transition-colors hover:bg-white/10 hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              <X size={18} />
            </button>

            <h2 id="cv-modal-title" className="text-xl font-semibold text-text sm:text-2xl">
              {t.cvModal.title}
            </h2>
            <p className="mt-1.5 text-sm text-text-muted">{t.cvModal.subtitle}</p>

            <ul className="mt-6 space-y-3">
              {cvVersions.map((cv, i) => (
                <motion.li
                  key={cv.id}
                  className="rounded-xl border border-border bg-white/[0.03] p-4 transition-colors hover:border-border-active"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-light"
                      aria-hidden="true"
                    >
                      <FileText size={18} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-text">{tr(cv.title)}</p>
                      <p className="mt-0.5 text-xs text-text-muted">{tr(cv.description)}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-wide text-text-muted/70">
                        {cv.pages === 1 ? t.cvModal.onePage : `${cv.pages} ${t.cvModal.pagesLabel}`}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <a
                      href={withBasePath(cv.href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-text transition-colors hover:border-border-active hover:text-cyan-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                    >
                      <Eye size={14} aria-hidden="true" /> {t.cvModal.preview}
                    </a>
                    <a
                      href={withBasePath(cv.href)}
                      download
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-primary to-cyan px-3 py-2 text-xs font-semibold text-white shadow-md shadow-primary/20 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-light"
                    >
                      <Download size={14} aria-hidden="true" /> {t.cvModal.download}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
